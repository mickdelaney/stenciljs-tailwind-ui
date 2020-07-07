import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  
  @Prop() 
  first: string;

  @Prop() 
  middle: string;

  @Prop() 
  last: string;


  @State()
  items = [
    'Liverpool',
    'Manchester City',
    'Leicester City'
  ];

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {

    return <div class={'m-6 text-orange-600'}>
      Hello, World! I'm {this.getText()}
      <list-box onSelected={ev => this.onItemSelected(ev)} items={this.items}/>
    </div>;
  }

  private onItemSelected(event$: CustomEvent<string>) { 
    console.log(event$.detail);
  }
  
}
