import React from 'react';
import { Home, PostsList, ProfileCard, Sidebar } from '../../../components';
import { mount } from '@shopify/react-testing';
import { MockedProvider } from '@apollo/client/testing';
import '@shopify/react-testing/matchers';

describe('<Home />', () => {
  it('renders the Sidebar component', () => {
    const wrapper = mount(<MockedProvider><Home /></MockedProvider>);
    expect(wrapper).toContainReactComponent(Sidebar);
  });

  it('renders the ProfileCard component', () => {
    const wrapper = mount(<MockedProvider><Home /></MockedProvider>);
    expect(wrapper).toContainReactComponent(ProfileCard);
  });

  it('renders the PostsList component', () => {
    const wrapper = mount(<MockedProvider><Home /></MockedProvider>);
    expect(wrapper).toContainReactComponent(PostsList);
  });

});