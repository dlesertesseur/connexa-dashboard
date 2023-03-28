import React, { useContext, useEffect, useState } from "react";
import StatsRingCard from "../components/StatsRingCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from "react-i18next";
import { getData } from "../data/DashboardDao";
import { useNavigate } from "react-router-dom";
import { departmentsColors } from "../data/Constats";
import { AppStateContext } from "../context/AppStateContext";

const StoresDashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { selectedBranch, selectedDepartment } = useContext(AppStateContext);
  const [data, setData] = useState([]);
  const [departmentColor, setDepartmentColor] = useState(departmentsColors[0]);

  useEffect(() => {
    const params = { branch: selectedBranch, department: selectedDepartment };
    getData(params).then((ret) => {
      setData(ret);
    });
  }, [selectedBranch, selectedDepartment]);

  useEffect(() => {
    const colorIndex = parseInt(selectedDepartment);
    setDepartmentColor(departmentsColors[colorIndex]);
  }, [selectedDepartment]);

  const createStats = () => {
    const ret = data?.map((stats, index) => {
      return (
        <StatsRingCard
          key={index}
          color={departmentColor}
          disabled = {data[index]?.products ? false : true}
          onPress={() => {
            navigate("/stores/detail", { state: {title:t("stats." + stats.title), indicator:index} });
          }}
          title={t("stats." + stats.title)}
          unit={stats.unit}
          completed={stats.completed}
          total={stats.total}
          stats={
            stats.remaining
              ? [
                  {
                    value: stats.remaining,
                    label: t("statsRing.remaining"),
                  },
                  {
                    value: stats.inProgress,
                    label: t("statsRing.inProgress"),
                  },
                ]
              : []
          }
        />
      );
    });
    return ret;
  };

  return data ? (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 850: 2, 1200: 3 }}>
      <Masonry gutter={"10px"} columnsCount={3}>
        {createStats()}
      </Masonry>
    </ResponsiveMasonry>
  ) : null;
};

export default StoresDashboard;
