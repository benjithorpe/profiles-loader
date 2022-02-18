const template = document.querySelector('[data-template]');
const profileListWrapper = document.querySelector('[data-profile-wrapper]');

// Generates the profile cards to be used
function generateProfiles(profileList = []) {

  for (let i = 0; i < profileList.length; i++) {
    // clone the template, then append to the list
    const item = template.content.cloneNode(true);
    // console.log(profileList[i])

    const profileData = {
      name: `${profileList[i].name.title}. ${profileList[i].name.first} ${profileList[i].name.last}`,
      email: profileList[i].email,
      contact: profileList[i].phone,
      age: profileList[i].dob.age,
      address: `${profileList[i].location.city}, ${profileList[i].location.country}`,
      picture: profileList[i].picture.medium,
    }

    item.querySelector(".age").textContent = `${profileData.age} years`
    item.querySelector(".name").textContent = `${profileData.name}`
    item.querySelector(".email").textContent = `${profileData.email}`
    item.querySelector(".contact").textContent = `${profileData.contact}`
    item.querySelector(".address").textContent = `${profileData.address}`
    item.querySelector("figure.user-img img").setAttribute("src", `${profileData.picture}`)

    // Add the new generated template in the HTML
    profileListWrapper.append(item);
  }
}

// Builds a profile card with the given arguments passed in
function buildTemplateData(item, profileData) {}

const RANDOM_USER_URL = "https://randomuser.me/api/1.3/?results=10";

fetch(RANDOM_USER_URL)
  .then(response => response.json())
  .then(data => {
    generateProfiles(data.results);
    console.log(data.results);
  })
  .catch(error => console.log("An error: " + error));
