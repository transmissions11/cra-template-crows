import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders finished message", () => {
  const { getByText } = render(<App />);
  const finishedMessage = getByText(/cra-template-crows/i);
  expect(finishedMessage).toBeInTheDocument();
});
