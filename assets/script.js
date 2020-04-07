fetch('https://covid19.mathdro.id/api/countries/India')
	.then(response =>response.json())
	.then(indiaData =>{
		console.log(indiaData.confirmed.value);
		



			am4core.ready(function() {

			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end

			// Create chart instance
			var chart = am4core.create("chartdiv", am4charts.PieChart);

			// Add data
			chart.data = [ {
			  "country": "Deaths",
			  "litres": indiaData.deaths.value
			}, {
			  "country": "Active Cases",
			  "litres": indiaData.confirmed.value-indiaData.recovered.value
			}, {
			  "country": "Recovered",
			  "litres": indiaData.recovered.value
			},  ];

			// Add and configure Series
			var pieSeries = chart.series.push(new am4charts.PieSeries());
			pieSeries.dataFields.value = "litres";
			pieSeries.dataFields.category = "country";
			pieSeries.slices.template.stroke = am4core.color("#fff");
			pieSeries.slices.template.strokeWidth = 2;
			pieSeries.slices.template.strokeOpacity = 1;

			// This creates initial animation
			pieSeries.hiddenState.properties.opacity = 1;
			pieSeries.hiddenState.properties.endAngle = -90;
			pieSeries.hiddenState.properties.startAngle = -90;

			});




	})


	fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ef1183be24ab479eb86043c5069f1371')
			.then(response => response.json())
			.then(data => {
				
						for(var i=1;i<4;i++){
							console.log(data.articles[i-1].title);
						document.getElementById(`card${i}-imagee`).src = data.articles[i].urlToImage;
						document.getElementById(`card-${i}-headinge`).innerHTML = data.articles[i].title;
						document.getElementById(`card-${i}-authore`).innerHTML = data.articles[i].author;
						
					}
				}
				)


			// second country
			fetch('https://covid19.mathdro.id/api/countries/USA')
	.then(response =>response.json())
	.then(usdata =>{
		console.log(usdata.confirmed.value);
		



			am4core.ready(function() {

			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end

			// Create chart instance
			var chart1 = am4core.create("chartdiv2", am4charts.PieChart);

			// Add data
			chart1.data = [ {
			  "country": "Deaths",
			  "litres": usdata.deaths.value
			}, {
			  "country": "Active Cases",
			  "litres": usdata.confirmed.value-usdata.recovered.value
			}, {
			  "country": "Recovered",
			  "litres": usdata.recovered.value
			},  ];

			// Add and configure Series
			var pieSeries1 = chart1.series.push(new am4charts.PieSeries());
			pieSeries1.dataFields.value = "litres";
			pieSeries1.dataFields.category = "country";
			pieSeries1.slices.template.stroke = am4core.color("#fff");
			pieSeries1.slices.template.strokeWidth = 2;
			pieSeries1.slices.template.strokeOpacity = 1;

			// This creates initial animation
			pieSeries1.hiddenState.properties.opacity = 1;
			pieSeries1.hiddenState.properties.endAngle = -90;
			pieSeries1.hiddenState.properties.startAngle = -90;

			});




	})


	fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=ef1183be24ab479eb86043c5069f1371')
			.then(response => response.json())
			.then(data => {
				
						for(var i=1;i<4;i++){
							console.log(data.articles[i-1].title);
						document.getElementById(`card${i}-image`).src = data.articles[i-1].urlToImage;
						document.getElementById(`card-${i}-heading`).innerHTML = data.articles[i-1].title;
						document.getElementById(`card-${i}-author`).innerHTML = data.articles[i-1].author;
						
					}
				}
				)

			


			//Third Country

			// second country
			fetch('https://covid19.mathdro.id/api/countries/Italy')
	.then(response =>response.json())
	.then(italy =>{
		console.log(italy.confirmed.value);
		



			am4core.ready(function() {

			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end

			// Create chart instance
			var chart2 = am4core.create("chartdiv3", am4charts.PieChart);

			// Add data
			chart2.data = [ {
			  "country": "Deaths",
			  "litres": italy.deaths.value
			}, {
			  "country": "Active Cases",
			  "litres": italy.confirmed.value-italy.recovered.value
			}, {
			  "country": "Recovered",
			  "litres": italy.recovered.value
			},  ];

			// Add and configure Series
			var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
			pieSeries2.dataFields.value = "litres";
			pieSeries2.dataFields.category = "country";
			pieSeries2.slices.template.stroke = am4core.color("#fff");
			pieSeries2.slices.template.strokeWidth = 2;
			pieSeries2.slices.template.strokeOpacity = 1;

			// This creates initial animation
			pieSeries2.hiddenState.properties.opacity = 1;
			pieSeries2.hiddenState.properties.endAngle = -90;
			pieSeries2.hiddenState.properties.startAngle = -90;

			});

			fetch('https://newsapi.org/v2/top-headlines?country=it&apiKey=ef1183be24ab479eb86043c5069f1371')
			.then(response => response.json())
			.then(data => {
				
						for(var i=1;i<4;i++){
							console.log(data.articles[i-1].title);
						document.getElementById(`card${i}-imagei`).src = data.articles[i-1].urlToImage;
						document.getElementById(`card-${i}-headingi`).innerHTML = data.articles[i-1].title;
						document.getElementById(`card-${i}-authori`).innerHTML = data.articles[i-1].author;
						
					}
				}
				)


	})

