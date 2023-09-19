window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm")
    form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"]
    var repassword = document.forms["myForm"]["repassword"]

    if (password.value != repassword.value)
    {
        document.getElementById("errormsg").innerHTML = "password ไม่ตรงกัน";
        return false;
    }

}   

