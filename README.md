# AI Agile Chat

AI Agile Chat is a conversational agent built using OpenAI's GPT-3.5 model. It allows users to have interactive conversations with an AI-powered language model. This repository provides the code and resources to set up and run the AI Chat application.

## Features

- **Searching by date** Users can find doctors depending on available dates.
- **Searching by geo** Users can find doctodepending on the chosen radius according to their current geo.

## Preview

![image](https://github.com/kuznetsova-anastasiia/ai-chat/assets/111063225/27590b51-67e6-43da-9a8e-a94712b1916a)

You can see the demo [HERE](https://ai-chat-swart.vercel.app/)

## Installation

To install and set up the AI Chat application, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/kuznetsova-anastasiia/ai-chat.git
```

2. Navigate to the project directory:

```
cd ai-chat
```

3. Install the required dependencies. Make sure you have Python and pip installed. Run the following command to install the dependencies:

```
npm install
```

4. Set up OpenAI API access:

   - Sign up for an account at the [OpenAI website](https://openai.com/) if you haven't already.
   - Generate an API key from the OpenAI dashboard.
   - Create a file named `.env` in the root directory of the project.
   - Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:

   ```
   API_KEY=YOUR_API_KEY
   ```
   
5. Set up Supabase access:

   - Sign up for an account at the [Supabase](https://supabase.com/) if you haven't already.
   - Create a project.
   - Get the database link and anon key.
   - Add the following line to the `.env` file, replacing `YOUR_SUPABASE_URL` and `YOUR_ANON_KEY with your actual API key:

   ```
   VITE_SUPABASE_URL=YOUR_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
   ```
   
6. Set up the backend:
   You can see all the instructions on the [Backend repo](https://github.com/kuznetsova-anastasiia/ai-chat-api)
   
   Add the backend url to the `.env` file:
   
   ```
   VITE_API_URL=YOUR_BACKEND_URL
   ```

## Usage

To start the AI Chat application, run the following command:

```
npm run dev
```

Once the application is running, you can interact with the AI Agile Chat. Simply login, create a chat, type your messages, and the AI Chatbot will respond accordingly.

## Technologies Used

The Vet App is built using the following technologies:

- **React**
- **TypeScript**
- **Redux-Toolkit**
- **Socket.io**
- **Material UI**

## Contributing

Contributions to the Test Vet App are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

When contributing, please adhere to the following guidelines:

- Fork the repository and clone it locally.
- Create a new branch for your feature or bug fix.
- Follow consistent coding style and ensure the code is well-documented.
- Write appropriate tests for new features or bug fixes.
- Submit a pull request, describing the changes you've made.

## Contact

Anastasiia Kuznetsova - [mail](mailto:anastasiia.kzntsva@gmail.com)

