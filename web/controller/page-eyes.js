App.controller('page-eyes', function (page) {
	$(page).find('#button-eye-1').click(function () {
		kik.send({
			title: 'ಠ_ಠ'
		});
	});
	$(page).find('#button-eye-2').click(function () {
		kik.send({
			title: 'ಠ◡ಠ'
		});
	});
	$(page).find('#button-eye-3').click(function () {
		kik.send({
			title: '◕‿◕'
		});
	});
});
