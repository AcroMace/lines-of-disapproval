App.controller('page-animals', function (page) {
	$(page).find('#button-animal-1').click(function () {
		kik.send({
			title: 'ʕ•ᴥ•ʔ'
		});
	});
	$(page).find('#button-animal-2').click(function () {
		kik.send({
			title: 'ฅ^•ﻌ•^ฅ'
		});
	});
	$(page).find('#button-animal-3').click(function () {
		kik.send({
			title: '^오^'
		});
	});
	$(page).find('#button-animal-4').click(function () {
		kik.send({
			title: '(ᵔᴥᵔ)'
		});
	});
	$(page).find('#button-animal-5').click(function () {
		kik.send({
			title: '(￣(エ)￣)'
		});
	});
	$(page).find('#button-animal-6').click(function () {
		kik.send({
			title: '(○｀（●●）´○)ﾉ'
		});
	});
});
