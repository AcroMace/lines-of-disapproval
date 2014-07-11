App.controller('home', function (page) {
	var os = kik.utils.platform.os.name;
	window.onload = function() {
		if (os === 'android') {
			document.getElementById("smiley-bar").innerHTML="You have an Android phone. A lot of the smileys will be broken, sorry!";
		} else {
			document.getElementById("smiley-bar").innerHTML="ᕕ( ᐛ )ᕗ";
		}
	};
});
