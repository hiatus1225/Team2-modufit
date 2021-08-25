function categoryChange(e) {
    var d;
    var target = document.getElementById("name");
    var gender = document.getElementById('gender').value;
    var name_men = ["홍길동","어린왕자","심봉사"];
    var name_women = ["춘향", "콩쥐", "팥쥐", "신데렐라"];
    
        if(e.value == "men") d = name_men;
        else if(e.value == "women") d = name_women;
    target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}
}

function button01_click(){

    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    var name = document.getElementById('name').value;
    var time = document.getElementById('time').value;

    var count = localStorage.length+1;
    console.log(count);

    var applykey = '__apply__' + count;
    var userInfo = {
        date: date,
        gender: gender,
        name: name,
        time: time
    };
    console.log(userInfo);
    localStorage.setItem(applykey, JSON.stringify(userInfo));

}

localStorage.setItem(document.getElementById('date').value, document.getElementById('date').value);

