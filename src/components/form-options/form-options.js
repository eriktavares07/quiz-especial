import React, { useState } from "react";
import RadioButton from "../radio-button/radio-button";
import styles from "./form-options.module.css";

function FormOptions(props) {
  const [isButtonDisabled, setButtonStatus] = useState(true);
  const [isQuestionCorrect, setIsCorrect] = useState(false);

  return (
    <form className={styles.FormQuiz} action="">
      <h2 className={styles.QuestionNumber}>
        Pergunta {props.questionNumber}
        <span>/5</span>
        <hr className={styles.LineDashed} />
      </h2>
      <p className={styles.Question}>{props.question}</p>
      <ul className={styles.Options}>
        {props.options.map((option) => {
          return (
            <li key={option.id}>
              <RadioButton
                setButtonDisability={() => {
                  setButtonStatus(false);
                  setIsCorrect(option.isCorrect);
                  console.log(isQuestionCorrect);
                }}
                option={option.text}
              />
            </li>
          );
        })}
      </ul>
      <button
        disabled={isButtonDisabled}
        onClick={() => {
          props.click();
          props.onClickScore(isQuestionCorrect);
        }}
        className={styles.BtnNext}
      >
        Próximo
      </button>
    </form>
  );
}

export default FormOptions;
