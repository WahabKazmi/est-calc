import { Link, Outlet } from "react-router-dom";
import './style.scss'

const Tab = () => {
    return (
        <>
            <div className="tab">
                <div className="tab-menu-wrapper">
                    <Link className="btn" to="website-development">Website Development</Link>
                    <Link className="btn" to="report-design">Report Design</Link>
                    <Link className="btn" to="video-production">Video Production</Link>
                    <Link className="btn" to="animation">Animation</Link>
                </div>
                <div className="tab-content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Tab;