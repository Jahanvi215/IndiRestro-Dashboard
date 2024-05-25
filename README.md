# IndiRestoBar App

IndiRestoBar is a restaurant management application that helps manage orders, menus, customers, and analytics for a restaurant. This application is built with React and Ant Design.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Data](#data)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dashboard**: Overview of restaurant operations.
- **Orders Management**: View order list and specific order details.
- **Menu Management**: Add, edit, and view menu items and categories.
- **Customer Management**: View customer list and reviews.
- **Analytics**: View analytics related to sales, trending menus, and customer purchases.
- **Settings**: Configure application settings.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/indi-restobar.git
   cd indi-restobar

2. Install dependencies:
   ```bash
       npm install
3. Start the development server:
    ```bash
       npm start


## Usage
Main Layout
The main layout includes a sidebar for navigation, a header, and a content area where different components are rendered based on the route.

## Components

- Dashboard: Provides an overview of orders, menus, customers, and sales analytics.
- OrderList: Displays a list of all orders.
- OrderId: Shows details of a specific order.
- AddMenu: Form to add a new menu item.
- MenuList: Displays a list of all menu items.
- Categories: Displays items categorized as Snacks, Beverages, Desserts, and Meals.
- CustomersList: Shows a list of customers along with their details and reviews.
- Reviews: Displays customer reviews.
- Analytics: Displays sales analytics, trending menus, and customer purchase data.
- Settings: Allows configuration of application settings.

## Data

Dummy data for the application is provided in separate files:

- MenuItemsData.js: Contains dummy data for menu items.
- UserData.js: Contains dummy data for user information.
- analyticsData.js: Contains dummy data for analytics.

## Dynamic Columns

Some tables in the application support dynamic columns. The column configuration is stored in the respective data files, allowing for easy customization and extension.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch: git checkout -b my-feature-branch.
3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push to the branch: git push origin my-feature-branch.
5. Submit a pull request.

## License
```bash
  
This README file provides a comprehensive overview of your IndiRestoBar App, including its features, installation instructions, usage details, and contribution guidelines. Adjust the repository URL and other details as necessary.

