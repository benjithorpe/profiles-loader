const template = document.querySelector('[data-template]');
const profileListWrapper = document.querySelector('[data-profile-wrapper]');
const loadingSpinner = document.querySelector('[data-waiting-loader]');

// Generates the profile cards to be used
function generateProfileCard(profileList = []) {

  for (let i = 0; i < profileList.length; i++) {
    const item = template.content.cloneNode(true);

    const profileData = {
      name: `${profileList[i].name.title}. ${profileList[i].name.first} ${profileList[i].name.last}`,
      email: profileList[i].email,
      contact: profileList[i].phone,
      age: profileList[i].dob.age,
      address: `${profileList[i].location.city}, ${profileList[i].location.country}`,
      picture: profileList[i].picture.medium,
    };

    // Update each HTML card content
    item.querySelector(".age").textContent = `${profileData.age} years`;
    item.querySelector(".name").textContent = `${profileData.name}`;
    item.querySelector(".email").textContent = `${profileData.email}`;
    item.querySelector(".contact").textContent = `${profileData.contact}`;
    item.querySelector(".address").textContent = `${profileData.address}`;
    item.querySelector("figure.user-img img").setAttribute("src", `${profileData.picture}`);

    profileListWrapper.append(item); // Add the new card in the HTML
  }
}

const RANDOM_USER_URL = "https://randomuser.me/api/1.3/?results=10";

(function getRandomProfiles(gender){
  fetch(RANDOM_USER_URL)
  .then(response => response.json())
  .then(data => {
    generateProfileCard(data.results);
    profileListWrapper.removeChild(loadingSpinner);  // Remove the loading spinner
  })
  .catch(error => {
    const errorMsg = "Sorry :( an error occurred, please refresh the site.";
    loadingSpinner.querySelector("p.loading-info").textContent = errorMsg;
  });
})();
