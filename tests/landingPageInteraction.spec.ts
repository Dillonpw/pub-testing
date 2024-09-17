import { test, expect } from '@playwright/test';

test.beforeEach('Visit cal.com', async ({ page }) => {
    await page.goto('https://cal.com/');
});
test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Cal.com/);
});

test('get started link', async ({ page }) => {
    await expect(
        page.getByRole('link', { name: 'Cal.com logo' }).nth(0)
    ).toBeVisible();
});

test('landing page navigation', async ({ page }) => {
    //nav bar links
    await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(
        page.getByLabel('main').getByRole('link', { name: 'Docs' })
    ).toBeVisible();
    await expect(
        page.getByLabel('main').getByRole('link', { name: 'Blog' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();

    //hiring link
    await expect(
        page.getByRole('link', { name: 'Hiring' }).nth(0)
    ).toBeVisible();
    //new version link
    await expect(
        page.getByRole('link', { name: 'Cal.com launches v4.3' })
    ).toBeVisible();
    //hero section CTA
    await expect(page.getByRole('link', { name: 'signup' })).toBeVisible();
    //scroll hidden button
    //await expect(page.getByRole('link', { name: 'cal.com/rick' })).toBeVisible();

    //explore all apps
    await expect(
        page.getByRole('link', { name: 'explore all apps' })
    ).toBeVisible();
    //learn more CTA returning hidden
    //await expect(page.getByRole('link', { name: 'learn more' })).toBeVisible();
    //final CTA
    await expect(page.getByRole('link', { name: 'get started' })).toBeVisible();
    await expect(
        page.getByRole('link', { name: 'contact sales' })
    ).toBeVisible();
    //footer index redict
    await expect(
        page.getByRole('link', { name: 'Cal.com logo' }).nth(1)
    ).toBeVisible();
    //footer hiring link
    await expect(
        page.getByRole('link', { name: 'Hiring' }).nth(1)
    ).toBeVisible();
});

test('hero section is visible', async ({ page }) => {
    await expect(page.getByText('Schedulinginfrastructure for')).toBeVisible();
    await expect(page.getByText('everyone.', { exact: true })).toBeVisible();
    await expect(page.getByText('Meet Cal.com,')).toBeVisible();
});

//TODO
//explore all apps accessibility issue on small screens
