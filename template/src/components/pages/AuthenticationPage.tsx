import React, { useState } from "react";
import FormInput from "../shared/FormInput";

import { Box, Heading, Text, Button, Link, Stack } from "@chakra-ui/core";

import ErrorBox from "../shared/ErrorBox";

import { useAuth } from "../../context/AuthContext";

const SignInForm = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onSignIn = () => {
    setError(undefined);
    setLoading(true);

    signIn(email, password).catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  };

  return (
    <Stack shouldWrapChildren spacing={4} {...(error && { mt: 4 })}>
      <ErrorBox error={error} />

      <FormInput
        label="Email"
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="hello@example.com"
      />

      <FormInput
        data-testid="password"
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
      />

      <Button
        variantColor="whatsapp"
        onClick={onSignIn}
        isLoading={loading}
        width="100%"
      >
        Sign In
      </Button>
    </Stack>
  );
};

const SignUpForm = () => {
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onSignUp = () => {
    setError(undefined);
    setLoading(true);

    signUp(email, password).catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  };

  return (
    <Stack shouldWrapChildren spacing={4} {...(error && { mt: 4 })}>
      <ErrorBox error={error} />

      <FormInput
        label="Email"
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="hello@example.com"
      />

      <FormInput
        label="Password"
        data-testid="password"
        value={password}
        setValue={setPassword}
        type="password"
      />

      <Button
        variantColor="whatsapp"
        onClick={onSignUp}
        isLoading={loading}
        width="100%"
      >
        Sign Up
      </Button>
    </Stack>
  );
};

const AuthenticationPage = () => {
  const [selectedMethod, setAuthMethod] = useState("Sign-In");

  return (
    <Box h="100%" w="100%" p={5} overflowY="scroll">
      <Heading size="xl" as="h1" color="whatsapp.500" textAlign="center">
        {selectedMethod}
      </Heading>
      <Box
        borderRadius="7px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={2}
        mt={4}
        border="2px"
        borderColor="red.500"
      >
        {selectedMethod === "Sign-In" ? (
          <Text>
            Don't have an account?{" "}
            <Link color="red.500" onClick={() => setAuthMethod("Sign-Up")}>
              Click to Sign-Up!
            </Link>
          </Text>
        ) : (
          <Text>
            Already have an account?{" "}
            <Link color="red.500" onClick={() => setAuthMethod("Sign-In")}>
              Click to Sign-In!
            </Link>
          </Text>
        )}
      </Box>
      {selectedMethod === "Sign-In" ? <SignInForm /> : <SignUpForm />}
    </Box>
  );
};

export default AuthenticationPage;
