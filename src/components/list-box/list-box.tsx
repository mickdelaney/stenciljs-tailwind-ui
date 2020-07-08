import { Component, ComponentInterface, h, Host, Listen, Prop, State } from '@stencil/core';

import Tunnel from '../list-box-context';

@Component({
  tag: 'list-box',
  styleUrl: 'list-box.css',
  shadow: false,
})
export class ListBox implements ComponentInterface {

  @Prop() 
  intro: string = 'Hello!';
  @State() 
  message: string = '';

  count: number = 0;

  increment = () => {
    this.count = this.count + 1;
    this.message = `${this.intro} ${this.count}`;
  }

  render() {
    const tunnelState = {
      message: this.message,
      increment: this.increment,
    };

    return (
      <Host>
        <Tunnel.Provider state={tunnelState}>
          <slot></slot>
        </Tunnel.Provider>
      </Host>
    );
  }

  @Listen('itemSelected')
  todoCompletedHandler(event: CustomEvent<string>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
}
