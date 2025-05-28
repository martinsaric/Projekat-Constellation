describe("Errors validations login", () => {
  it("User login with empty email and valid password", () => {
    cy.visit("/login");
    cy.get('input[placeholder="Enter password here..."]').type("constel123");
    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Email field is required.")
    .should("be.visible");
  });

  it("User login with empty password and valid email", () => {
    cy.visit("/login");
    cy.get('input[placeholder="Enter email here..."]').type("martinsaric94@gmail.com");

    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Password field is required.")
    .should("be.visible");
  });

  it("User login with invalid credentials", () => {
    cy.visit("/login");
    cy.login("testing@user.com", "constel!!");

    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('div[role="alert"]', "An error occurred during login.")
    .should("be.visible");
  });

  it("User login with empty fields", () => {
    cy.visit("/login");

    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Email field is required.");
    cy.contains('[class="invalid-feedback"]', "Password field is required.")
    .should("be.visible");
  });

  it("Password field must have at least 6 characters", () => {
    cy.visit("/login");

    cy.get('input[placeholder="Enter password here..."]').type("const")
    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Please provide a minimum of 6 characters")
    .should("be.visible")
    .and("have.class", "invalid-feedback");
  });

  it("Email field only accepts valid email format", () => {
    cy.visit("/login");

    cy.get('input[placeholder="Enter email here..."]').type("martinsaric94@gmail.com");
    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Email format is not valid.")
    .should("be.visible")
    .and("have.class", "invalid-feedback");
  });
});
