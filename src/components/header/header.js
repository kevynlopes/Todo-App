class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <header>
      <nav class="container">
        <a href="/">Todo - App</a>
        <ul class="list-header-container">
          <li>
            <a href="/">Notas</a>
          </li>
          <li>
            <a href="/">Lembretes</a>
          </li>
          <li>
            <a href="/">Editar Marcadores</a>
          </li>
          <li>
            <a href="/">Lixeira</a>
          </li>
          <li>
            <a href="/src/views/pages/archived.html">Arquivados</a>
          </li>
        </ul>

        <div class="menu-mobile" onclick="handleMenuMobile()">
          <div class="menu-bar"></div>
          <div class="menu-bar"></div>
          <div class="menu-bar"></div>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define("main-header", Header);
