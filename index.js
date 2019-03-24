let menu = document.querySelector(".menu");
let shortMenu = document.querySelector(".short-menu");
let bigMenu = document.querySelector(".big-menu");
let closeMenu = document.querySelector("#close");
let shoppingCart = document.querySelector(".shoppingCart");

function menuFn() {
  console.log(11);
  // menu.style.transform = "translateX(0%)";
  shortMenu.style.transform = "translate(-100%)";
  menu.style.transform = "translateX(0%)";
  bigMenu.style.width = "115%";
  closeMenu.style.opacity = ".8";
}
closeMenu.addEventListener("click", close);
function close() {
  shortMenu.style.transform = "translate(0%)";
  shortMenu.style.width = "100%";
  bigMenu.style.width = "100%";
  closeMenu.style.opacity = "0";
  menu.style.transform = "translateX(-90%)";
}

let open = document.querySelector("#open");
let cls = document.querySelector("#cls");

function showBag() {
  shoppingCart.classList.toggle("cartToggle");
  cls.style.opacity = "1";
  cls.style.transform = "translateY(-100%)";
  open.style.opacity = "0";
  open.style.transform = "translateY(-200%)";
}

function hideBag() {
  shoppingCart.classList.toggle("cartToggle");
  cls.style.opacity = "0";
  cls.style.transform = "translateY(0%)";
  open.style.opacity = "1";
  open.style.transform = "translateY(0%)";
}

/*let arr1 = ["light-b.png", "golf.png", "green.png", "blac-b.png"];
let arr2 = ["4.png", "7.png", "Soccer-2.png", "Soccer-3.png"];
let arr3 = ["1.jpg", "green.png", "gym.png", "Soccer-1.png"];
let mArr = [arr1, arr2, arr3];*/

let obj = {
  0: {
    pic: ["4.png", "7.png", "Soccer-2.png", "Soccer-3.png"],
    name: ["Name One", "Name Two", "Name Three", "Name Four"],
    price: [12.99, 15.89, 45.59, 23.75]
  },
  1: {
    pic: ["1.jpg", "green.png", "gym.png", "Soccer-1.png"],
    name: ["Name Oqq", "Name Tww", "Name Thrr", "Name Fourr"],
    price: [12.91, 19.89, 25.59, 20.75]
  },
  2: {
    pic: ["light-b.png", "golf.png", "green.png", "blac-b.png"],
    name: ["Name-One-one", "Name-Two-two", "Name-Three-thrr", "Name-Four-ff2"],
    price: [13.99, 16.89, 47.55, 24.75]
  }
};
//let p = Object.keys(obj);
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let beforeImg = document.querySelectorAll(".beforeImg");
let item = document.querySelectorAll(".item");
let inc = document.querySelector("#inc");
let pp = document.querySelectorAll("#pp");
let shoeName = document.querySelectorAll("#shoeName");

for (let i = 0; i < 4; i++) {
  beforeImg[i].firstElementChild.src = `shoes/${obj[0].pic[i]}`;
  pp[i].innerHTML = obj[0].price[i];
  shoeName[i].firstElementChild.innerText = obj[0].name[i];
}
let n = 0;
let x = 1;
inc.innerText = x;
prev.onclick = () => {
  console.log("prev");
  x--;
  if (n == 0) {
    n = 0;
    x = 1;
  } else {
    n--;
  }
  inc.innerText = x;
  for (let i = 0; i < 4; i++) {
    beforeImg[i].firstElementChild.src = `shoes/${obj[n].pic[i]}`;
    pp[i].innerHTML = obj[n].price[i];
    shoeName[i].firstElementChild.innerText = obj[n].name[i];
  }
};
next.onclick = e => {
  console.log("next");
  x++;
  if (n == 2) {
    n = 2;
    x = 3;
  } else {
    n++;
  }
  inc.innerText = x;
  for (let i = 0; i < 4; i++) {
    beforeImg[i].firstElementChild.src = `shoes/${obj[n].pic[i]}`;
    //beforeImg[i].firstElementChild.style.opacity = ".5";
    pp[i].innerHTML = obj[n].price[i];
    shoeName[i].firstElementChild.innerText = obj[n].name[i];
  }
};

/*let price = document.createElement("div");
price.setAttribute("id", "price");
price.innerHTML = '<i class="fas fa-shopping-cart "></i>';*/

for (let i = 0; i < 4; i++) {
  item[i].onmouseover = e => {
    //console.log(4456);
    beforeImg[i].firstChild.style.transform = "translateY(-5%)";
    price[i].style.opacity = "1";
    shoeName[i].style.opacity = "1";
    shoeName[i].style.transform = "translateY(-50%)";
    price[i].style.transform = "translateY(0%)";
    //price.innerHTML = "nsnfn";
  };

  item[i].onmouseout = () => {
    //console.log(456);
    beforeImg[i].firstChild.style.transform = "translateY(0%)";
    price[i].style.opacity = "0";
    shoeName[i].style.opacity = "0";
    shoeName[i].style.transform = "translateY(0%)";
    price[i].style.transform = "translateY(-100%)";
  };
}

let coverPic = document.querySelector("#coverPic");
let mainPic = document.querySelector(".mainPic");
let arrow = document.querySelector("#arrow");

for (let i = 0; i < 4; i++) {
  item[i].addEventListener("click", addMainPic);
}
let itemPrice, itemName;
function addMainPic(e) {
  let it = e.target.closest(".item");
  itemPrice = it.children[0].innerText;
  itemName = it.children[1].innerText;
  coverPic.src = e.target.closest(".beforeImg").firstChild.src;
  // coverPic.style.transform = "rotate(50deg)";
  arrow.style.opacity = "1";
  arrow.style.transform = "translateX(0)";
}

let u = arrow.firstElementChild.style;
let u1 = arrow.children[1].style;
arrow.onmouseover = () => {
  u1.color = "orange";
  u1.tranform = "tranlateX(-5%)";
  u.transform = "translateY(0%)";
  u.opacity = 1;
};
arrow.onmouseout = () => {
  u1.color = "rgb(51, 255, 0)";
  u.transform = "translateY(50%)";
  u.opacity = 0;
};
let wrapMainContent = document.querySelector("#wrapMainContent");
let mainContent = document.querySelector(".mainContent");

arrow.addEventListener("click", showMore);

function showMore() {
  arrow.children[1].classList.toggle("arrowRotateToggle");
  arrow.children[0].classList.toggle("arrowTextToggle");
  mainContent.classList.toggle("mainContentToggle");

  wrapMainContent.children[0].innerText = itemName;
  wrapMainContent.children[6].innerText = itemPrice;
}
