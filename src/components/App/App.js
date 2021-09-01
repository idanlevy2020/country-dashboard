import './App.css';
import { useState, useEffect } from 'react';
// import Header from '../Header/Header';
import Main from '../Main/Main';

// app() -> setCountries
// setCountries() => app()

// useEffect - run callback after render

function App() {
  const [theme, setTheme] = useState('light');

	function toggleTheme() {
		if (theme === 'dark') return setTheme('light');
		else if (theme === 'light') return setTheme('dark');
	}

  return( <div className={`App theme-${theme}`}>
    <div className="Header">
      <h2> Where in the world? </h2>
      <button onClick={toggleTheme} className='toggleBtn'>Dark Mode.</button>
    </div>
    {/* <Header /> */}
    <Main/>
  </div>);
}

export default App;