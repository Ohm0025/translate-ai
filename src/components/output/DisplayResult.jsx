import style from "./displayResult.module.css";
import { formatText } from "../../utils/formatText";

const DisplayResult = ({ sentence }) => {
  console.log(formatText(sentence).split("\n"));
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
            <button>Save</button>
            <button>Open</button>
            <button>Download</button>
          </div>
        </div>
      ) : (
        <div className={style.empthyBox}>please type something in Thai</div>
      )}
    </>
  );
};

export default DisplayResult;
