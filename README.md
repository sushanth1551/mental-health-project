# SahayA – AI-based Mental Health Platform
## Overview

SahayA is a MERN stack web application designed to assist individuals in identifying symptoms of anxiety and depression through an AI-powered chatbot. The platform offers a user-friendly interface for symptom assessment and provides personalized feedback to users.

## Features

AI Chatbot Integration: Utilizes Groq API to analyze user inputs and detect signs of anxiety or depression.

- User Authentication: Implements Firebase Authentication for secure user login and registration.

- Responsive Design: Built with Tailwind CSS to ensure a seamless experience across devices.

## Installation

To set up the project locally:

Clone the repository:

``` git clone https://github.com/sushanth1551/mental-health-project.git
cd mental-health-project
```


## Install dependencies:

```npm install```


### Set up environment variables:

Create a .env file in the root directory.

Add your Firebase and Groq API keys:
```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_GROQ_API_KEY=your_groq_api_key
```

### Start the development server:

npm start

## Usage

Upon launching the application, users can:

- Register or log in using Firebase Authentication.

- Engage with the AI chatbot to discuss their feelings and symptoms.

- Receive immediate feedback based on their inputs.

### Contribution

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).

Create a new Pull Request.
