import getUserById from "./resolvers/user/getUserById";

const Resolvers = {
    Query: {
        getUserById: getUserById
    }
};

export default Resolvers;
