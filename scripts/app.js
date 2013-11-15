[].forEach.call( document.querySelectorAll('.slider'), function(el) {
	el.addEventListener('slide', function(e) {
		if (e.detail.direction === 'left') {
			this.classList.add('passed');
			this.classList.remove('fade-in');
		} else if (e.detail.direction === 'right') {
			this.classList.add('liked');
			this.classList.remove('fade-in');
		} else {
			return;
		}
		if (this.previousElementSibling) {
			this.previousElementSibling.classList.add('fade-in');
		}
	}.bind(el));
});