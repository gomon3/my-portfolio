// tests/e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigates to projects section', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Proyectos');
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator('project-card')).toHaveCount(3); // Verifica cantidad de proyectos
});