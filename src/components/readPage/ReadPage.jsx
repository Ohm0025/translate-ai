import { useEffect, useState } from "react";
import style from "./readPage.module.css";
import { openText } from "../../api/saveText";
import Loading from "../loading/Loading";
import { useParams } from "react-router-dom";

const ReadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contentPage, setCurrentPage] = useState("");

  let { indexText } = useParams();
  useEffect(() => {
    console.log(indexText);
    const readText = async () => {
      try {
        setIsLoading(true);
        const res = await openText(indexText);
        if (res.data?.content) {
          setCurrentPage(res.data?.content);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (indexText !== null && typeof Number(indexText) === "number") {
      readText();
    }
  }, [indexText]);

  return (
    <div className={style.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <pre>{contentPage}</pre>
        </div>
      )}
    </div>
  );
};

export default ReadPage;
