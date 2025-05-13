import "./cards.css"
import points from "../../../public/time-tracking-dashboard-main/images/icon-ellipsis.svg"
import data from "../../../public/time-tracking-dashboard-main/data.json"
import Exercise from "../../../public/time-tracking-dashboard-main/images/icon-exercise.svg"
import Play from "../../../public/time-tracking-dashboard-main/images/icon-play.svg"
import Selfcare from "../../../public/time-tracking-dashboard-main/images/icon-self-care.svg"
import Social from "../../../public/time-tracking-dashboard-main/images/icon-social.svg"
import Study from "../../../public/time-tracking-dashboard-main/images/icon-study.svg"
import Work from "../../../public/time-tracking-dashboard-main/images/icon-work.svg"

// Objet pour choisir l'icone dynamiquement
const icons = {
    "Work": Work,
    "Play": Play,
    "Study": Study,
    "Exercise": Exercise,
    "Social": Social,
    "Self Care": Selfcare
};
// Objet pour choisir le background color dynamiquement
const background = {
    "Work": "cards Work",
    "Play": "cards Play",
    "Study": "cards Study",
    "Exercise": "cards Exercise",
    "Social": "cards Social",
    "Self Care": "cards Selfcare"
}
const correction = {
    "daily": "Day",
    "weekly": "Week",
    "monthly": "Month",
}

export default function Cards({time}) {
    return(
        <>
        {/* Mapping ici des données JSON */}
        {data.map((item, index) => (
            <div className={background[item.title]} key={index}>
                <div className="cardsColor">
                    <img src={icons[item.title]} alt="svg" />
                </div>
                <div className="cardsInfos">
                    <div className="cardsInfosTop">
                        <span>{item.title}</span>
                        <img src={points} alt="" />
                    </div>
                    <div className="cardsInfosBot">
                        <span className="currentHours">{item.timeframes[time].current}hrs</span>
                        <span className="previousHours">Last {correction[time]} - {item.timeframes[time].previous}hrs</span>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}