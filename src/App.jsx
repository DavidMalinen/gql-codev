import './App.css';
import { server } from './mock/mockServer.js';

const query = /* GraphQL */ `
	query getBookTitle {
		book(id: 1) {
			title
		}
	}
`;

const results = server.query(query).then((response) => {
	console.log(response);
});

function App() {
	return (
		<div className='App'>
			{/*			<form>
				<input
					type='text'
					placeholder='title'
				/>
				<input
					type='text'
					placeholder='author'
				/>
				<input
					type='text'
					placeholder='barcode'
				/>
	</form>*/}
			<p></p>
		</div>
	);
}

export default App;
