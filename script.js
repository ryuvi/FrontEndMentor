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
];

const list = document.getElementById("newbie");

newbie.forEach(({ url }) => {
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

  list.appendChild(listItem);
});
