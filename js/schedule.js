

function selectCell(selected){
    var id = selected.id;
    
    var selectedCell = document.getElementById(id);
    // alert(id);
    selectedCell.innerText = prompt("메모할 내용을 입력해 주세요.","");
   
    var managerkey = '__manager__' + manager;


    var content = selectedCell.innerText;

    var managerInfo = {
    manager:manager,
    id:id,
    content:content


}


console.log(managerInfo);

localStorage.setItem(managerkey, JSON.stringify(managerInfo));


}
//------------------------------------------------------------------





