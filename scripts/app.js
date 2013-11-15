(function() {

	var init = function(e, animateLoad) {

		var alertTimeoutId;
		var feedbackAlert = document.querySelector('.alert');

		// Alerts
		var showAlert = function() {
			window.clearTimeout(alertTimeoutId);
			feedbackAlert.classList.add('visible');
			alertTimeoutId = window.setTimeout(function() {
				this.classList.remove('visible', 'alert-negative', 'alert-positive');
			}.bind(feedbackAlert), 2000);
		};

		// Sliders
		[].forEach.call( document.querySelectorAll('.recommendations .slider'), function(el) {
			el.addEventListener('slide', function(e) {

				if (e.detail.direction === 'left') {
					this.classList.add('passed');
					this.classList.remove('fade-in');
					feedbackAlert.innerText = 'NOPE';
					feedbackAlert.classList.remove('alert-positive');
					feedbackAlert.classList.add('alert-negative');
					showAlert();

				} else if (e.detail.direction === 'right') {
					this.classList.add('liked');
					this.classList.remove('fade-in');
					feedbackAlert.innerText = 'LIKED';
					feedbackAlert.classList.remove('alert-negative');
					feedbackAlert.classList.add('alert-positive');
					showAlert();

				} else {
					return;
				}

				if (this.previousElementSibling) {
					this.previousElementSibling.classList.add('fade-in');
				}
			}.bind(el));
		});

		// Signup
		var signupCtrl = document.querySelector('.signup-ctrl');

		if (signupCtrl) {

			if (animateLoad) {
				setTimeout(function() {
					this.classList.add('visible');
				}.bind(signupCtrl), 3000);
			} else {
				signupCtrl.classList.add('visible');
			}

			var girlsToggle = document.querySelector('.signup-ctrl .girls');
			var boysToggle = document.querySelector('.signup-ctrl .boys');
			var signupButton = document.querySelector('.signup-ctrl .button-primary');

			girlsToggle.addEventListener('click', function() {
				signupButton.href = '/girls.html';
			});

			boysToggle.addEventListener('click', function() {
				signupButton.href = '/boys.html';
			});
		}
	}

	window.addEventListener('push', init);
	init(null, true);

})();