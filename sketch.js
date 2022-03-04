let img;
let toolBar;
let imgMenu;
let imgCodigo;
let imgCancion;

let screenCounter = 0;

function preload() {
  img = loadImage('assets/Home.png');
  toolBar = loadImage('assets/ToolBar.png');
  imgMenu = loadImage('assets/Menu.png');
  imgCodigo = loadImage('assets/Codigo.png');
  imgCancion = loadImage('assets/Cancion.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight + 1103 - windowHeight);

}

function draw() {
  console.log('mouseX = ' + mouseX);
  console.log('mouseY = ' + mouseY);

  switch (screenCounter) {
    case 0:
      home();
      break;
    case 1:
      menu();
      break;
    case 2:
      codigo();
      break;
    case 3:
      cancion();
      break;
    case 4:

      break;

    default:
      break;
  }
}
function home() {
  image(img, 0, 0, 428, 1103);
  image(toolBar, 0, windowHeight + 1103 - windowHeight - 77);

}
function menu() {
  image(imgMenu, 0, 0);
  fill(17, 17, 17);
  noStroke();
  rect(0, 925, width, height);
}
function codigo() {
  image(imgCodigo, 0, 0);
  fill(17, 17, 17);
  noStroke();
  rect(0, 925, width, height);
}
function cancion() {
  image(imgCancion, 0, 0);
  fill(17, 17, 17);
  noStroke();
  rect(0, 925, width, height);
}
function mouseClicked() {
  //pasa de home a menu
  if (dist(131, 978, mouseX, mouseY) < 100) {
    screenCounter = 1;
  }
  //pasa de menu a home
  if (screenCounter === 1) {
    if (dist(41, 46, mouseX, mouseY) < 100) {
      screenCounter = 0;
    }
  }
  //pasa de menu a codigo
  if (screenCounter === 1) {
    if (dist(209, 663, mouseX, mouseY) < 50) {
      screenCounter = 2;
    }
  }
  //pasa de codigo a menu
  if (screenCounter === 2) {
    if (dist(41, 46, mouseX, mouseY) < 100) {
      screenCounter = 1;
    }
  }
  //pasa de codigo a cancion
  if (screenCounter === 2) {
    if (dist(209, 663, mouseX, mouseY) < 50) {
      screenCounter = 3;
    }
  }
  //pasa de cancion a codigo
  if (screenCounter === 3) {
    if (dist(41, 46, mouseX, mouseY) < 100) {
      screenCounter = 2;
    }
  }
}
