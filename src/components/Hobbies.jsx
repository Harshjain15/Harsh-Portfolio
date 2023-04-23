import React from "react";
import Art from "../assets/Art.jpeg";
import Football from "../assets/Football.jpg";
import Surfing from "../assets/Surfing.jpg";

const Hobbies = () => {
  return (
    <div id="Hobbies">
      <h2>Hobbies</h2>

      <section>
        <HobbiesCard
          name={"Painting"}
          feedback={"I like to Draw the natural things and I just want to fill them with the color and Happiness With my Brush."}
          image = <img src= {Art}alt="User"/>
        />

        <HobbiesCard
          name={"Sports"}
          feedback={
            "Playing Football Is one of my Favourite Game."
          }
          image = <img src= {Football}alt="User"/>

        />

        <HobbiesCard
          name={"Surfing"}
          image = <img src= {Surfing}alt="User"/>
          feedback={"It Seems Good When I use my free time to Search on the Internet and update me by the latest Technology."}
        />
      </section>
    </div>
  );
};

const HobbiesCard = ({ name, feedback,image }) => (
  <article>
    {image}
    <h4>{name}</h4>
    <p>{feedback}</p>

  </article>
);

export default Hobbies;
