import { newE2EPage } from '@stencil/core/testing';

describe('tw-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tw-header></tw-header>');

    const element = await page.find('tw-header');
    expect(element).toHaveClass('hydrated');
  });
});
