
# AI Interview Prep

AI Interview Prep is an AI-powered platform designed to help users prepare for mock interviews using advanced technologies such as AI-driven feedback, real-time data processing, and interview question generation.

## Features

- **AI Interview Feedback**: Receive real-time feedback on your mock interview performance, powered by AI.
- **Real-time Interview Question Generation**: Generate interview questions in real-time to simulate mock interviews.
- **Firebase Integration**: Store and retrieve interview-related data from Firebase for better data management and performance tracking.
- **Optimized Backend**: Scalable backend built using Node.js to ensure fast response times for interview-related operations.
- **User Profile Management**: Manage user profiles, interview history, and feedback all in one place.

## Tech Stack

- **Frontend**: React, Next.js
- **Backend**: Node.js, Firebase
- **AI**: OpenAI, TensorFlow, Gemini
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel (Frontend), Firebase (Backend)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tharunj30/AI_interview_prep.git
   cd AI_interview_prep
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and get the Firebase configuration keys.
   - Place the configuration in your `.env.local` file as per the following structure:
     ```bash
     NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
     NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>
     ```

4. **Run the application**:
   After setting up the environment variables, start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the app in action.

## Usage

- Start by signing up or logging in using Firebase Authentication.
- Once logged in, you can start taking mock interviews, view interview feedback, and track your progress over time.
- The AI will generate interview questions, and you will receive automated feedback based on your answers.

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to check out our repository for more detailed documentation, and stay tuned for new features and updates!

---

To checkout the website in realtime visit `https://ai-interview-prep-psi.vercel.app/`
