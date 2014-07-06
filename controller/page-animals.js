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
});
