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
      // Response from signup
      cy.intercept("http://localhost:3001/signup", {
        fixture: "newEmployee.json",
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
    it("should return a success flash message for adding employee", () => {
      cy.get("#closeSuccessFlash").click();
      cy.get("#employees").click();
      cy.get("#newEmployee").click();
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("foo@bar.com");
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
    it("should return a error flash message", () => {
      cy.get("#closeSuccessFlash").click();
      cy.get("#employees").click();
      cy.get("#newEmployee").click();
      // comment in input appropriate for test
      cy.get("Form").within(() => {
        cy.get("#first_name").type("1234");
        // cy.get("#last_name").type("1234");
        // cy.get("#email").type("email");
        // cy.get("#phone_number").type("ijijij");
        // cy.get("#street_address").type("1223");
        // cy.get("#street_number").type("aa");
        // cy.get("#unit_number").type("aa");
        // cy.get("#suburb").type("1111");
        // cy.get("#state").type("111");
        // cy.get("#postcode").type("postcode");

        cy.get("button").click();
      });
      // comment in error message appropriate for test
      cy.get("#errorFlashMessage").should(
        "contain",
        "First name must only contain alpha characters"
      );
      // cy.get("#errorFlashMessage").should(
      //   "contain",
      //   "Last name must only contain alpha characters"
      // );
      // cy.get("#errorFlashMessage").should(
      //   "contain",
      //   "Email must be a valid Email"
      // );
      // cy.get("#errorFlashMessage").should(
      //   "contain",
      //   "Phone number must only contain numbers"
      // );
      // cy.get("#errorFlashMessage").should(
      //   "contain",
      //   "Street Number must be a number"
      // );
      // cy.get("#errorFlashMessage").should(
      //   "contain",
      //   "Suburb must only contain alpha characters"
      // );
      // cy.get("#errorFlashMessage").should("contain", "State must not be blank");
      // cy.get("#errorFlashMessage").should(
      //   "contain",
      //   "Postcode must be a number"
      // );
    });
  });
});
