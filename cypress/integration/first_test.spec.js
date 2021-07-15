describe("just a dummy", () => {
  it("just a test", () => {
    // import test data to run
    // cy.fixture("../fixtures/example.json").as("productsJson");

    // allows for testing without backend , intercepting a api call
    // cy.intercept("http//:localhost:3001/bookings", {
    //   body: [{ name: "foo" }, { name: "product 2" }],
    // });

    // visit live site
    cy.visit("http://localhost:3000/bookings");

    //
    // wait(5000)
    cy.get("h1").should("contain", "Booking Form");
    // Elements you want to test
    // cy.get("div");
    // cy.get("#bookingSubmit").within(() =>
    // {
    //   cy.get("input:first").type("P1").should('contain', "Booking Form")
    //   cy.get(div:nth-child).should('contain', "product 2" )
    // })

    // expect(true).to.be(false)
  });
});
