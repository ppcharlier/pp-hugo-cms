describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page with blog listing", () => {
    cy.get("h1").contains("Jardin des Racines");
  });

  it("navigates to the product page", () => {
    cy.get('a[href="/products"]').eq(0).click();
    cy.url().should("include", "/products");
    cy.get("h1").contains(/Nos Thèmes/i);
  });

  it("navigates to the values page", () => {
    cy.get('a[href="/values"]').eq(0).click();
    cy.url().should("include", "/values");
    cy.get("h1").contains(/Valeurs/i);
  });
});

describe("validate blog", () => {
  it("should have 4 blog posts on homepage (paginated, 7 total)", () => {
    cy.visit("/");
    cy.get("ul#blog-list li").should("have.length", 4);
  });
});

describe("action landing page", () => {
  it("displays countdown to D-Day", () => {
    cy.visit("/action");
    cy.get("#countdown").should("exist");
    cy.get("#days").should("exist");
    cy.get("#hours").should("exist");
    cy.get("#minutes").should("exist");
    cy.get("#seconds").should("exist");
  });

  it("has call to action buttons", () => {
    cy.visit("/action");
    cy.contains("Lire le manifeste").should("have.attr", "href").and("include", "le-levier-oublie");
  });

  it("has action banner on homepage linking to action page", () => {
    cy.visit("/");
    cy.get(".action-banner").should("exist");
    cy.get('a[href="/action"]').should("exist");
  });
});
