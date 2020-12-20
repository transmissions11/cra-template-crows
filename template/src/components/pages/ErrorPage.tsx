/* istanbul ignore file */
import React from "react";

import { Code, Box, Heading, Text, Link } from "@chakra-ui/react";
import { FallbackProps } from "react-error-boundary";

const ErrorPage: React.FC<FallbackProps> = ({ error }) => {
  return (
    <>
      <Box bg="red.600" w="100%" p={4} color="white">
        <Heading>Whoops! Looks like something went wrong!</Heading>
        <Text>
          You can either reload the page, or report this error to us on{" "}
          <Link isExternal href="https://github.com/GITHUB_URL_SUFFIX">
            <u>our GitHub</u>
          </Link>
        </Text>
      </Box>

      <Code variantColor="red">{error?.toString()}</Code>
    </>
  );
};

export default ErrorPage;
