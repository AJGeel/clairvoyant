// Grabs the dialogue window DOM element to replace its contents later.
var dialogueWindow = document.getElementById("active-text-window")
var userAvatar = document.getElementById("user-avatar");
var userAvatarImg = document.getElementById("user-avatar-img");
var videoUrl = "";
dialogueWindow.addEventListener("click", someFunction);

// Variable that keeps track of where the dialogue is.
// var dialogueIndex = 0;


// // Function to replace the dialogue text
// function replaceText() {
//     dialogueWindow.innerHTML = dialogues[dialogueIndex] + nextButton;
// }

function someFunction() {

}

// Function that lets the dialogue progress. Will be more complex later on, and should really have error prevention.
// function nextDialogue() {
//   if (dialogueIndex < dialogues.length - 1){
//     dialogueIndex += 1;
//
//     if (dialogueIndex == 1) {
//       userAvatar.classList.add("user-avatar-untransform");
//     } else if (dialogueIndex == 3) {
//       // Create video popup
//       basicLightbox.create(`<video autoplay><source src="videos/china-location.mp4" type="video/mp4"></video>`).show();
//     } else if (dialogueIndex == 4) {
//       // Change user avatar
//       userAvatarImg.src="images/user-avatar-B.png";
//     }
//
//     // console.log(dialogueIndex);
//     replaceText();
//   } else {
//     dialogueWindow.innerHTML = 'BLEEP BLOOP! I HAVE REACHED THE END OF MY DIALOGUE. 🤖';
//   }
//   // TODO fix the currently non-animating next arrow.
// }

function generateVideoUrl() {
  videoUrl = userProfile.language.toLowerCase() + "-" + "location" + ".mp4";
}

// replaceText();
