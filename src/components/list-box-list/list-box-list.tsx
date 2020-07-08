import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

import Tunnel from '../list-box-context';

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
        <Tunnel.Consumer>
          {({ message, increment }) => (
            <div>
              <h3>Message: {message}</h3>
              <ul onFocusIn={() => increment() }>
                <slot></slot>
              </ul>
            </div>
         )}
         </Tunnel.Consumer>

      </Host>
    );
  }

}
