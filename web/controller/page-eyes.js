App.controller('page-eyes', function (page) {
	$(page).find('#button-eye-1').click(function () {
		kik.send({
			text: 'ಠ_ಠ'
		});
	});
});
