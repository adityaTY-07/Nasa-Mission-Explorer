# NASA Mission Explorer

The **NASA Mission Explorer** is an interactive web application designed to bring real-time space data to your screen. By integrating multiple NASA Open APIs, it allows users to explore the vastness of space through high-resolution imagery, asteroid tracking, and Martian exploration data.

---

## 🚀 Key Features

* **Astronomy Picture of the Day (APOD):** Featured daily images from the cosmos with detailed scientific explanations.
* **Mars Rover Photo Library:** Browse thousands of images captured by the Curiosity, Opportunity, and Spirit rovers, filtered by Martian Sol and camera type.
* **Near-Earth Object (NEO) Tracker:** Monitor asteroids passing near Earth, including data on their diameter, velocity, and distance.
* **Earth Imagery:** Access satellite imagery of specific geographic locations via coordinates.
* **Responsive UI:** Optimized for a seamless experience across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

* **Framework:** Next.js / React.js
* **Styling:** Tailwind CSS
* **Data Sourcing:** [NASA Open APIs](https://api.nasa.gov/)
* **Icons:** Lucide React / FontAwesome
* **Deployment:** Vercel

---

## 🏁 Getting Started

### Prerequisites

* Node.js (v18.x or higher)
* A NASA API Key (Get one for free at [api.nasa.gov](https://api.nasa.gov/))

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/nasa-mission-explorer.git](https://github.com/your-username/nasa-mission-explorer.git)
    cd nasa-mission-explorer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add your key:
    ```env
    NEXT_PUBLIC_NASA_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` in your browser to view the application.

---

## 📂 Project Structure

```text
├── public/          # Static assets (images, icons)
├── src/
│   ├── components/  # Reusable UI components (Navbar, Cards, Loaders)
│   ├── hooks/       # Custom React hooks for API fetching
│   ├── pages/       # Application routes and views
│   ├── styles/      # Global styles and Tailwind configuration
│   └── utils/       # Formatting and helper functions
└── .env.local       # API configuration (git-ignored)
