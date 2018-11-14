import { mergeTypes } from "merge-graphql-schemas";
import UserModels from "./resolvers/user/model";
import root from "./resolvers/rootModel";

const models = [UserModels, root];

export default mergeTypes(models);
