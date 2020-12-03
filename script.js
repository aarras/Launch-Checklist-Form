// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const destination = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         destination.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`; 
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      //alert(typeof pilotNameInput.value);
      if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
      } else if(isNaN(pilotNameInput.value) == false || isNaN(copilotNameInput.value) == false) {
         alert("Name fields cannot be numbers.");
      } else if (isNaN(fuelLevelInput.value) == true) {
         alert("Fuel and Cargo fields must be numbers.");
         } else {
         document.getElementById("faultyItems").style.visibility = "hidden";
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready`;
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         if (fuelLevelInput.value < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("fuelStatus").innerHTML = "Fuel level not high enough for launch"
            event.preventDefault();
         }
         if (cargoMassInput.value > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
         }
      }
      event.preventDefault();
   });
});
