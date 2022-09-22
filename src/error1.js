window.addEventListener("load", () => {
  setTimeout(() => {
    throw new Error("error");
  }, 2000);
});
