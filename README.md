# NASA Mission Explorer

The **NASA Mission Explorer** is an interactive web application designed to bring real-time space data to your screen. By integrating NASA's Open APIs, it allows users to explore the vastness of space through high-resolution imagery and detailed astronomical discoveries.

🚀 **Live Deployment:** [View the Live App Here](https://darling-capybara-e333e8.netlify.app)

---

## 🚀 Key Features

* **Astronomy Picture of the Day (APOD):** Featured daily images from the cosmos with detailed scientific explanations.
* **Date Picker:** Travel in time to see the cosmos on a specific date (like your birthday).
* **Smart Search & Filters:** Instantly search through images by keyword, or filter between image and video formats.
* **Chronological Sorting:** Sort the gallery from newest discoveries to oldest.
* **HD Full-Screen Modal:** Click on any image to view it in full screen and toggle high-definition (HD) mode.
* **Dynamic Space Theme:** A responsive, neon-glowing space theme featuring a toggleable Light/Dark mode.

---

## 🛠️ Tech Stack

* **Framework:** React.js
* **Build Tool:** Vite
* **Styling:** Vanilla CSS (Flexbox & CSS Grid)
* **Data Sourcing:** [NASA Open APIs](https://api.nasa.gov/)

---

## 🏁 Getting Started

### Prerequisites

* Node.js
* A NASA API Key (A default key is included in the project, but you can get your own for free at [api.nasa.gov](https://api.nasa.gov/))

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nasa-mission-explorer.git
    cd nasa-mission-explorer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    4. Visit `http://localhost:5173` in your browser to view the application.

---

## 📂 Project Structure

```text
├── index.html       # Main HTML entry point
├── package.json     # Dependencies and scripts (Vite, React)
├── src/
│   ├── main.jsx     # React entry file mounting the App
│   ├── index.css    # Global space theme styles and variables
│   └── components/
        └── app.jsx  # Main application logic and UI
```
