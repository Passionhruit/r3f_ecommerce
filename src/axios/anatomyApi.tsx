import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
  Authorization: null,
  "Refresh-Token": null,
};
const instance = axios.create({
  baseURL: "https://apid.iharu.co.kr",
  headers,
});

export default instance;
