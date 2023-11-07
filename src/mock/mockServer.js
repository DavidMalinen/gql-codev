import { buildSchema } from 'graphql';
import { mockServer } from '@graphql-tools/mock';

const typeDefs = `
    type Book {
        id: ID!
        title: String!
        isAvailable: Boolean!   
    }
    type RootQuery {
        book(id: ID): Book
    }
    schema {
        query: RootQuery
    }
`;

const schema = buildSchema(typeDefs);
const mocks = {
	RootQuery: () => ({
		book: (o, { id }) => ({ id }),
	}),
	Book: () => ({
		id: (id) => id,
		title: (title) => title,
		author: (author) => author,
		isAvailable: (isAvailable) => isAvailable,
		history: (history) => history,
	}),
};

export const server = mockServer(schema, mocks);
