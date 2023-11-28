import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;

  return yorumlar.map((yorum) => (
    <div>
      <Yorum yorum={yorum} />
    </div>
  ));
};

export default Yorumlar;
