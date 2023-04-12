import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    return (
        <div className="shadow py-3">
            <div className="container mx-auto flex gap-3">
                <a href="https://twitter.com/GoldenCodeRam" className="inline-flex button" target="_blank">
                    <FontAwesomeIcon style={{ width: "1rem" }} className="inline mr-1" icon={faTwitter} />
                    @GoldenRamTech
                </a>
                <a href="https://twitter.com/GoldenCodeRam" className="inline-flex button" target="_blank">
                    <FontAwesomeIcon style={{ width: "1rem" }} className="inline mr-1" icon={faLinkedinIn} />
                    Alejandro Quiroga
                </a>
            </div>
        </div>
    );
}
