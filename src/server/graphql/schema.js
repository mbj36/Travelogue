import { ApolloServer } from "apollo-server-express";
import TYPEDEFS from "./models";
import RESOLVERS from "./resolvers";

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

// Exports
export default SERVER;
