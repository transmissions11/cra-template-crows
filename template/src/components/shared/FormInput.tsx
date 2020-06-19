import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Input } from "@chakra-ui/core";

const FormInput = ({ label, value, setValue, ...extraParams }) => (
  <>
    <Box
      borderRadius="7px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={3}
      border="2px"
      borderColor="whatsapp.500"
    >
      <Text fontWeight="bold" color="whatsapp.500" mr={2}>
        {label}:
      </Text>
      <Input
        {...extraParams}
        size="sm"
        border="2px"
        borderColor="whatsapp.500"
        borderRadius="6px"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Box>
  </>
);

FormInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default FormInput;
