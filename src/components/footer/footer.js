class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>Criador por Kevyn Lopes - Todos direitos reservados. ©</footer>
    `;
  }
}

customElements.define("main-footer", Footer);
