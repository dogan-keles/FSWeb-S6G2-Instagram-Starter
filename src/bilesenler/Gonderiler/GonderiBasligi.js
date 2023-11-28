import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { gonderiyiBegen, gonderiler } = props;

  // Check if gonderiler is undefined or null before mapping
  if (!gonderiler) {
    return null; // or display a loading state or message
  }

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((gonderi) => (
        <Gonderi
          key={gonderi.id}
          gonderi={gonderi}
          gonderiyiBegen={gonderiyiBegen}
        />
      ))}
    </div>
  );
};

export default Gonderiler;
