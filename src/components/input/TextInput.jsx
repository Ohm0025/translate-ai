import style from "./textInput.module.css";

const TextInput = ({ request, func }) => {
  return (
    <div className={style.container}>
      <textarea
        cols="100"
        rows="15"
        value={request}
        onChange={(e) => func(e.target.value)}></textarea>
    </div>
  );
};

export default TextInput;
