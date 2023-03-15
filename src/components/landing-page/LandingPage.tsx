import React from "react";
import Illustration from "../../images/undraw_folder_files_re_2cbm.svg";
import "./landing.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <div className="landing-page__text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae deserunt ullam eius, consectetur ab. Magni fuga nam et minima?
            Facere quo neque laudantium atque eos, vel consequuntur deserunt
            earum cupiditate nobis. Repudiandae voluptatem mollitia blanditiis
            necessitatibus praesentium alias quos accusantium omnis, ratione
            veritatis autem.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae deserunt ullam eius, consectetur ab. Magni fuga nam et minima?
            Facere quo neque laudantium atque eos, vel consequuntur deserunt
            earum cupiditate nobis. Repudiandae voluptatem mollitia blanditiis
            necessitatibus praesentium alias quos accusantium omnis, ratione
            veritatis autem.
          </span>
        </div>
        <div className="landing-page__image">
          <img src={`${Illustration}`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
