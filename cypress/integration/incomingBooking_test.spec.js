describe("Test incoming bookings", () =>
{
  it('retrieve bookings', () =>
  {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() =>
    {
      cy.get("#login_email").should("a@b.com"),
        cy.get("#login_password").should("password");
    }
    );
  }
  );
})