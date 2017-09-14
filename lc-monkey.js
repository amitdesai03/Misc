// ==UserScript==
// @name         LC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make LeetCode a bit better
// @match        https://leetcode.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function remove(id,className){
    if(className!==null && document.getElementsByClassName(className).length>0){
        document.getElementsByClassName(className)[0].remove();
    }
    if(id!==null && document.getElementById(id)!==null){
        document.getElementById(id).remove();
    }
}

function toggle(element){
    if(element.style.display=='none' || element.style.display===''){
        element.style.display='block';
    }else if(element.style.display=='block'){
        element.style.display='none';
    }
}
function toggleEither(id,className){

    if(className!==null && document.getElementsByClassName(className).length>0){
        toggle(document.getElementsByClassName(className)[0]);
    }
    if(id!==null && document.getElementById(id)!==null){
        toggle(document.getElementById(id));
    }
}


function createButtonForToggle(id,buttonName){

    if(document.getElementById(id)!==null){
            document.getElementById(id).style.display='none';
    }else if(document.getElementsByClassName(id).length!==0){
        document.getElementsByClassName(id)[0].style.display='none';
    }
    else return;


    // 1. Create the button
    var button = document.createElement("button");
    button.innerHTML = buttonName;

    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(button, body.firstChild);


    // 3. Add event handler
    button.addEventListener ("click", function() {
        toggleEither(null,id);
    });
}
remove(null,'navbar');
remove(null,'question-title');
remove(null,'side-bar');
remove(null,'action-btn-base');
remove('interviewed-div',null);
remove(null,'site-footer');
remove(null,'notepad-wrapper');
//remove(null,'tab-view');
remove(null,'theme-select');
remove(null,'reset-btn');
remove(null,'contribute-btn');

if(document.getElementsByName("lang").length>0){
    document.getElementsByName("lang")[0].selectedIndex=1;
    document.getElementsByName("lang")[0].style.display = 'none';
}
createButtonForToggle('action','3');
createButtonForToggle('control-btn-bar','2');
createButtonForToggle('question-detail-container','1');

document.title = "Google";
