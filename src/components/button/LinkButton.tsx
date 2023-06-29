import { FC } from "react";
import { ButtonTypes } from "../../general/Types";
import classnames from "classnames";
import "./Button.scss";

interface ButtonProps {
  title: string;
  url: string;
  type: ButtonTypes;
  className?: string;
  download: boolean;
}

const LinkButton: FC<ButtonProps> = ({
  title,
  url,
  type,
  className,
  download,
}) => {
  return (
    <a
      className={classnames(
        type === ButtonTypes.PRIMARY
          ? "button button--primary"
          : "button button--secondary",
        className
      )}
      href={url}
      download={download}
    >
      <p>{title}</p>
    </a>
  );
};

export default LinkButton;
