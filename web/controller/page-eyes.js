App.controller('page-eyes', function (page) {
	$(page).find('#button-eye-1').click(function () {
		kik.send({
			title: 'ಠ_ಠ'
			// text: 'ಠ_ಠ'
		});
	});
});
