import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";

const ErrorBox = ({ error }) => {
  if (error) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Box>
    );
  } else {
    return null;
  }
};

ErrorBox.propTypes = {
  error: PropTypes.string,
};

export default ErrorBox;
