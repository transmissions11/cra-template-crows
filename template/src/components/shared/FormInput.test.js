import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormInput from "./FormInput";

test("renders form input and allows you to set input and provide placeholders", async () => {
  let formValue = "";
  const setFormValue = jest.fn((newFormValue) => {
    formValue = newFormValue;
  });

  render(
    <ThemeProvider>
      <FormInput
        label="Name"
        value={formValue}
        setValue={setFormValue}
        placeholder="This is a placeholder."
      />
    </ThemeProvider>
  );

  expect(screen.getByText("Name:")).toBeInTheDocument();

  await userEvent.type(
    screen.getByPlaceholderText("This is a placeholder."),
    "Ben Mayer"
  );

  expect(setFormValue).toHaveBeenCalledWith("Ben Mayer");
});
