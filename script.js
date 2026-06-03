const ideas = [
  "Add GitHub Pages deployment so the portfolio has a live public link.",
  "Add a dark mode toggle and save the preference in localStorage.",
  "Add a project filter so visitors can browse work by category.",
  "Add a short case-study page for each project card.",
  "Add a contact section with a real form service integration."
];

const ideaButton = document.querySelector("#ideaButton");
const ideaOutput = document.querySelector("#ideaOutput");

function suggestIdea() {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  ideaOutput.textContent = ideas[randomIndex];
}

if (ideaButton && ideaOutput) {
  ideaButton.addEventListener("click", suggestIdea);
}
