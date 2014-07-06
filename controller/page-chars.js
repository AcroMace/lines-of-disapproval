App.controller('page-chars', function (page) {
	$(page).find('#button-char-1').click(function () {
		kik.send({
			title: '| (• ◡•)|'
		});
	});
	$(page).find('#button-char-2').click(function () {
		kik.send({
			title: '(❍ᴥ❍ʋ)'
		});
	});
	$(page).find('#button-char-3').click(function () {
		kik.send({
			title: '(V) (;,,;) (V)'
		});
	});
	$(page).find('#button-char-4').click(function () {
		kik.send({
			title: 'ᶘ ᵒᴥᵒᶅ'
		});
	});
});
