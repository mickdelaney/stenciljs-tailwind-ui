import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "list-box",
  styleUrl: "list-box.css",
  shadow: true,
})
export class ListBox implements ComponentInterface {
  @Prop()
  items: Array<string>;

  render() {
    return (
      <div>
        <h2>{this.items.length} Items</h2>
        <div class="my-2 p-4">
          {this.items.map((item: string) => (
            <list-box-item item={item} />
          ))}
        </div>
      </div>
    );
  }
}
