describe("Booking Form", () => {
  context("defines routes", () => {
    beforeEach(
      () => cy.visit("http://localhost:3000/bookings"),
    );
    // beforeEach(() =>
    //   cy.intercept("http://localhost:3000/bookings", {
    //     body: [
    //       { value: "Service1" },
    //       { value: "Service2" },
    //       { value: "Service3" },
    //     ],
    //   })
    // );
      beforeEach(() =>  cy.intercept(
        {
          url: "http://localhost:3001/bookings",
          method: "GET",
        },
        { statusCode: 400 }
      ))
    it("input values for Booking Form", () => {
      cy.get("Form").within(() => {
        cy.get("#first_name").type("firstName");
        cy.get("#last_name").type("lastName");
        cy.get("#email").type("email@test.com");
        cy.get("#phone_number").type("0435647876");
        // cy.get("#phone_number").type("Phone Number *** make FAIL");
        cy.get("#body").type("Test text in the description");
        cy.get("#service_select").select("Hour Clean").should('have.value', '10')
        cy.get("#service_select").select("Full Clean").should('have.value', '11')
        cy.get("#service_select").select("Half Clean").should('have.value', '12')

      });
    });
  });
});
