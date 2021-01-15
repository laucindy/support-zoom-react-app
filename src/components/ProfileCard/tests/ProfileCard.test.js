import React from 'react';
import ProfileCard from '../ProfileCard';
import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<ProfileCard />', () => {
  it('renders user props', () => {
    const user = {name: "Cindy Lau", followers: 25, following: 35, microposts: 20}
    const wrapper = mount(<ProfileCard user={user} />);

    expect(wrapper).toContainReactHtml('<p class="name">Cindy Lau</p>');
    expect(wrapper).toContainReactHtml('<div><span>Microposts</span>20</div>');
    expect(wrapper).toContainReactHtml('<div><span>Followers</span>25</div>');
    expect(wrapper).toContainReactHtml('<div><span>Following</span>35</div>');
  });

  it('passes user props to component', () => {
    const user = {name: "Cindy Lau", followers: 25, following: 35, microposts: 20}
    const wrapper = mount(<ProfileCard user={user} />);

    expect(wrapper.props.user.name).toBe("Cindy Lau");
    expect(wrapper.props.user.followers).toBe(25);
    expect(wrapper.props.user.following).toBe(35);
    expect(wrapper.props.user.microposts).toBe(20);
  });
});