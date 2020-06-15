// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("worldChart");
var worldChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Confirmed", "Deaths", "Recovered"],
    datasets: [{
      data: [],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});


getData();

function getData() {
  
	
	var data_url = "https://api.covid19api.com/world/total";
	console.log("fetching data from url " + data_url);
  
  $.ajax({
    url: data_url,
    success: function(data) {
   
	  var json_data = [];
	  json_data.push(data['TotalConfirmed']);
	  json_data.push(data['TotalDeaths']);
	  json_data.push(data['TotalRecovered']);
	  	  
	  console.log("json data "+json_data);
	  
      worldChart.data.datasets[0].data = json_data;

      worldChart.update();
    }
  });
}


//setInterval(getData, 10000);
