import axios from "axios";

const api_url = process.env.REACT_APP_BASE_URL;

const saveText = async (sentence) => {
  const res = await axios.post(api_url, { text: sentence });
  return res;
};

const openList = async () => {
  const res = await axios.get(api_url + "/getAllText");
  return res;
};

const openText = async (index) => {
  console.log(api_url);
  const res = await axios.get(api_url + "/getText/" + index);
  return res;
};

const genAi = async (sentence) => {
  console.log(api_url);
  const res = await axios.post(api_url + "/runAi", { sentence });
  return res.data?.text;
};

export { saveText, openList, openText, genAi };
