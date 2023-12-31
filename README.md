# recommendation-widget

Welcome to the Widget project! This README provides instructions for running and testing the widget locally.

## Prerequisites

Before you begin, make sure you have the following installed:

- A text editor or integrated development environment (IDE).
- A web browser for testing.

## Getting Started

1. **Download the Files**:
   - Download the HTML, CSS, and JavaScript files to your computer.

2. **Open the HTML File**:
   - Open the HTML file (e.g., `index.html`) in your text editor.

3. **Start the Live Server**:
   - To test the widget locally, you can use Live Server extension or any other similar extensions.

## Integration

To integrate the widget into your website or web application, follow these steps:

1. **Copy Files**:
   - Copy the HTML, CSS, and JavaScript files into your project's directory.

2. **Include Files**:
   - Include these files in your web page. You can reference them in the HTML of your page like this:

     ```html
     <link rel="stylesheet" type="text/css" href="styles.css">
     <script type="module" src="script.js"></script>
     ```

3. **Adjust HTML Structure**:
   - Adjust the HTML structure to place the widget where you want it on your page.
    ```html
    <div class="recommendation-list" id="recommendation-list"></div>
     ```

4. **Customize Widget**:
   - Customize the widget further if needed.

## Testing

To test the widget, use the [Jest testing framework](https://jestjs.io/).

1. **Download the npm package**: If you haven't already, make sure you have the necessary npm package installed. If your `package.json` file includes Jest as a development dependency, you can install it by running the following command:

   ```bash
   npm install
     ```


2. **Run Tests**:
   - Use Jest to run your tests:

     ```bash
     jest
     ```
