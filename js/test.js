(function () {
	"use strict"

	const elm = document.getElementsByClassName('scroll'),
		navUl = document.getElementById('smooth_target'),
		navHeight = navUl.offsetHeight,
		firstDiv = document.getElementById('box_1'),
		duration = 1500,
		easing = (t, b, c, d)=>{
			t /= d;
			t--;
			if (b < 0) {
				return c * Math.sqrt(1 - t * t) + b * -1;
			} else {
				return c * Math.sqrt(1 - t * t) + b;
			}
		};

	let isAnimate = false;

	firstDiv.style.marginTop = navHeight + 'px';

	for (let i = 0; i < elm.length; i++) {
		elm[i].addEventListener('click', function (e) {

			e.preventDefault();

			if (isAnimate === false) {

				isAnimate = true;

				const targ = this.getAttribute('href').substr(1),
					targId = document.getElementById(targ),
					offTop = targId.offsetTop - navHeight,
					winY = window.pageYOffset,
					start = new Date() * 1,

					distance = offTop - pageYOffset,
					id = setInterval(function () {
						let current = new Date() - start,
							Y = easing(current, winY, distance, duration);

						scrollTo(0, Y);
						/*console.log(current);
						console.log(Y);
						console.log(distance);*/

						if (current >= duration || distance === 0) {
							clearInterval(id);
							//1～2pxのズレを調整
							scrollTo(0, offTop);
							isAnimate = false;
							return;
						}
					}, 16);
			}
		}, false);
	}



	window.addEventListener('scroll', function () {

		const p = document.getElementById('scrY');
		let oft = pageYOffset;
		p.innerHTML = oft;
	});

}());
