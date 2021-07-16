describe("Login", () => {
  it("should return a error msg for email", () => {
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
    cy.intercept("http://localhost:3001/login", {
      body: {
        error: "Invalid Email and Password",
      },
    });
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() => {
      cy.get("#login_email").type("email");
      cy.get("#login_password").type("password");
      cy.get("button").click();
    });
    cy.get("#errorFlashMessage").should(
      "contain",
      "Invalid Email and Password"
    );
  });
  it("should return a success msg for correct email and password", () => {
    cy.intercept("http://localhost:3001/login", {
      body: 
        {"token":"eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiQm9iIiwibGFzdF9uYW1lIjoiSm9uZXMiLCJlbWFpbCI6ImFAYi5jb20iLCJ1c2VyX2lkIjoxLCJpc0FkbWluIjp0cnVlfQ.XQc0-hWQt-1nu91UiQ4cixTlmgaqsGIB7V0iiWl8Duc"}
      },
    );
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
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() => {
      cy.get("#login_email").type("a@b.com");
      cy.get("#login_password").type("password");
      cy.get("button").click();
    });
    cy.get("#successFlashMessage").should(
      "contain", "You have logged in successfully!"
    );
  });
});
