import './style.css';
import data from './data/data';
import { createThreeScene } from './threeScene';


const cubes = [
  './cubeDrawings/cube1.webp',
  './cubeDrawings/cube2.webp',
  './cubeDrawings/cube3.webp',
  './cubeDrawings/cube4.webp',
];

const houses = [
  './houseDrawings/house1.jpg',
  './houseDrawings/house2.jpg',
  './houseDrawings/house3.jpg',
  './houseDrawings/house4.jpg',
];


document.querySelector('#app').innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
       Cadavre Exquis
      <div id="project-row">
        <div class="three-model">
          <div id="model1"></div>
        </div>
        <div id="images">
          <div>
            ${[
    './cubeDrawings/cube1.webp',
    './cubeDrawings/cube2.webp',
    './cubeDrawings/cube3.webp',
    './cubeDrawings/cube4.webp',
  ].map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      Assignment 2
      <div id="project-row">
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images">
          <div>
            ${[
    './cubeDrawings/cube1.webp',
    './cubeDrawings/cube2.webp',
    './cubeDrawings/cube3.webp',
    './cubeDrawings/cube4.webp',
  ].map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      Assignment 3
      <div id="project-row">
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images">
          <div>
            ${houses 
              .map((house, index) =>
                 `<img src="${house}" alt="house${index + 1}" />`
            )
            .join('')}
          </div>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene('#model1', '/3DModels/project1/cube.obj');
createThreeScene('#model2', '/3DModels/project2/tree.obj');
createThreeScene('#model3', '/3DModels/project3/cottage.obj');



