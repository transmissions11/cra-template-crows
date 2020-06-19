import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { render, screen } from "@testing-library/react";

import ErrorBox from "./ErrorBox";

test("returns null if error is undefined", () => {
  render(
    <ThemeProvider>
      <ErrorBox error={undefined} />
    </ThemeProvider>
  );

  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
});

test("renders error box with error text", () => {
  render(
    <ThemeProvider>
      <ErrorBox error={"Uh oh something bad happened"} />
    </ThemeProvider>
  );

  expect(screen.getByText("Uh oh something bad happened")).toBeInTheDocument();
  expect(screen.getByText(/error!/i)).toBeInTheDocument();
});
