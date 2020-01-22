var functions = require('functions');
//USEUNIT functions

let url = "https://www.amazon.com/";

function main()
{
  IniciarBrowser(url);
  waitSeg(1);
  ponerTexto("//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']","PlayStation 4");
  //darClick("nav-input","input");
  darClick("//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']");
  waitSeg(5);
  
  darClickLink("PlayStation 4");


}

