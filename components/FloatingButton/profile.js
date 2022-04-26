import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function renderFloatingButton() {
    const router = useRouter();

    const renderLink = () => {
        return (
            <Link href="/me/">
                <a className={"me"}>
                    <Image
                        width={"100%"}
                        height={"100%"}
                        src="/images/me.jpg"
                    />
                </a>
            </Link>
        );
    };

    const renderEmoji = () => {
        return (
            <div className="emoji">
                <span className="em-star-struck"></span>
            </div>
        );
    };

    return (
        <div className="floating-button">
            {router.asPath == "/me" ? renderEmoji() : renderLink()}
        </div>
    );
}
