import React from 'react';
import Profile from '../Profile';
import { mount } from '@shopify/react-testing';

describe('<Profile />', () => {
  it('renders hardcoded title string', () => {
    const wrapper = mount(<Profile />);
    expect(wrapper.find('h1').text()).toBe('Profile');
  });
});