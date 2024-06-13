// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Animation Variables
let cloud1X = 85;
let cloud2X = 200;
let cloud3X = 350;
let titleColor = "rgb(255,0,0)";

requestAnimationFrame(draw);

function draw() {
  // Sky
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 500, 400);

  // Title
  ctx.fillStyle = "red";
  ctx.font = "20px Arial";
  ctx.fillText("City Landscape", 350, 22);

  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(40, 35, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Clouds
  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloud1X, 40, 85, 60);
  ctx.drawImage(cloud, cloud2X, 60, 100, 70);
  ctx.drawImage(cloud, cloud3X, 115, 85, 60);

  // Skyscraper 1
  ctx.fillStyle = "darkgray";
  ctx.fillRect(25, 150, 100, 400);

  // Skyscraper 2
  ctx.fillStyle = "darkgray";
  ctx.fillRect(170, 130, 100, 400);

  // Small Building
  ctx.fillStyle = "darkgray";
  ctx.fillRect(290, 300, 200, 300);

  // Skyscraper 1 Windows
  ctx.fillStyle = "yellow";
  ctx.fillRect(55, 350, 30, 40);
  ctx.fillStyle = "yellow";
  ctx.fillRect(55, 275, 30, 40);
  ctx.fillStyle = "yellow";
  ctx.fillRect(55, 200, 30, 40);

  // Skyscraper 2 Windows
  ctx.fillStyle = "yellow";
  ctx.fillRect(210, 350, 30, 40);
  ctx.fillStyle = "yellow";
  ctx.fillRect(210, 275, 30, 40);
  ctx.fillStyle = "yellow";
  ctx.fillRect(210, 200, 30, 40);

  // Small Building Windows
  ctx.fillStyle = "yellow";
  ctx.fillRect(310, 335, 30, 40);
  ctx.fillStyle = "yellow";
  ctx.fillRect(370, 335, 30, 40);
  ctx.fillStyle = "yellow";
  ctx.fillRect(430, 335, 30, 40);

  // Skyscraper Pole
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(110, 160);
  ctx.lineTo(110, 100);
  ctx.stroke();

  // Cloud Animation
  cloud1X++;
  cloud2X++;
  cloud3X++;
  if (cloud1X >= 500) {
    cloud1X = -85;
  }
  if (cloud2X >= 500) {
    cloud2X = -100;
  }
  if (cloud3X >= 500) {
    cloud3X = -85;
  }

  requestAnimationFrame(draw);
}

// ????????
//   Title Animation
let counter = 0;
while (counter <= 100) {
  let r = Math.random() * 255 + 1;
  r = Math.floor(r);
  let g = Math.random() * 255 + 1;
  g = Math.floor(g);
  let b = Math.random() * 255 + 1;
  b = Math.floor(b);
  let rgbString = `rgb(${r},${g},${b})`;
  ctx.fillStyle = rgbString;
  ctx.font = "20px Arial";
  ctx.fillText("City Landscape", 350, 22);
  counter++;
}
