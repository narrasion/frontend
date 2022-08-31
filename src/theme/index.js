import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    transition: all 0.50s linear;
  }

  h1, h2 , h3 , h4, h5, h6, p{
    margin: 0;
    line-height: 1.1;
  }

  h1 {
    font-size: 3.6em;
    font-weight: 900;
  }

  h2 {
	  font-size: 3.2em;
    font-weight: 900;
  }

  h3 {
	  font-size: 36px;
  }

  h4 {
	  font-size: 24px;
  }

  h5 {
	  font-size: 18px;
  }

  h6 {
	  font-size: 16px;
  }

  p {
	  font-size: 14px;
  }
`;

export default GlobalStyles;
