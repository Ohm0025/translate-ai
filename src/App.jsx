import { useState } from "react";
import style from "./App.module.css";
import TextInput from "./components/input/TextInput";
import DisplayResult from "./components/output/DisplayResult";
import ButtonGen from "./components/buttonGen/ButtonGen";
import Loading from "./components/loading/Loading";

function App() {
  const [request, setRequest] = useState("");
  const [response, setResponse] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const generateText = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.container}>
      <h1>Translate AI</h1>
      <TextInput request={request} func={(value) => setRequest(value)} />
      <ButtonGen />
      {isLoading ? <Loading /> : <DisplayResult sentence={response} />}
    </div>
  );
}

export default App;
