App.controller('page-memes', function (page) {
	$(page).find('#button-meme-1').click(function () {
		kik.send({
			title: '¯\\_(ツ)_/¯'
		});
	});
	$(page).find('#button-meme-2').click(function () {
		kik.send({
			title: 'ヽ༼ຈل͜ຈ༽ﾉ'
		});
	});
	$(page).find('#button-meme-3').click(function () {
		kik.send({
			title: '(•_•)'
		});
	});
	$(page).find('#button-meme-4').click(function () {
		kik.send({
			title: '( •_•)>⌐■-■'
		});
	});
	$(page).find('#button-meme-5').click(function () {
		kik.send({
			title: '(⌐■_■)'
		});
	});
	$(page).find('#button-meme-6').click(function () {
		kik.send({
			title: '(╯°□°）╯︵ ┻━┻'
		});
	});
	$(page).find('#button-meme-7').click(function () {
		kik.send({
			title: '┬─┬ノ( º _ ºノ)'
		});
	});
});
