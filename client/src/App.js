import './App.css'

function App() {
	return (
		<div className='App'>
			<h1>CRUD APP</h1>
			<form className='form'>
				<label htmlFor=''> Movie Name:</label>
				<input type='text' name='movieName' />
				<label htmlFor=''> Review:</label>
				<input type='text' name='movieReview' />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default App
