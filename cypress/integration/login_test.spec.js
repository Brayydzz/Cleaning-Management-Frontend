describe("Login", () => {
  it("should return a error msg for email", () =>
  {
      cy.intercept("http://localhost:3001/service_types", {})
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() => {
      cy.get("#login_email").type("email"),
      cy.get("#login_password").type("password");
    });
    cy.get("#loginError").should("contain", "Invalid Email and Password");
  });
  it("should return a success msg for correct email and password", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() => {
      cy.get("#login_email").type("a@b.com"),
        cy.get("#login_password").type("password");
    });
    cy.get("#loginSuccess").should(
      "contain",
      "You have logged in successfully!"
    );
  });
});
