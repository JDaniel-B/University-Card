import React from "react";
import styles from "./CardUniversity.module.css";

function CardUniversity({ image, Titulo, Content }) {
  return (
    <div className="card border shadow-lg shadow-blue-500/50 border-sky-500">
      <img className="imagen" src={image} alt="logo" />
      <div className="contenido">
        <h1 className="text-2xl font-bold tracking-widest ">{Titulo}</h1>
        <p className="text-sm text-justify tracking-wider">{Content}</p>
      </div>
    </div>
  );
}

export default CardUniversity;
