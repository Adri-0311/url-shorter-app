import type React from 'react';
import './App.css';

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
  }

	return (
		<>
			<h1>URL Shorter</h1>
			<form onSubmit={handleSubmit}>
        <input
          type='url'
          name='base-url'
          id='base-url'
          placeholder='anyurl.com'
        />
        <button type='submit'>Shortener</button>
      </form>
		</>
	);
}

export default App;
