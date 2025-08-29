What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans1: getElementById is use for get a specific name of HTML element from Dom where use specific name of id
,getElementsByClassName is use for get all similar name of HTML element from Dom where use similar name of class,
querySelector is use for get first element Dom that matches of specified CSS group of selectors
,querySelectorAll is use for get all similar name of HTML elements from Dom .


How do you create and insert a new element into the DOM?

Ans2: Apply document.createElement()i will insert a new element into the Dom.


What is Event Bubbling and how does it work?

Ans3:Event bubbling is the default action of dom where an event click on a child element first triggers handlers on that element and than bubbles up or propagates to its parent to parent or grandparent and other ancestor elements all the way to the document root .


What is Event Delegation in JavaScript? Why is it useful?

Ans4:event delegation in javascript is a technique where a single event listener is attached to a parent element to manage events on its child elements .


useful for attaching a single event listener to a parent element is significantly more efficient than individual child elements . this method useful for simplified event handling,dynamically add elements, reduced code complexity.



What is the difference between preventDefault() and stopPropagation() methods?

Ans5: preventDefault() is the default or action associated with an event from occurring.
and 
stopPropagation() is stops the event from bubbling up to parent elements 