describe("test employee form", () => {
  it("should return a error message for first name", () => {
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
    cy.intercept("http://localhost:3001/jobs", {
      body: [
        {
          job_data: {
            job: {
              id: 1,
              due_data: "1626756597479.3442",
              time_in: null,
              time_out: null,
              reoccuring: true,
              reoccuring_length: 7,
            },
            address: "1, Fake rd, Brisbane, 4000, QLD",
            user: {
              user_data: {
                user: { id: 3, email: "a@b.c", is_admin: false },
                contact_information: {
                  id: 3,
                  phone_number: "0412345568",
                  first_name: "Brenda",
                  last_name: "Song",
                  email: "Brenda@Song.com",
                },
                address: "123, Fake Street, Springfield, 1234, QLD",
                address_object: {
                  id: 4,
                  street_number: "123",
                  street_address: "Fake Street",
                  unit_number: null,
                  suburb: "Springfield",
                  state: "QLD",
                  postcode: "1234",
                  created_at: "2021-07-20T04:49:56.854Z",
                  updated_at: "2021-07-20T04:49:56.854Z",
                },
                availables: [],
              },
            },
            service_type: {
              id: 13,
              name: "Hour Clean",
              created_at: "2021-07-20T04:49:57.395Z",
              updated_at: "2021-07-20T04:49:57.395Z",
              hours_needed: 1.0,
            },
            client: {
              client_data: {
                client: {
                  id: 1,
                  contact_information_id: 2,
                  created_at: "2021-07-20T04:49:57.465Z",
                  updated_at: "2021-07-20T04:49:57.465Z",
                },
                contact_information: {
                  id: 2,
                  phone_number: "04987654",
                  first_name: "Bob",
                  last_name: "Jones",
                  email: "blah@blah.com",
                },
                address: "1, Fake rd, Brisbane, 4000, QLD",
                address_object: {
                  id: 3,
                  street_number: "1",
                  street_address: "Fake rd",
                  unit_number: null,
                  suburb: "Brisbane",
                  state: "QLD",
                  postcode: "4000",
                  created_at: "2021-07-20T04:49:56.847Z",
                  updated_at: "2021-07-20T04:49:56.847Z",
                },
                notes: [],
              },
            },
            address_object: {
              id: 3,
              street_number: "1",
              street_address: "Fake rd",
              unit_number: null,
              suburb: "Brisbane",
              state: "QLD",
              postcode: "4000",
              created_at: "2021-07-20T04:49:56.847Z",
              updated_at: "2021-07-20T04:49:56.847Z",
            },
            notes: [],
          },
        },
        {
          job_data: {
            job: {
              id: 2,
              due_data: "1626756597479.3442",
              time_in: null,
              time_out: null,
              reoccuring: false,
              reoccuring_length: null,
            },
            address: "123, Fake Street, Springfield, 1234, QLD",
            user: {
              user_data: {
                user: { id: 2, email: "a@b.com", is_admin: true },
                contact_information: {
                  id: 2,
                  phone_number: "04987654",
                  first_name: "Bob",
                  last_name: "Jones",
                  email: "blah@blah.com",
                },
                address: "1, Fake rd, Brisbane, 4000, QLD",
                address_object: {
                  id: 3,
                  street_number: "1",
                  street_address: "Fake rd",
                  unit_number: null,
                  suburb: "Brisbane",
                  state: "QLD",
                  postcode: "4000",
                  created_at: "2021-07-20T04:49:56.847Z",
                  updated_at: "2021-07-20T04:49:56.847Z",
                },
                availables: [],
              },
            },
            service_type: {
              id: 13,
              name: "Hour Clean",
              created_at: "2021-07-20T04:49:57.395Z",
              updated_at: "2021-07-20T04:49:57.395Z",
              hours_needed: 1.0,
            },
            client: {
              client_data: {
                client: {
                  id: 1,
                  contact_information_id: 2,
                  created_at: "2021-07-20T04:49:57.465Z",
                  updated_at: "2021-07-20T04:49:57.465Z",
                },
                contact_information: {
                  id: 2,
                  phone_number: "04987654",
                  first_name: "Bob",
                  last_name: "Jones",
                  email: "blah@blah.com",
                },
                address: "1, Fake rd, Brisbane, 4000, QLD",
                address_object: {
                  id: 3,
                  street_number: "1",
                  street_address: "Fake rd",
                  unit_number: null,
                  suburb: "Brisbane",
                  state: "QLD",
                  postcode: "4000",
                  created_at: "2021-07-20T04:49:56.847Z",
                  updated_at: "2021-07-20T04:49:56.847Z",
                },
                notes: [],
              },
            },
            address_object: {
              id: 4,
              street_number: "123",
              street_address: "Fake Street",
              unit_number: null,
              suburb: "Springfield",
              state: "QLD",
              postcode: "1234",
              created_at: "2021-07-20T04:49:56.854Z",
              updated_at: "2021-07-20T04:49:56.854Z",
            },
            notes: [],
          },
        },
      ],
    });
    cy.intercept("http://localhost:3001/login", {
      body: {
        token:
          "eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiQm9iIiwibGFzdF9uYW1lIjoiSm9uZXMiLCJlbWFpbCI6ImFAYi5jb20iLCJ1c2VyX2lkIjoyLCJpc0FkbWluIjp0cnVlfQ.QpqV34UA9cOSNrzO0uWq9MgO9qafz4rvCuEK5RXj7RU",
      },
    });
    cy.intercept("http://localhost:3001/users", {
      body: [
        {
          user_data: {
            user: { id: 2, email: "a@b.com", is_admin: true },
            contact_information: {
              id: 2,
              phone_number: "04987654",
              first_name: "Bob",
              last_name: "Jones",
              email: "blah@blah.com",
            },
            address: "1, Fake rd, Brisbane, 4000, QLD",
            address_object: {
              id: 3,
              street_number: "1",
              street_address: "Fake rd",
              unit_number: null,
              suburb: "Brisbane",
              state: "QLD",
              postcode: "4000",
              created_at: "2021-07-20T04:49:56.847Z",
              updated_at: "2021-07-20T04:49:56.847Z",
            },
            availables: [],
          },
        },
        {
          user_data: {
            user: { id: 3, email: "a@b.c", is_admin: false },
            contact_information: {
              id: 3,
              phone_number: "0412345568",
              first_name: "Brenda",
              last_name: "Song",
              email: "Brenda@Song.com",
            },
            address: "123, Fake Street, Springfield, 1234, QLD",
            address_object: {
              id: 4,
              street_number: "123",
              street_address: "Fake Street",
              unit_number: null,
              suburb: "Springfield",
              state: "QLD",
              postcode: "1234",
              created_at: "2021-07-20T04:49:56.854Z",
              updated_at: "2021-07-20T04:49:56.854Z",
            },
            availables: [],
          },
        },
      ],
    });
    cy.visit("http://localhost:3000/dashboard");
    cy.visit("http://localhost:3000/dashboard");
    cy.get("#login_form").within(() => {
      cy.get("#login_email").type("a@b.com");
      cy.get("#login_password").type("password");
      cy.get("button").click();
    });
    cy.get("#employees").click();
    cy.get("#newEmployee").click();
    cy.get("Form").within(() => {
      cy.get("#first_name").type("firstName");
      //     cy.get("#last_name").type("lastName");
      //     cy.get("#email").type("email@test.com");
      //     cy.get("#phone_number").type("0412345678");
      //     cy.get("#body").type("Test text in the description");
      //     cy.get("button").click();
      //   });
      //   cy.get("#errorFlashMessage").should("contain", "First name can't be empty");
    });
  });
});
