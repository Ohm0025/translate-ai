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

export { saveText, openList };
