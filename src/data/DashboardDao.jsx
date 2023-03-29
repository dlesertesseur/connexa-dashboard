import data from "./data.json";
import branches from "./branches.json";
import departments from "./departments.json";
import notExhibited from "./notExhibited.json";
import activities from "./activity.json";
//import activities from "./activityTest.json";
import activityData from "./task.json";

const database = {};

async function getData(parameters) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    const found = data.find((item) => {
      return item.branch === parameters.branch;
    });

    const branch = found ? found : data[parameters.branch];
    const depto = branch.departmentData[parameters.department];

    return depto.data;
  } catch (error) {
    return error;
  }
}

async function getBranches(params) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    return branches;
  } catch (error) {
    return error;
  }
}

async function getDepartments(params) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    return departments;
  } catch (error) {
    return error;
  }
}

async function getNotExhibitedItems(params) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    return notExhibited;
  } catch (error) {
    return error;
  }
}

async function getDetail(parameters) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    const branch = data[parameters.branch];
    const depto = branch.departmentData[parameters.department];
    const ret = depto.data[parameters.indicator]?.products ? depto.data[parameters.indicator].products : [];

    return ret;
  } catch (error) {
    return error;
  }
}

function groupBy(collection, property) {
  const ret = {};
  collection.forEach((element) => {
    if (!ret[element[property]]) {
      ret[element[property]] = [];
    }
    ret[element[property]].push(element);
  });

  return ret;
}

function removeOperator(arr, operator, momentum) {
  const ret = arr.filter((obj) => obj.legajo !== operator.legajo);
  return ret;
}

function removeOperatorFromQuadrant(quadrants, operator, momentum) {
  quadrants.forEach((quadrant) => {
    const newArr = removeOperator(database[quadrant], operator, momentum);
    database[quadrant] = newArr;
  });
}

async function getActivityData(parameters) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    const quadrants = Object.keys(database);

    let operatorsInMomentum = activityData.orders.filter((activity) => {
      return activity.momentum === parameters.momentum;
    });

    operatorsInMomentum.forEach((operaror) => {
      removeOperatorFromQuadrant(quadrants, operaror, parameters.momentum);
      database[operaror.task].push(operaror);
    });

    console.log(" getActivityData -> ", parameters.momentum);

    return database;
  } catch (error) {
    return error;
  }
}

async function getActivities(params) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    if (Object.keys(database).length === 0) {
      activities.forEach((activity) => {
        database[activity.title] = [];
      });
    }

    return activities;
  } catch (error) {
    return error;
  }
}

async function getQuadrantData(params) {
  try {
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json", token: parameters.token },
    //   };

    //   const url = API.site.findAllSites;
    //   const res = await fetch(url, requestOptions);
    //   const data = await res.json();

    //   data.map((s) => {
    //     s.contextName = s.context.name;
    //     return s;
    //   });

    const data = database[params.quadrant];
    return data;
    
  } catch (error) {
    return error;
  }
}
export {
  getData,
  getBranches,
  getDepartments,
  getNotExhibitedItems,
  getDetail,
  getActivityData,
  getActivities,
  getQuadrantData,
};
