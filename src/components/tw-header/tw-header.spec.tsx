import { newSpecPage } from '@stencil/core/testing';
import { TwHeader } from './tw-header';

describe('tw-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TwHeader],
      html: `<tw-header></tw-header>`,
    });
    expect(page.root).toEqualHtml(`
      <tw-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tw-header>
    `);
  });
});
