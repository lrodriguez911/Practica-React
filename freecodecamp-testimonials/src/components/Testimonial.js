import React from "react";
import '../stylesheets/Testimonial.css'

export function Testimonial(props) {
  return (
    <div className="container-testimonial">
      <img
        className="image-testimonial"
        alt={`${props.name}`}
        src={require(`../img/${props.image}`)}
      />
      <div className="container-text-testimonial">
        <p className="name-testimonial"><strong>{props.name}</strong> in {props.country}</p>
        <p className="charge-testimonial">{props.charge} at <strong>{props.company}</strong></p>
        <p className="text-testominal">"{props.testimonial}"</p>
      </div>
    </div>
  );
}

//export default Testimonial;