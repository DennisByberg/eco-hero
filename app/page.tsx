import EcoWork from "./components/EcoWork/EcoWork";
import GameHeroText from "./components/GameHeroText/GameHeroText";
import RegisterEmailForm from "./components/RegisterEmailForm/RegisterEmailForm";

export default function Home() {
  return (
    <div className="home">
      <div className="home__eco-form">
        <GameHeroText />
        <RegisterEmailForm />
      </div>

      <div className="home__eco-work">
        <EcoWork />
      </div>
    </div>
  );
}
