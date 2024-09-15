// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/SolidJS/i)
// learn more: https://github.com/testing-library/jest-dom

// Mock matchmedia
window.matchMedia =
	window.matchMedia ||
	(() => ({
		matches: false,
		addListener: () => {},
		removeListener: () => {},
	}));
