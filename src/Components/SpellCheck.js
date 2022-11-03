import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function SpellCheck(props) {
  const d = "https://sg.api.textgears.com/spelling?";
  const key = "key=aiAu8Y3OaN0Pokab&text=";
  const t = "&language=en-GB";

  const [text, setText] = useState("");
  const [init, setInit] = useState(true);
  
  const check = () => {
    setInit(false);
    var res = text.split(" ").join("+");
    var url = d + key + res + t;
    axios
      .get(url)
      .then((res) => {
        var bits = [];
        var start = 0;
        var errors = res.data.response.errors;
        for (let i = 0; i <= errors.length; i++) {
          if (!!errors[i]) {
            const pre = " " + text.slice(start, errors[i].offset - 1) + " ";
            const main =
              " " +
              text.slice(
                errors[i].offset,
                errors[i].offset + errors[i].length
              ) +
              " ";
            start = errors[i].offset + errors[i].length + 1;

            let options = [];
            errors[i].better.forEach((element) => {
              const opt = React.createElement(
                "a",
                {
                  href: "#",
                  onClick: () => {
                    update(i, element);
                  },
                },
                element
              );
              options = [...options, opt];
            });
            const dropdown = React.createElement(
              "div",
              { className: "dropdown-content" },
              options
            );
            const display = React.createElement(
              "button",
              {
                className: "dropbtn",
              },
              main
            );
            const group = React.createElement(
              "div",
              { className: "dropdown" },
              display,
              dropdown
            );

            const preelem = React.createElement("span", {}, pre);
            const mainelem = React.createElement("span", {}, group);
            bits = [...bits, preelem, mainelem];
          } else {
            const pre = " " + text.slice(start, text.length) + " ";
            start = 0;
            const preelem = React.createElement("span", {}, pre);
            bits = [...bits, preelem];
          }
          getContent(bits);
        }
        const title = React.createElement("div", {}, bits);
        const root = ReactDOM.createRoot(document.querySelector(".textarea"));
        root.render(title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const update = (i, elem) => {
    var data = localStorage.getItem('content');
    var finalData = JSON.parse(data);
    const index = 2 * (i + 1);
    let items = [...finalData];
    if (index !== -1) {
      const nowelem = React.createElement("span", {}, elem);
      var newItems = [];
      items.forEach((e, i)=>{
        if(i===index){
          newItems = [...newItems, nowelem];
        }else{
          newItems = [...newItems, e]
        }
      })
    }
    const title = React.createElement("div", {}, items);

    const root = ReactDOM.createRoot(document.querySelector(".textarea"));
    root.render(title);
    localStorage.setItem("content", JSON.stringify(items));
  };

  const getContent = (content) => {
    console.log(content);
    localStorage.setItem("content", JSON.stringify(content));
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
            <div className="textarea">Loading...</div>
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
