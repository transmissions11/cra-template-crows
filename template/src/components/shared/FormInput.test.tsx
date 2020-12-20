import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormInput from "./FormInput";

test("renders form input and allows you to set input and provide placeholders", async () => {
  let formValue = "";
  const setFormValue = jest.fn((newFormValue) => {
    formValue = newFormValue;
  });

  render(
    <ChakraProvider>
      <FormInput
        label="Name"
        value={formValue}
        setValue={setFormValue}
        placeholder="This is a placeholder."
      />
    </ChakraProvider>
  );

  expect(screen.getByText("Name:")).toBeInTheDocument();

  const toBeTypedText = "Ben Mayer";

  await userEvent.type(
    screen.getByPlaceholderText("This is a placeholder."),
    toBeTypedText
  );

  for (var i = 0; i < toBeTypedText.length; i++) {
    expect(setFormValue).toHaveBeenCalledWith(toBeTypedText.charAt(i));
  }
});
