import style from "./button.module.css";

const ButtonGen = ({ func }) => {
  return (
    <div className={style.container}>
      <button onClick={func}>GENERATE</button>
    </div>
  );
};

export default ButtonGen;
