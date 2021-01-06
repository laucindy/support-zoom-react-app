import React from 'react'
import About from '../About'
import { mount } from '@shopify/react-testing'

function MyComponent({onAction}) {
  return <button onClick={onAction}>CLICK</button>;
}

describe('onAction()', () => {
  it('is called when the child component is clicked', () => {
    const spy = jest.fn();
    const myComponent = mount(<MyComponent onAction={spy} />);
    myComponent.find('button').trigger('onClick');
    expect(spy).toHaveBeenCalled();
  })
})


describe('<About />', () => {
  it('renders hardcoded title string', () => {
    const wrapper = mount(<About />);
    expect(wrapper.find('h1').text()).toBe('About');
  });
});