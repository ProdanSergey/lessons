"use strict"

// const alertButton = document.getElementById("alert-button");

// const onAlertHelloWorld = () => {
//   alert("Hello World")
// }

// const onAlertWelcome= () => {
//   alert("Welcome")
// }

// alertButton.onclick = () => {
//   onAlertHelloWorld();
//   onAlertWelcome();

//   alertButton.onclick = null;
// };

// const handleClick = function () {
//   console.log('Button Clicked')
// }

// const handler = {

//   handleEvent() {
//     console.log('Button Clicked')
//   }
// };

// class EventHandler {

//   handleEvent() {
//     console.log('Button Clicked')
//   }
// }

// alertButton.addEventListener("click", handleClick)


// const handleClick = function () {
//   console.log('Button Clicked')
// }

// userSection.addEventListener("click", handleClick)

// window.onload = () => {
//   console.log('loaded')
// }

// window.addEventListener("DOMContentLoaded", () => {

//   const userSection = document.getElementById("user-section");

//   console.log(userSection);


//   console.log('content loaded')
// });

// const closeButton = document.getElementById('close-button');

// closeButton.hidden = true;

// window.addEventListener("beforeunload", () => {
//   closeButton.hidden = false;

//   closeButton.addEventListener("click", (e) => {
//     window.close();

//     e.preventDefault();
//   });
// });

// const closeButton = document.getElementById('close-button');

// const clickOnce = (element, listener) => {
//   const handleEvent = () => {
//     listener();

//     element.removeEventListener("click", handleEvent);
//   }
  
//   element.addEventListener("click", handleEvent);
// };

// const clickTrice = (element, listener) => {
//   let count = 0;
  
//   const handleEvent = () => {
//     listener();

//     count++;

//     if (count === 3) {
//       element.removeEventListener("click", handleEvent);
//     }
//   }
  
//   element.addEventListener("click", handleEvent);
// };

// const handler = () => {
//   console.log('clicked');
// };

// clickTrice(closeButton, handler);

// closeButton.addEventListener("click", () => {
//   console.log('clicked 2');
// });
// closeButton.addEventListener("click", () => {
//   console.log('clicked 3');
// });
// closeButton.addEventListener("click", () => {
//   console.log('clicked 4');
// });

// setTimeout(() => {
//   closeButton.removeEventListener("click", handler);
// }, 5000)

// const closeButton = document.getElementById('close-button');

// closeButton.addEventListener("click", (event) => {
//   console.log(event);
// });


// const menu = document.querySelector(".menu");

// const handleMenuButton = (menu) => {
//   const toggleMenu = (event) => {
//     const button = event.target;

//     if (event.altKey && event.shiftKey && button.nextElementSibling.hidden) {
//       button.nextElementSibling.hidden = false;
//     } else {
//       button.nextElementSibling.hidden = true;
//     }
//   };

//   const button = menu.querySelector("button");

//   button.addEventListener("click", toggleMenu);
// };


// handleMenuButton(menu);


// const listen = (target, eventListener) => { /// { click: (), keyup: () }
//   const listeners = [];
  
//   for (const key of Object.keys(eventListener)) { /// ["click", "keyup"]
//     target.addEventListener(key, eventListener[key]); /// eventListener['click'], eventListener['keyup'], 

//     listeners.push(() => {
//       target.removeEventListener(key, eventListener[key]);
//     })
//   }

//   const unlisten = () => {
//     listeners.forEach(unlisten => unlisten());
//   }

//   return unlisten;
// }

// const text = document.querySelector(".text textarea");
// const stopButton = document.querySelector("#stop-button");

// const unlistenText = listen(text, {
//   click: () => {
//     console.log('click')
//   },
//   keyup: () => {
//     console.log('keyup')
//   }
// });

// listen(stopButton, {
//   click: () => {
//     unlistenText();
//   }
// });