import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import configureStore from './store';
import GlobalStyles from './theme';

import THEME_CONSTANT from './theme/constant';

const { store, persistor } = configureStore();

const App = () => {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={THEME_CONSTANT[theme]}>
			<>
				<GlobalStyles />
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<HashRouter>
							<div className="App">
								<button onClick={themeToggler}>
									{theme === 'light' ? 'light' : 'dark'}
								</button>
								<h1>Welcome to Narrasion</h1>
								<p>
									A sass platform to create and express your narrative in the
									form of web stories. Add videos, pictures, links and share
									your awesome story with the world.
								</p>
							</div>
						</HashRouter>
					</PersistGate>
				</Provider>
			</>
		</ThemeProvider>
	);
};

export default App;
