const template = document.querySelector('[data-template]');
const profileListWrapper = document.querySelector('[data-profile-wrapper]');
const loadingSpinner = document.querySelector('[data-waiting-loader]');

// Generates the profile cards to be used
function generateProfiles(profileList = []) {

  for (let i = 0; i < profileList.length; i++) {
    const item = template.content.cloneNode(true);
    // console.log(profileList[i])

    const profileData = {
      name: `${profileList[i].name.title}. ${profileList[i].name.first} ${profileList[i].name.last}`,
      email: profileList[i].email,
      contact: profileList[i].phone,
      age: profileList[i].dob.age,
      address: `${profileList[i].location.city}, ${profileList[i].location.country}`,
      picture: profileList[i].picture.medium,
    };

    // Update each HTML text content
    item.querySelector(".age").textContent = `${profileData.age} years`;
    item.querySelector(".name").textContent = `${profileData.name}`;
    item.querySelector(".email").textContent = `${profileData.email}`;
    item.querySelector(".contact").textContent = `${profileData.contact}`;
    item.querySelector(".address").textContent = `${profileData.address}`;
    item.querySelector("figure.user-img img").setAttribute("src", `${profileData.picture}`);

    // Add the new generated template in the HTML
    profileListWrapper.append(item);
  }
}


// generateProfiles([1,2,3,4,5,6,7,8,9,0])

// Builds a profile card with the given arguments passed in
function buildTemplateData(item, profileData) { }

const RANDOM_USER_URL = "https://randomuser.me/api/1.3/?results=10";

fetch(RANDOM_USER_URL)
  .then(response => response.json())
  .then(data => {
    generateProfiles(data.results);
    // Remove the loading spinner
    profileListWrapper.removeChild(loadingSpinner);
  })
  .catch(error => {
    const errorMsg = "Sorry :( an error occurred, please refresh the site."
    loadingSpinner.querySelector("p.loading-info").textContent = errorMsg
  });
