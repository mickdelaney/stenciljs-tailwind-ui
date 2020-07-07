import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-box-item',
  styleUrl: 'list-box-item.css',
  shadow: true,
})
export class ListBoxItem implements ComponentInterface {

  @Prop() 
  item: string;

  render() {
    return (
      <div class="text-blue-400">
        <p>{this.item}</p>
      </div>
    );
  }

}
