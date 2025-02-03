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
        <a href="./houseDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Main.jpg" target="_blank">
          <img src="./houseDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Main.jpg" id="model1" alt="Model 1 Image" />
          </a>
        </div>
        <div id="images">
          <div>
             <a href="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var1.jpg" target="_blank">
    <img src="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var1.jpg" alt="cube1" />
  </a>
  <a href="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var2.jpg" target="_blank">
    <img src="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var2.jpg" alt="cube2" />
  </a>
  <a href="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var3.jpg" target="_blank">
    <img src="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var3.jpg" alt="cube3" />
  </a>
  <a href="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var4.jpg" target="_blank">
    <img src="./cubeDrawings/Snell_Daniel_30160814_DSGN313_CadavreExquis_Var4.jpg" alt="cube4" />
  </a>
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
// createThreeScene('#model1', '/3DModels/project1/cube.obj');
// createThreeScene('#model2', '/3DModels/project2/tree.obj');
// createThreeScene('#model3', '/3DModels/project3/cottage.obj');
const controls = new THREE.OrbitControls(camera, renderer.domElement);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);  // Set the canvas size to 800px by 600px (adjust as needed)
document.body.appendChild(renderer.domElement);



