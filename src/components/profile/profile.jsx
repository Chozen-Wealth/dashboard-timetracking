import "./profile.css"
import profilePic from "../../../public/time-tracking-dashboard-main/images/image-jeremy.png"

export default function Profile({setTimeframe, current}) {
    return(
        <div className="profile">
            <div className="profileTop">
                <img src={profilePic} alt="" />
                <div className="profileInfos">
                    <span className="profileReport">Report for</span>
                    <span className="profileName">Jeremy Robson</span>
                </div>
            </div>
            <div className="profileBot">
                {["daily", "weekly", "monthly"].map(period => (
                    <span key={period} className={`filter ${current === period ? "active" : ""}`} onClick={()=> setTimeframe(period)} >{period.charAt(0).toUpperCase() + period.slice(1)}</span>
                ))}
            </div>
        </div>
    )
}