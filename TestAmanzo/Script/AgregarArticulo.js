var functions = require('functions');
//USEUNIT functions

let url = "https://www.amazon.com/";

function main()
{
  IniciarBrowser(url);
  waitSeg(1);
//  ponerTexto("twotabsearchtextbox","input","PlayStation 4");
  setText("//input[@id='twotabsearchtextbox']","PlayStation 4");
  Delay(1000);
  darClick("//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']");
  waitSeg(5);
  darClick("//input[@id='add-to-cart-button']");
  
  darClickLink("PlayStation 4");


}

