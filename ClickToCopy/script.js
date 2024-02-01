const btn = document.querySelector(".btn");
const textToCopy = document.querySelector(".textToCopy");

const copyText = (e) => {
  e.preventDefault();

  textToCopy.select();
  textToCopy.setSelectionRange(0, 999999);
  document.execCommand("copy");

  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

btn.addEventListener("click", copyText);
