window.onload = loginLoad;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
const password = urlParams.get('password')



function loginLoad()
{
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin()
{
	if (document.forms["myLogin"]["username"].value == username)
	{
		if (document.forms["myLogin"]["password"].value == password)
		{
			alert("Welcome");
		}		
		else
		{
			alert ("Wrong password");
			return false;
		}	
	}
	else
	{
		alert ("no user")
		return false;
	}
}

			