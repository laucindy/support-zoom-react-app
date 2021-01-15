import React from 'react';
import Contact from '../Contact';
import { mount } from '@shopify/react-testing';

describe('<Contact />', () => {
  it('renders hardcoded title string', () => {
    const wrapper = mount(<Contact />);
    expect(wrapper.find('h1').text()).toBe('Contact');
  });
}); 