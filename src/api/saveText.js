import axios from "axios";
import { api_url } from "../constant";

const saveText = async (sentence) => {
  const res = await axios.post(api_url, { text: sentence });
  return res;
};

const openList = async () => {
  const res = await axios.get(api_url + "/getAllText");
  return res;
};

const openText = async (index) => {
  const res = await axios.get(api_url + "/getText/" + index);
  return res;
};

const genAi = async (sentence) => {
  const res = await axios.post(api_url + "/runAi", { sentence });
  return res.data?.text;
};

export { saveText, openList, openText, genAi };
