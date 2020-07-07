import {
  Component,
  ComponentInterface,
  h,
  Host,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'list-box',
  styleUrl: 'list-box.css',
  shadow: false,
})
export class ListBox implements ComponentInterface {
 
  render() {
    return (
      <Host>
        <slot></slot>    
      </Host>
    );
  }

  @Listen('itemSelected')
  todoCompletedHandler(event: CustomEvent<string>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
}
