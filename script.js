const newbie = [
  {
    url: "huddle-landing-page-with-single-introductory-section",
  },
  {
    url: "single-price-grid-component",
  },
  {
    url: "profile-card-component",
  },
  {
    url: "four-card-feature-section",
  },
  {
    url: "ping-coming-soon-page",
  },
  {
    url: "intro-component-with-signup-form",
  },
];
const junior = [];
const intermediate = [];
const advance = [
  {
    url: "rock-paper-scissors-game"
  }
];

const liNewbie = document.getElementById("newbie");
const liJunior = document.getElementById("junior");
const liIntermediate = document.getElementById("intermediate");
const liAdvance = document.getElementById("advance");

projects(newbie);
projects(junior);
projects(intermediate);
projects(advance);

function projects(project) {
  project.forEach(({ url }) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "blocks");

    listItem.innerHTML = `
          <img src="./src/${url}/design/desktop-preview.jpg" alt="${url}">
          <div>
              <a href="./src/${url}/index.html">
                  <i class="far fa-eye"></i>
              </a>
              <a href="https://github.com/ryuvi/FrontEndMentor/tree/Main/src/${url}">
                  <i class="fas fa-code"></i>
              </a>
          </div>
      `;

    if (project == newbie) liNewbie.appendChild(listItem);
    if (project == junior) liJunior.appendChild(listItem);
    if (project == intermediate) liIntermediate.appendChild(listItem);
    if (project == advance) liAdvance.appendChild(listItem);
  });
}
