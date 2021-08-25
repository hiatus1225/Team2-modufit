
function categoryChange(e) {
	var name_men = ["홍길동","어린왕자","심봉사"];
	var name_women = ["춘향", "콩쥐", "팥쥐", "신데렐라"];
	var target = document.getElementById("name");

	if(e.value == "men") var d = name_men;
	else if(e.value == "women") var d = name_women;
	
    target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}
}

