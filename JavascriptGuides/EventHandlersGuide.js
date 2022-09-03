Event Handlers

//Handling an "Esc" Keypress Event: Chapter 81 of JS Course.
document.addEventListener('onkeydown', function(e) {
  console.log(e.key);
  if(e.key === "Escape" && !modal.classList.contains('hidden')) {
    closeModal()
    }
  }
);

--------------------------------

onabort: Refers to the loading of an image that is interrupted.

onblur: Refers to an element losing the focus of the web browser.

onchange: Refers to a content is changed, usually inside a text input
box.

onclick: Refers to when an object is clicked.

ondblclick: Refers to when an object is double clicked.

onerror: Refers to when an error occurs.

onfocus: Refers to when an element is given focus.

onkeydown: Refers to when a keyboard key is pressed down.

onkeypress: Refers to when a keyboard key is pressed and/or held down.

onkeyup: Refers to when a keyboard key is released.

onload: Refers to when a web page or image loads.

onmousedown: Refers to when the mouse button is pressed down.

onmousemove: Refers to when the mouse is moved.

onmouseout: Refers to when the mouse is moved away from an element.

onmouseover: Refers to when the mouse moves over an element.

onmouseup: Refers to when the mouse button is released.

onreset: Refers to when a reset button is clicked.

onresize: Refers to when a window is resized.

onselect: Refers to when an element is selected.

onsubmit: Refers to when a submit button is clicked.

onunload: Refers to when a page is unloaded either by being closed
or a link is clicked.
