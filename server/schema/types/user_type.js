const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString }
    }
});

module.exports = UserType;
