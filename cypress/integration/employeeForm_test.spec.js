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
      cy.intercept("http://localhost:3001/clients", {
        fixture: "clients.json",
      });
      cy.intercept("http://localhost:3001/bookings", {
        fixture: "bookings.json",
      });
      cy.intercept("http://localhost:3001/signup", {
        fixture: "sign_up.json",
      });
      // cy.intercept("http://localhost:3001/signup", {
      //   fixture: "failed_email_signup.json",
      // });
      cy.visit("http://localhost:3000/dashboard");
      cy.get("#login_form").within(() => {
        cy.get("#login_email").type("a@b.com");
        cy.get("#login_password").type("password");
        cy.get("button").click();
      });
    });
    it("should return a error message for first name", () => {
      cy.get("#closeSuccessFlash").click();
      cy.get("#employees").click();
      cy.get("#newEmployee").click();
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("random@email.com");
        cy.get("#phone_number").type("0412345678");
        cy.get("#street_address").type("fake street");
        cy.get("#street_number").type("99");
        cy.get("#unit_number").type("1");
        cy.get("#suburb").type("Brisbane");
        cy.get("#state").type("Qld");
        cy.get("#postcode").type("4000");
        cy.get("button").click();
      });
      cy.get("#successFlashMessage").should("contain", "Employee Added");
    });
  });
});
