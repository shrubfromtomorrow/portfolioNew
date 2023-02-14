let terminalLine = document.getElementById("terminalLine");
let terminal = document.getElementById("terminal");

let terminalLineSpan = terminal.getElementsByTagName("span")[0];
let orionFetch = document.getElementById("orionFetch");

let fetchStringLines = [
    "┌──────── ***** ───────┐  <span>orion</span>@<span>shrubfromtomorrow</span>\n",
    "│                      │  -----------------------\n",
    "│          <span>✦</span>          │  <span>Stars</span>: <a href='https://github.com/Haruno19/starfetch' target='_blank'>starfetch</a>\n",
    "│      <span>✦</span>              │  <span>Location</span>: Seattle\n",
    "│             <span>✦</span>       │  <span>Uptime</span>: 17y\n",
    "│                      │  <span>Corp</span>: Gibson Ek HS\n",
    "│        <span>✦</span> <span>✦</span> <span>✦</span>      │  <span>Colors</span>: <a href='https://github.com/catppuccin/catppuccin' target='_blank'>Catppuccin</a>\n",
    "│                      │  <span>Font</span>: <a href='https://typeof.net/Iosevka' target='_blank'>Iosevka</a>\n",
    "│              <span>✦</span>      │  <span>Github</span>: <a href='https://github.com/shrubfromtomorrow' target='_blank'>shrubfromtomorrow</a>\n",
    "│       <span>✦</span>             │\n",
    "│                      │\n",
    "└──────────────────────┘\n                          <em style='color: #24273a'>██</em><em style='color: #1e2030'>██</em><em style='color: #363a4f'>██</em><em style='color: #494d64'>██</em><em style='color: #5b6078'>██</em><em style='color: #cad3f5'>██</em><em style='color: #f4dbd6'>██</em><em style='color: #b7bdf8'>██</em>\n",
    "\n                          <em style='color: #89dceb'>██</em><em style='color: #ed8796'>██</em><em style='color: #f5a97f'>██</em><em style='color: #eed49f'>██</em><em style='color: #a6da95'>██</em><em style='color: #8aadf4'>██</em><em style='color: #c6a0f6'>██</em><em style='color: #f0c6c6'>██</em>",
];

// <em style='color: #24273a; line-height: 1vh'>█ </em><em style='color: #1e2030'>█ </em><em style='color: #363a4f'>█ </em><em style='color: #494d64'>█ </em><em style='color: #5b6078'>█ </em><em style='color: #cad3f5'>█ </em><em style='color: #f4dbd6'>█ </em><em style='color: #b7bdf8'>█</em>

// <em style='color: #89dceb'>█ </em><em style='color: #ed8796'>█ </em><em style='color: #f5a97f'>█ </em><em style='color: #eed49f'>█ </em><em style='color: #a6da95'>█ </em><em style='color: #8aadf4'>█ </em><em style='color: #c6a0f6'>█ </em><em style='color: #f0c6c6'>█</em>

let typedString = "orionfetch";

let intervals = 0;

window.onload = function () {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    setTimeout(function () {
        let interval = setInterval(function () {
            if (intervals >= typedString.length) {
                clearInterval(interval);
                fetch();
                intervals = 0;
            } else {
                terminalLine.textContent =
                    terminalLine.textContent + typedString[intervals];
                intervals++;
            }
        }, 100);
        console.log("juan");
    }, 4000);
};

function fetch() {
    setTimeout(function () {
        terminalLineSpan.textContent = "";
        let interval2 = setInterval(function () {
            if (intervals >= fetchStringLines.length) {
                clearInterval(interval2);
            } else {
                orionFetch.innerHTML =
                    orionFetch.innerHTML + fetchStringLines[intervals];
                intervals++;
            }
        }, 50);
    }, 2000);
}
