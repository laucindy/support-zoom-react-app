import React from 'react'
import Header from '../Header'
import { mount } from '@shopify/react-testing'
import { StaticRouter } from 'react-router'
import { Link } from 'react-router-dom'
 
describe('<Header />', () => {
  it('links to Home page', () => {
    const wrapper = mount(<StaticRouter><Header /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/'})).not.toBeNull();
  });

  it('links to Users page', () => {
    const wrapper = mount(<StaticRouter><Header /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/users'})).not.toBeNull();
  });

  it('links to Profile page', () => {
    const wrapper = mount(<StaticRouter><Header /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/profile'})).not.toBeNull();
  });

  it('links to Settings page', () => {
    const wrapper = mount(<StaticRouter><Header /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/settings'})).not.toBeNull();
  });

  it('links to New Post page', () => {
    const wrapper = mount(<StaticRouter><Header /></StaticRouter>);
    expect(wrapper.find(Link, {to: '/newpost'})).not.toBeNull();
  });
});