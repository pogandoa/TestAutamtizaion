var functions = require('functions');
let url = "http://www.amazon.com";

function main()
{
  functions.IniciarBrowser(url);

  functions.setText(url,"//input[@id='twotabsearchtextbox']","mundo");
  
}