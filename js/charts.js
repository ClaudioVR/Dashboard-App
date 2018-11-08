
// Line chart --------------------------------------------

		let ctx = document.getElementById('myChart').getContext('2d');
		let chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'line',

			// The data for our dataset
			data: {
				labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
				datasets: [{
					label: "Data set",
					backgroundColor: 'rgba(173, 216, 230, 0.5)',
					borderColor: '#69bfdb',
					data: [5, 10, 5, 20, 20, 30, 45, 60, 55, 45],
					borderWidth: 1,
					pointRadius: 5,
					pointBackgroundColor: 'white',
					lineTension: 0,
				}]
			},

			// Configuration options go here
			options: {
				legend: {
					display: false,
				},
				responsive: true,
    		maintainAspectRatio: false
			}
		});

		// Bar chart --------------------------------------------

		let barChart = document.getElementById('secondChart');
		let myBarChart = new Chart(barChart, {
			type: 'bar',
			data: {
				labels: ["Mon", "Tue", "Wed", "Thrs", "Fri"],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 15, 12, 17, 8, 6,],
					borderWidth: 1,
					backgroundColor: '#7377BF'
				}]
			},
			options: {
				legend: {
					display: false,
				},
				layout: {
        	padding: {
						left: 10,
						right: 10,
						top: 10,
						bottom: 10
           }
        },
				responsive: true,
				maintainAspectRatio: false
			}
		});


		// Pie chart --------------------------------------------

		let pieChart = document.getElementById('thirdChart');
		let myPiechart = new Chart(pieChart, {
			//type of chart
			type: 'doughnut',

			//The data for the dataset
			data: {
				labels: ['Phones', 'Tablets', 'Dessktop'],
				datasets: [{
					label: 'Mobile users',
					data: [70, 15, 15],
					backgroundColor: [
						'#7377BF',
						'#81C98F',
						'#74B1BF'
					],
				}]
			},

			//Configuration options
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: true,
					position: 'right',
					labels: {
						boxWidth: 10,
						padding: 20
					}
				},
				layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }	
			}
		});

// Functions

const hour = document.getElementById('hourBtn');
const day = document.getElementById('dayBtn');
const week = document.getElementById('weekBtn');
const month = document.getElementById('monthBtn');


hour.addEventListener('click', () => {
	chart.data.datasets[0].data= [5, 10, 5, 20, 20, 30, 45, 60, 55, 45];
	chart.update();
});

day.addEventListener('click', () => {
	chart.data.datasets[0].data= [15, 20, 15, 20, 10, 30, 55, 40, 35, 55];
	chart.update();
});

week.addEventListener('click', () => {
	chart.data.datasets[0].data= [25, 60, 55, 40, 20, 20, 15, 20, 30, 35];
	chart.update();
});

month.addEventListener('click', () => {
	chart.data.datasets[0].data= [35, 40, 55, 30, 25, 35, 45, 25, 66, 25];
	chart.update();
});














