import { gql } from '@apollo/client';

export default gql`
  query($postId: ID!) {
    commentsFromPost(postId: $postId) {
      content,
      user {
        name
      }
    }
  }
`;