var app = {
	device: {
		isMobile: (function() {
			if ( navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)
			) {
				return true;
			} else {
				return false;
			}
		}()),
		isSafari: (function() {
			return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		}()),
		isChrome: (function() {
			return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		}()),
		isIE: (function() {
			return /(MSIE|Trident|Edge)/.test(navigator.userAgent);
		}())
	}
};

