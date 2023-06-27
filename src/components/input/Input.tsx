import classnames from "classnames";
import { FC } from "react";
import "./Input.scss";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  className?: string;
  isTextarea?: boolean;
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  className,
  setValue,
  isTextarea,
}) => {
  return (
    <>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          className={classnames("input input--textarea", className)}
        />
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className={classnames("input input--primary", className)}
        />
      )}
    </>
  );
};

export default Input;
