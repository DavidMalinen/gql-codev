/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.jsx';
import './index.css';

const client = new ApolloClient({
	uri: 'https://flyby-router-demo.herokuapp.com/',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

// ? type Book : title + author (+ barcode and borrowed)
// ? two types: Client & Employee
// ? -> date of emprunt

// TODO page inventaire & page client
