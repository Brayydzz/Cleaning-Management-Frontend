describe("Booking Form", () => {
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
      cy.visit("http://localhost:3000/bookings");
    });
    it("should get and render service_types", () => {
      cy.get("Form").within(() => {
        cy.get("#service_select")
          .select("Hour Clean")
          .should("have.value", "10");
        cy.get("#service_select")
          .select("Full Clean")
          .should("have.value", "11");
        cy.get("#service_select")
          .select("Half Clean")
          .should("have.value", "12");
      });
    });
    it("should return a error message for first name", () => {
      cy.get("Form").within(() => {
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("email@test.com");
        cy.get("#phone_number").type("0412345678");
        cy.get("#body").type("Test text in the description");
        cy.get("button").click();
      });
      cy.get("#errorFlashMessage").should(
        "contain",
        "First name can't be empty"
      );
    });
    it("should return a error message for email", () => {
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#phone_number").type("0412345678");
        cy.get("#body").type("Test text in the description");
        cy.get("button").click();
      });
      cy.get("#errorFlashMessage").should("contain", "Invalid Email");
    });
    it("should return a error message for phone number", () => {
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("email@test.com");
        cy.get("#phone_number").type("phone");
        cy.get("#body").type("Test text in the description");
        cy.get("button").click();
      });
      cy.get("#errorFlashMessage").should(
        "contain",
        "Phone Number must not contain characters"
      );
    });
    it("should return a error message for body", () => {
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("email@test.com");
        cy.get("#phone_number").type("0412345678");
        cy.get("button").click();
      });
      cy.get("#errorFlashMessage").should("contain", "Body can't be empty");
    });
    it("should return a success message for submitting the form", () => {
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("email@test.com");
        cy.get("#phone_number").type("0412345678");
        cy.get("#body").type("Test text in the description");
        cy.get("button").click();
      });
      cy.get("#successFlashMessage").should(
        "contain",
        "Form submitted, thanks!"
      );
    });
    it("should close the flash message", () => {
      cy.get("Form").within(() => {
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("email@test.com");
        cy.get("#phone_number").type("0412345678");
        cy.get("#body").type("Test text in the description");
        cy.get("button").click();
      });
      cy.get("#errorFlashMessage").should(
        "contain",
        "First name can't be empty"
      );
      cy.get("#closeErrorFlash").click();
    });
  });
});
