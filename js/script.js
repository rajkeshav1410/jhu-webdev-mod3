var active = true;
document.getElementById("toggle-button").onclick = function() {
	if(active) {
		document.getElementById("line-1").classList.add("line-1-active");
		document.getElementById("line-2").classList.add("line-2-active");
		document.getElementById("line-3").classList.add("line-3-active");

		document.getElementById("line-1").classList.remove("line-1-disable");
		document.getElementById("line-2").classList.remove("line-2-disable");
		document.getElementById("line-3").classList.remove("line-3-disable");
		active = false;
	}

	else {
		document.getElementById("line-1").classList.add("line-1-disable");
		document.getElementById("line-2").classList.add("line-2-disable");
		document.getElementById("line-3").classList.add("line-3-disable");

		document.getElementById("line-1").classList.remove("line-1-active");
		document.getElementById("line-2").classList.remove("line-2-active");
		document.getElementById("line-3").classList.remove("line-3-active");
		active = true;
	}
};