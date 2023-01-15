import "./App.css";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <div className="container-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial
          name="Emma Bostian"
          country="Sweden"
          image="Emma.png"
          charge="Software Engineer"
          company="Spotify"
          testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonial
          name="Shawn Wang"
          country="Singapore"
          image="Shawn.png"
          charge="Software Engineer"
          company="Amazon"
          testimonial="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonial
          name="Sarah Chima"
          country="Nigeria"
          image="Sarah.png"
          charge="Software Engineer"
          company="ChatDesk"
          testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
