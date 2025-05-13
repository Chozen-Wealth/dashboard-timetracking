import "./cards.css"
import points from "../../../public/time-tracking-dashboard-main/images/icon-ellipsis.svg"
import data from "../../../public/time-tracking-dashboard-main/data.json"

export default function Cards() {
    const timeframe = "weekly"
    return(
        <>
        {data.map((item, index) => (
            <div className="cards" key={index}>
                <div className="cardsColor">
                    <img src="svgici" alt="svg" />
                </div>
                <div className="cardsInfos">
                    <div className="cardsInfosTop">
                        <span>{item.title}</span>
                        <img src={points} alt="" />
                    </div>
                    <div className="cardsInfosBot">
                        <span className="currentHours">{item.timeframes[timeframe].current}hrs</span>
                        <span className="previousHours">Last Week - {item.timeframes[timeframe].previous}hrs</span>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}