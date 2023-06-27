import React, { useEffect } from "react";
import "./FillContent.scss";

interface FillContentProps {
  level: number;
  title: string;
}

const FillContent: React.FC<FillContentProps> = ({ level, title }) => {
  const animationName = `increaseWidth${level}`;

  // CSS for the animation
  const animationStyles = `
    @keyframes ${animationName} {
      100% {
        width: ${level}%;
      }
    }
  `;

  // Inject the styles into the head of the document
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [animationStyles]);

  return (
    <div
      className={"fillContent"}
      style={{
        animationName: animationName,
      }}
    >
      <span className="title">{title}</span>
    </div>
  );
};

export default FillContent;
