import "../../main.css";
import "./ResponsiveHero.css";

import HeroImg from "../../../assets/Illustration.svg";

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>Nuit de l'info</h2>
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={HeroImg} alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
