var colorArray = ["#DF847E","#F2AC66","#EFDC4B","#77EB4A","#37C8D8","#537EE3","#AF71DF","#E280EB","#FAA7C7","#ED8A99","#D2EEB6","#B1E6D9","#97BBC7","#9D8FA8","#F6DFD1","#D1CFCD","#F7ABF8","#34A04D"];

 

//추가
function reservon() {
    var day = document.getElementById('day');
    if(time.value == '1') {
        var reserv = day.value + timeStart.value;
        var reservID = document.getElementById(reserv);
        reservID.innerHTML = memo.value;
        reservID.style.background = colorArray[i++];
    }
}

// var del = "";

// function colorChange() {
//  //눌러서 삭제하기
 
//  var reserv = day.value + timeStart.value;
//  var reservID = document.getElementById(reserv);
//  reservID.innerHTML = del;
//  reservID.style.background = null;
 
// }


//삭제
function colorChange() {
    var day = document.getElementById('day');
    if(time.value == '1') {
        var reserv = day.value + timeStart.value;
        var reservID = document.getElementById(reserv);
        reservID.innerHTML = null;
        reservID.style.background = null;
    }
}

// 로컬스토리지

function enrollment() {

    var guest = document.getElementById('guest').value;
    var memo = document.getElementById('memo').value;
    var day = document.getElementById('day').value;
    var timeStart = document.getElementById('timeStart').value;
    var time = document.getElementById('time').value;


    console.log(
        guest, 
        memo,
        day,
        timeStart,
        time    
        );

var userkey = '__user__' + guest;

var userInfo = {
guest:guest,
memo:memo,
day:day,
timeStart,
time

}

console.log(userInfo);

localStorage.setItem(userkey, JSON.stringify(userInfo));
}
