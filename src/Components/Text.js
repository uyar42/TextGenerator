import React from "react";
import { useSelector } from "react-redux";
import { statusSelector } from "../redux/textSlice";

function Text() {
  const paragraphs = useSelector((state) => state.texts.items);
  const status = useSelector((state) => state.texts.status);

  console.log([paragraphs]);
  return (
    <div>
      {paragraphs.map((t) =>
        status === "succeeded" ? (
          <p style={{ fontFamily: "monospace", fontSize: "1.2em" }}>{t}</p>
        ) : (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )
      )}
    </div>
  );
}

export default Text;
