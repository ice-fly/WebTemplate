var navLinks = document.querySelectorAll('nav > div > a');
var sects = document.getElementsByTagName('section');
var SectIdTonavLink = {};

for (var i = sects.length-1; i >= 0; i--) {
	var id = sects[i].id;
	SectIdTonavLink[id] = document.querySelectorAll('nav > div > a[href=\\#' + id + ']') || null;
}

function navToggle(x) {
    if (x.className === "nav") {
        x.className += " expanded";
    } else {
        x.className = "nav";
    }
}

function throttle(fn, interval) {
	var lastCall, timeoutId;
	return function () {
		var now = new Date().getTime();
		if (!(lastCall && now < (lastCall + interval))) {
			lastCall = now;
			fn.call();
		}
	};
}

async function activateNav() {
	var scrollPosition = document.documentElement.scrollTop;
	var clientHeight = document.documentElement.clientHeight;
	for (var i = sects.length-1; i >= 0; i--) {
		var currentSect = sects[i];
		if (SectIdTonavLink[currentSect.id].length!=0){
			if ((clientHeight+3 >= currentSect.getBoundingClientRect().top)&&((clientHeight/10)-3 <= currentSect.getBoundingClientRect().bottom)) {
				//console.log("scrollPosition: %f.2 \t top: %d \t bottom: %d \t bool: %s",scrollPosition,currentSect.getBoundingClientRect().top,currentSect.getBoundingClientRect().bottom,((clientHeight+3 >= currentSect.getBoundingClientRect().top)&&((clientHeight/10)-3 <= currentSect.getBoundingClientRect().bottom)))
				SectIdTonavLink[currentSect.id][0].className = ('active');
			} else {
				navLinks[i].className = navLinks[i].className.replace(/active/, '');
			}
		}
	}
}

activateNav()
document.getElementsByTagName('main')[0].addEventListener('scroll',throttle(activateNav,180));