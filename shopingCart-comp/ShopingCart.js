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
    this.total = this.shadowRoot.querySelector("#total");
    this.sidebar = this.shadowRoot.querySelector(".sidebar");

    //console.log("sss--" + this.shpI);
    let score = document.createElement("div");
    score.setAttribute("class", "score");
    this.sidebar.appendChild(score);
    score.innerHTML = 0;
    if (score.innerHTML == 0) {
      score.style.opacity = 0;
    }

    addBag.addEventListener("click", () => {
      let name = document.querySelector("#mainName").innerText;
      let qNo = document.querySelector("#qNo").innerText;
      let secrtVal = document.querySelector("#secretVal").innerHTML;
      let img1 = document.querySelector("#coverPic");
      let itmPrice = document.querySelector("#priceTag").innerText;

      function dol(x) {
        let arr = x.split("");
        let o = arr.filter(i => i != "$");
        let arr1 = o.join("");
        return arr1;
      }

      let itmP = (parseFloat(dol(itmPrice)) / parseInt(qNo)).toFixed(2);
      //console.log(parseFloat(itmPrice1).toFixed(2));
      let newArr = [];

      if (newArr.length > 1) {
        newArr.shift();
      }
      newArr.push(itmP);
      let newVal = newArr[0];
      console.log(newVal);
      //console.log("-----" + name, qNo, secrtVal, itmPrice, img1);

      let doc = document.createElement("div1");
      doc.setAttribute("id", "newEl");
      doc.innerHTML = `
        <div class="cross">
          <p><b>X</b></p>
        </div>
        <div class="below">
          <div id="p1">
            <img src="${img1.src}" />
          </div>
          <div id="p2">
            <div id="v1">
              <h4>${name}</h4>
              <p>${(secrtVal = secrtVal != "" ? secrtVal : 10)}</p>
            </div> 
            <div id="v2">
              <p id="reqP"><b>${itmPrice}</b>
              <div id="newVl">${newVal}</div></p> 
              <div id="inc">
                <div id="home">
                  <button id="minus">-</button>
                  <p id="itemNo">${qNo}</p>
                  <button id="plus">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      console.log(doc);

      this.shpI.appendChild(doc);
      this.cross = this.shadowRoot.querySelectorAll(".cross");

      this.itmNO = this.shadowRoot.querySelector("#itemNo");
      this.req = this.shadowRoot.querySelectorAll("#reqP");
      let ss = [];
      for (let i = 0; i < this.shpI.children.length; i++) {
        ss.push(parseFloat(dol(this.req[i].innerText)));
        this.cross[i].onclick = e => {
          console.log(e.target.closest("#newEl"));
          this.shpI.removeChild(e.target.closest("#newEl"));
          let money = e.target.closest("#newEl").querySelector("#reqP")
            .innerText;
          this.total.innerText = `$ ${(
            parseFloat(dol(this.total.innerText)) - parseFloat(dol(money))
          ).toFixed(2)}`;
          console.log(score.innerText);
          score.innerText =
            parseInt(score.innerText) -
            parseInt(
              e.target.closest("#newEl").querySelector("#itemNo").innerText
            );
          if (score.innerText == 0) {
            score.style.opacity = 0;
          }
        };
      }
      //if (typeof name != undefined && typeof itemPrice != undefined) {
      score.innerHTML = parseInt(qNo) + parseInt(score.innerHTML);
      //}

      if (score.innerHTML != 0) {
        score.style.opacity = 1;
      }

      this.total.innerText = `$ ${parseFloat(
        ss.reduce((p, n) => {
          return p + n;
        })
      ).toFixed(2)}`;

      for (let i = 0; i < this.shpI.children.length; i++) {
        //console.log(this.itmNO);
        this.pls = this.shadowRoot.querySelectorAll("#plus");
        this.pls[i].onclick = e => {
          console.log(score);
          e.target.closest("#home").children[1].innerText++;
          let money = e.target.closest("#v2").children[0].innerText;
          this.itmPrice1 = e.target
            .closest("#v2")
            .querySelector("#newVl").innerHTML;
          //console.log(this.itmPrice1);
          score.innerText = parseInt(score.innerText) + 1;
          //console.log(money);
          e.target.closest("#v2").children[0].innerHTML = `<b>
           $ ${(parseFloat(dol(money)) + parseFloat(this.itmPrice1)).toFixed(2)}
          </b>`;
          this.total.innerText = `$ ${(
            parseFloat(dol(this.total.innerText)) + parseFloat(this.itmPrice1)
          ).toFixed(2)}`;
        };
        this.min = this.shadowRoot.querySelectorAll("#minus");
        this.min[i].onclick = e => {
          this.itmPrice1 = e.target
            .closest("#v2")
            .querySelector("#newVl").innerHTML;
          // console.log(e.target.closest("#home"));
          if (e.target.closest("#home").children[1].innerText > 1) {
            e.target.closest("#home").children[1].innerText--;

            score.innerText = parseInt(score.innerText) - 1;

            let money = e.target.closest("#v2").children[0].innerText;
            //console.log(money);
            e.target.closest("#v2").children[0].innerHTML = `<b>
           $ ${(parseFloat(dol(money)) - parseFloat(this.itmPrice1)).toFixed(2)}
          </b>`;
            this.total.innerText = `$ ${parseFloat(
              dol(this.total.innerText) - parseFloat(this.itmPrice1)
            ).toFixed(2)}`;
          }
        };
      }
    });

    this.clear.addEventListener("click", e => {
      this.shpI.innerHTML = "";
      this.total.innerText = "$0.00";
    });

    this.open.addEventListener("click", () => {
      this.shoppingCart.classList.toggle("cartToggle");
      this.cls.style.opacity = "1";
      this.cls.style.transform = "translateY(-100%)";
      this.open.style.opacity = "0";
      this.open.style.transform = "translateY(-200%)";
      //console.log(xx);
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
