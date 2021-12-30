//This counts down while preloading content
const URL = "ERPL.SPACE" //Visual URL
const prelinks = [{as:'style',href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"},{as:'document',href:"index.html"},{as:'script',href:"js/ParticlePopper.js"},{as:'image',href:"img/Diamond.png"}]; //Loads for 10sec mark
const pamount = 36; //Particle Amount
const meta = document.getElementsByTagName('meta')[0];
if ((meta.content.split(';',1)!=0)&&isFinite(meta.content.split(';',1))){ //meta check
	var count = meta.content.split(';',1)-1;
	var link; //dummy loader
	var secs = document.getElementById("secs");
	var interval = setInterval(function () {
		count--;
		secs.innerHTML = "Redirecting to "+URL+"...T-" + count;
		switch (count){
			case 0:
				clearInterval(interval);
				secs.classList.remove('animate__repeat-3');
				secs.classList.add('animate__bounceOutUp');
				secs.style.cssText = "animation-duration: 1.2s;";
				secs.innerHTML = "Redirecting to "+URL+"...Liftoff!";
				break;
			case 10:
				for (var i = 0, len=prelinks.length; i < len; i++) {
					PreChildtoHead(prelinks[i]);
				}
				break;
			case 6:
				link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
				document.getElementsByTagName('head')[0].appendChild(link);
				link = document.createElement('script');
				link.type = 'text/javascript';
				link.src = "js/ParticlePopper.js";
				document.getElementsByTagName('head')[0].appendChild(link);
				break;
			case 5:
				secs.classList.add('animate__animated', 'animate__shakeX', 'animate__repeat-3');
				secs.style.cssText = "animation-duration: 2s;";
				break;
		}
		if (count<6) {
			for (let i = 0; i < pamount-count; i++) {
				createParticle(secs.offsetLeft+(secs.offsetWidth/2), secs.offsetTop+(secs.offsetHeight/2));
			}
		}
	}, 1000);
	function PreChildtoHead(prelink){
		console.log(prelink)
		link = document.createElement('link');
		link.rel = 'preload';
		link.as = prelink.as;
		link.href = prelink.href;
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	console.log('Detected refresh rate of:'+meta.content.split(';',1))
} else {console.warn('Refresher meta broke:'+meta);}
//Written by Alexander L. 2020