import style from "./displayResult.module.css";

const DisplayResult = ({ sentence }) => {
  return <div className={style.container}>{sentence}</div>;
};

export default DisplayResult;
