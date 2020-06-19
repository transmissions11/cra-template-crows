import React from "react";
import { Button } from "@chakra-ui/core";
import { useAuth } from "../../../context/AuthContext";

const MainPage = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <div>Hello {user.uid}!</div>
      <br />
      <Button variantColor="whatsapp" onClick={signOut}>
        Sign Out
      </Button>
      <Button
        variantColor="whatsapp"
        onClick={() => {
          user.delete();
        }}
      >
        Delete Account
      </Button>
    </>
  );
};

export default MainPage;
