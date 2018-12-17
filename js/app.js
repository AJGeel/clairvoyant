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
// Change userProfile ID to the query input in URI
userProfile.id = String(urlParams.id);

// Autofill the user profiles based on preset logic. Will be 'learnt' using machine learning once data is abundant and high of quality.
updateUserValues();

// Todo: segment this in a different file.
var dialogues = [
  `Hello, <span class="highlight">my name is Ray</span>. I am an installation from the Eindhoven Museum &mdash; a place where we love to do experiments. So much in fact, that we are doing one <span class="highlight">right now</span>.`,
  `See the avatar on the <span class="highlight">bottom right</span>? That\'s you, but it doesn\'t really resemble you, does it? Let’s dive in a bit deeper and see what I have learned about you.`,

  // user input was removed for this build as to streamline the development process
  // 'Before we start I would like to ask you: can I <span class="highlight">open my eyes</span> so that I can see you better?'

  // START CHAPTER 1 —— CULTURE
  `Where should I start? Oh, I know! Let’s take a look at <span class="highlight">which continent</span> you are from... You are from . . .`,
  // `<span class="highlight">${userProfile.continent}</span> &mdash; correct? ${userProfile.greeting}! you can probably speak ${userProfile.language}, right? My calculations predict that you really value <span class="highlight">${userProfile.culturalValues[0]}</span>, <span class="highlight">${userProfile.culturalValues[1]}</span> and <span class="highlight">${userProfile.culturalValues[2]}</span>.`,
  `So you're from <span class="highlight">${userProfile.country}</span> &mdash; correct? ${userProfile.greeting}! you can probably speak ${userProfile.language}, right? My calculations predict that you really value <span class="highlight">${userProfile.culturalValues[0]}</span>, <span class="highlight">${userProfile.culturalValues[1]}</span> and <span class="highlight">${userProfile.culturalValues[2]}</span>.`,
  `I have updated your avatar to a <span class="highlight">${userProfile.avatar}</span> to represent your continent.`,


  // START CHAPTER 2 —— PERSONALITY
  `Now let’s dive a bit deeper into your <span class="highlight">personality</span>.`,
  // `I can tell that you are a person that <span class="highlight">thinks in ${userProfile.personalityBehaviour[0]}</span> and <span class="highlight">relies on ${userProfile.personalityBehaviour[1]}</span>. You\'re very ${userProfile.personalityBehaviour[2]} and ${userProfile.personalityBehaviour[3]} — good at <span class="highlight">${userProfile.personalityBehaviour[4]}</span> and ${userProfile.personalityBehaviour[5]}.`,
  `Now would be a good time to <span class="highlight">learn Dutch</span> to get to know this country a bit better!`,

  // START CHAPTER 3 —— PHYSICALITY
  `Now let’s take a look at your preferences in <span class="highlight">physicality</span>. I can tell that you are..`,
  `That's all I know. What'd you think, did you like this?`,
];

// window.onload = function(){
//   fireworks.setCanvasSize();
// }

// Initialize variables, make DOM calls to lower resources required by browser.
var dialogIndex = 0,
    userAvatar = document.getElementById("user-avatar"),
    userAvatarImg = document.getElementById("user-avatar-img"),
    robotAvatarImg = document.getElementById("robot-avatar-img"),
    typingSoundPlaying = false,
    isVideoPlaying = false;

// Dialogue typing initialisation
var instance = new TypeIt('#active-text-window', {
  speed: 3, /* DEV OPTION: SUPER FAST TYPING */
  // speed: 40,
  deleteSpeed: 3,
  strings: [dialogues[0]],
  cursor: true,
  cursorSpeed: 0,
  cursorChar: '<img class="next-icon" id="next-icon-id" src="images/chevron-right-outline.svg"></img>',
  // cursorChar: '<img class="next-icon orange-icon" id="next-icon-id" src="images/chevron-right-outline-orange.svg"></img>', /*option: have an EM-orange coloured cursor char*/

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

  if (dialogIndex == 1) {
    // Make the user avatar appear from the right bottom corner.
    userAvatar.classList.add("user-avatar-untransform");
  } else if (dialogIndex == 3) {
    summonVideo('location');
  } else if (dialogIndex == 4) {
    setTimeout(() => {
      // Wait for 2 seconds before changing the avatar
      changeAvatarImg();
      // Play animation to help draw attention to the avatar change
    }, 2000);

  } else if (dialogIndex == 6) {
    summonVideo('personality');
  }  else if (dialogIndex == 8) {
    summonVideo('physicality');
  }

}

function changeAvatarImg(){
  const avatarPrefix = "images/user-avatar-";

  if (userProfile.avatar == "Giant Panda"){
    userAvatarImg.src=`${avatarPrefix}panda.png`;
  } else if (userProfile.avatar == "Eurasian Wolf"){
    userAvatarImg.src=`${avatarPrefix}wolf.png`;
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

function summonVideo(videoStage){
  if (userProfile.continent == "Asia"){
    videoContinent = "as";
  } else if (userProfile.continent == "Europe"){
    videoContinent = "eu";
  }

  if (userProfile.personality == "left-brained"){
    videoPersonality = "left";
  } else if (userProfile.personality == "right-brained"){
    videoPersonality = "right";
  }

  var videoUrl = `${videoContinent}-${videoPersonality}-${userProfile.physicality}-${videoStage}`;

  console.log(`$DEBUG now playing '${videoUrl}.mp4' `)
  const lbContent = `<video autoplay id="myVideo"><source src="videos/${videoUrl}.mp4" type="video/mp4"></video>`;

  const lbInstance = basicLightbox.create(lbContent);
  lbInstance.show();

  var video = document.getElementsByTagName('video')[0];
  video.onended = function(e){
    console.log("$DEBUG video has ended! (closing lightbox)");
    lbInstance.close();
  }
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
