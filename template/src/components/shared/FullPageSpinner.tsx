/* istanbul ignore file */
import React from "react";
import { Spinner } from "@chakra-ui/react";

const FullPageSpinner = () => {
  return (
    <Spinner
      data-testid="full-page-spinner"
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        marginTop: "-1.5rem",
        marginLeft: "-1.5rem",
      }}
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="whatsapp.500"
      size="xl"
    />
  );
};

export default FullPageSpinner;
