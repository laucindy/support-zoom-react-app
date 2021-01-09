import { gql } from '@apollo/client';
 
 /* get list of all available users/authors for blog posts */
 export default gql`
 query {
   users {
     name
   }
 }
`;