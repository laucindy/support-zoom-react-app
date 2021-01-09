import { gql } from '@apollo/client';

export default gql`
  query {
    posts {
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
`;