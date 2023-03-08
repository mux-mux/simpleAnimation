const btn = document.querySelector('.btn');

function animateBox() {
	const box = document.querySelector('.box');
	let pos = 0;
	id = setInterval(frame, 10);

	function frame() {
		if (pos === 300) {
			clearInterval(id);
		} else {
			pos++;
			box.style.top = `${pos}px`;
			box.style.left = `${pos}px`;
		}
	}
}

btn.addEventListener('click', animateBox);