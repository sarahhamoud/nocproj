function myFunction() {
    var x = document.getElementById("dod");
    if (x.type === "password") {
      x.type = "text";
    }
    else {
      x.type = "password";
    }
  }
  function testnum(){
    var num = document.getElementById("dod");
    var now = num.value;
    if (now === "IT1540")
    {
    
 document.getElementById('id01').style.display='block';
  }
  else{
window.alert(" EROOR Pasword   يرجى المحاولة مجددا");
  }
}
