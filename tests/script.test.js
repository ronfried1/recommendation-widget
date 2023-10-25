// tests/recommendation.test.js
const { renderRecommendations } = require("../src/script");

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

test("renderRecommendations should render a sponsored recommendation", () => {
  const recommendation = {
    list: [
      {
        type: "video",
        name: "Saving India",
        created: "Tue, 21 Aug 2012 18:41:10 UTC",
        branding: "The New York Times",
        duration: "229",
        views: "0",
        thumbnail: [
          {
            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F01%2F06%2Fworld%2Fbull-india1%2Fbull-india1-superJumbo-v2.jpg",
          },
        ],
        categories: ["world"],
        id: "~~V1~~6871746565621405235~~Yy8iEO2YJatBqPpJiQzaWcjX3ZbCIHkjiiGd10MMRHn47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc",
        origin: "sponsored",
        url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__09690aa0b4a8c7fe401c0cac25416501__eae457ba5d5a3399816878b2956a0c5d&response.session=v2_fe14f9df78e092a5818b16a52e9908b9_3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765_1698161125_1698161125_CNawjgYQswsY9c-pkrYxIAEoATDhATiRpA5Anp8PSJ_M2QNQ9QNYAGAAaJCAjojl54bGEHAB&item.id=%7E%7EV1%7E%7E6871746565621405235%7E%7EYy8iEO2YJatBqPpJiQzaWcjX3ZbCIHkjiiGd10MMRHn47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc&item.type=video&sig=f0d737958b7c52fd8773615105c9ed68400479cdb85a&redir=http%3A%2F%2Fvideo.nytimes.com%2Fvideo%2F2012%2F08%2F21%2Fworld%2Fasia%2F100000001733139%2Fsaving-indias-tigers-.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiOoZCJ4Izyy7AB%23tblciGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiOoZCJ4Izyy7AB&ui=3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765&cpb=GIkFIJz__________wEqGWNoLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzgwMTUzOICGj-wCQJGkDkienw9Qn8zZA1j1A2MIsUQQyVoYMGRjCL9IELZqGDJkYwjd__________8BEN3__________wEYI2RjCLJJEPZgGBRkYwjcChCgEBgWZGMI0gMQ4AYYCGRjCJYUEJ4cGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAeIjiAHLmZDSAZABGJgB9c-pkrYx",
      },
      {
        description:
          "Ungewollter Haarausfall trifft nicht nur Männer. Zwei Experten beantworten die wichtigsten Fragen.",
        type: "video",
        name: "*** BILDplus Inhalt *** Albtraum Haarausfall bei Frauen \u2013 was hilft?",
        created: "Mon, 25 Jan 2016 10:07:36 UTC",
        branding: "Bild",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fbilder.bild.de%2Ffotos%2Ffrau-haarausfall-50387133-44257806%2FBild%2F4%2Cclub%3Dbildplus.bild.jpg",
          },
        ],
        categories: ["de"],
        id: "~~V1~~8042771502501587546~~7P8nn88y-wISKO7wB9F6X-SqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE",
        origin: "sponsored",
        url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__09690aa0b4a8c7fe401c0cac25416501__eae457ba5d5a3399816878b2956a0c5d&response.session=v2_fe14f9df78e092a5818b16a52e9908b9_3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765_1698161125_1698161125_CNawjgYQswsY9c-pkrYxIAEoATDhATiRpA5Anp8PSJ_M2QNQ9QNYAGAAaJCAjojl54bGEHAB&item.id=%7E%7EV1%7E%7E8042771502501587546%7E%7E7P8nn88y-wISKO7wB9F6X-SqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE&item.type=video&sig=102464dc4aa856a0024383fbf9a6f713d02a5ed27ee6&redir=http%3A%2F%2Fwww.bild.de%2Fbild-plus%2Flifestyle%2Fmode-beauty%2Fhaarausfall%2Ffrauen-haarausfall-44257962%2Cvar%3Dx%2Cview%3DconversionToLogin.bild.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiwmYT7kfa85y8%23tblciGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiwmYT7kfa85y8&ui=3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765&cpb=GIkFIJz__________wEqGWNoLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzgwMTUzOICGj-wCQJGkDkienw9Qn8zZA1j1A2MIsUQQyVoYMGRjCL9IELZqGDJkYwjd__________8BEN3__________wEYI2RjCLJJEPZgGBRkYwjcChCgEBgWZGMI0gMQ4AYYCGRjCJYUEJ4cGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAeIjiAHLmZDSAZABGJgB9c-pkrYx",
      },
    ],
  };

  renderRecommendations(recommendation.list);

  const recommendationElements = document.querySelectorAll(".recommendation");
  let foundOrigin = false;

  recommendationElements.forEach((element) => {
    if (element.classList.contains("sponsored")) {
      foundOrigin = true;
    }
  });

  expect(recommendationElements).toBeTruthy();
  expect(foundOrigin).toBe(true);
});

test("renderRecommendations should render an organic recommendation", () => {
  const recommendation = {
    list: [
      {
        type: "video",
        name: "Saving India",
        created: "Tue, 21 Aug 2012 18:41:10 UTC",
        branding: "The New York Times",
        duration: "229",
        views: "0",
        thumbnail: [
          {
            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F01%2F06%2Fworld%2Fbull-india1%2Fbull-india1-superJumbo-v2.jpg",
          },
        ],
        categories: ["world"],
        id: "~~V1~~6871746565621405235~~Yy8iEO2YJatBqPpJiQzaWcjX3ZbCIHkjiiGd10MMRHn47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc",
        origin: "origin",
        url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__09690aa0b4a8c7fe401c0cac25416501__eae457ba5d5a3399816878b2956a0c5d&response.session=v2_fe14f9df78e092a5818b16a52e9908b9_3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765_1698161125_1698161125_CNawjgYQswsY9c-pkrYxIAEoATDhATiRpA5Anp8PSJ_M2QNQ9QNYAGAAaJCAjojl54bGEHAB&item.id=%7E%7EV1%7E%7E6871746565621405235%7E%7EYy8iEO2YJatBqPpJiQzaWcjX3ZbCIHkjiiGd10MMRHn47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc&item.type=video&sig=f0d737958b7c52fd8773615105c9ed68400479cdb85a&redir=http%3A%2F%2Fvideo.nytimes.com%2Fvideo%2F2012%2F08%2F21%2Fworld%2Fasia%2F100000001733139%2Fsaving-indias-tigers-.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiOoZCJ4Izyy7AB%23tblciGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiOoZCJ4Izyy7AB&ui=3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765&cpb=GIkFIJz__________wEqGWNoLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzgwMTUzOICGj-wCQJGkDkienw9Qn8zZA1j1A2MIsUQQyVoYMGRjCL9IELZqGDJkYwjd__________8BEN3__________wEYI2RjCLJJEPZgGBRkYwjcChCgEBgWZGMI0gMQ4AYYCGRjCJYUEJ4cGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAeIjiAHLmZDSAZABGJgB9c-pkrYx",
      },
      {
        description:
          "Ungewollter Haarausfall trifft nicht nur Männer. Zwei Experten beantworten die wichtigsten Fragen.",
        type: "video",
        name: "*** BILDplus Inhalt *** Albtraum Haarausfall bei Frauen \u2013 was hilft?",
        created: "Mon, 25 Jan 2016 10:07:36 UTC",
        branding: "Bild",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fbilder.bild.de%2Ffotos%2Ffrau-haarausfall-50387133-44257806%2FBild%2F4%2Cclub%3Dbildplus.bild.jpg",
          },
        ],
        categories: ["de"],
        id: "~~V1~~8042771502501587546~~7P8nn88y-wISKO7wB9F6X-SqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE",
        origin: "origin",
        url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__09690aa0b4a8c7fe401c0cac25416501__eae457ba5d5a3399816878b2956a0c5d&response.session=v2_fe14f9df78e092a5818b16a52e9908b9_3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765_1698161125_1698161125_CNawjgYQswsY9c-pkrYxIAEoATDhATiRpA5Anp8PSJ_M2QNQ9QNYAGAAaJCAjojl54bGEHAB&item.id=%7E%7EV1%7E%7E8042771502501587546%7E%7E7P8nn88y-wISKO7wB9F6X-SqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE&item.type=video&sig=102464dc4aa856a0024383fbf9a6f713d02a5ed27ee6&redir=http%3A%2F%2Fwww.bild.de%2Fbild-plus%2Flifestyle%2Fmode-beauty%2Fhaarausfall%2Ffrauen-haarausfall-44257962%2Cvar%3Dx%2Cview%3DconversionToLogin.bild.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiwmYT7kfa85y8%23tblciGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiwmYT7kfa85y8&ui=3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765&cpb=GIkFIJz__________wEqGWNoLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzgwMTUzOICGj-wCQJGkDkienw9Qn8zZA1j1A2MIsUQQyVoYMGRjCL9IELZqGDJkYwjd__________8BEN3__________wEYI2RjCLJJEPZgGBRkYwjcChCgEBgWZGMI0gMQ4AYYCGRjCJYUEJ4cGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAeIjiAHLmZDSAZABGJgB9c-pkrYx",
      },
    ],
  };

  renderRecommendations(recommendation.list);

  const recommendationElements = document.querySelectorAll(".recommendation");
  let foundOrigin = false;

  recommendationElements.forEach((element) => {
    if (element.classList.contains("origin")) {
      foundOrigin = true;
    }
  });

  expect(recommendationElements).toBeTruthy();
  expect(foundOrigin).toBe(true);
});

test("renderRecommendations should handle empty recommendations", () => {
  const recommendation = {
    list: [],
  };

  renderRecommendations(recommendation.list);
  const recommendationElements = document.querySelectorAll(".recommendation");
  expect(recommendationElements.length).toBe(0);
});

test("renderRecommendations should handle mixed recommendations", () => {
  const recommendation = {
    list: [
      {
        type: "video",
        name: "Saving India",
        created: "Tue, 21 Aug 2012 18:41:10 UTC",
        branding: "The New York Times",
        duration: "229",
        views: "0",
        thumbnail: [
          {
            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F01%2F06%2Fworld%2Fbull-india1%2Fbull-india1-superJumbo-v2.jpg",
          },
        ],
        categories: ["world"],
        id: "~~V1~~6871746565621405235~~Yy8iEO2YJatBqPpJiQzaWcjX3ZbCIHkjiiGd10MMRHn47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc",
        origin: "sponsored",
        url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__09690aa0b4a8c7fe401c0cac25416501__eae457ba5d5a3399816878b2956a0c5d&response.session=v2_fe14f9df78e092a5818b16a52e9908b9_3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765_1698161125_1698161125_CNawjgYQswsY9c-pkrYxIAEoATDhATiRpA5Anp8PSJ_M2QNQ9QNYAGAAaJCAjojl54bGEHAB&item.id=%7E%7EV1%7E%7E6871746565621405235%7E%7EYy8iEO2YJatBqPpJiQzaWcjX3ZbCIHkjiiGd10MMRHn47DqYi40_M7SmxblRZ1jwDaz3Yz2A7XHhwrO5mF5aNXK9LZf4s-wN0e-IrD14BQ5zRT2aBImfuuldQsAIqg2VA8znGKQO1bJpPNJmvJW5bbqtfNB9PSjDBlig62vbwfc&item.type=video&sig=f0d737958b7c52fd8773615105c9ed68400479cdb85a&redir=http%3A%2F%2Fvideo.nytimes.com%2Fvideo%2F2012%2F08%2F21%2Fworld%2Fasia%2F100000001733139%2Fsaving-indias-tigers-.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiOoZCJ4Izyy7AB%23tblciGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiOoZCJ4Izyy7AB&ui=3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765&cpb=GIkFIJz__________wEqGWNoLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzgwMTUzOICGj-wCQJGkDkienw9Qn8zZA1j1A2MIsUQQyVoYMGRjCL9IELZqGDJkYwjd__________8BEN3__________wEYI2RjCLJJEPZgGBRkYwjcChCgEBgWZGMI0gMQ4AYYCGRjCJYUEJ4cGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAeIjiAHLmZDSAZABGJgB9c-pkrYx",
      },
      {
        description:
          "Ungewollter Haarausfall trifft nicht nur Männer. Zwei Experten beantworten die wichtigsten Fragen.",
        type: "video",
        name: "*** BILDplus Inhalt *** Albtraum Haarausfall bei Frauen \u2013 was hilft?",
        created: "Mon, 25 Jan 2016 10:07:36 UTC",
        branding: "Bild",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fbilder.bild.de%2Ffotos%2Ffrau-haarausfall-50387133-44257806%2FBild%2F4%2Cclub%3Dbildplus.bild.jpg",
          },
        ],
        categories: ["de"],
        id: "~~V1~~8042771502501587546~~7P8nn88y-wISKO7wB9F6X-SqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE",
        origin: "origin",
        url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__09690aa0b4a8c7fe401c0cac25416501__eae457ba5d5a3399816878b2956a0c5d&response.session=v2_fe14f9df78e092a5818b16a52e9908b9_3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765_1698161125_1698161125_CNawjgYQswsY9c-pkrYxIAEoATDhATiRpA5Anp8PSJ_M2QNQ9QNYAGAAaJCAjojl54bGEHAB&item.id=%7E%7EV1%7E%7E8042771502501587546%7E%7E7P8nn88y-wISKO7wB9F6X-SqYT2wm5adCjkru81WtibaxJUMYN6PI0G8UwQ4xoq4C1gfjSSMBjZUFVaXaB1tqp5h1Zh0_DX5Gg9FqvClPsawsJKw4MvLpbPTEutPGayPGXLwsS3fkWtpBPA0sLI4oo6zhr_uog6GC70OqLAd6RE&item.type=video&sig=102464dc4aa856a0024383fbf9a6f713d02a5ed27ee6&redir=http%3A%2F%2Fwww.bild.de%2Fbild-plus%2Flifestyle%2Fmode-beauty%2Fhaarausfall%2Ffrauen-haarausfall-44257962%2Cvar%3Dx%2Cview%3DconversionToLogin.bild.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiwmYT7kfa85y8%23tblciGiCl6rbi0OzPpEprsy-r8kfyjztnxs4Y30OUDEzKK8QruSC5BCiwmYT7kfa85y8&ui=3390e573-c9ba-472e-9b54-b61c7064107e-tuctc316765&cpb=GIkFIJz__________wEqGWNoLnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzgwMTUzOICGj-wCQJGkDkienw9Qn8zZA1j1A2MIsUQQyVoYMGRjCL9IELZqGDJkYwjd__________8BEN3__________wEYI2RjCLJJEPZgGBRkYwjcChCgEBgWZGMI0gMQ4AYYCGRjCJYUEJ4cGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAeIjiAHLmZDSAZABGJgB9c-pkrYx",
      },
    ],
  };

  renderRecommendations(recommendation.list);
  const recommendationElements = document.querySelectorAll(".recommendation");
  expect(recommendationElements).toBeTruthy();

  let foundSponsored = false;
  let foundOrigin = false;

  recommendationElements.forEach((element) => {
    if (element.classList.contains("sponsored")) {
      foundSponsored = true;
    } else if (element.classList.contains("origin")) {
      foundOrigin = true;
    }
  });

  expect(foundSponsored).toBe(true);
  expect(foundOrigin).toBe(true);
});
