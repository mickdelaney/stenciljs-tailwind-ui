import { Component, ComponentInterface, Host, h, Listen, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'list-box-option',
  styleUrl: 'list-box-option.css',
  shadow: false,
})
export class ListBoxOption implements ComponentInterface {
  
  @Prop()
  option: string;
  
  @Event({
    eventName: 'itemSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) 
  selected: EventEmitter<string>;

  @Listen('click', { capture: true })
  handleClick() {
    this.selected.emit(this.option);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
