import React from 'react';
import Settings from '../Settings';
import { mount } from '@shopify/react-testing';

describe('<Settings />', () => {
  it('renders hardcoded title string', () => {
    const wrapper = mount(<Settings />);
    expect(wrapper.find('h1').text()).toBe('Settings');
  });
});