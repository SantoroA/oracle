import React from "react";
import "./TarotCard.css";
import useToggle from "./hooks/useToggle";

export default function TarotCard(props) {
  const [isBig, toggleIsBig] = useToggle(false);
  return (
    <div className="TarotCard col-3">
      <img
        onMouseEnter={toggleIsBig}
        onMouseOut={toggleIsBig}
        src={props.card.illuminatiUrl}
        alt={props.card.name}
        className={isBig ? "big" : "regular"}
      />
      <p>{props.card.name}</p>
    </div>
  );
}
