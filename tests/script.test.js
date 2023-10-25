global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({}) })
);

const { renderRecommendations } = require("../src/script");
const {
  sponsoredRecommendation,
  organicRecommendation,
  emptyRecommendation,
  mixRecommendation,
} = require("./mock");

// Helper function to set up the DOM for testing
function setupDOM() {
  document.body.innerHTML = `
    <div id="recommendation-widget" class="recommendation-widget">
      <h2>Recommended Articles</h2>
      <div class="recommendation-list" id="recommendation-list"></div>
    </div>`;
}

beforeEach(() => {
  setupDOM();
});

// Test to render a sponsored recommendation
test("renderRecommendations should render a sponsored recommendation", () => {
  sponsoredRecommendation;

  renderRecommendations(sponsoredRecommendation.list);

  const recommendationElements = document.querySelectorAll(".recommendation");
  let foundSponsored = false;

  recommendationElements.forEach((element) => {
    if (element.classList.contains("sponsored")) {
      foundSponsored = true;
    }
  });

  expect(recommendationElements).toBeTruthy();
  expect(foundSponsored).toBe(true);
});

// Test to render an organic recommendation
test("renderRecommendations should render an organic recommendation", () => {
  organicRecommendation;

  renderRecommendations(organicRecommendation.list);

  const recommendationElements = document.querySelectorAll(".recommendation");
  let foundOrganic = false;

  recommendationElements.forEach((element) => {
    if (element.classList.contains("organic")) {
      foundOrganic = true;
    }
  });

  expect(recommendationElements).toBeTruthy();
  expect(foundOrganic).toBe(true);
});

// Test to handle empty recommendations
test("renderRecommendations should handle empty recommendations", () => {
  emptyRecommendation;

  renderRecommendations(emptyRecommendation.list);
  const recommendationElements = document.querySelectorAll(".recommendation");
  expect(recommendationElements.length).toBe(0);
});

// Test to handle mixed recommendations
test("renderRecommendations should handle mixed recommendations", () => {
  mixRecommendation;

  renderRecommendations(mixRecommendation.list);
  const recommendationElements = document.querySelectorAll(".recommendation");
  expect(recommendationElements).toBeTruthy();

  let foundSponsored = false;
  let foundOrganic = false;

  recommendationElements.forEach((element) => {
    if (element.classList.contains("sponsored")) {
      foundSponsored = true;
    } else if (element.classList.contains("organic")) {
      foundOrganic = true;
    }
  });

  expect(foundSponsored).toBe(true);
  expect(foundOrganic).toBe(true);
});
