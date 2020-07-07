import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "tw-header",
  styleUrl: "tw-header.css",
  shadow: true,
})
export class TwHeader implements ComponentInterface {
  @Prop()
  color: string = "blue";

  render() {
    return (
      <Host>
        <div class={"p-6 bg-blue "}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
