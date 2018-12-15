var userProfile = {
  id: "0001",
  avatar: "standard",

  continent: "Asia",
  language: "Chinese",

  // These variables are derivative: based on 'continent' + 'language'.
  greeting: "",
  culturalValues: [""],

  personality: "left-brained",
  // This variable is derivative: based on 'personality'
  personalityBehaviour: [""],

  physicality: "relaxed",
  // This variable is derivative: based on 'physicality'.
  physicalityBehaviour: [""]
}

function updateUserValues(){

  // Stage 1: culture + language
  if (userProfile.continent == "Asia") {
    userProfile.culturalValues = ["harmony", "wisdom", "righteousness"];
    userProfile.avatar = "Giant Panda";

    if (userProfile.language == "Chinese") {
      userProfile.greeting = "Nihao";

    } else if (userProfile.language == "Hindi") {
      userProfile.greeting = "Namaste";
    }

  } else if (userProfile.continent == "Africa") {
    userProfile.culturalValues = ["extrovertedness", "kindness", "respect"];
    userProfile.avatar = "Mighty Lion";

    if (userProfile.language == "French") {
      userProfile.greeting = "Bonjour";
    }

  } else if (userProfile.continent == "Europe") {
    userProfile.culturalValues = ["faithful", "modern", "traditional"];
    userProfile.avatar = "Cheeky Pigeon";

    if (userProfile.language == "English") {
      userProfile.greeting = "Hello";

    } else if (userProfile.language == "French") {
      userProfile.greeting = "Bonjour";
      // different French values

    } else if (userProfile.language == "Dutch") {
      userProfile.greeting = "Hallo";
      // different Dutch values

    } else if (userProfile.language == "German") {
      userProfile.greeting = "Gutentag";
      // different German values

    } else if (userProfile.language == "Lithuanian") {
      // Currently incomplete!
      userProfile.greeting = "Sveiki!";
      userProfile.culturalValues = ["independent", "", ""];
      // different Lithuanian values
    }


  } else if (userProfile.continent == "North America") {
    userProfile.culturalValues = ["independence", "affectionate", "equality"];
    userProfile.avatar = "Soaring Eagle";
    userProfile.language = "English";
    userProfile.greeting = "Hello";

  } else if (userProfile.continent == "Oceania") {
    userProfile.culturalValues = ["freedom", "neighborly", "authentic"];
    userProfile.avatar = "Red Kangaroo";
    userProfile.language = "English";
    userProfile.greeting = "Hello";

  } else if (userProfile.continent == "South America") {
    userProfile.culturalValues = ["laid-back", "passionate", "openness"];
    userProfile.avatar = "Hilarious Llama";
    userProfile.language = "English";

  }

  // Stage 2: personality
  if (userProfile.personality == "left-brained") {
    userProfile.personalityBehaviour = ["words", "facts", "analytical", "a logical thinker", "solving technical problems", "pick up languages quite fast"];


  } else if (userProfile.personality == "right-brained") {
    userProfile.personalityBehaviour = ["images", "feelings", "creative", "an imaginative thinker", "doing artistic activities", "have a very good intuition for problems"];
  }

  // Stage 3: physicality
  if (userProfile.physicality == "relaxed") {
    userProfile.physicalityBehaviour = ["take it slow", "breathing and relaxation like yoga"];


  } else if (userProfile.physicality == "active") {
    userProfile.physicalityBehaviour = ["go all in", "getting rid of your energy like boxing or running"];
  }

}

// Autofill the user profiles based on preset logic
updateUserValues();
