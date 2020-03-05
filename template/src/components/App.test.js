import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders finished message", () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText(/hello world/i);
  expect(helloWorld).toBeInTheDocument();
});
