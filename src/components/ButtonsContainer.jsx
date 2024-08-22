import Button from "./Button";
import styles from "./ButtonsContainer.module.css";
import styleButton from "./Button.module.css";
const ButtonsContainer = ({ onClickH }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((item) => (
          <button
            key={item}
            className={styleButton.button}
            onClick={() => onClickH(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
