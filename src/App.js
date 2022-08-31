import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import LottieAnimation from './components/animations';

// imports for the ui components
// import { Text } from './components';

import configureStore from './store';
import GlobalStyles from './theme';

import THEME_CONSTANT from './theme/constant';

import * as brandAnimation from './assets/animation/brandAnimation.json';
import logo from './assets/images/circleLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const { store, persistor } = configureStore();

const App = () => {
	const [theme, setTheme] = useState('dark');

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
							{/* All the below code need to be reafctored */}
							<div className="App">
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										position: 'fixed',
										flex: '1',
										top: 0,
										left: 0,
										right: 0,
									}}
								>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<img
											src={logo}
											style={{ margin: '8px' }}
											height={32}
											width={32}
										/>
										<p>Narrasion</p>
									</div>

									<div onClick={themeToggler} style={{ margin: '8px 16px' }}>
										{theme === 'light' ? (
											<FontAwesomeIcon icon={faMoon} />
										) : (
											<FontAwesomeIcon icon={faSun} />
										)}
									</div>
								</div>
								<div
									style={{
										display: 'flex',
										margin: ' 32px auto',
										maxWidth: '1024px',
										flexWrap: 'wrap',
									}}
								>
									<div
										style={{
											flex: 1,
											display: 'flex',
											flexDirection: 'column',
											margin: '16px',
										}}
									>
										<img
											src={logo}
											style={{ margin: '64px 0' }}
											height={108}
											width={108}
										/>
										<h2>Welcome to Narrasion</h2>
										<h6 style={{ margin: '64px 0' }}>
											A sass platform to create and express your narrative in
											the form of web stories. Add videos, pictures, links and
											share your awesome story with the world.
										</h6>
										<h5><u>Narrasion</u> is currently being Built. ✨ </h5>
									</div>
									<div style={{ flex: 1, margin: '16px' }}>
										<LottieAnimation
											jsonFile={brandAnimation}
											loop
											autoplay
											height={320}
											width={320}
											isStopped
											isPaused
											isClickToPauseDisabled
										/>
									</div>
								</div>
							</div>
						</HashRouter>
					</PersistGate>
				</Provider>
			</>
		</ThemeProvider>
	);
};

export default App;
