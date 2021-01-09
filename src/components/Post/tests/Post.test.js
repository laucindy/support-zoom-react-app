import React from 'react';
import Post from '../Post';
import GET_COMMENTS_FOR_POST from '../PostCommentsQuery';
import { mount } from '@shopify/react-testing';
import { MockedProvider } from '@apollo/client/testing';
import '@shopify/react-testing/matchers';
import { act } from 'react-dom/test-utils';
import wait from 'waait'

const mocks = [
  {
    request: {
      query: GET_COMMENTS_FOR_POST,
      variables: {
        postId: '1'
      }
    }, 
    result: {
      data: {
        commentsFromPost: [
          {
            "content": "This is great!",
            "user": {
              "name": "Millard Parker"
            }
          },
          {
            "content": "Very insightful.",
            "user": {
              "name": "Clemente O'Keefe"
            }
          }
        ]
      }
    }
  }
];

const post = {
  "id": "1",
  "title": "Test title",
  "content": "Test content",
  "user": {
    "name": "Cindy Lau"
  },
  "dateCreated": "2021-03-12",
  "category": "Thoughts",
  "tag1": "Tag1",
  "tag2": "Tag2",
  "tag3": "Sample Tag 3"
};

describe('<Post />', () => {
  it('passes post props to component', () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><Post post={post} /></MockedProvider>);
    const postProps = wrapper.find(Post).props.post;

    expect(postProps.title).toBe("Test title");
    expect(postProps.user.name).toBe("Cindy Lau");
    expect(postProps.dateCreated).toBe("2021-03-12");
    expect(postProps.content).toBe("Test content");
    expect(postProps.tag1).toBe("Tag1");
    expect(postProps.tag2).toBe("Tag2");
    expect(postProps.tag3).toBe("Sample Tag 3");
  });

  it('renders post props', async () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><Post post={post} /></MockedProvider>);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();

    expect(wrapper).toContainReactHtml('<p class="post__title">Test title</p>');
    expect(wrapper).toContainReactHtml('<p class="post__subtitle">Cindy Lau - 2021-03-12</p>');
    expect(wrapper).toContainReactHtml('<p class="post__content">Test content</p>');
    expect(wrapper).toContainReactHtml('<p class="post__category">Category: Thoughts</p>');
    expect(wrapper).toContainReactHtml('<p class="post__tags">Tags: Tag1, Tag2, Sample Tag 3</p>');
  });

  it('runs GraphQL PostCommentsQuery and renders number of comments for post', async () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><Post post={post} /></MockedProvider>);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper).toContainReactHtml('<p class="post__comments">2 comments</p>');
  });
});