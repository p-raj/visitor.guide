import { default as renderFloatingHome } from "../FloatingButton/home";
import { default as renderFloatingProfile } from "../FloatingButton/profile";
import { default as renderScanAndShare } from "../FloatingButton/scan";

export default function Layout(props) {
    return (
        <div className="content-wrapper">
            <div className="card-container">
                <>{props.children}</>
            </div>
            <div className="floating-container">
                {renderFloatingHome({ fnHandleClick: props.fnHomeButtonClick })}
                {renderFloatingProfile()}
                {renderScanAndShare()}
            </div>
        </div>
    );
}
