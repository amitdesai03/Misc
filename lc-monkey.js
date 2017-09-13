// ==UserScript==
// @name         LeetCode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make LeetCode a bit better
// @match        https://leetcode.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

console.log("hello from tampermonkey");

// add question id to the question detail page
var questionIdNode = document.querySelector('input[name="question_id"]');
if (questionIdNode) {
    var questionId = questionIdNode.value;
    var node = document.createElement('span');
    node.appendChild(document.createTextNode('#' + questionId));
    var titleNode = document.querySelector('.question-title');
    titleNode.appendChild(node);

    // styling
    node.style.color = "#BBB";
    node.className = 'question-id';
    node.style.marginLeft = '5px';
}

function hideElement(query) {
    var node = document.querySelector(query);
    if (node) {
        node.style.display = 'none'
    }
}

// hide the ugly subscribtion and book links
hideElement('#subscribe'); // on the problem page
hideElement('a[href="/subscribe"]'); // on the discuss page
hideElement('.qa-sidebar'); // discussion sidebar
hideElement('#bookNav');
hideElement('#chat-link'); // Send Feedback
hideElement('footer');
hideElement('#survey'); // Have you met this question in a real interview? No

// add statictics in the /company/*/ page
if (document.location.pathname.startsWith('/company/')) {
    var stat = document.querySelectorAll('.ac').length + '/' + document.querySelectorAll('tr').length;
    var node = document.createElement('span');
    node.textContent = stat;
    var header = document.querySelector('h3');
    header.appendChild(node);
    node.style.fontSize = '14px';
    node.style.color = '#BBB';
    
}
// hide non-free questions on the problem set page
//Array.prototype.forEach.call(document.querySelectorAll('.fa-lock'), function (n) {
//    n.parentElement.parentElement.style.display = "none";
//});
