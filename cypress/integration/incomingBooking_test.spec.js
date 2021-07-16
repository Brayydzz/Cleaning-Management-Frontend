describe("Test incoming bookings", () =>
{
  it('retrieve bookings', () =>
  {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() =>
    {
      cy.get("#login_email").type("a@b.com"),
        cy.get("#login_password").type("password");
    }
    );
  }
  );
  it('receive flash message', () =>
  {
    cy.intercept({ url: "http://localhost:3001/login", method: 'POST' },
      { error: "username and password don't match" }),
      cy.get('#login_form').submit()
  })
})