// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("E2E", function () {
  const email = Date.now() + "hello@example.com";
  const password = "thisismycoolpassword";

  before(() => {
    cy.visit("/");
  });

  it("allows you to switch between signing in and signing out", () => {
    cy.findByText(/Sign-Up/i).click();
    cy.findByText(/Sign-In/i).click();

    cy.findByText("Sign In").should("be.visible");
  });

  it("does not allow invalid sign ups", () => {
    cy.signUp({
      email: "thisisntaproperemail",
      password: "nopeitisnt",
    });

    cy.isErrorBoxVisible();
  });

  it("allows you to sign up", function () {
    cy.signUp({ email, password });

    cy.findByText(/Hello/i).should("be.visible");
  });

  it("allows you to sign out", function () {
    cy.findByText(/Sign Out/i).click();

    cy.findByText(/Sign-In/i).should("be.visible");
  });

  it("does not allow you to login to an invalid account", () => {
    cy.signIn({
      email: "notarealemail@notarealdomain.gov",
      password: "password",
    });

    cy.isErrorBoxVisible();
  });

  it("allows you to log back into your account", () => {
    cy.signIn({ email, password });

    cy.findByText(/Hello/i).should("be.visible");
  });

  it("allows you to delete your account", () => {
    cy.findByText(/Delete Account/i).click();

    cy.findByText(/Sign-In/i).should("be.visible");
  });
});
