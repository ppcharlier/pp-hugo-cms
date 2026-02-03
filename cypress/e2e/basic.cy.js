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
  it("should have 4 blog posts on homepage (paginated)", () => {
    cy.visit("/");
    cy.get("ul#blog-list li").should("have.length", 4);
  });
});
