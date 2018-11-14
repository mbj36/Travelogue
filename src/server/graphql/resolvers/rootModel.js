// Imports: GraphQL
import { gql } from 'apollo-server-express';

export default gql`
    directive @permissionCheck(roles: [String]) on FIELD_DEFINITION
`;
