# virtual-assistant
 AI Assistant named Jarvis!

This project is a simple web-based virtual assistant capable of understanding voice commands and responding with spoken feedback. It can execute specific tasks such as opening websites, retrieving YouTube videos, and telling the current time and date. The assistant is created using HTML, CSS, JavaScript, and the Web Speech API for speech recognition and synthesis.

Features
Voice Commands: You can trigger actions by speaking to the assistant.

Speech Synthesis: The assistant responds with spoken feedback using the Web Speech API.

Open Websites: Commands to open Google, Facebook, Instagram, WhatsApp, and a calculator.

Search YouTube: Allows you to search for videos on YouTube.

Time & Date: Retrieves the current time or date.

Dynamic Image Change: The logo on the page changes every 3 seconds with a fade-in/out effect.

Responsive Design: The web page is responsive and adapts to different screen sizes.

How It Works

Voice Recognition:

The project uses the Web Speech API's SpeechRecognition object to recognize voice input.
When a user speaks, the assistant processes the input and performs actions based on predefined commands.

Speech Synthesis:

The assistant responds using SpeechSynthesisUtterance, which converts text into speech.
Custom greetings based on the time of day (Good Morning, Good Afternoon, or Good Evening).

Commands:

Say "open Google", "open Facebook", "open Instagram", etc., to open popular websites.
Say "YouTube [search term]" to search for a video on YouTube.
Ask for the current time by saying "time".
Ask for today's date by saying "date".

Technologies Used

HTML: Structure of the web page.

CSS: Styling, including media queries for responsiveness and transitions for smooth effects.

JavaScript: Handles speech recognition and synthesis, executes commands, and changes images

Web Speech API: Used for recognizing speech and generating spoken responses.

Code Overview

JavaScript Logic

The project uses SpeechRecognition for speech input and SpeechSynthesisUtterance for speech output.

Different functions handle commands such as opening websites and fetching YouTube data using YouTube API.

A dynamic image-changing feature is implemented using a simple image array and the setInterval function for a smooth slideshow effect.

CSS Styling

Includes smooth transitions for logo changes and responsive design using media queries for different screen sizes.

API Usage

YouTube API is used to fetch search results based on user voice commands.
