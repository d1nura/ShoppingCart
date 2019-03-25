let curDocument = document.currentScript.ownerDocument;

let addBag = document.querySelector("#addToBag");

class ShopingCart extends HTMLElement {
  constructor() {
    super();
    //let xx = document.querySelector("#mainName").innerHTML;
    ////this.addEventListener("click", () => {
    //console.log(xx);
    // });
  }
  connectedCallback() {
    let shadow = this.attachShadow({ mode: "open" });
    let temp = curDocument.querySelector("#shoping-cart");
    let instance = temp.content.cloneNode(true);
    shadow.appendChild(instance);
    /// console.log(this.shadowRoot);
    this.shoppingCart = this.shadowRoot.querySelector(".shoppingCart");
    this.open = this.shadowRoot.querySelector("#open");
    this.cls = this.shadowRoot.querySelector("#cls");
    this.shpI = this.shadowRoot.querySelector("#shoppingItems");
    this.z = document.querySelector("#mainName").innerText;
    this.clear = this.shadowRoot.querySelector("#clear");
    console.log("sss--" + this.shpI);

    addBag.addEventListener("click", () => {
      let name = document.querySelector("#mainName").innerText;
      let qNo = document.querySelector("#qNo").innerText;
      let secrtVal = document.querySelector("#secretVal").innerHTML;
      let img1 = document.querySelector("#coverPic");
      let itmPrice = document.querySelector("#priceTag").innerText;
      console.log("-----" + name, qNo, secrtVal, itmPrice, img1);

      let doc = document.createElement("div1");
      doc.setAttribute("id", "newEl");
      doc.innerHTML = `
        <div id="p1">
          <img src="${img1.src}" />
        </div>
        <div id="p2">
          <div id="v1">
            <h4>${name}</h4>
            <p>${(secrtVal = secrtVal != "" ? secrtVal : 10)}</p>
          </div> 
          <div id="v2">
            <p><b>${itmPrice}</b></p> 
            <div id="inc">
              <div>
                <button>-</button>
                <p>${qNo}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      `;
      console.log(img1.src);
      this.shpI.appendChild(doc);
    });

    this.clear.addEventListener("click", () => {
      this.shpI.innerHTML = "";
    });

    this.open.addEventListener("click", () => {
      this.shoppingCart.classList.toggle("cartToggle");
      this.cls.style.opacity = "1";
      this.cls.style.transform = "translateY(-100%)";
      this.open.style.opacity = "0";
      this.open.style.transform = "translateY(-200%)";
      //console.log(xx);
      console.log(this.z);
    });

    this.cls.addEventListener("click", () => {
      this.shoppingCart.classList.toggle("cartToggle");
      this.cls.style.opacity = "0";
      this.cls.style.transform = "translateY(0%)";
      this.open.style.opacity = "1";
      this.open.style.transform = "translateY(0%)";
    });
  }
}

customElements.define("shoping-cart", ShopingCart);
