// const wrapper = document.getElementById("wrapper");

// console.log(wrapper)

// console.log('parent', wrapper.parentNode)
// console.log('parentElement', wrapper.parentElement)


// console.log('prev', wrapper.previousElementSibling)
// console.log('next', wrapper.nextElementSibling)

// console.log('fc', wrapper.firstElementChild)
// console.log('lc', wrapper.lastElementChild)

// const firstWrapperChild = wrapper.firstElementChild;


// console.log('FC: parent', firstWrapperChild.parentNode)
// console.log('FC: parentElement', firstWrapperChild.parentElement)


// console.log('FC: prev', firstWrapperChild.previousElementSibling)
// console.log('FC: next', firstWrapperChild.nextElementSibling)

// console.log('FC: fc', firstWrapperChild.firstElementChild)
// console.log('FC: lc', firstWrapperChild.lastElementChild)

// if (wrapper !== null) {
//   const allWrapperDivs = wrapper.querySelectorAll("div");

//   console.log(allWrapperDivs);
// }

// const mBannersCollection = document.body.getElementsByClassName("m-banner");
// const mBannersNodeList = document.body.querySelectorAll(".m-banner");


// Array.prototype.forEach.call(mBannersCollection, (item) => {
//   console.log(item)
// });

// Array.prototype.forEach.call(mBannersNodeList, (item) => {
//   console.log(item)
// });

// Array.from(mBannersCollection).forEach((item) => {
//   // copy 1
//   item.parentNode.appendChild(item.cloneNode())
// });

// Array.from(mBannersNodeList).forEach((item) => {
//   // copy 2
//   item.parentNode.appendChild(item.cloneNode())
// });

// console.log(mBannersCollection)
// console.log(document.body.querySelectorAll(".m-banner"))

// const liItems = document.body.querySelectorAll("li");

// const menuList = Array.prototype.filter.call(liItems, (item) => {
//   return item.matches('.menu-list-item');
// });

// console.log(menuList);

// const select = (list, value) => {
//   list.dataset.value = value;
// };

// function handleSelect(event) {
//   const liItem = event.target;

//   const list = liItem.closest('.selectBox');

//   if (liItem.matches('.active')) {
//     liItem.classList.remove('active')
//   } else {
//     liItem.classList.add('active')
//   }

//   select(list, liItem.innerText);
// }

// const selectBox = document.querySelector('.selectBox');

// const options = selectBox.querySelectorAll('.selectBox--item');

// options.forEach((item) => {
//   item.onclick = handleSelect;
// });

// const region = document.getElementById("region");

// const buttons = document.querySelectorAll("button");

// const handleClick = ({ target: button }) => {
//   if (region.contains(button)) {
//     alert('You Win 1billion of dollars!');
//     return;
//   }

//   alert("Miss");
// };

// buttons.forEach((button) => {
//   button.onclick = handleClick;
// });

// const iconWithText = document.querySelector('.icon-with-text');


// console.log(window.getComputedStyle(iconWithText));

// @media

// const mq = matchMedia("(min-width: 600px)");

// mq.addEventListener("change", (event) => {
//   console.log(event);
//   console.log('changed');
// });


// const APP = {
//   firstName() {},
//   lastName() {},
//   age() {}
// }


// const spans = ...

// for (const span of spans) {
  
// }