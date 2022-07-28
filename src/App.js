import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/index';
import THEME_CONSTANT from './theme/constant';

const App = () => {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={THEME_CONSTANT[theme]}>
			<>
				<GlobalStyles />
				<div className="App">
					<button onClick={themeToggler}>Switch Theme</button>
					<h1>Welcome to Anarrativ</h1>
					<p>
						A sass platform to create and express your narrative in the form of
						web stories. Add videos, pictures, links and share your awesome
						story with the world.
					</p>
				</div>
			</>
		</ThemeProvider>
	);
};
export default App;
