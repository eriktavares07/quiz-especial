import React from "react";
import styles from "./radio-button.module.css";

function RadioButton(props) {
  return (
    <label onClick={props.setButtonDisability} className={styles.RadioLabel}>
      {props.option}
      <input type="radio" name="radio" />
    </label>
  );
}

export default RadioButton;
