import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *,
   *::before,
   *::after {
   	box-sizing: border-box;
		margin: 0;
		padding: 0;
   }

	html,
	body,
	#root {
		min-height: 100%;
	}

	#root {
		isolation: isolate;
	}

	body {
		font-family: "Instrument Sans", sans-serif;
		/* font-family: "Instrument Serif", serif; */
		line-height: 1.5;
		background-color: hsl(0 0 6%);
		color: hsl(0 0 100%);
	}

	ul {
		list-style: none;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}



`;

export default GlobalStyles;
