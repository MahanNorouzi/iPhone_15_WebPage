# Apple Website Clone

Welcome to the **Apple Clone** project! 🚀 I recreated the sleek, modern Apple website using the latest web dev technologies. The goal? A responsive, interactive, and visually stunning experience with animations, authentication, and 3D models.

## What’s Inside? ✨
- **Responsive Design**: Looks amazing on any screen size 📱💻
- **GSAP Animations**: Smooth, dynamic animations that bring the site to life 🎬
- **3D Models**: Interactive elements powered by Three.js 🌍
- **Authentication**: Firebase + reCAPTCHA for secure login 🔐
- **Tech Stack**:
  - **Frontend**: React.js
  - **Tools**: Firebase, Three.js, GSAP

## Why This Project? 🤔
I built this clone to challenge myself, improve my skills, and push my creativity 🎨. If you're looking to learn or just curious about my approach, dive in! 🏊‍♂️

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project uses npm as its package manager.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/MahanNorouzi/apple_clone
    ```
2. Navigate into the project directory:
    ```bash
    cd apple_clone
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. **Set up Firebase**:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication (email/password or other methods).
   - Add Firebase credentials to your environment variables by creating a `.env` file. Include your API key and other config values:
     ```env
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```
5. Start the app locally:
    ```bash
    npm run dev
    ```

## Contributing 🤝

Feel free to fork, create issues, or submit pull requests. Let’s make this even better together! 🙌

## License 📜

This project is open-source and licensed under the MIT License.  
[MIT](https://choosealicense.com/licenses/mit/)
