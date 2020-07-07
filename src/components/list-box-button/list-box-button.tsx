import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'list-box-button',
  styleUrl: 'list-box-button.css',
  shadow: false,
})
export class ListBoxButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
