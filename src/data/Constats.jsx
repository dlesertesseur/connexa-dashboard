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

const OT_TYPE = {
  OPERANDO:"OPERANDO",
  EN_CORTE:"EN_CORTE",
  PICKING:"PICKING",
  REPONIENDO:"REPONIENDO",
  OFERTAS_Y_PROMOCIONES:"OFERTAS_Y_PROMOCIONES",
  PREPARANDO_PEDIDOS:"PREPARANDO_PEDIDOS",
  CONTROLANDO_PRECIOS:"CONTROLANDO_PRECIOS",
  FIN_DE_JORNADA:"FIN_DE_JORNADA"
}

const DIMENSION = {
  TITLE_HEIGHT:25,
  BUTTON_PANEL_HEIGHT:40,
  HEADER_HEIGHT:60,
  FOOTER_HEIGHT:40,
  OPERATOR_CARD:96
}

export { departmentsColors, productImages, OT_TYPE, DIMENSION };
