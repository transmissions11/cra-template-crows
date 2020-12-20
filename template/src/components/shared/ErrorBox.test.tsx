import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";

import ErrorBox from "./ErrorBox";

test("returns null if error is undefined", () => {
  render(
    <ChakraProvider>
      <ErrorBox error={undefined} />
    </ChakraProvider>
  );

  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
});

test("renders error box with error text", () => {
  render(
    <ChakraProvider>
      <ErrorBox error={"Uh oh something bad happened"} />
    </ChakraProvider>
  );

  expect(screen.getByText("Uh oh something bad happened")).toBeInTheDocument();
  expect(screen.getByText(/error!/i)).toBeInTheDocument();
});
