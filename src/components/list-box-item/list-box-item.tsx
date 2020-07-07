import { Component, Event, EventEmitter, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-box-item',
  styleUrl: 'list-box-item.css',
  shadow: true,
})
export class ListBoxItem implements ComponentInterface {

  @Prop() 
  item: string;

  @Event() 
  clicked: EventEmitter<string>;

  render() {
    return (
      <div onClick={(event: UIEvent) => this.onClick(event)} class="text-blue-400">
        <p>{this.item}</p>
      </div>
    );
  }

  onClick(e: Event) {
    e.preventDefault();
    this.clicked.emit(this.item);
  }


}
