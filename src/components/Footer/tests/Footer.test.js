import React from 'react';
import Footer from '../Footer';
import { mount } from '@shopify/react-testing';
import { StaticRouter } from 'react-router';
import { Link } from 'react-router-dom';
 
describe('<Footer />', () => {
  it('links to About page', () => {
    const wrapper = mount(<StaticRouter><Footer /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/about'})).not.toBeNull();
  });

  it('links to Contact page', () => {
    const wrapper = mount(<StaticRouter><Footer /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/contact'})).not.toBeNull();
  });
});