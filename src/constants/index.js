import spotify from "../assets/spotify.png";
import chat from "../assets/chat-app.png";
import movies from "../assets/movies-app.png";
import api from "../assets/api.png";

export const PROJECTS = [
  {
    title: "Music player preview",
    image: spotify,
    link: "https://github.com/Aditay59/music_app",
    description:
      "A simple website created using ReactJs and Spotify API where user can authenticate by their Spotify account and listen to a 30-second preview of the song and can also search for a particular song.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Chat app using firebase",
    image: chat,
    link: "https://github.com/Aditay59/chat_app_firebase",
    description:
      "A simple chat application created in ReactJs using the Firebase. Here users can log in by using their Google account and then enter any room ID, people with the same room ID can chat with each other.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "Movies rating viewer ",
    image: movies,
    link: "https://github.com/Aditay59/movies_app",
    description:
      "A simple website created in ReactJs using the TMDB API where users can see the rating of a particular movie, read some descriptions about it and also watch the trailer of that movie.",
    technologies: ["HTML", "CSS", "React", "Tmdb API"],
  },
  {
    title: "Simple API",
    image: api,
    link: "https://github.com/Aditay59/MyApi",
    description:
      "This a simple API that can only handle two requests Get and Post and is hosted on glitch.com platform . It has details of 20 products, which can be fetched by get request and can do post request by id API will only return that particular product details.",
    technologies: ["NodeJs"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7876731606",
  email: "aditaychoudhary99@gmail.com",
};
