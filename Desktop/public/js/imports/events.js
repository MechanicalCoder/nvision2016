'use strict';

var Dataset = function(len) {
	var ds = [];
	for (var i = 0; i < len; i++) {
		ds.push(1);
	}

	return ds;
}

var colors = [
		'#E1F5FE',
		'#B3E5FC',
		'#81D4FA',
		'#4FC3F7',
		'#29B6F6',
		'#03A9F4',
		'#039BE5',
		'#0288D1',
		'#0277BD',
		'#01579B'
];

var names = [{
	name: 'torque',
	url: '#/events/torque'
}, {
	name: 'equilibria',
	url: '#/events/equilibria'
}, {
	name: 'infero',
	url: '#/events/infero'
}, {
	name: 'kludge',
	url: '#/events/kludge'
}, {
	name: 'quiz'
}, {
	name: 'cepheid',
	url: '#/events/cepheid'
}, {
	name: 'robotics',
	url: '#/events/robotics'
}, {
	name: 'electronika',
	url: '#/events/electronika'
}, {
	name: 'e-cell',
	url: '#/events/e-cell'
}, {
	name: 'infi'
}];

var domainImages = [
	"/img/domains/torque.gif",
	"/img/domains/equilibiria.png",
	"/img/domains/infero.png",
	"/img/domains/kludge.gif",
	"/img/domains/quiz.png",
	"/img/domains/cepheid.gif",
	"/img/domains/robotics.png",
	"/img/domains/electronika.png",
	"/img/domains/ecell.gif",
	"/img/domains/infi.png"
]

var EventNames = [];

EventNames[0] = [{
	name: 'Drift King',
	url: "#/events/torque/driftking"
}, {
	name: 'Mine Strife',
	url: "#/events/torque/minestrife"
}, {
	name: 'CadPro',
	url: "#/events/torque/cadpro"
}, {
	name: 'Back',
	url: "#/events"
}];

EventNames[1] = [{
	name: 'Bridge Builder',
	url: "#/events/equilibria/bridgebuilder"
}, {
	name: 'Make It Green'
}, {
	name: 'Structural Case Study'
}, {
	name: 'Back',
	url: "#/events"
}];

EventNames[2] = [{
	name: 'Code-a-Bot'
}, {
	name: 'Hello World',
	url: "#/events/infero/helloworld"
}, {
	name: 'Pro Quest',
	url: "#/events/infero/proquest"
}, {
	name: 'Algorithma',
	url: "#/events/infero/algorithma"
}, {
	name: 'Back',
	url: "#/events"
}];

EventNames[3] = [{
	name: 'GotRoot',
	url: "#/events/kludge/gotroot"
}, {
	name: 'Enigma'
}, {
	name: 'Hack a Maze',
	url: "#/events/kludge/hackamaze"
}, {
	name: 'Back',
	url: "#/events"
}]

EventNames[5] = [{
	name: 'Aquanaut',
	url: "#/events/cepheid/aquanaut"
}, {
	name: 'Eureka',
	url: "#/events/cepheid/eureka"
}, {
	name: 'The Galileo Project',
	url: "#/events/cepheid/galelioproject"
}, {
	name: 'Back',
	url: "#/events"
}]

EventNames[6] = [{
	name: 'Robowars',
	url: "#/events/robotics/robowars"
}, {
	name: 'Robosoccer',
	url: "#/events/robotics/robosoccer"
}, {
	name: 'Arcade Run',
	url: "#/events/robotics/arcaderun"
}, {
	name: 'Find The Bug'
}, {
	name: 'Back',
	url: "#/events"
}]

EventNames[7] = [{
	name: 'Battle of Breadboards',
	url: "#/events/electronika/bob"
}, {
	name: 'DTMF Race',
	url: "#/events/electronika/dtmf"
}, {
	name: 'Electronics Bloopers',
	url: "#/events/electronika/elecbloopers"
}, {
	name: 'Elixir of Electricity',
	url: "#/events/electronika/elixir"
}, {
	name: 'Back',
	url: "#/events"
}]

EventNames[8] = [{
	name: 'Business Simulation Game',
	url: "#/events/e-cell/bsg"
}, {
	name: 'Crowd Pitch',
	url: "#/events/e-cell/crowdpitch"
}, {
	name: 'Back',
	url: "#/events"
}]

var EventImages = [];

EventImages[0] = [
	'/img/eventicons/torque/driftking.png',
	'/img/eventicons/torque/minestrife.png',
	'/img/eventicons/torque/cadpro.png',
	'img/eventicons/back.png'
];

EventImages[1] = [
	'/img/eventicons/equilibria/bridgebuilder.png',
	'/img/eventicons/equilibria/green.png',
	'/img/eventicons/equilibria/building.png',	
	'img/eventicons/back.png'
]

EventImages[2] = [
	'/img/eventicons/infero/cab.png',
	'/img/eventicons/infero/hw.png',
	'/img/eventicons/infero/pq2.png',
	'/img/eventicons/infero/ag.png',
	'img/eventicons/back.png'
]

EventImages[3] = [
	'/img/eventicons/kludge/gotroot.png',
	'/img/eventicons/kludge/enigma.png',
	'/img/eventicons/kludge/hackamaze.png',
	'img/eventicons/back.png'
]

EventImages[5] = [
	'/img/eventicons/cepheid/aquanaut.png',
	'/img/eventicons/cepheid/eureka.png',
	'/img/eventicons/cepheid/galileoproject.png',
	'img/eventicons/back.png'
]

EventImages[6] = [
	'/img/eventicons/robotics/robowars.png',
	'/img/eventicons/robotics/soccer.png',
	'/img/eventicons/robotics/ar.png',
	'/img/eventicons/robotics/findthebug.png',
	'img/eventicons/back.png'
]

EventImages[7] = [
	'/img/eventicons/electronika/breadboard.png',
	'/img/eventicons/electronika/dtmf.png',
	'/img/eventicons/electronika/eb.png',
	'/img/eventicons/electronika/ee.png',
	'img/eventicons/back.png'
]

EventImages[8] = [
	'/img/eventicons/ecell/business.png',
	'/img/eventicons/ecell/crowd.png',
	'img/eventicons/back.png'
]

var width = document.querySelector('.chart-wrapper').offsetWidth;
var height = document.querySelector('.chart-wrapper').offsetHeight;
var minOfWH = Math.min(width, height) / 2;
var initialAnimDelay = 300;
var arcAnimDelay = 150;
var arcAnimDur = 3000;
var secDur = 1000;
var secIndividualdelay = 150;
var radius = undefined;

if (minOfWH > 400) {
		radius = 400;
} else {
		radius = minOfWH;
}


var svg = d3.select('.chart-wrapper').append('svg').attr({
		'width': width,
		'height': height,
		'class': 'pieChart'
}).append('g');

var defs = svg.append('svg:defs');

svg.attr({ 'transform': 'translate(' + ((width / 2)+ 30) + ', ' + height / 2 + ')' });
var arc = d3.svg.arc().outerRadius(radius * 0.6).innerRadius(radius * 0.45);
var outerArc = d3.svg.arc().innerRadius(radius * 0.85).outerRadius(radius * 0.85);
var pie = d3.layout.pie().value(function (d) {
		return d;
});

var insideDonut = svg.append('g');
	insideDonut.append('circle').attr('r', radius*0.45)
	.attr('fill', '#171d25');

var draw = function draw(colors, names, images, scale, EventNames) {
	var donutImage = insideDonut
	.append('image')
	.attr('class', 'centerImage')
	.attr("xlink:href", "/img/domains/logocircular.png")
	.attr('x', -radius*0.45)
	.attr('y', -radius*0.45)
	.attr("width", radius*0.9)
	.attr("height", radius*0.9);

	var dataset = Dataset(names.length);

	svg.append('g').attr('class', 'lines');
	svg.append('g').attr('class', 'slices');
	svg.append('g').attr('class', 'labels');
	var slice = svg.select('.slices').datum(dataset).selectAll('path').data(pie);
	slice.enter().append('path').attr({
			'fill': function fill(d, i) {
					return colors[i];
			},
			'd': arc,
			'stroke-width': '25px'
	}).attr("class", "slice")
	.on('mouseover', function(d, i) {
		donutImage
		.attr('x', -radius*scale)
		.attr('y', -radius*scale)
		.attr("width", radius*scale*2)
		.attr("height", radius*scale*2)
		.attr("xlink:href", function() {
			return images[i];
		})
	}).on('click', function(d, i) {
		if (names[i].url) {
			return window.location = names[i].url
		} else {
			return alert("Details will be uploaded soon")
		}

	}).attr("id", function(d, i) {
		return names[i].name.toLower;
	}).attr('transform', function (d, i) {
			return 'rotate(-180, 0, 0)';
	}).style('opacity', 0).transition().delay(function (d, i) {
			return i * arcAnimDelay + initialAnimDelay;
	}).duration(arcAnimDur).ease('elastic').style('opacity', 1).attr('transform', 'rotate(0,0,0)');
	slice.transition().delay(function (d, i) {
			return arcAnimDur + i * secIndividualdelay;
	}).duration(secDur).attr('stroke-width', '5px');
	
	var midAngle = function midAngle(d) {
			return d.startAngle + (d.endAngle - d.startAngle) / 2;
	};
	
	var text = svg.select('.labels').selectAll('text').data(pie(dataset));
	text.enter().append('text').attr("class", "label").attr('dy', '0.35em').style('opacity', 1).style('fill', 'white').style('cursor', 'pointer').text(function (d, i) {
			return names[i].name;
	})
	.on('mouseover', function(d, i) {
		donutImage
		.attr('x', -radius*scale)
		.attr('y', -radius*scale)
		.attr("width", radius*scale*2)
		.attr("height", radius*scale*2)
		.attr("xlink:href", function() {
			return images[i];
		})
	}).on('click', function(d, i) {
		if (names[i].url) {
			return window.location = names[i].url
		} else {
			return alert("Details will be uploaded soon")
		}
	}).attr('transform', function (d) {
			var pos = outerArc.centroid(d);
			pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
			return 'translate(' + pos + ')';
	}).style('text-anchor', function (d) {
			return midAngle(d) < Math.PI ? 'start' : 'end';
	}).transition().delay(function (d, i) {
			return arcAnimDur + i * secIndividualdelay;
	}).duration(secDur).style('opacity', 1);
	
	var polyline = svg.select('.lines').selectAll('polyline').data(pie(dataset));
	polyline.enter().append('polyline').style('opacity', 0.5).attr('points', function (d) {
			var pos = outerArc.centroid(d);
			pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
			return [
					arc.centroid(d),
					arc.centroid(d),
					arc.centroid(d)
			];
	}).transition().duration(secDur).delay(function (d, i) {
			return 10 + i * secIndividualdelay;
	}).attr('points', function (d) {
			var pos = outerArc.centroid(d);
			pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
			return [
					arc.centroid(d),
					outerArc.centroid(d),
					pos
			];
	});	
};

var drawMain = function() {
	replay(colors, names, domainImages, 0.35, EventNames);	
}

var replay = function replay(colors, names, domainImages, scale, EventNames) {
	d3.selectAll('.slices').transition().ease('back').duration(500).delay(0).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();
	d3.selectAll('.lines').transition().ease('back').duration(500).delay(100).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();
	d3.selectAll('.labels').transition().ease('back').duration(500).delay(200).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();
	d3.selectAll('.centerImage').transition().ease('back').duration(500).delay(200).style('opacity', 0).attr('transform', 'translate(0, 250)').remove();
	setTimeout(function() {
		draw(colors, names, domainImages, scale, EventNames);
	}, 800);
};

