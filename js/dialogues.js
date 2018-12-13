var dialogues = [
  `Hello, <span class="highlight">my name is Ray</span>. I am an installation from the Eindhoven Museum &mdash; a place where we love to do experiments. So much in fact, that we are doing one <span class="highlight">right now</span>.`,
  `See the avatar on the <span class="highlight">bottom right</span>? That\'s you, but it doesn\'t really resemble you, does it? Let’s dive in a bit deeper and see what I have learned about you.`,

  // user input was removed for this build as to streamline the development process
  // 'Before we start I would like to ask you: can I <span class="highlight">open my eyes</span> so that I can see you better?'

  // START CHAPTER 1 —— CULTURE
  `Where should I start? Oh, I know! Let’s take a look at <span class="highlight">which continent</span> you are from... You are from . . .`,
  // `<span class="highlight">${userProfile.continent}</span> &mdash; correct? ${userProfile.greeting}! you can probably speak ${userProfile.language}, right? My calculations predict that you really value <span class="highlight">${userProfile.culturalValues[0]}</span>, <span class="highlight">${userProfile.culturalValues[1]}</span> and <span class="highlight">${userProfile.culturalValues[2]}</span>.`,
  `So you're from China &mdash; correct? ${userProfile.greeting}! you can probably speak ${userProfile.language}, right? My calculations predict that you really value <span class="highlight">${userProfile.culturalValues[0]}</span>, <span class="highlight">${userProfile.culturalValues[1]}</span> and <span class="highlight">${userProfile.culturalValues[2]}</span>.`,
  `I have updated your avatar to a <span class="highlight">${userProfile.avatar}</span> to represent your continent.`,


  // START CHAPTER 2 —— PERSONALITY
  `Now let’s dive a bit deeper into your <span class="highlight">personality</span>.`,
  // `I can tell that you are a person that <span class="highlight">thinks in ${userProfile.personalityBehaviour[0]}</span> and <span class="highlight">relies on ${userProfile.personalityBehaviour[1]}</span>. You\'re very ${userProfile.personalityBehaviour[2]} and ${userProfile.personalityBehaviour[3]} — good at <span class="highlight">${userProfile.personalityBehaviour[4]}</span> and ${userProfile.personalityBehaviour[5]}.`,
  `Now would be a good time to <span class="highlight">learn Dutch</span> to get to know this country a bit better!`,

  // START CHAPTER 3 —— PHYSICALITY
  `Now let’s take a look at your preferences in <span class="highlight">physicality</span>. I can tell that you are..`,
  `That's all I know. What'd you think, did you like this?`,
];

var dialogueIntro = [
  `Hello, <span class="highlight">my name is Ray</span>. I am an installation from the Eindhoven Museum &mdash; a place where we love to do experiments. So much in fact, that we are doing one <span class="highlight">right now</span>.`,
  `See the avatar on the <span class="highlight">bottom right</span>? That\'s you, but it doesn\'t really resemble you, does it? Let’s dive in a bit deeper and see what I have learned about you.`
]

var dialogueCulture = [
  `Where should I start? Oh, I know! Let’s take a look at <span class="highlight">which continent</span> you are from... You are from . . .`,
  `So you're from  <span class="highlight">${userProfile.continent}</span> &mdash; correct? ${userProfile.greeting}! you can probably speak ${userProfile.language}, right? My calculations predict that you really value <span class="highlight">${userProfile.culturalValues[0]}</span>, <span class="highlight">${userProfile.culturalValues[1]}</span> and <span class="highlight">${userProfile.culturalValues[2]}</span>.`,
  `I have updated your avatar to resemble a <span class="highlight">${userProfile.avatar}</span> to represent your continent.`
]

var dialoguePersonality = [
  `Now let’s dive a bit deeper into your <span class="highlight">personality</span>.`,
  `I can tell that you are a person that <span class="highlight">thinks in ${userProfile.personalityBehaviour[0]}</span> and <span class="highlight">relies on ${userProfile.personalityBehaviour[1]}</span>. You\'re very ${userProfile.personalityBehaviour[2]} and ${userProfile.personalityBehaviour[3]} — good at <span class="highlight">${userProfile.personalityBehaviour[4]}</span> and ${userProfile.personalityBehaviour[5]}.`
]

var dialoguePhysicality = [
  `Now let’s take a look at your preferences in <span class="highlight">physicality</span>. I can tell that you are..`
]

var allDialogues = [dialogueIntro, dialogueCulture, dialoguePersonality, ];

var nextButton = ` <img class="next-icon" src="images/chevron-right-outline.svg"></img>`;
// var userInput = '<span class="user-input">Press \'Y\' or \'N\'.</span>';
