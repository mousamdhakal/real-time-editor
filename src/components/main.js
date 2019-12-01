import React from 'react';
import $ from 'jquery';

function refreshDOM() {
  
   
    var head = $("#viewer").contents().find("head");
    
    var cssContent = document.getElementById("cssarea").value;
    var css = '<style type="text/css">' +
          cssContent +
          '</style>';
   
    $(head).append(css);
   
    var jsContent = document.getElementById("jsarea").value;
    var js = '<script>' +
          jsContent +
          '</script>';
    
    $(head).append(js);
    
   var body = $("#viewer").contents().find("body");
    var htmlContent = document.getElementById("htmlarea").value;
    $(body).html(htmlContent);

}
// function refreshCSS(){
//     console.log("CSS updated");
   
// }

// function refreshJS() {
//     console.log("Js updated");


// }

function Main() {
   
// function refreshCSS() {
//   var textContent = document.getElementById('cssarea').value;
//   document.getElementById('viewer').srcdoc = textContent;
// }

    return (
        <div className="parent">
            <div className="div1" > 
                <textarea className="boxes-inner editor-textarea" id = "htmlarea" onKeyUp = {refreshDOM} placeholder = "Write html here..." > 
                </textarea> 
            </div>
             <div className="div2" > 
                <textarea className="boxes-inner editor-textarea" id = "cssarea" onKeyUp = {refreshDOM} placeholder = "Write CSS here..." > 
                </textarea> 
            </div>
             <div className="div3" > 
                <textarea className="boxes-inner editor-textarea" id = "jsarea" onKeyUp = {refreshDOM} placeholder = "Write JS here..." > 
                </textarea> 
            </div>
            <div className="div4">
                <div id="wrapper">
                <iframe className="boxes" id ="viewer" >
                    <div id="full"></div> 
                </iframe> 
            </div>    
            </div>
        </div>     
            
   
    );
}

export default Main;