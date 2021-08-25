function button1_click(){

    var name = document.getElementById('name').value;
    // localStorage.setItem("name", ui1)
    var contact = document.getElementById('contact').value;
    // localStorage.setItem("contact", ui2)
    var id = document.getElementById('id').value;
    // localStorage.setItem("user", ui3)
    var pw = document.getElementById('pw').value;
    // localStorage.setItem("pw", ui4)
    var age = document.getElementById('age').value;
    // localStorage.setItem("age", ui5)
    var gender = document.getElementById('gender').value;
    // localStorage.setItem("gender", ui6)

    // console.log(ui, ui2, ui3, ui4, ui5, ui6);
    var userkey = '__user__' + id;
    var userInfo = {
      name: name,
      contact: contact,
      id: id,
      pw: pw,
      age: age,
      gender: gender,
      rank:1
    };
    console.log(userInfo);
    localStorage.setItem(userkey, JSON.stringify(userInfo));
    // -----
    location.href="login.html";
  }
  localStorage.setItem(document.getElementById('name').value, document.getElementById('name').value);
  