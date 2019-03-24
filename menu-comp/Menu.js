let curDoc = document.currentScript.ownerDocument;

class Menu extends HTMLElement {
  connectedCallback() {
    let shadow = this.attachShadow({ mode: "open" });
    let temp = curDoc.querySelector("#menu-comp");
    let instance = temp.content.cloneNode(true);
    shadow.appendChild(instance);
    //console.log(this);
    this.menu = this.shadowRoot.querySelector(".menu");
    this.shortMenu = this.shadowRoot.querySelector(".short-menu");
    this.bigMenu = this.shadowRoot.querySelector(".big-menu");
    this.closeMenu = this.shadowRoot.querySelector("#close");
    this.bars = this.shadowRoot.querySelector("#bars");

    this.bars.addEventListener("click", () => {
      console.log(11);
      this.shortMenu.style.transform = "translate(-100%)";
      this.menu.style.transform = "translateX(0%)";
      this.bigMenu.style.width = "115%";
      this.closeMenu.style.opacity = ".8";
    });

    this.closeMenu.addEventListener("click", () => {
      console.log(22);
      this.shortMenu.style.transform = "translate(0%)";
      this.shortMenu.style.width = "100%";
      this.bigMenu.style.width = "100%";
      this.closeMenu.style.opacity = "0";
      this.menu.style.transform = "translateX(-90%)";
    });
  }
}

customElements.define("menu-comp", Menu);
