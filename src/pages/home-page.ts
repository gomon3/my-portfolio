import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

@customElement('home-page')
export class HomePage extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot?.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'about-me' },
      { path: '/projects', component: 'projects-grid' },
    ]);
  }

  render() {
    return html`<div id="outlet"></div>`;
  }
}