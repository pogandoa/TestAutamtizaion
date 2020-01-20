﻿var pages = Sys.Browser("*").Page("*");

function IniciarBrowser(url)
{
  pages.Wait();
  Browsers.Item(btChrome).Run(url);
  
}


/**
* Recibe los datos de Data-Driven definido en Temporary Variables
* @param {String}
* @return {String}
* @author: Pedro Ogando
**/
  function getVariables(variable, item){
    let values;
    values = Project.Variables.VariableByName(variable).$get(item,0);
    return values;    
  }

/**
* Realiza un Click en el objeto
* @param {String}
* @author: Pedro Ogando
**/
function darClick(ObjName,ObjType)
{
  let page, Obj;
    
  page = Sys.Browser("*").Page("*");
  obj =  page.NativeWebObject.Find("id", ObjName, ObjType);
  
  if(!strictEqual(obj, null)){
    // and click the first element that was found 
   obj.Click(); // Note we refer to the array item 
  }else{
    // If nothing was found, post a message to the log 
     Log.Error("Nothing was found.");
  }
  page.Wait();
}


/**
* Realiza un Click en el Checked/Radio Button objeto
* @param {String}
* @author: Pedro Ogando
**/
function darClickOption(ObjName)
{
  let page, Obj;
    
  page = Sys.Browser("*").Page("*");
  obj =  page.NativeWebObject.Find("contentText", ObjName, "label");
  
  if(!strictEqual(obj, null)){
    // and click the first element that was found 
   obj.Click(); // Note we refer to the array item 
  }else{
    // If nothing was found, post a message to the log 
     Log.Error("Nothing was found.");
  }
  page.Wait();
}

/**
* Realiza un Click en el link de un objeto
* @param {String}
* @author: Pedro Ogando
**/
function darClickLink(ObjName)
{
  let page, Obj, props, values, link;
    
  page = Sys.Browser("*").Page("*");
  props = ["tagName","contentText"];
  values = ["a",ObjName];
 
  link = page.NativeWebObject.Find("contentText", ObjName, "a");
     
  if(!strictEqual(link, null)){
    // and click the first element that was found 
    link.Click(); // Note we refer to the array item     
  }else{
    // If nothing was found, post a message to the log 
     Log.Error("Nothing was found.");
  }
  page.Wait();
  
}

/**
* Espera 5 segundo antes de dar click en el objeto.
* @author: Pedro Ogando
**/
function waitSeg(seg)
{
  let page,interval;
  page = Sys.Browser("*").Page("*");
  intelval = seg * 1000; 
  page.WaitConfirm(intelval);
}

/**
* Coloca un texto en un TextBox.
* @param {String}
* @author: Pedro Ogando
**/
function ponerTexto(ObjName,ObjType,text)
{
  let page, Obj;
    
  page = Sys.Browser("*").Page("*");
  obj =  page.NativeWebObject.Find("id", ObjName, ObjType);
  
  if(!strictEqual(obj, null)){
    // and click the first element that was found 
    obj.value = text; // Note we refer to the array item 
    
  }else{
    // If nothing was found, post a message to the log 
     Log.Error("Nothing was found.");
  }
  page.Wait();
}

/**
* Realiza un Click a un elemento de un ComboBox.
* @param {String}
* @author: Pedro Ogando
**/
function selectionTexto(ObjName,ObjType,ItemName)
{
   let page, Obj;
    
  page = Sys.Browser("*").Page("*");
  obj =  page.NativeWebObject.Find("id", ObjName, ObjType);
  
  if(!strictEqual(obj, null)){
    // and click the first element that was found 
   obj.ClickItem(ItemName); // Note we refer to the array item 
  }else{
    // If nothing was found, post a message to the log 
     Log.Error("Nothing was found.");
  }
  page.Wait();
}

/**
* Realiza los punto de verificacion de los objectos.
* @param {String}
* @author: Pedro Ogando
**/
function verificarText(ObjName,textoVerificar)
{
  let page, header;
 
  page = Sys.Browser("*").Page("*");
  header =  page.QuerySelector(ObjName);

  aqObject.CheckProperty(header,"contentText",cmpEqual,textoVerificar,true);
 
}
//module.exports.
module.exports.IniciarBrowser = IniciarBrowser
module.exports.darClick = darClick;
module.exports.darClickOption = darClickOption;
module.exports.waitSeg = waitSeg;
module.exports.ponerTexto = ponerTexto;
module.exports.selectionTexto = selectionTexto;
module.exports.verificarText = verificarText;