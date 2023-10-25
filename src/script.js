// API endpoint and parameters
const endpoint =
  "http://api.taboola.com/1.0/json/taboola-templates/recommendations.get";
const params = {
  "publisher id": "taboola-templates",
  "app.type": "desktop",
  "source.type": "video",
  "app.apikey": "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
  "source.id": "214321562187",
  count: 4, // Number of recommendations to fetch
};

// Construct the URL with query parameters
const url = new URL(endpoint);
Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

const fetchRecommendations = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.list) {
      renderRecommendations(data.list);
    }
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
};

const renderRecommendations = (recommendations) => {
  const recommendationContainer = document.getElementById(
    "recommendation-list"
  );
  recommendations.forEach((recommendation) => {
    const recommendationElement = document.createElement("div");
    recommendationElement.classList.add("recommendation");

    // Render recommendation content based on its type (sponsored or organic)
    if (recommendation.origin === "sponsored") {
      recommendationElement.classList.add("sponsored");
      recommendationElement.innerHTML =
        renderSponsoredRecommendation(recommendation);
    } else {
      recommendationElement.classList.add("organic");
      recommendationElement.innerHTML =
        renderOrganicRecommendation(recommendation);
    }

    recommendationContainer.appendChild(recommendationElement);
  });
};

const renderSponsoredRecommendation = (recommendation) => {
  return `
      <a href="${recommendation.url}" target="_blank">
        <img src="${recommendation.thumbnail[0].url}" alt="${recommendation.name}">
        <h3>${recommendation.name}</h3>
        <p>${recommendation.branding}</p>
      </a>
    `;
};

const renderOrganicRecommendation = (recommendation) => {
  return `
      <a href="${recommendation.url}">
        <img src="${recommendation.thumbnail[0].url}" alt="${recommendation.name}">
        <h3>${recommendation.name}</h3>
      </a>
    `;
};

fetchRecommendations(url);

if (typeof module === "object") {
  module.exports = {
    renderRecommendations,
  };
}
