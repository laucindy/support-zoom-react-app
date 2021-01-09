import React from 'react';
import { Post, PostsList } from '../../../components';
import GET_POSTS from '../PostsListQuery';
import { mount } from '@shopify/react-testing';
import { MockedProvider } from '@apollo/client/testing';
import '@shopify/react-testing/matchers';
import { act } from 'react-dom/test-utils';
import wait from 'waait'

const mocks = [
  {
    request: {
      query: GET_POSTS
    }, 
    result: {
      data: {
        posts: [
          {
            "id": "1",
            "title": "Odio reprehenderit magni dolorum.",
            "content": "Paulatim molestiae comburo. Tempore articulus comedo.",
            "user": {
              "name": "Jade Mayer MD"
            },
            "dateCreated": "2021-03-12",
            "category": "Thoughts",
            "tag1": "Tag1",
            "tag2": "Tag2",
            "tag3": "Sample Tag 3"
          },
          {
            "id": "2",
            "title": "Iure occaecati provident quae.",
            "content": "Comprehendo adsum credo. Tendo tempus quisquam.",
            "user": {
              "name": "Meta Wolf Sr."
            },
            "dateCreated": "2021-04-13",
            "category": "Thoughts",
            "tag1": "Tag1",
            "tag2": "Sample Tag 2",
            "tag3": "Sample Tag 3"
          },
          {
            "id": "3",
            "title": "Necessitatibus velit quo dolor.",
            "content": "Sulum vita correptius. Voluptas argentum crudelis.",
            "user": {
              "name": "Dan Hermann"
            },
            "dateCreated": "2021-12-01",
            "category": "Thoughts",
            "tag1": "Sample Tag 1",
            "tag2": "Tag2",
            "tag3": "Tag3"
          }
        ]
      }
    }
  }
];

const mockError = [
  {
    request: {
      query: GET_POSTS
    }, 
    error: new Error('An error occurred.')
  }
];

describe('<PostsList />', () => {
  it('renders the loading state when the PostsList component is first loaded', () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><PostsList /></MockedProvider>);
    expect(wrapper).toContainReactHtml('Loading...');
  });

  it('renders the error state for the PostsList component', async () => {
    const wrapper = mount(<MockedProvider mocks={mockError} addTypename={false}><PostsList /></MockedProvider>);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactHtml('An error occurred.');
  });

  it('renders the Post child component', async () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><PostsList /></MockedProvider>);
    
    await act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactComponent(Post);
  });

  it('renders hardcoded title string', async () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><PostsList /></MockedProvider>);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper.find('h1').text()).toBe('Posts');
  });
});