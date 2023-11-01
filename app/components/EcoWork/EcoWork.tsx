import "./EcoWork.scss";
import Image from "next/image";
import tShirt from "../../images/recycle-clothes.svg";
import recycle from "../../images/recycle.svg";
import ecoHome from "../../images/eco-home.svg";

function EcoWork() {
  return (
    <div className="eco">
      <h1 className="eco__title">
        vi samarbeter med olika organisationer runt i världen{" "}
      </h1>

      <div className="eco__container">
        <div className="eco__card">
          <Image className="heroImg" src={tShirt} alt="" />
          <h3 className="eco__text">Samla kläder</h3>
          <p className="eco__description">
            Siktar du på att inspirera den unga generationen att forma en bättre
            framtid? Tillsammans med oss kan du engagera unga människor i
            återvinning, samtidigt som du belönar dem med fantastiska priser.
          </p>
        </div>

        <div className="eco__card">
          <Image className="heroImg" src={recycle} alt="" />
          <h3 className="eco__text">Återvinn kläder</h3>
          <p className="eco__description">
            Vår vision är att göra återvinning både roligt och meningsfullt -
            genom att byta oanvända kläder mot superkrafter, hjälper vi de som
            behöver samtidigt som vi har kul!
          </p>
        </div>

        <div className="eco__card">
          <Image className="heroImg" src={ecoHome} alt="" />
          <h3 className="eco__text">Kläderna får ett nytt hem</h3>
          <p className="eco__description">
            Varje månad så väljer vi ut en ny organisation för att se till att
            våra donationer hamnar hos de som behöver de som mest just nu.
          </p>
        </div>
      </div>
    </div>
  );
}
export default EcoWork;
