import React from 'react';
import About from '../About';
import { mount } from '@shopify/react-testing';

describe('<About />', () => {
  it('renders hardcoded title string', () => {
    const wrapper = mount(<About />);
    expect(wrapper.find('h1').text()).toBe('About');
  });
});