import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SpellCheck(props) {
  const d = "https://sg.api.textgears.com/spelling?";
  const key = "key=aiAu8Y3OaN0Pokab&text=";
  const t = "&language=en-GB";

  const [text, setText] = useState("");
  const [init, setInit] = useState(true);
  const [erross, setErross] = useState([]);

  useEffect(() => {
    !init && proceed(erross);
  }, [init]);

  const update = (element, errorObj) => {
    const main = document.getElementById(errorObj.id);
    while (main.lastElementChild) {
      main.removeChild(main.lastElementChild);
    }
    main.innerText = element;
    toast.success(`'${errorObj.bad}' replaced with '${element}'`);
  };

  const proceed = (errors) => {
    var bits = [];
    var start = 0;
    for (let i = 0; i <= errors.length; i++) {
      if (!!errors[i]) {
        const pre = " " + text.slice(start, errors[i].offset - 1) + " ";
        const main =
          " " +
          text.slice(errors[i].offset, errors[i].offset + errors[i].length) +
          " ";
        const spanmain = document.createElement("div");
        spanmain.className = "dropdown";
        spanmain.id = errors[i].id;
        const spanbutton = document.createElement("button");
        spanbutton.innerText = main;
        spanbutton.className = "dropbtn";
        spanmain.appendChild(spanbutton);
        const dropd = document.createElement("div");
        dropd.className = "dropdown-content";
        errors[i].better.forEach((element) => {
          const spancontent = document.createElement("a");
          spancontent.href = "#";
          spancontent.innerText = element;
          spancontent.onclick = () => update(element, errors[i]);
          dropd.appendChild(spancontent);
        });
        spanmain.appendChild(dropd);

        const spanpre = document.createElement("span");
        spanpre.innerText = pre;

        bits = !!errors[i].offset
          ? [...bits, spanpre, spanmain]
          : [...bits, spanmain];
        start = errors[i].offset + errors[i].length + 1;
      } else {
        const pre = " " + text.slice(start, text.length) + " ";
        const spanpre = document.createElement("span");
        spanpre.innerText = pre;

        bits = [...bits, spanpre];
        start = 0;
      }
    }
    const node = document.querySelector(".textfrom");
    node.innerText = "";
    bits.forEach((elem) => {
      node.appendChild(elem);
    });
  };

  const manage = () => {
    var res = text.split(" ").join("+");
    var url = d + key + res + t;
    axios
      .get(url)
      .then((res) => {
        var errors = res.data.response.errors;
        setErross([...errors]);
        !!errors.length
          ? setInit(false)
          : toast.warn("No wrongly spelled words present.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const check = () => {
    if (init) {
      !!text.length ? manage() : toast.error("Please enter text to proceed.");
    } else {
      setInit(true);
      setText("");
    }
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
              className="textarea"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              placeholder="Copy paste or type here..."
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          ) : (
            <div className="textfrom">Loading...</div>
          )}
          <button className="btn" onClick={() => check()}>
            {init ? "Check" : "Reset"}
            {init ? (
              <i class="fad fa-spell-check cicon"></i>
            ) : (
              <i class="fad fa-history cicon"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpellCheck;
