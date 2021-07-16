describe("Booking Form", () =>
{
  it("should get and render service_types", () =>
  {
    cy.visit("http://localhost:3000/bookings");
    cy.intercept("http://localhost:3001/service_types", {
      body: [
        {
          id: 10,
          name: "Hour Clean",
          created_at: "2021-07-14T06:32:39.682Z",
          updated_at: "2021-07-14T06:32:39.682Z",
          hours_needed: 1.0,
        },
        {
          id: 11,
          name: "Full Clean",
          created_at: "2021-07-14T06:32:39.688Z",
          updated_at: "2021-07-14T06:32:39.688Z",
          hours_needed: 8.0,
        },
        {
          id: 12,
          name: "Half Clean",
          created_at: "2021-07-14T06:32:39.693Z",
          updated_at: "2021-07-14T06:32:39.693Z",
          hours_needed: 4.0,
        },
      ],
    });
    cy.get("Form").within(() =>
    {
      cy.get("#service_select").select("Hour Clean").should("have.value", "10");
      cy.get("#service_select").select("Full Clean").should("have.value", "11");
      cy.get("#service_select").select("Half Clean").should("have.value", "12");
    });
  });
  it("should return a error message for first name", () =>
  {
    cy.intercept("http://localhost:3001/service_types", {
      body: [
        {
          id: 10,
          name: "Hour Clean",
          created_at: "2021-07-14T06:32:39.682Z",
          updated_at: "2021-07-14T06:32:39.682Z",
          hours_needed: 1.0,
        },
        {
          id: 11,
          name: "Full Clean",
          created_at: "2021-07-14T06:32:39.688Z",
          updated_at: "2021-07-14T06:32:39.688Z",
          hours_needed: 8.0,
        },
        {
          id: 12,
          name: "Half Clean",
          created_at: "2021-07-14T06:32:39.693Z",
          updated_at: "2021-07-14T06:32:39.693Z",
          hours_needed: 4.0,
        },
      ],
    });
    cy.visit("http://localhost:3000/bookings");
    cy.get("Form").within(() =>
    {
      // cy.get("#first_name").type("firstName");
      cy.get("#last_name").type("lastName");
      cy.get("#email").type("email@test.com");
      cy.get("#phone_number").type("0435647876");
      // cy.get("#phone_number").type("Phone Number *** make FAIL");
      cy.get("#body").type("Test text in the description");
      cy.get("button").click()
    });
    cy.get("#errorFlashMessage").should("contain", "First name can't be empty");
  });
})
 
  

// it("should return a failed status code on GET request", () => {
//   cy.intercept(
//     {
//       url: "http://localhost:3001/bookings",
//       method: "GET",
//     },
//     { statusCode: 400 }
//   );
// });