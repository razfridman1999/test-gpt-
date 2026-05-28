const button = document.getElementById("testButton");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
  const now = new Date().toLocaleString();
  statusText.textContent = `Test passed. Button clicked at ${now}.`;
});
