import { FC } from "react";
import { ButtonTypes } from "../../general/Types";
import classnames from "classnames";
import "./Button.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
  type: ButtonTypes;
  className?: string;
}

const Button: FC<ButtonProps> = ({ title, onClick, type, className }) => {
  return (
    <button
      className={classnames(
        type === ButtonTypes.PRIMARY
          ? "button button--primary"
          : "button button--secondary",
        className
      )}
      onClick={onClick}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
