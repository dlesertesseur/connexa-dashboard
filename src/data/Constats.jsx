const departmentsColors = [
  "red.5",
  "pink.5",
  "grape.5",
  "violet.5",
  "blue.5",
  "teal.5",
  "lime.5",
  "yellow.5",
  "orange.5",
];

// const SERVER = process.env.REACT_APP_SERVER;
// const PORT = process.env.REACT_APP_PORT;
// const API_BASE = process.env.REACT_APP_API_BASE;
// const API_WORKERS = process.env.REACT_APP_API_WORKERS;

const SERVER = "http://192.168.0.12";
const PORT = 8080;
const API_BASE = "/connexa/admin/api/v1";

const productImages= {
  baseUrl: SERVER + ":" + PORT,
  delete: SERVER + ":" + PORT + API_BASE + "/product-images/",
}
export { departmentsColors, productImages };
