import React, { useState } from "react";
import axios from "axios";

function SpellCheck() {
  const d = "https://sg.api.textgears.com/spelling?";
  const key = "key=aiAu8Y3OaN0Pokab&text=";
  const t = "&language=en-GB";

  const [text, setText] = useState("");
  const [init, setInit] = useState(true);
  const [highlight, setHighlight] = useState("");

  const giveSuggestions = (i) => {
    console.log(i);
  }

  const check = () => {
    setInit(false);
    var res = text.split(" ").join("+");
    var url = d + key + res + t;
    var now = text;
    axios
      .get(url)
      .then((res) => {
        var along = res.data.response.errors;
        for (let i = 0; i < along.length; i++) {
          var bad = along[i].bad;
          var bab = "\\b" + bad + "\\b";
          now = now.replace(
            new RegExp(bab, "i"),
            `<span style="display: inline-block; cursor: pointer; background-color: #fdfd96;" onclick="()=>${giveSuggestions(i)}">${bad}</span>`
          );
        }
        setHighlight(`${now}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="spellbox">
      <div className="area">
        <label class="form-label label">
          <div>Spell</div>
          <div>Check</div>
        </label>
        <div style={{ width: "100%", height: "100%" }}>
          {init ? (
            <textarea
              className="form-control from"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              placeholder="Copy paste or type here..."
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          ) : (
            <div
              className="textarea"
              dangerouslySetInnerHTML={{ __html: highlight }}
            ></div>
          )}
          <button className="btn" onClick={() => check()}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpellCheck;
