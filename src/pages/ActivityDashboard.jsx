import React, { useContext, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import StatsTotalCard from "../components/StatsTotalCard";
import { useTranslation } from "react-i18next";
import { getActivities, getActivityData } from "../data/DashboardDao";
import { useNavigate } from "react-router-dom";
import { AppStateContext } from "../context/AppStateContext";

const ActivityDashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { selectedBranch, selectedDepartment, momentum, setMomentum } =
    useContext(AppStateContext);
  const [quadrant, setQuadrant] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //console.log(`getActivityData momentum: ${momentum}`);

      const params = {
        branch: selectedBranch,
        department: selectedDepartment,
        momentum: momentum,
      };
      
      getActivityData(params).then((ret) => {
        if (ret) {
          setData(ret);
        }
        setMomentum(momentum + 1);
      });
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [momentum]);

  useEffect(() => {
    getActivities().then((ret) => {
      if (ret) {
        setQuadrant(ret);
      }
    });
  }, []);

  const createStats = () => {
    const ret = quadrant?.map((stat, index) => {
      return (
        <StatsTotalCard
          key={index}
          title={stat.title}
          data={data ? data[stat.title] : []}
          // disabled = {data[index]?.products ? false : true}
          // onPress={() => {
          //   navigate("/stores/detail", { state: {title:t("stats." + stat.title), indicator:index} });
          // }}
        />
      );
    });
    return ret;
  };

  return quadrant ? (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 850: 2, 1200: 3 }}>
      <Masonry gutter={"10px"} columnsCount={3}>
        {createStats()}
      </Masonry>
    </ResponsiveMasonry>
  ) : null;
};

export default ActivityDashboard;
