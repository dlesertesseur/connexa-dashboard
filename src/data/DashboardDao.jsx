
import data from "./data.json";
import branches from "./branches.json";
import departments from "./departments.json";
import notExhibited from "./notExhibited.json";

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
      return(item.branch === parameters.branch)
    })

    const branch = found ? found : data[parameters.branch];
    const depto = branch.departmentData[parameters.department]

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
export {getData, getBranches, getDepartments, getNotExhibitedItems, getDetail}
