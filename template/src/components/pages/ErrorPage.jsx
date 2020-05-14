/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";

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

const ErrorPage = ({ componentStack, error }) => {
  return (
    <>
      <Box bg="red.600" w="100%" p={4} color="white">
        <Heading>Whoops! Looks like something went wrong!</Heading>
        <Text>
          You can either reload the page, or report this error to us on{" "}
          <Link isExternal href="https://github.com/transmissionsdev/meridian">
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
            <Code variantColor="red">{error.toString()}</Code>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Stacktrace:
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Code variantColor="yellow">{componentStack}</Code>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

ErrorPage.propTypes = {
  componentStack: PropTypes.string,
  error: PropTypes.object,
};

export default ErrorPage;
