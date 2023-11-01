import Actions from "./components/Actions/Actions";
import EcoWork from "./components/EcoWork/EcoWork";
import GameHeroText from "./components/GameHeroText/GameHeroText";
import RegisterEmailForm from "./components/RegisterEmailForm/RegisterEmailForm";
import Sponsors from "./components/Sponsors/Sponsors";
import Image from "next/image";
import heroImg from "./images/hero-img.svg";

export default function Home() {
  return (
    <div className="home">
      <Image className="home__hero" src={heroImg} alt="" />

      <div className="home__eco-form">
        <GameHeroText />
        <RegisterEmailForm />
        <Actions />
      </div>

      <div className="home__eco-work">
        <EcoWork />
      </div>
      <Sponsors />
    </div>
  );
}
