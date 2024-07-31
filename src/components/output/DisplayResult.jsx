import style from "./displayResult.module.css";
import { formatText } from "../../utils/formatText";
import { saveText } from "../../api/saveText";

const DisplayResult = ({ sentence, setIsLoading }) => {
  const saveBtn = async () => {
    try {
      setIsLoading(true);
      const res = await saveText(sentence);
      if (res.data?.text) {
        setIsLoading(false);
        alert("save text success");
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <>
      {sentence ? (
        <div className={style.container}>
          <div>
            {formatText(sentence)
              .split("\n")
              .map((item) => (
                <div>{item}</div>
              ))}
          </div>
          <div className={style.groupBtn}>
            <button onClick={saveBtn}>Save</button>
          </div>
        </div>
      ) : (
        <div className={style.empthyBox}>please type something in Thai</div>
      )}
    </>
  );
};

export default DisplayResult;
