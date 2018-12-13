// Function that parses parameters that were input in the URL
function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
      queryEnd   = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {}, i, n, v, nv;

  if (query === url || query === "") return;

  for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}

  // Grabs URL, used in parsing parameters.
  var urlString = window.location.href;
  urlParams = parseURLParams(urlString);
  console.log(urlParams);


// window.onload = function(){
//   fireworks.setCanvasSize();
// }

// Initialize variables, make DOM calls to lower browser heavinesss
var dialogIndex = 0,
    userAvatar = document.getElementById("user-avatar"),
    userAvatarImg = document.getElementById("user-avatar-img"),
    robotAvatarImg = document.getElementById("robot-avatar-img"),
    typingSoundPlaying = false,
    isVideoPlaying = false;

// const lb = basicLightbox.create(``);
// lb.show();

// Dialogue typing initialisation
var instance = new TypeIt('#active-text-window', {
  // speed: 3, /* DEBUG: SUPER FAST TYPING */
  speed: 40,
  deleteSpeed: 3,
  strings: [dialogues[0]],
  cursor: true,
  cursorSpeed: 0,
  cursorChar: '<img class="next-icon" id="next-icon-id" src="images/chevron-right-outline.svg"></img>',
  // cursorChar: '<img class="next-icon orange-icon" id="next-icon-id" src="images/chevron-right-outline-orange.svg"></img>',

  callback: function(nextIcon) {
    // When the typing has been completed, increase the dialogue index, show the cursor and make the robot stop talking. (AND stop the typing sound)
    console.log(`$DEBUG active-stage: ${dialogIndex+1}.`);
    dialogIndex++;
    showCursor();
    makeRobotStop();
    // typingSoundPlaying = false;
  }
});

// set a timeout for the first animation; we don't want the dialogue to start typing while the robot still makes its entrance.
setTimeout(() => {
  instance.freeze();
  hideCursor();
}, 0);

setTimeout(() => {
  instance.unfreeze();
  makeRobotTalk();
  // playTypewriterSound();
}, 2000);



// If the dialogue window is clicked, progress the dialogue.
dialogueWindow.addEventListener("click", progressDialogue);

// If any button is pressed, progress the dialogue.
document.onkeypress = function(key_dtl){
  // key_dtl = key_dtl  || window.event; var uni_code = key_dtl.keyCode key_dtl.which; var key_name = String.fromCharCode(uni_code);

  progressDialogue();
  // if (lb.visible()){
  //   // lb.close();
  //   lb.innerHTML = `sjf;alksjdf;lak jf;al ksjdf;lkjsd f;lksjdf `;
  // } else {
  //   // lb.show();
  // }

  // if (lightbox is open):{ close lightbox. }
}

function progressDialogue(){

  instance.delete(dialogues[dialogIndex-1].length);
  instance.type(dialogues[dialogIndex]);
  hideCursor();

  setTimeout(() => {
      makeRobotTalk();
      // typingSoundPlaying = true;
      // console.log(typingSoundPlaying);
  }, 1000);

  // console.log(dialogIndex);

  if (dialogIndex == 1) {
    userAvatar.classList.add("user-avatar-untransform");
  } else if (dialogIndex == 3) {
    summonVideo('china-location');
  } else if (dialogIndex == 4) {
    setTimeout(() => {
      userAvatarImg.src="images/user-avatar-B.png";
      // wait for 2 seconds before changing the avatar
    }, 2000);

  } else if (dialogIndex == 6) {
    summonVideo('china-personality');
  }  else if (dialogIndex == 8) {
    summonVideo('china-physicality');
  }

}

function makeRobotTalk(){
  robotAvatarImg.src="images/talking-robot.gif";
  console.log("$DEBUG talking-animation started.")
}

function makeRobotStop(){
  robotAvatarImg.src="images/still-robot.png";
  console.log("$DEBUG talking-animation terminated.")
}

function hideCursor(){
  document.querySelectorAll(".ti-cursor")[0].style.opacity = "0";
}

function showCursor(){
  document.querySelectorAll(".ti-cursor")[0].style.opacity = "1";
}

function summonVideo(url){
  const lightboxVideo = basicLightbox.create(`<video autoplay><source src="videos/${url}.mp4" type="video/mp4"></video>`).show();


  // if (!isVideoPlaying){
  //   isVideoPlaying = true;
  //   const instance = basicLightbox.create(`<video autoplay><source src="videos/${url}.mp4" type="video/mp4"></video>`).show();
  //   console.log("video is now playing.");
  // } else if (isVideoPlaying){
  //   isVideoPlaying = false;
  //   console.log("video is not playing, closing.");
  //
  //   // close the video
  // }
}

// function playTypewriterSound(){
//   var typewriterSound = new Audio("audio/typewriter.mp3");
//   typewriterSound.play();
//
//   typewriterSound.addEventListener('ended', function() {
//     if (typingSoundPlaying == true){
//       this.currentTime = 0;
//       this.play();
//     }
//   }, false);
// }
