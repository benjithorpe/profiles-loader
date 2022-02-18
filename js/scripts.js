const template = document.querySelector('[data-template]');
const profileList = document.querySelector('[data-profile-wrapper]');

// Generates the profile cards to be used
function generateProfiles(amountOfProfile) {

  for (let i = 0; i < amountOfProfile; i++) {
    // clone the template, then append to the list
    const item = template.content.cloneNode(true);
    profileList.append(item);
  }
}

generateProfiles(5);

const RANDOM_USER_URL = "https://randomuser.me/api/1.3/?results=10";

// fetch(RANDOM_USER_URL)
// .then(response => response.json())
// .then(data => console.log(data.results))
// .catch(error => console.log("An error occurred: " + error));
