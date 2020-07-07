import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'tw-page',
  styleUrl: 'tw-page.css',
  shadow: false,
})
export class TwPage implements ComponentInterface {
  @State()
  isOpen = true;

  @State()
  selectedWrestler: 'The Ultimate Warrior';

  @State()
  items = [
    'The Ultimate Warrior',
    'Randy Savage',
    'Hulk Hogan',
    'Bret Hart',
    'The Undertaker',
    'Mr. Perfect',
    'Ted DiBiase',
    'Bam Bam Bigelow',
    'Yokozuna',
  ];

  render() {
    return (
      <Host>
        <div class={'max-w-sm rounded overflow-hidden shadow-lg'}>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <h2>{this.items.length} Items</h2>
            <list-box
              class="my-2 p-4"
            >
              <list-box-list show={this.isOpen}>
                {this.items.map((item: string) => (
                  <list-box-option option={item}>
                    <div class="text-blue-400">
                      <p>{item}</p>
                    </div>
                  </list-box-option>
                ))}
              </list-box-list>
            </list-box>
          </div>
        </div>
      </Host>
    );
  }

  private onItemSelected(event$: CustomEvent<string>) {
    console.log(event$.detail);
  }
}
