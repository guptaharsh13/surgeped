const changeTheme = (theme) => {
  if (!(theme === "dark" || theme === "light")) {
    const dark_theme = window.matchMedia("(prefers-color-scheme: dark)");
    theme = dark_theme.matches ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
  theme === "dark"
    ? document.body.classList.add(theme)
    : document.body.classList.remove("dark");
  console.log(theme);
};

Array.from(document.getElementsByClassName("change-theme")).forEach(
  (element) => {
    element.addEventListener("click", () => {
      let theme = localStorage.getItem("theme");
      theme = theme === "dark" ? "light" : "dark";
      changeTheme(theme);
    });
  }
);

const removeLoader = () => {
  Array.from(document.getElementsByClassName("loader")).forEach((loader) => {
    loader.style.display = "none";
  });
  Array.from(document.getElementsByClassName("main")).forEach((element) => {
    element.style.display = "block";
  });
};

window.onload = () => {
  let theme = localStorage.getItem("theme");
  changeTheme(theme);
  removeLoader();
};
