import React, { useEffect, useRef, useState } from "react";
import "./TextAreaStyles.scss";
import "./textarea-plus.scss";

export default function TextArea() {
  return (
    <>
      <div className="host">
        <div className="container">
          <textarea
            id="editing-textarea"
            name="groovy-validator"
          ></textarea>
        </div>
      </div>
    </>
  );
}
