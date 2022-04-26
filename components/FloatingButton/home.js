import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function renderFloatingButton(props) {
    const router = useRouter();

    return (
        <div className="floating-button">
            <Link href={"/"} passHref={props.fnHandleClick ? true : false}>
                <a
                    className={router.asPath == "/" ? "shake" : "home"}
                    onClick={(e) => {
                        if (props.fnHandleClick == null) {
                            return true;
                        }
                        console.log(e);
                        e.stopPropagation();
                        e.preventDefault();
                        props.fnHandleClick();
                    }}>
                    <Image
                        width={"100%"}
                        height={"100%"}
                        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMiIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPlVJPC90aXRsZT48cGF0aCBkPSJNMjIuNjY5LDEwLjI1N2wtMTAtOWExLDEsMCwwLDAtMS4zMzgsMGwtMTAsOWExLDEsMCwwLDAsMS4zMzgsMS40ODZMMTIsMy4zNDVsOS4zMzEsOC40YTEsMSwwLDAsMCwxLjMzOC0xLjQ4NloiPjwvcGF0aD48cGF0aCBkPSJNMjAsMTNhMSwxLDAsMCwwLTEsMXY1Ljc3NEExLjIyNywxLjIyNywwLDAsMSwxNy43NzQsMjFINi4yMjZBMS4yMjcsMS4yMjcsMCwwLDEsNSwxOS43NzRWMTRhMSwxLDAsMCwwLTIsMHY1Ljc3NEEzLjIyOSwzLjIyOSwwLDAsMCw2LjIyNiwyM0gxNy43NzRBMy4yMjksMy4yMjksMCwwLDAsMjEsMTkuNzc0VjE0QTEsMSwwLDAsMCwyMCwxM1oiPjwvcGF0aD48L3N2Zz4="
                    />
                </a>
            </Link>
        </div>
    );
}
