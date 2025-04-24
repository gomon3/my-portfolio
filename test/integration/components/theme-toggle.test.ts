// test/theme-integration.test.ts
import { fixture, html, expect } from '@open-wc/testing';
import { AppHeader } from '../src/components/layout/app-header';
import { ThemeToggle } from '../src/components/layout/theme-toggle';

describe('Theme Integration', () => {
  it('changes theme when toggle is clicked', async () => {
    const header = await fixture<AppHeader>(html`<app-header></app-header>`);
    const toggle = header.shadowRoot!.querySelector<ThemeToggle>('theme-toggle')!;

    toggle.click(); // Simula click
    expect(document.documentElement.getAttribute('data-theme')).to.equal('dark');
  });
});