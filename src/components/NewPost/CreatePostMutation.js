import { gql } from '@apollo/client';

export default gql`
  mutation CreatePost($title: String!, $content: String!, $dateCreated: String!, $user: String!, $category: String!, $tag1: String!, $tag2: String!, $tag3: String!) {
    createPost(input: {
      postRequest: {
        title: $title
        content: $content
        dateCreated: $dateCreated
        user: $user
        category: $category
        tag1: $tag1
        tag2: $tag2
        tag3: $tag3
      }
    }) {
      post {
        id
        title
        content
        dateCreated
        user {
          name
        }
        category
        tag1
        tag2
        tag3
      }
    }
  }
`;