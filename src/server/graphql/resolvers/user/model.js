// Imports: GraphQL
import { gql } from 'apollo-server-express';

export default gql`
    type User {
        id: String
        name: String
		email: String
    }
	
	type Query {
	    getUserById(id: String): User
	}
`;
