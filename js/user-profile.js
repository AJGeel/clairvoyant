var userProfile = {
  id: "",
  avatar: "standard",
  alias: "",
  continent: "Asia",
  language: "Chinese",
  country: "",

  ethnicity: "",
  age: "",
  gender: "",

  // These variables are derivative: based on 'continent' + 'language'.
  greeting: "",
  culturalValues: [""],

  personality: "right-brained",
  // This variable is derivative: based on 'personality'
  personalityBehaviour: [""],

  physicality: "relaxed",
  // This variable is derivative: based on 'physicality'.
  physicalityBehaviour: [""],
  raceTime: 0,
  avgHeartRate: 0,
  weight: 0,

  averageEmotion: "",
  favouriteInstallation: "",
  totalTimeSpent: 0,
  returnVisitor: false,

  languageSpoken: [""],
  profession: "",
  educationLevel: "",

  isInGroup: false,
  groupDynamics: "",
}

function updateUserValues(){

  if (userProfile.id == "001" || userProfile.id == "shen"){
    userProfile.alias = "Shen"; userProfile.id = "001"; userProfile.continent = "Asia"; userProfile.language = "Chinese"; userProfile.personality = "right-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "002" || userProfile.id == "liang" || userProfile.id == "li"){
    userProfile.alias = "Liang"; userProfile.id = "002"; userProfile.continent = "Asia"; userProfile.language = "Chinese"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "003" || userProfile.id == "krishnaa" || userProfile.id == "kris"){
    userProfile.alias = "Krishnaa"; userProfile.id = "003"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "right-brained"; userProfile.physicality = "active";
  } else if (userProfile.id == "004" || userProfile.id == "arthur" || userProfile.id == "art" || userProfile.id == "aj"){
    userProfile.alias = "Arthur"; userProfile.id = "004"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "005" || userProfile.id == "jb"){
    userProfile.alias = "Jean-Bernard"; userProfile.id = "005"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "006" || userProfile.id == "javed" || userProfile.id == "jav"){
    userProfile.alias = "Javed"; userProfile.id = "006"; userProfile.continent = "Europe"; userProfile.country = "Greece"; userProfile.language = "Greek"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "007" || userProfile.id == "ward"){
    userProfile.alias = "Ward"; userProfile.id = "007"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "right-brained"; userProfile.physicality = "active";
  } else if (userProfile.id == "008" || userProfile.id == "daan"){
    userProfile.alias = "Daan"; userProfile.id = "008"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "right-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "009" || userProfile.id == "leo"){
    userProfile.alias = "Leo"; userProfile.id = "009"; userProfile.continent = "Europe"; userProfile.language = "Italian"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "010" || userProfile.id == "tomas"){
    userProfile.alias = "Tomas"; userProfile.id = "010"; userProfile.continent = "Europe"; userProfile.language = "Lithuanian"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "011" || userProfile.id == "rick"){
    userProfile.alias = "Rick"; userProfile.id = "011"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "right-brained"; userProfile.physicality = "active";
  } else if (userProfile.id == "012"){
    userProfile.alias = "Annabel"; userProfile.id = "012"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "right-brained"; userProfile.physicality = "active";
  } else if (userProfile.id == "013"){
    userProfile.alias = "Heleen"; userProfile.id = "013"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "left-brained"; userProfile.physicality = "relaxed";
  } else if (userProfile.id == "014"){
    userProfile.alias = "Jelte"; userProfile.id = "014"; userProfile.continent = "Europe"; userProfile.language = "Dutch"; userProfile.personality = "right-brained"; userProfile.physicality = "relaxed";
  } else {
    // redirect to Shen's profile in case of failure or error.

    userProfile.alias = "Shen"; userProfile.continent = "Asia"; userProfile.language = "Chinese"; userProfile.personality = "right-brained"; userProfile.physicality = "relaxed";
  }

  // Stage 1: culture + language
  if (userProfile.continent == "Asia") {
    userProfile.culturalValues = ["harmony", "wisdom", "righteousness"];
    userProfile.avatar = "Giant Panda";

    if (userProfile.language == "Chinese") {
      userProfile.country = "China";
      userProfile.greeting = "Nihao";

    } else if (userProfile.language == "Hindi") {
      userProfile.country = "India";
      userProfile.greeting = "Namaste";
    }

  } else if (userProfile.continent == "Africa") {
    userProfile.culturalValues = ["extrovertedness", "kindness", "respect"];
    userProfile.avatar = "Mighty Lion";

    if (userProfile.language == "French") {
      userProfile.country = "Africa";
      userProfile.greeting = "Bonjour";
    }

  } else if (userProfile.continent == "Europe") {
    userProfile.culturalValues = ["faithful", "modern", "traditional"];
    userProfile.avatar = "Eurasian Fox";

    if (userProfile.language == "English") {
      userProfile.country = "Europe";
      userProfile.greeting = "Hello";

    } else if (userProfile.language == "French") {
      userProfile.country = "France";
      userProfile.greeting = "Bonjour";
      userProfile.culturalValues = ["pride", "intellectuality", "style"];

    } else if (userProfile.language == "Dutch") {
      userProfile.country = "The Netherlands or Belgium";
      userProfile.greeting = "Hallo";
      userProfile.culturalValues = ["honesty", "straightforwardness", "thriftiness"];

    } else if (userProfile.language == "German") {
      userProfile.country = "Germany";
      userProfile.greeting = "Gutentag";
      userProfile.culturalValues = ["punctuality", "structuredness", "stability"];

    } else if (userProfile.language == "Lithuanian") {
      userProfile.country = "Lithuania";
      userProfile.greeting = "Sveiki!";
      userProfile.culturalValues = ["independent", "", ""];
      // different Lithuanian values
    }


  } else if (userProfile.continent == "North America") {
    userProfile.culturalValues = ["independence", "affectionate", "equality"];
    userProfile.country = "North America";
    userProfile.avatar = "Soaring Eagle";
    userProfile.language = "English";
    userProfile.greeting = "Hello";

  } else if (userProfile.continent == "Oceania") {
    userProfile.culturalValues = ["freedom", "neighborly", "authentic"];
    userProfile.country = "Oceania";
    userProfile.avatar = "Red Kangaroo";
    userProfile.language = "English";
    userProfile.greeting = "Hello";

  } else if (userProfile.continent == "South America") {
    userProfile.country = "South America";
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

  console.log(`$DEBUG user profile updated to '${userProfile.alias}' 🕵🏻‍♂️`)

}
