function displayleft() {
  document.getElementById("left").style.opacity = 1;
}

function displaycenter() {
  document.getElementById("center").style.opacity = 1;
}

function displayright() {
  document.getElementById("right").style.opacity = 1;
}

function hideleft() {
  document.getElementById("left").style.opacity = 0;
}

function hidecenter() {
  document.getElementById("center").style.opacity = 0;
}

async function hideright() {
  await new Promise(r => setTimeout(r, 5000));
  document.getElementById("right").style.opacity = 0;
}

function displaylinks() {
  if (document.getElementById("links").style.opacity = 0);
  document.getElementById("links").style.opacity = 1
  //if (document.getElementById("links").style.opacity = 1);
  //document.getElementById("links").style.opacity = 0
}