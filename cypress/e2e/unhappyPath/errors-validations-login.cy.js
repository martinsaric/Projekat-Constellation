describe("Errors validations for login form", () => {
  it("User login with empty email and valid password", () => {

    //Visit the login page + Enter valid password + Click on login button
    // +  Verify that error message is displayed 
    cy.visit("/login");
    cy.get('input[placeholder="Enter password here..."]').type("constel123");
    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Email field is required.")
    .should("be.visible");
  });

  //Visit the login page + Enter valid email + Click on login button
    // +  Verify that error message is displayed 
  it("User login with empty password and valid email", () => {
    cy.visit("/login");
    cy.get('input[placeholder="Enter email here..."]').type("martinsaric94@gmail.com");

    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Password field is required.")
    .should("be.visible");
  });

  //Visit the login page + Enter invalid credentials + Click on login button
    // +  Verify that error message is displayed 
  it("User login with invalid credentials", () => {
    cy.visit("/login");
    cy.login("testing@user.com", "constel!!");

    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('div[role="alert"]', "An error occurred during login.")
    .should("be.visible");
  });

  //Visit the login page + Leave empty fields + Click on login button
    // +  Verify that error message is displayed 
  it("User login with empty fields", () => {
    cy.visit("/login");

    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Email field is required.")
    .should("be.visible");
    cy.contains('[class="invalid-feedback"]', "Password field is required.")
    .should("be.visible");
  });

  //Visit the login page + Enter shorter password + Click on login button
    // +  Verify that error message is displayed 
  it("Password field must have at least 6 characters", () => {
    cy.visit("/login");

    cy.get('input[placeholder="Enter password here..."]').type("const")
    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Please provide a minimum of 6 characters")
    .should("be.visible")
    .and("have.class", "invalid-feedback");
  });

  //Visit the login page + Enter invalid email format + Click on login button
    // +  Verify that error message is displayed 
  it("Email field only accepts valid email format", () => {
    cy.visit("/login");

    cy.get('input[placeholder="Enter email here..."]').type("martinsaric94@gmail.com");
    cy.get('button[id="loginSubmitBtn"]').click();

    cy.contains('[class="invalid-feedback"]', "Email format is not valid.")
    .should("be.visible")
    .and("have.class", "invalid-feedback");
  });
});
