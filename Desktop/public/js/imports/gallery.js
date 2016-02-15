media = {
	"media": [
		{
			"id": "media01",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img1.jpg"
		},
		{
			"id": "media02",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img2.jpg"
		},
		{
			"id": "media03",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img3.jpg"
		},
		{
			"id": "media04",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img4.jpg"
		},
		{
			"id": "media05",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img5.jpg"
		},
		{
			"id": "media06",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img6.jpg"
		},
		{
			"id": "media07",
			"type": "image",
			"url": "http://gouthamve.github.io/nvision/img/img7.jpg"
		},
		{
			"id": "media08",
			"type": "image",
			"url": "/img/gallery/im1.jpg"
		},
		{
			"id": "media09",
			"type": "image",
			"url": "/img/gallery/im2.jpg"
		},
		{
			"id": "media12",
			"type": "image",
			"url": "/img/gallery/im5.jpg"
		},
		{
			"id": "media13",
			"type": "image",
			"url": "/img/gallery/im6.jpg"
		},
		{
			"id": "media14",
			"type": "image",
			"url": "/img/gallery/im7.jpg"
		}
	]
}

function App() {
	var self = this;

	// this.feedUrl			= "json/media.json";
	this.debug = true;
	this.cellElement = null;
	this.window = $(window);
	this.grid = $("#grid");
	this.fadeOutMs = 500;
	this.unFoldMs = 300;
	this.preloader = $("#preloader");
	this.veil = $("#veil");
	this.currentMedia = null;

// initialize
	this._init = function() {

		// load media feed
		self.loadFeed(function(d) {

			// add elements to the DOM
			self.addToDOM(d);

			self.cellElement = $(".cell");
			self.window.on('resize', self.resizeHandler).resize();

			// hide loader and show grid
			self.preloader.addClass('o');
			window.setTimeout(function() {
				self.grid.addClass('loaded');
			}, self.fadeOutMs);
		});

// prepare pop state to load medias
		window.onpopstate = function(e) {
			if (e.state) self.loadMedia(e.state);
		}

		// click on veil will close the current media
		self.veil.on('click', function(e) {
			e.preventDefault();
			if (self.currentMedia) self.closeMedia(self.currentMedia);
		});

		// hotkeys
		$(document).on('keydown', function(event) {
			switch (event.keyCode) {
				// ESC
				case 27:
					// close the current media
					if (self.currentMedia != null) self.closeMedia(self.currentMedia);
					return false;
			}
		});
	}

	// load media.json
	this.loadFeed = function(callback) {
		callback(media);
	}

	// add media elements to the DOM
	this.addToDOM = function(d) {
		var htmlImage = '<a href="#" class="cell image" data-id-media="{id-media}"><div class="detail"><div class="close"><span></span></div><div class="image-detail"></div><div class="tl"></div><div class="bl"></div><div class="tr"></div></div><div class="info"><div class="w"><img src="img/zoom.png" height="30" width="30"></div></div><div class="image"><img src="{img-src}"></div></a>',
			nroMedia = d.media.length;

	$.each(d.media, function(i, v) {
		self.grid.append(htmlImage.replace('{img-src}', v.url).replace('{id-media}', v.id));

		// moving the detail view if media element is at the end of the grid
		if ((i + 1) % 5 == 0) $("a[data-id-media='" + v.id + "']").find('.detail:first').addClass('l');
		if (i >= (nroMedia - 5)) $("a[data-id-media='" + v.id + "']").find('.detail:first').addClass('t');

		// event to load media
		$("a[data-id-media='" + v.id + "']").on('click', function(e) {
			e.preventDefault();
			self.loadMedia(v);
		});

		// doesn't show the image until it's fully loaded, and then will fade in.
		self.grid.find("img:last").on('load', function() {
			$(this).closest('a.cell').addClass("loaded");
			window.setTimeout(function() {
				$(this).closest('a.cell').addClass('no-bg');
			}, self.fadeOutMs);
		})
	});

}

// load media and set push state
this.loadMedia = function(m) {
	if (m.id != self.currentMedia) {
		self.openMedia(m);
	} else {
		if (self.currentMedia != null) self.closeMedia(self.currentMedia);
	}
}

// open a media element
this.openMedia = function(m) {
	var $cellMedia = $("a[data-id-media='" + m.id + "']"),
		$detail = $cellMedia.find('.detail'),
		htmlImage = '<img src="{img-src}" />',
		waitForIt = 0;

	// if a media element is open will close it first
	if (self.currentMedia != null) {
		self.closeMedia(self.currentMedia);
		waitForIt = (self.unFoldMs * 2) + (self.fadeOutMs * 2);
	}

	window.setTimeout(function() {
		// if press back button in browser it will scroll to the position of the media element
		$('body, html').animate({
			scrollTop: $cellMedia.offset().top - 100
		}, 600);

		$detail.find('.image-detail:first').append(htmlImage.replace('{img-src}', m.url));
		$cellMedia.addClass('ov');
		$detail.addClass('open o');
		self.veil.addClass('o');
		self.currentMedia = m.id;
	}, waitForIt);
}

// close a media element
this.closeMedia = function(m) {
	var $cellMedia = $("a[data-id-media='" + m + "']"),
		$detail = $cellMedia.find('.detail');

	$detail.addClass('close');
	window.setTimeout(function() {
		$detail.removeClass('open close o');
		$detail.find('.image-detail:first').html('');
		self.currentMedia = null;
	}, (self.unFoldMs * 2) + (self.fadeOutMs * 2));

	window.setTimeout(function() {
		self.veil.removeClass('o');
	}, self.fadeOutMs);
}

// resize handler for fluid grid
this.resizeHandler = function() {
	var c = 0,
		r = 0,
		widthCell = Math.ceil(self.window.width() / 5);

	$.each(self.cellElement, function(i, v) {
		$(v).css({
			'top': (r * widthCell),
			'left': (c * widthCell),
			'width': widthCell,
			'height': widthCell
		});
		c++;
		if (c % 3 == 0) {
			c = 0;
			r++;
		}
	});
}
self._init();
}

var Gallery;
