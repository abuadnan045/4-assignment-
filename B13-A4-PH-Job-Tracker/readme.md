
(1)

 getElementById() selects one element by its id.
 getElementsByClassName() selects all elements with a specific class name.
 querySelector() selects the first element that matches a CSS selector.
 querySelectorAll() selects all elements that match a CSS selector.

(2) 

We have to create the element first by 
document.createElement( );
Const newDiv = document.createElement(“div”);
Then we have to add text ,id ,class etc by 
newDiv.textContent = “New text added”;
then appendChild should be added
document.body.appendChild(newDiv);

(3)
In event bubbling of JavaScript an event starts from the target element and then bubbles up to its parent elements in the DOM.
When we click a child element, the event runs on the clicked element first. Then it moves up to its parent. Then to the grandparent. It continues up until it reaches the document.
(4) 
Event delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of adding separate listeners to multiple child elements.
In event delegation, fewer event listeners are needed. New elements automatically work without adding new listeners. Code is easier to manage.
(5)
preventDefault() stops the default browser action. It does not stop event from bubbling.
stopPropagation() stops the event from bubbling up to parent elements. It does not stop default browser behavior.



