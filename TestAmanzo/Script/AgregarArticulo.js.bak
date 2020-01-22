var functions = require('functions');
//USEUNIT functions

let url = "https://www.amazon.com/";

function main()
{
  IniciarBrowser(url);
  waitSeg(1);
  ponerTexto("twotabsearchtextbox","input","PlayStation 4");
  //darClick("nav-input","input");
  darClick("//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']");
  waitSeg(5);
  
  darClickLink("PlayStation 4");


}

function Test1()
{

  //Checks whether the 'contentText' property of the Aliases.browser.pageAmazonComPlaystation4.link.textnode object equals 'PlayStation 4'.
  aqObject.CheckProperty(Aliases.browser.pageAmazonComPlaystation4.link.textnode, "contentText", cmpEqual, "PlayStation 4");
  //Clicks the 'textnode' object.
  Aliases.browser.pageAmazonComPlaystation4.link.textnode.Click(53, 10);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageRefSr13.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRefSr13.textnodeProducttitle object equals 'PlayStation 4'.
  aqObject.CheckProperty(Aliases.browser.pageRefSr13.textnodeProducttitle, "contentText", cmpEqual, "PlayStation 4");
  //Clicks the 'buttonAgregarAlCarrito' button.
  Aliases.browser.pageRefSr13.buttonAgregarAlCarrito.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRefSr13.textnode object equals 'Agregado al carrito'.
  aqObject.CheckProperty(Aliases.browser.pageRefSr13.textnode, "contentText", cmpEqual, "Agregado al carrito");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRefSr13.textnodeAttachAccessoryCartSubto object equals '$254.00'.
  aqObject.CheckProperty(Aliases.browser.pageRefSr13.textnodeAttachAccessoryCartSubto, "contentText", cmpEqual, "$254.00");
  //Clicks the 'linkAttachCloseSidesheetLink' link.
  Aliases.browser.pageRefSr13.linkAttachCloseSidesheetLink.Click();
  //Clicks the 'textnode' object.
  Aliases.browser.pageRefSr13.header.textnode.Click(1, 4);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageView.Wait();
}