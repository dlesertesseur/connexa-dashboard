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
  const { momentum, setMomentum, quadrantsData, setQuadrantsData} = useContext(AppStateContext);
  const [quadrant, setQuadrant] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //console.log(`getActivityData momentum: ${momentum}`);

      const params = {
        momentum: momentum,
      };

      getActivityData(params).then((ret) => {
        if (ret) {
          setQuadrantsData(ret);
        }
        setMomentum(momentum + 1);
      });
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [momentum]);

  useEffect(() => {
    if (quadrant.length === 0) {
      console.log("Carga cuadrantes");

      getActivities().then((ret) => {
        if (ret) {
          setQuadrant(ret);
        }
      });
    }else{
      console.log("Cuadrantes cargados");
    }
  }, []);

  const createStats = () => {
    const ret = quadrant?.map((stat, index) => {
      return (
        <StatsTotalCard
          key={index}
          title={stat.title}
          data={quadrantsData ? quadrantsData[stat.title] : []}
          onPress={() => {
            navigate("./quadrantDetail", { state: { title: t("stats." + stat.title), quadrant: stat.title } });
          }}
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
