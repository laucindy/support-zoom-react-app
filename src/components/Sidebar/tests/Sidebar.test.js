import React from 'react';
import { ProfileCard, Sidebar } from '../../../components';
import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<Sidebar />', () => {
  it('renders children props', () => {
    const user = {name: "Cindy Lau", followers: 25, following: 35, microposts: 20};
    const children = <ProfileCard user={user} />;
    const wrapper = mount(<Sidebar>{children}</Sidebar>);
    expect(wrapper).toContainReactComponent(ProfileCard);
  });

});