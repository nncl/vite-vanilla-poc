class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>🚀 My Website</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    `;
  }
}

// Register the custom element
customElements.define("app-header", AppHeader);

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Web Components initialized!");
});
