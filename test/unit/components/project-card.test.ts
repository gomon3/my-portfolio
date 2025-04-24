// test/project-card.test.ts
import { fixture, html, expect } from '@open-wc/testing';
import { ProjectCard } from '../src/components/ui/project-card';
import type { Project } from '../src/models/Project';

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: '1',
    title: 'Portfolio Lit',
    description: '...',
    url: 'https://example.com',
    tags: ['Lit', 'TypeScript'],
    year: 2024
  };

  it('renders project title and description', async () => {
    const el = await fixture<ProjectCard>(html`
      <project-card .project=${mockProject}></project-card>
    `);

    expect(el.shadowRoot!.textContent).to.include(mockProject.title);
    expect(el.shadowRoot!.textContent).to.include(mockProject.description);
  });

  it('displays "Ver proyecto" link with correct URL', async () => {
    const el = await fixture<ProjectCard>(html`
      <project-card .project=${mockProject}></project-card>
    `);

    const link = el.shadowRoot!.querySelector('a')!;
    expect(link.href).to.equal(mockProject.url);
    expect(link.textContent).to.include('Ver proyecto');
  });
});