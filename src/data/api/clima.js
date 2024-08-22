import axios from "axios";
import { apiKey } from "../constants/index";

const previsaoEndpoint = (
  params
) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.nomeCidade}&days=${params.dias}&aqi=no&alerts=no
`;

const localizacaoEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.nomeCidade}`;

const chamadaApi = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("erro: ", err);
    return null;
  }
};

export const buscarPrevisaoTempo = (params) => {
  return chamadaApi(previsaoEndpoint(params));
};

export const buscarLocalizacao = (params) => {
    return chamadaApi(localizacaoEndpoint(params));
  };
