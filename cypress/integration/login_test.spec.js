describe("Login", () => {
  context("run network intercepts then perform tests", () => {
    beforeEach(() => {
      cy.intercept("http://localhost:3001/service_types", {
        fixture: "service_types.json",
      });
      cy.intercept("http://localhost:3001/jobs", {
        fixture: "jobs.json",
      });
      cy.intercept("http://localhost:3001/login", {
        fixture: "login.json",
      });
      cy.intercept("http://localhost:3001/users", {
        fixture: "users.json",
      });
      cy.intercept("http://localhost:3001/clients", {
        fixture: "clients.json",
      });
      cy.intercept("http://localhost:3001/bookings", {
        fixture: "bookings.json",
      });
      cy.visit("http://localhost:3000/dashboard");
    });
    it("should return a error msg for email", () => {
      cy.intercept("http://localhost:3001/login", {
        fixture: "error_login.json",
      });
      cy.get("#login_form").within(() => {
        cy.get("#login_email").type("email");
        cy.get("#login_password").type("password");
        cy.get("button").click();
      });
      cy.get("#errorFlashMessage").should(
        "contain",
        "Username and password don't match"
        );
      });
      it("should return a success msg for correct email and password", () => {
      cy.intercept("http://localhost:3001/login", {
        fixture: "login.json",
      });
      cy.get("#login_form").within(() => {
        cy.get("#login_email").type("a@b.com");
        cy.get("#login_password").type("password");
        cy.get("button").click();
      });
      cy.get("#successFlashMessage").should(
        "contain",
        "You have logged in successfully!"
      );
    });
  });
});
