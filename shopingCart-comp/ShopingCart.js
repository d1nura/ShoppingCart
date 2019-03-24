let curDocument = document.currentScript.ownerDocument;

class ShopingCart extends HTMLElement {
  connectedCallback() {
    let shadow = this.attachShadow({ mode: "open" });
    let temp = curDocument.querySelector("#shoping-cart");
    let instance = temp.content.cloneNode(true);
    shadow.appendChild(instance);
    console.log(this);
    this.shoppingCart = this.shadowRoot.querySelector(".shoppingCart");
    this.open = this.shadowRoot.querySelector("#open");
    this.cls = this.shadowRoot.querySelector("#cls");

    this.open.addEventListener("click", () => {
      this.shoppingCart.classList.toggle("cartToggle");
      this.cls.style.opacity = "1";
      this.cls.style.transform = "translateY(-100%)";
      this.open.style.opacity = "0";
      this.open.style.transform = "translateY(-200%)";
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
