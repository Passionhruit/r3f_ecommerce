import api from "../axios/anatomyApi";

export const getAnatomy = async () => {
  const response = await api.get("/v1/anatomy/pf");
  return response.data;
};

export const getAnatomyDetail = async (body: any) => {
  const response = await api.post("/v1/anatomy/pdf", body);
  return response.data;
};

export const getAnatomyPartDetail = async (body: any) => {
  const response = await api.post("/v1/anatomy/psdf", body);
  console.log(response.data);
  return response.data;
};

export const getAnatomyQuestions = async (body: any) => {
  const response = await api.post("/v1/anatomy/sqf", body);
  return response.data;
};

export const getAnatomyDisease = async (body: any) => {
  const response = await api.post("/v1/anatomy/di", body);
  return response.data;
};
