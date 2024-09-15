import { render } from "@solidjs/testing-library";
import { App } from "./App";

test("renders without crashing", () => {
	const { baseElement } = render(() => <App />);
	expect(baseElement).toBeDefined();
});
