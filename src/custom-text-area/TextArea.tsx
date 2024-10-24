import React, { useEffect, useRef, useState } from "react";
import "./TextAreaStyles.scss";
import "./textarea-plus.scss";

export default function TextArea() {
  return (
    <>
      <div className="host">
      <h2 className="header">Groovy Script Compiler</h2>
        <div className="container">
          <textarea
            id="editing-textarea"
            name="groovy-validator"
          ></textarea>
        </div>
      </div>
      <span className="label">tjgutgitg</span>
<button className="validate-button" onClick={() => alert("Validation logic goes here")}>
  Validate
</button>
    </>
  );
}
