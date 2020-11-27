const projects = [
  {
    url: "huddle-landing-page-with-single-introductory-section",
  },
  {
    url: "single-price-grid-component",
  },
];

const list = document.querySelector("#lista");

projects.forEach(({ url }) => {
  const listItem = document.createElement("li");

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
