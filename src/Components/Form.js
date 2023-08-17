import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTexts } from "../redux/textSlice";

function Form() {
  const dispatch = useDispatch();
  const [paras, setParas] = useState(4);
  const [format, setFormat] = useState("text");

  useEffect(() => {
    dispatch(getTexts({ paras, format }));
  }, [dispatch, paras, format]);

  const handleParas = (e) => {
    setParas(e.target.value);
  };

  const handleFormat = (e) => {
    let selectedVal = e.target.value;

    setFormat(selectedVal);
  };
  console.log(format);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "2%" }}>
        <div style={{ fontFamily: "monospace", fontSize: "16px" }}>
          Paragraphs
        </div>
        <input
          style={{ padding: "4px" }}
          value={paras}
          onChange={handleParas}
          type={"number"}
        ></input>
      </div>
      <div style={{ margin: "2%" }}>
        <div style={{ fontFamily: "monospace", fontSize: "16px" }}>
          Include HTML
        </div>
        <select
          style={{ padding: "4px" }}
          value={format}
          onChange={handleFormat}
        >
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
