import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-box-list',
  styleUrl: 'list-box-list.css',
  shadow: false,
})
export class ListBoxList implements ComponentInterface {
  @Prop()
  show: boolean;

  render() {
    return (
      <Host>        
        <ul onFocusIn={e => console.log("focusin", e)}>
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
