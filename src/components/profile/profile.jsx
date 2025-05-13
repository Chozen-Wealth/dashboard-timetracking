import "./profile.css"
import profilePic from "../../../public/time-tracking-dashboard-main/images/image-jeremy.png"

export default function Profile() {
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
                <span className="filter">Daily</span>
                <span className="filter active">Weekly</span>
                <span className="filter">Monthly</span>
            </div>
        </div>
    )
}