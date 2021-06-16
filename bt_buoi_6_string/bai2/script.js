/* get data */
/*
var email = document.getElementById("email").innerHTML;
var pass = document.getElementById("password").innerHTML;
/* <button id="button">submit</button> */
/*
function validateForm() {
    var x = document.forms["myForm"]["femail"].value;
    var y = document.forms["myForm"]["fpass"].value;
    if (x == "" || y == "") {
        return false;
    } return true;
}
function onChangeSubmit() {

    $("#demo").html("<p>Hello World</p>");

}
*/
document.getElementById('email').addEventListener('change',function() {
    document.getElementById("demo").innerHTML = '<button id="button">submit</button>';
    document.getElementById("button").style.display = "none";
});

document.getElementById('password').addEventListener('change',function() {
    document.getElementById("button").style.display = "";
});