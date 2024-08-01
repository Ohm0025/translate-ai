import { useState } from "react";
import { openList } from "../../api/saveText";
import style from "./button.module.css";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import useIndexText from "../stores/indexText";

const ButtonGen = ({ func, clear }) => {
  const [loadingModal, setLoadingModal] = useState(false);
  const [listText, setListText] = useState([]);
  const { indexText, setIndexText } = useIndexText();
  const openListText = async () => {
    try {
      setLoadingModal(true);
      const res = await openList();
      if (res.data) {
        setListText(() => {
          return [...res.data?.AllText];
        });
        setLoadingModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  return (
    <div className={style.container}>
      <button onClick={func}>GENERATE</button>
      <button onClick={clear}>CLEAR</button>

      <button
        onClick={() => {
          setIsModalOpen1(true);
          openListText();
        }}>
        OPEN
      </button>
      <button>DOWNLOAD</button>
      <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
        {loadingModal ? (
          <Loading />
        ) : (
          <>
            {listText.map((item, index) => {
              return (
                <Link
                  key={"list_item_" + index}
                  to={"/readPage/" + index}
                  className={style.listBtn}
                  target="_blank">
                  {item}
                </Link>
              );
            })}
          </>
        )}
      </Modal>
    </div>
  );
};

export default ButtonGen;
