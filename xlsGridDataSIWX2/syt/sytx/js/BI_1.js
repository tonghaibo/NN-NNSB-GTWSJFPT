
// 设置主题(default grid grid-light gray dark-blue dark-green dark-unica sand-signika)
function SetThreme(SHOWFLAG)
{
	var rethtml= "";
	if(SHOWFLAG=="grid")
		ThremeGrid();
	else  if(SHOWFLAG=="grid-light")
		ThremeGridlight();	
	else  {
		Highcharts.theme = {};
		Highcharts.setOptions(Highcharts.theme);
	}
}
// 主题grid-light
function ThremeGridlight()
{
		Highcharts.createElement('link', {
			href: 'http://fonts.googleapis.com/css?family=Dosis:400,600',
			rel: 'stylesheet',
			type: 'text/css'
		}, null, document.getElementsByTagName('head')[0]);
		
		Highcharts.theme = {
			colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
				"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
			chart: {
				backgroundColor: null,
				style: {
					fontFamily: "Dosis, sans-serif"
				}
			},
			title: {
				style: {
					fontSize: '16px',
					fontWeight: 'bold',
					textTransform: 'uppercase'
				}
			},
			tooltip: {
				borderWidth: 0,
				backgroundColor: 'rgba(219,219,216,0.8)',
				shadow: false
			},
			legend: {
				itemStyle: {
					fontWeight: 'bold',
					fontSize: '13px'
				}
			},
			xAxis: {
				gridLineWidth: 1,
				labels: {
					style: {
						fontSize: '12px'
					}
				}
			},
			yAxis: {
				minorTickInterval: 'auto',
				title: {
					style: {
						textTransform: 'uppercase'
					}
				},
				labels: {
					style: {
						fontSize: '12px'
					}
				}
			},
			plotOptions: {
				candlestick: {
					lineColor: '#404048'
				}
			},
		
		
			// General
			background2: '#F0F0EA'
			
		};
		
		// Apply the theme
		Highcharts.setOptions(Highcharts.theme);

}
function ThremeGrid()
{
	Highcharts.theme = {
	colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(240, 240, 255)']
			]
		},
		borderWidth: 2,
		plotBackgroundColor: 'rgba(255, 255, 255, .9)',
		plotShadow: true,
		plotBorderWidth: 1
	},
	title: {
		style: {
			color: '#000',
			font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#666666',
			font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#000',
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'

			}
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		lineColor: '#000',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},

	navigation: {
		buttonOptions: {
			theme: {
				stroke: '#CCCCCC'
			}
		}
	}
	};
	
	// Apply the theme
	var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

}