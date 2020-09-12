/* istanbul ignore file */
import React from "react";

import {
  Code,
  Accordion,
  AccordionHeader,
  Box,
  Heading,
  Text,
  Link,
  Icon,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/core";
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
            <Icon name="external-link" mx="2px" />
          </Link>
        </Text>
      </Box>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Error:
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Code variantColor="red">{error?.toString()}</Code>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ErrorPage;
