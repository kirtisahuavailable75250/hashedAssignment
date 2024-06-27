document.addEventListener("DOMContentLoaded", function () {
	fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
	  .then((response) => response.json())
	  .then((data) => {
		// Sort data by NRR in ascending order
		data.sort((a, b) => a.NRR - b.NRR);
  
		// Generate table rows
		const tbody = document.querySelector("tbody");
		data.forEach((team, index) => {
		  const row = document.createElement("tr");
  
		  row.innerHTML = `
			<td>${index + 1}</td>
			<td>${team.Team}</td>
			<td>${team.Matches}</td>
			<td>${team.Won}</td>
			<td>${team.Lost}</td>
			<td>${team.Tied}</td>
			<td>${team.NRR}</td>
			<td>${team.Points}</td>
		  `;
  
		  tbody.appendChild(row);
		});
	  })
	  .catch((error) => console.error("Error fetching data:", error));
  });
  