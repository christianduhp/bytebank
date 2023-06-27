# Currency Conversion Project

This project allows users to convert currencies using real-time exchange rates. It provides a user-friendly interface for selecting the source currency and target currency, and displays the converted values in a graph.

## Features

- **Currency selection:** Users can choose the source currency and target currency from the provided dropdown menus.
- **Real-time conversion:** The application fetches the latest exchange rates from an API and performs the currency conversion.
- **Graph visualization:** The converted currency values are plotted on a line graph, allowing users to visualize the currency trends over time.

## Prerequisites

Before running the project, ensure that you have the following:

- **Internet connection:** The application requires an active internet connection to fetch the exchange rates.
- **Web browser:** The project is designed to run on a web browser.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Open the project directory in a web browser.
3. Ensure that the `currencyCode.json` file is located in the correct path: `../script/currencyCode.json`.
4. Launch the application by opening the `index.html` file in your web browser.

## Usage

1. **Select the source currency:** Choose the currency you want to convert from the dropdown menu labeled "Convert From".
2. **Select the target currency:** Choose the currency you want to convert to from the dropdown menu labeled "Convert To".
3. **Real-time conversion:** The application will fetch the latest exchange rates and perform the currency conversion automatically.
4. **Graph visualization:** The converted currency values will be displayed on the line graph, showing the currency trends over time.

## Code Overview

The project consists of the following key components:

- `getTime()`: A function that retrieves the current time.
- `addData(graph, label, data, titleLabel)`: A function that adds data to the graph for visualization.
- `currencyGraph` and `graph`: Chart.js objects that handle the rendering of the line graph.
- `getCurrencyFrom()`: A function that listens for changes in the "Convert From" dropdown menu and sends a message to the currency conversion worker.
- `getCurrencyTo()`: A function that listens for changes in the "Convert To" dropdown menu and sends a message to the currency conversion worker.
- `workerCurrency`: A web worker that handles the currency conversion logic and receives messages from the main thread.
- Event listener: The project listens for messages from the currency conversion worker and updates the graph with the converted values.

## Technologies

The currency conversion project utilizes the following technologies and resources:

- **JavaScript:** Programming language used for the project implementation.
- **HTML/CSS:** Markup and styling languages for building the user interface.
- **Chart.js:** JavaScript library for creating interactive charts and graphs.
- **AwesomeAPI:** External API used to fetch real-time exchange rates.

## Future Enhancements

The project is a work in progress, and the following enhancements are planned for the future:

- **Improved error handling:** Implement better error handling for API failures and network issues.
- **Historical data:** Add support for fetching and visualizing historical currency conversion data.
- **Additional graph features:** Enhance the graph with more interactive features such as zooming and tooltips.

---

Feel free to contribute to the project by submitting bug reports, feature requests, or pull requests. Your feedback and contributions are greatly appreciated!

## License
The Currency Conversion Project is released under the MIT License.

## Vitrine.Dev

| :placard: Vitrine.Dev |<a href="https://cursos.alura.com.br/vitrinedev/christianoliver">Christian Oliveira</a> |
| -------------  | --- |
| :sparkles: Nome        | **ByteBank**
| :label: Tecnologias | JavaScript, HTML, CSS
| :rocket: URL         |<a href="https://christianduhp.github.io/bytebank/">Execute aqui o projeto</a>

![ByteBank](screencapture-127-0-0-1-5500-2023-06-26-22_38_36.png#vitrinedev)