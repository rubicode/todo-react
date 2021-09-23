import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
});

export const loadTodos = () => {
    const GET_TODOS = gql`
      {
        getTodos{
          _id
          title
          complete
        }
      }
      `
    return client.query({ query: GET_TODOS }).then(response => response.data.getTodos
    ).catch(err => {
        throw err
    })
}

export const addTodo = (title) => {
    const ADD_TODO = gql`
    mutation createTodo($title: String!) {
        createTodo(input: {
            title: $title
        }) {
            _id
            title,
            complete
        }
    }`
    client.mutate({ mutation: ADD_TODO, variables: { title } })
        .then(response => response.data.createTodo)
        .catch(err => {
            throw err
        })
}