const { gql } = require('apollo-server');

module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    # the exclamation mark does not make it mandatory for the user. It makes it mandatory for the resolver.
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }

    # given as an input to resolver for it to return something for us
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getPosts: [Post]
    }
    # make or change our database
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
    }
`;