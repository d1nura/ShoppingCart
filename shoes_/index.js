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

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let beforeImg = document.querySelectorAll(".beforeImg");
let item = document.querySelectorAll(".item");
let inc = document.querySelector("#inc");
let pp = document.querySelectorAll("#pp");
let shoeName = document.querySelectorAll("#shoeName");

for (let i = 0; i < 4; i++) {
  beforeImg[i].firstElementChild.src = `/shoes/${obj[0].pic[i]}`;
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
    beforeImg[i].firstElementChild.src = `/shoes/${obj[n].pic[i]}`;
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
    beforeImg[i].firstElementChild.src = `/shoes/${obj[n].pic[i]}`;
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

//arrow hover styles.======================================

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

arrow.addEventListener("click", showMore); //arrow function toggle

function showMore() {
  arrow.children[1].classList.toggle("arrowRotateToggle");
  arrow.children[0].classList.toggle("arrowTextToggle");
  mainContent.classList.toggle("mainContentToggle");

  wrapMainContent.children[0].innerText = itemName;
  wrapMainContent.children[6].querySelector("#priceTag").innerText = itemPrice;

  reset();
}

//setting the items counter.================================

let quantity = document.querySelector("#quantityNo");
let priceTag = document.querySelector("#priceTag");
let sizeBtns = document.querySelector("#sizeBtns");
let secVal = document.querySelector("#secretVal");
let shpNo = 1;

let shoeSize = ["10"];
for (let i = 0; i < sizeBtns.children.length; i++) {
  sizeBtns.children[i].addEventListener("click", addSize);
}
sizeBtns.children[7].style.background = "black";
function addSize(e) {
  let p = e.target.innerText;
  for (let i = 0; i < sizeBtns.children.length; i++) {
    sizeBtns.children[i].style.background = "white";
  }
  e.target.style.background = "black";
  shoeSize.push(p);
  if (shoeSize.length > 1) {
    shoeSize.shift();
  }

  secVal.innerHTML = shoeSize[0];
  //console.log(secVal.innerHTML);
}

quantity.children[2].addEventListener("click", e => {
  console.log(1);
  shpNo++;
  quantity.children[1].innerText = shpNo;

  let arr = itemPrice.split("");
  let o = arr.filter(i => i != "$");
  let arr1 = o.join("");

  priceTag.innerText = `$ ${(parseFloat(arr1) * shpNo).toFixed(2)}`;
  console.log(priceTag.innerHTML);
});
quantity.children[0].addEventListener("click", () => {
  console.log(1);
  if (shpNo != 1) {
    --shpNo;
    quantity.children[1].innerText = shpNo;

    let arr = itemPrice.split("");
    let o = arr.filter(i => i != "$");
    let arr1 = o.join("");

    let arr2 = priceTag.innerText.split("");
    let o1 = arr2.filter(i => i != "$");
    let arr3 = o1.join("");

    priceTag.innerText = `$ ${(parseFloat(arr3) - parseFloat(arr1)).toFixed(
      2
    )}`;
  }
});
function reset() {
  priceTag.innerText = itemPrice;
  quantity.children[1].innerText = 1;
  shpNo = 1;
}

let addToBag = document.querySelector("#addToBag");

let itmDetails = [];

/*
addToBag.addEventListener("click", () => {
  console.log(789);
  console.log(quantity.innerText, priceTag.innerText, shoeSize);
});
*/
