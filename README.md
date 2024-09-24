# WIKIPEDIA-SEARCH_APPLICATION-using-HTML-CSS-JS-with-API_Integration
Responsive Wikipedia Search app built with HTML, CSS, JavaScript, and Fetch API for dynamic search results.


### Wikipedia Search App

The Wikipedia Search App is a dynamic web application that allows users to search for information from Wikipedia in real-time. Built using HTML, CSS, JavaScript, and Bootstrap, this app provides a seamless user experience by fetching data through a REST API and displaying it in a visually appealing and responsive format. The application was designed with an emphasis on simplicity, user interaction, and performance, making it a practical tool for learning and web exploration.

#### Features

1. **Real-Time Search:**
   The application features a search input field where users can type in any keyword and press "Enter" to perform a search query. The input is processed by an event listener that triggers a Wikipedia API call, dynamically fetching search results in real-time.

2. **API Integration:**
   The app is integrated with the Wikipedia Search API, which retrieves search results based on user queries. By using the fetch method, the app makes a `GET` request to the API and handles the response, returning relevant Wikipedia articles and details.

3. **Spinner for Loading Feedback:**
   To enhance the user experience, the app includes a loading spinner that is triggered when the user initiates a search. The spinner appears while the app is fetching data from the API, providing feedback to the user that the search is in progress. Once the results are returned, the spinner is hidden, and the results are displayed.

4. **Display of Search Results:**
   The search results are displayed in a neatly formatted layout, featuring the title of each result, a clickable link to the full article on Wikipedia, and a brief description of the content. The display is enhanced by utilizing Bootstrap for a responsive, mobile-friendly layout. 

5. **Error Handling:**
   The app takes into account possible API failures or empty search results. It gracefully handles errors by ensuring that the UI remains clean and informative, even when no results are found or a connection issue occurs.

#### Technologies Used

- **HTML5**: The app's structure is created using HTML5, adhering to modern web standards and ensuring proper semantics.
  
- **CSS3 & Bootstrap**: Custom styling is applied through CSS3, along with the Bootstrap 4.5 framework, which helps in creating a responsive, grid-based layout. Bootstrap classes are used for buttons, inputs, and overall design consistency.
  
- **JavaScript**: The core functionality of the app is powered by JavaScript. Event listeners and DOM manipulation are used to handle user input, fetch data, and display search results. The logic is split between functions like `searchWikipedia`, `displayResults`, and `createAndAppendSearchResults` for clarity and modularity.
  
- **Fetch API**: The Fetch API is used to send an HTTP request to the Wikipedia Search API endpoint. The app then processes the JSON response to extract relevant information such as the article title, URL, and description.

#### CSS Styling

The custom styling applied ensures that the application looks professional and user-friendly. Key elements such as the search bar, results container, and loading spinner are styled to match a modern web design aesthetic. 

#### Responsive Design

The use of Bootstrap ensures that the application is fully responsive, adapting to various screen sizes from desktop to mobile. The grid system and pre-built components like buttons, form controls, and navigation allow for consistent behavior across devices.

#### Conclusion

This Wikipedia Search App is a practical example of building interactive, API-driven web applications. Its use of Bootstrap and JavaScript ensures a smooth user experience, while the integration with the Wikipedia API provides dynamic, real-time search functionality. This project demonstrates an understanding of web development fundamentals, including DOM manipulation, asynchronous requests, and responsive design.

This app can be extended with features like pagination, auto-suggestions, and result filtering, making it a scalable project for future development.
