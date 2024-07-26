import style from "./textInput.module.css";

const TextInput = () => {
  return (
    <div className={style.container}>
      <textarea cols="100" rows="15"></textarea>
    </div>
  );
};

export default TextInput;
