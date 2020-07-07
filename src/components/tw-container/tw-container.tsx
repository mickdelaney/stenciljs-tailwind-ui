import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "tw-container",
  styleUrl: "tw-container.css",
  shadow: false,
})
export class TwContainer implements ComponentInterface {
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
