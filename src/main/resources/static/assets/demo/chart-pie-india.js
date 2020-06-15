// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("indiaChart");
var indiaChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Confirmed", "Deaths", "Recovered", "Active"],
    datasets: [{
      data: [],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});


getData();

function getData() {
  
	var to = new Date().toISOString().slice(0,10);
	var yesterday = new Date();
	yesterday.setDate(new Date().getDate()-1);
	var from = yesterday.toISOString().slice(0,10);
	var data_url = "https://api.covid19api.com/total/country/india?from="+from+"&to="+to;
	console.log("fetching data from url " + data_url);
  
  $.ajax({
    url: data_url,
    success: function(data) {
   
	  var json_data = [];
	  json_data.push(data[0]['Confirmed']);
	  json_data.push(data[0]['Deaths']);
	  json_data.push(data[0]['Recovered']);
	  json_data.push(data[0]['Active']);
	  
	  console.log("json data "+json_data);
	  
      indiaChart.data.datasets[0].data = json_data;

      indiaChart.update();
    }
  });
}


//setInterval(getData, 10000);
