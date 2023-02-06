import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!,$lastName: String!, $email: String!, $password: String!) {
    addProfile(firstName: $firstName,lastName: $lastName, email: $email, password: $password) {
      token
      profile {
        _id
        firstName
        lastName
        email
        password
       
      }
    }
  }
`;

// export const ADD_POST = gql`
//   mutation addPost($postText: String!, $postAuthor: String!) {
//     addPost(postText: $postText, postAuthor: $postAuthor) {
//       _id
//       postText
//       postAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        email 
      }
    }
  }
`;
