import { FC } from "react";
import "./GenericButton.css";
import { ButtonsType } from "../../type/type";

interface GenericButtonProps {
  btnText: string;
  btnStyle: ButtonsType;
  onClickBtn: () => void;
}

const GenericButton: FC<GenericButtonProps> = ({
  btnText,
  onClickBtn,
  btnStyle,
}) => {
  return (
    <button className={`GenericButton ${btnStyle}`} onClick={onClickBtn} type="button">
      <p className="btnText">{btnText}</p>
    </button>
  );
};

export default GenericButton;