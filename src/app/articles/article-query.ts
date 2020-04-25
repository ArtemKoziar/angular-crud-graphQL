import gql from 'graphql-tag';

export class ArticleQuery {

  static Articles = gql`
  query {
    users{
      id
      name
    }
  }`;

  static addArticle = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }`;

  static removeArticle = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
    }
  }`;

  static updateArticle = gql`
  mutation updateUser($id: String!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
    }
  }`;
}
