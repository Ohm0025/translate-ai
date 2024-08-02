import { useState } from "react";
import style from "./App.module.css";
import TextInput from "../input/TextInput";
import DisplayResult from "../output/DisplayResult";
import ButtonGen from "../buttonGen/ButtonGen";
import Loading from "../loading/Loading";
import { genAi } from "../../api/saveText";
import { formatText } from "../../utils/formatText";

const Home = () => {
  const [request, setRequest] = useState("");
  const [response, setResponse] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const generateText = async () => {
    try {
      setIsLoading(true);
      const text = await genAi(request);
      if (text) {
        let res = formatText(text);
        setResponse(res);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <h1>Translate AI</h1>
      <div className={style.box}>
        <div className={style.box1}>
          <TextInput request={request} func={(value) => setRequest(value)} />
          <ButtonGen func={generateText} clear={() => setRequest("")} />
        </div>
        <div className={style.box1}>
          {isLoading ? (
            <Loading />
          ) : (
            <DisplayResult sentence={response} setIsLoading={setIsLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
