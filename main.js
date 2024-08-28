const display = document.getElementById("show");

let decimal_cnt = 0;
function handleNumberClick() {
  display.innerText += this.textContent;
}

function handleOperatorClick() {
  const value = this.textContent;

  if (value === "AC") {
    clearAll();
  } else if (value === "Neg") {
    let txt = display.innerText;
    toggleSign(txt);
  } else if (value === "CH") {
    change_color();
  } else if (["/", "*", "-", "+"].includes(value)) {
    decimal_cnt = 0;
  } else if (value === ".") {
    addDecimal();
  } else if (value === "=") {
    calculateResult();
  }
}

document.querySelectorAll(".func-btn").forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

document
  .querySelectorAll(
    ".func-btn:not(#delete):not(#negative):not(#change):not(#equal):not(#darsad):not(#point)"
  )
  .forEach((button) => {
    button.addEventListener("click", handleNumberClick);
  });
// cahnge night mode function

var toggle = document.getElementById("theme_tog");
var stored =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (stored) document.documentElement.setAttribute("data-theme", stored);
toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};

// end of night mode function

// it needs some configs so need a seprate part
var ch = document.getElementById("change");
function change_color() {
  const ran = Math.floor(Math.random() * 6 + 1);

  ch.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = `color${ran}`;
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  };
}

//  end of this configurations
function calculateResult() {
  const res = display.innerText;
  let answer = eval(res);

  //  now i show the num in the display part
  display.innerText = answer;
}

function addDecimal() {
  decimal_cnt++;

  console.log(display.innerText);

  if (decimal_cnt == 1) {
    console.log();
    let new_eq = display.innerText + ".";
    console.log(new_eq);
    display.innerText = new_eq;
  } else {
    alert("you cant use 2 decimals");
  }
}

function clearAll() {
  if (display.innerText === "") {
    alert("dudeee enter some numberssss");
  } else {
    display.innerText = "";

    decimal_cnt = 0;
  }
}

function toggleSign(number) {
  if (parseInt(number) > 0) {
    let new_num = "-" + number;
    display.innerText = new_num;
  } else {
    new_num = parseInt(number) * parseInt(-1);
    display.innerText = new_num;
  }
}
