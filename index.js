var map =[];
map[0] = "Tunisia";
map[1] = "The mediterranean sea";
map[2] = "The mediterranean sea";
map[3] = "The mediterranean sea";
map[4] = "Algeria";
map[5] = "Libya";
map[6] = "Egypt";
map[7] = "Palestine";
map[8] = "Niger";
map[9] = "Chad";
map[10] = "Sudan";
map[11] = "Saudi arabia";

var images = [];
images[0] = "tunisia.jpg";
images[1] = "sea.jpg";
images[2] = "sea.jpg";
images[3] = "sea.jpg";
images[4] = "algeria.jpg";
images[5] = "libya.jpg";
images[6] = "egypt.jpg";
images[7] = "palestine.png";
images[8] = "niger.jpg";
images[9] = "chad.jpg";
images[10] = "sudan.jpg";
images[11] = "saudi.jpg";


var userindx = -1;
var userloc = document.querySelector('#userlocationbutton');
userloc.style.cursor = "pointer";
userloc.addEventListener('click', handlerLocation, false );
function handlerLocation(){
  var userlocation = document.querySelector('#userplace').value;
  userlocation = (userlocation.charAt(0).toUpperCase() + userlocation.slice(1).toLowerCase()).toString();
  for (var i = 0; i < map.length; i++) {
    if( userlocation == map[i]) userindx = i;
  }
  if(userindx === -1) window.alert("This country not found");
}

var gameMessage ="";
var movloc = document.querySelector('#movelocationbutton');
movloc.addEventListener('click', handlerMove , false);

movloc.style.cursor = "pointer";
function handlerMove(){
  var movelocation = document.querySelector('#moveplace').value.toLowerCase();
  if (movelocation == "north" && userindx>=4) userindx -= 4;
  else if(movelocation == "south"&& map.length>userindx+4) userindx += 4;
  else if(movelocation == "east"&& userindx%4!=3) userindx+=1;
  else if(movelocation == "west"&& userindx%4!=0) userindx-=1;
  else window.alert("Your passport isn't valid to travel there :(")
  render();
}
var outputmessage = document.querySelector('#outputmessage');
function render(){
  outputmessage.innerHTML = map[userindx];
  var outputimg = document.querySelector('#placeimg');
  outputimg.src = images[userindx];
  outputmessage.innerHTML += gameMessage;
}
