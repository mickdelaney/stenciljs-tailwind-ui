import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'list-box-label',
  styleUrl: 'list-box-label.css',
  shadow: false,
})
export class ListBoxLabel implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
