const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Todo {
    _id: ID
    title: String
    content: String
  }
  type Query {
    Todo(_id: ID!): Todo
    Todos(gridContext: gridContext): gridResult
  }
  input gridContext{
    page: Int,
    itemPerPage: Int,
    isGrabAll: Boolean,
    filterSubject: String,
    sortSubject: String,
    optionalParams: String
  }
  type gridResult{
    data: [Todo],
    rowCount: Int
  }

  type Mutation {
    createTodo(title: String!, content: String!): Todo
    updateTodo(_id: ID!, title: String!, content: String!): Todo
    deleteTodo(_id: ID!): String
  }
`

export default typeDefs