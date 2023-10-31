import RegisterMyEmailButton from "./components/RegisterMyEmailButton/RegisterMyEmailButton";
import GameHeroText from "./components/GameHeroText/GameHeroText";

export default function Home() {
  return (
    <div className="home">
      <GameHeroText />
      <div>
        <input
          className="home__input"
          type="email"
          placeholder="type your email here..."
        />
        <RegisterMyEmailButton />
      </div>
    </div>
  );
}
