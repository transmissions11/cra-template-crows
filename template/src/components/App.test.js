import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders finished message", () => {
  render(<App />);
  const helloWorld = screen.getByText(/hello world/i);
  expect(helloWorld).toBeInTheDocument();
});
