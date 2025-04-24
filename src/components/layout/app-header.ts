import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  private _scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return html`
      <nav>
        <button @click=${() => this._scrollTo('hero')}>Inicio</button>
        <button @click=${() => this._scrollTo('about')}>Sobre mí</button>
        <button @click=${() => this._scrollTo('projects')}>Proyectos</button>
      </nav>
    `;
  }
}