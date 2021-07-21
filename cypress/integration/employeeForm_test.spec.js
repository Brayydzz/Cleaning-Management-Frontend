describe("test employee form", () => {
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
      cy.visit("http://localhost:3000/dashboard");
      cy.get("#login_form").within(() => {
        cy.get("#login_email").type("a@b.com");
        cy.get("#login_password").type("password");
        cy.get("button").click();
      });
    });
    it("should return a error message for first name", () => {
      cy.get("#employees").click();
      cy.get("#newEmployee").click();
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
            // cy.get("#last_name").type("lastName");
        //     cy.get("#email").type("email@test.com");
        //     cy.get("#phone_number").type("0412345678");
        //     cy.get("#body").type("Test text in the description");
        //     cy.get("button").click();
        //   });
        //   cy.get("#errorFlashMessage").should("contain", "First name can't be empty");
      });
    });
  });
});
