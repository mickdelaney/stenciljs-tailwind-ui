/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ListBox {
        "intro": string;
    }
    interface ListBoxButton {
    }
    interface ListBoxItem {
        "item": string;
    }
    interface ListBoxLabel {
    }
    interface ListBoxList {
        "show": boolean;
    }
    interface ListBoxOption {
        "option": string;
    }
    interface TwContainer {
    }
    interface TwPage {
    }
}
declare global {
    interface HTMLListBoxElement extends Components.ListBox, HTMLStencilElement {
    }
    var HTMLListBoxElement: {
        prototype: HTMLListBoxElement;
        new (): HTMLListBoxElement;
    };
    interface HTMLListBoxButtonElement extends Components.ListBoxButton, HTMLStencilElement {
    }
    var HTMLListBoxButtonElement: {
        prototype: HTMLListBoxButtonElement;
        new (): HTMLListBoxButtonElement;
    };
    interface HTMLListBoxItemElement extends Components.ListBoxItem, HTMLStencilElement {
    }
    var HTMLListBoxItemElement: {
        prototype: HTMLListBoxItemElement;
        new (): HTMLListBoxItemElement;
    };
    interface HTMLListBoxLabelElement extends Components.ListBoxLabel, HTMLStencilElement {
    }
    var HTMLListBoxLabelElement: {
        prototype: HTMLListBoxLabelElement;
        new (): HTMLListBoxLabelElement;
    };
    interface HTMLListBoxListElement extends Components.ListBoxList, HTMLStencilElement {
    }
    var HTMLListBoxListElement: {
        prototype: HTMLListBoxListElement;
        new (): HTMLListBoxListElement;
    };
    interface HTMLListBoxOptionElement extends Components.ListBoxOption, HTMLStencilElement {
    }
    var HTMLListBoxOptionElement: {
        prototype: HTMLListBoxOptionElement;
        new (): HTMLListBoxOptionElement;
    };
    interface HTMLTwContainerElement extends Components.TwContainer, HTMLStencilElement {
    }
    var HTMLTwContainerElement: {
        prototype: HTMLTwContainerElement;
        new (): HTMLTwContainerElement;
    };
    interface HTMLTwPageElement extends Components.TwPage, HTMLStencilElement {
    }
    var HTMLTwPageElement: {
        prototype: HTMLTwPageElement;
        new (): HTMLTwPageElement;
    };
    interface HTMLElementTagNameMap {
        "list-box": HTMLListBoxElement;
        "list-box-button": HTMLListBoxButtonElement;
        "list-box-item": HTMLListBoxItemElement;
        "list-box-label": HTMLListBoxLabelElement;
        "list-box-list": HTMLListBoxListElement;
        "list-box-option": HTMLListBoxOptionElement;
        "tw-container": HTMLTwContainerElement;
        "tw-page": HTMLTwPageElement;
    }
}
declare namespace LocalJSX {
    interface ListBox {
        "intro"?: string;
    }
    interface ListBoxButton {
    }
    interface ListBoxItem {
        "item"?: string;
        "onClicked"?: (event: CustomEvent<string>) => void;
    }
    interface ListBoxLabel {
    }
    interface ListBoxList {
        "show"?: boolean;
    }
    interface ListBoxOption {
        "onItemSelected"?: (event: CustomEvent<string>) => void;
        "option"?: string;
    }
    interface TwContainer {
    }
    interface TwPage {
    }
    interface IntrinsicElements {
        "list-box": ListBox;
        "list-box-button": ListBoxButton;
        "list-box-item": ListBoxItem;
        "list-box-label": ListBoxLabel;
        "list-box-list": ListBoxList;
        "list-box-option": ListBoxOption;
        "tw-container": TwContainer;
        "tw-page": TwPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "list-box": LocalJSX.ListBox & JSXBase.HTMLAttributes<HTMLListBoxElement>;
            "list-box-button": LocalJSX.ListBoxButton & JSXBase.HTMLAttributes<HTMLListBoxButtonElement>;
            "list-box-item": LocalJSX.ListBoxItem & JSXBase.HTMLAttributes<HTMLListBoxItemElement>;
            "list-box-label": LocalJSX.ListBoxLabel & JSXBase.HTMLAttributes<HTMLListBoxLabelElement>;
            "list-box-list": LocalJSX.ListBoxList & JSXBase.HTMLAttributes<HTMLListBoxListElement>;
            "list-box-option": LocalJSX.ListBoxOption & JSXBase.HTMLAttributes<HTMLListBoxOptionElement>;
            "tw-container": LocalJSX.TwContainer & JSXBase.HTMLAttributes<HTMLTwContainerElement>;
            "tw-page": LocalJSX.TwPage & JSXBase.HTMLAttributes<HTMLTwPageElement>;
        }
    }
}
