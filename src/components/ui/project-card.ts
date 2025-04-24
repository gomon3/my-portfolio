import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Project } from '../../models/Project'; // Importamos el tipo

@customElement('project-card')
export class ProjectCard extends LitElement {
  @property({ type: Object }) project!: Project; // ¡Tipado fuerte!

  static styles = css`
    .card { /* Estilos aquí */ }
  `;

  render() {
    return html`
      <div class="card">
        <h3>${this.project.title}</h3>
        <p>${this.project.description}</p>
        <a href=${this.project.url} target="_blank">Ver proyecto</a>
      </div>
    `;
  }
}