import React from "react";

import { Box, Text, Input } from "@chakra-ui/core";

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  [key: string]: any;
}

const FormInput: React.FC<Props> = ({
  label,
  value,
  setValue,
  ...extraParams
}) => (
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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
    </Box>
  </>
);

export default FormInput;
