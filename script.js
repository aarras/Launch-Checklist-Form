// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
      } else {
         document.getElementById("faultyItems").style.visibility = "hidden";
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


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
