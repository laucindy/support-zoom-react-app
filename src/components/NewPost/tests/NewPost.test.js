import React from 'react';
import {Banner, Button, Form, PolarisTestProvider, Select, TextField} from '@shopify/polaris';

import NewPost from '../NewPost';
import ADD_POST from '../CreatePostMutation';
import GET_AUTHORS from '../GetAuthorsQuery';

import { mount } from '@shopify/react-testing';
import { MockedProvider } from '@apollo/client/testing';
import '@shopify/react-testing/matchers';
import '@shopify/graphql-testing/matchers'
import { act } from 'react-dom/test-utils';
import wait from 'waait';

const today = new Date()
today.setHours(0, 0, 0, 0);

const mocks = [
  {
    request: {
      query: GET_AUTHORS
    },
    result: {
      data: {
        "users": [
          {
            "name": "Cindy Lau"
          },
          {
            "name": "John Smith"
          },
          {
            "name": "Jane Doe"
          }
        ]
      }
    }
  },
  {
    request: {
      query: ADD_POST,
      variables: {
        title: "Test title",
        content: "Test content",
        dateCreated: today,
        user: "Cindy Lau",
        category: "Thoughts",
        tag1: "Tag1",
        tag2: "Tag2",
        tag3: "Tag3"
      }
    }, 
    result: {
      data: {
        createPost: {
          post: {
            id: "1",
            title: "Test title",
            content: "Test content",
            dateCreated: today,
            category: "Thoughts",
            tag1: "Tag1",
            tag2: "Tag2",
            tag3: "Tag3",
            user: {
              name: "Cindy Lau"
            }
          }
        }
      }
    }
  }
];

const testComponent = <MockedProvider mocks={mocks} addTypename={false}>
                        <PolarisTestProvider>
                          <NewPost />
                        </PolarisTestProvider>
                      </MockedProvider>;

describe('<NewPost />', () => {
  it('renders new post form', async () => {
    const wrapper = mount(testComponent);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();

    expect(wrapper).toContainReactComponent(Form);
  });

  it('renders new post form components', async () => {
    const wrapper = mount(testComponent);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();

    expect(wrapper).toContainReactComponent(TextField, { 'label': 'Title' });
    expect(wrapper).toContainReactComponent(TextField, { 'label': 'Content' });
    expect(wrapper).toContainReactComponent(TextField, { 'label': 'Date' }); // TextField is the popup activator
    expect(wrapper).toContainReactComponent(Select, { 'label': 'Author' });
    expect(wrapper).toContainReactComponent(Select, { 'label': 'Category' });
    expect(wrapper).toContainReactComponent(TextField, { 'label': 'Tag 1' });
    expect(wrapper).toContainReactComponent(TextField, { 'label': 'Tag 2' });
    expect(wrapper).toContainReactComponent(TextField, { 'label': 'Tag 3' });
    expect(wrapper).toContainReactComponent(Button, { 'submit': true });
  });

  it('populates the author field with values from the GraphQL GET_AUTHOR query', async () => {
    const wrapper = mount(testComponent);

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();

    expect(wrapper.find(Select, {'label': 'Author' })).toContainReactHtml('<option value="Cindy Lau">Cindy Lau</option><option value="John Smith">John Smith</option><option value="Jane Doe">Jane Doe</option>');
  });

  it('creates a new post using the GraphQL ADD_POST mutation', async () => {
    const wrapper = mount(testComponent);

    // first render, wait for GET_AUTHOR query to load
    // TO-DO: may be replaceable with mocking the authors field, as that's already tested above
    // https://jestjs.io/docs/en/manual-mocks.html
    await act(async () => {
      await wait(0);
    });

    await wrapper.update();

    // update form fields if there aren't default values. Date & Author already have default values (today's date and "Cindy Lau")
    wrapper.find(TextField, { 'label': 'Title' }).trigger('onChange', 'Test title');
    wrapper.find(TextField, { 'label': 'Content' }).trigger('onChange', 'Test content');
    wrapper.find(Select, { 'label': 'Category' }).trigger('onChange', 'Thoughts');
    wrapper.find(TextField, { 'label': 'Tag 1' }).trigger('onChange', 'Tag1');
    wrapper.find(TextField, { 'label': 'Tag 2' }).trigger('onChange', 'Tag2');
    wrapper.find(TextField, { 'label': 'Tag 3' }).trigger('onChange', 'Tag3');

    const form = wrapper.find(Form);
    form.trigger('onSubmit');

    // second render, wait for the "successfully created post" banner to load
    await act(async () => {
      await wait(0);
    });
    
    await wrapper.update();
    expect(wrapper).toContainReactComponent(Banner, {"status": "success"});
  });
});