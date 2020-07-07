import {
  Component,
  Event,
  EventEmitter,
  ComponentInterface,
  h,
  Prop,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'list-box-item',
  styleUrl: 'list-box-item.css',
  shadow: false,
})
export class ListBoxItem implements ComponentInterface {
  @Prop()
  item: string;

  @Event()
  clicked: EventEmitter<string>;

  @Listen('click', { capture: true })
  handleClick() {
    this.clicked.emit(this.item);
  }

  render() {
    return (
      <div class="text-blue-400">
        <p>{this.item}</p>
      </div>
    );
  }
}
