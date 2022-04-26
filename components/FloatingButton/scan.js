import Image from "next/image";
import Link from "next/link";

export default function renderFloatingButton() {
    const renderLink = () => {
        return (
            <Link href="/scan/">
                <a className={"scan"}>
                    <Image
                        width={"100%"}
                        height={"100%"}
                        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5pY29uL3NjYW48L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLDMgTDMsNi41IEMzLDYuNzc2MTQyMzcgMi43NzYxNDIzNyw3IDIuNSw3IEMyLjIyMzg1NzYzLDcgMiw2Ljc3NjE0MjM3IDIsNi41IEwyLDIuNSBDMiwyLjIyMzg1NzYzIDIuMjIzODU3NjMsMiAyLjUsMiBMNi41LDIgQzYuNzc2MTQyMzcsMiA3LDIuMjIzODU3NjMgNywyLjUgQzcsMi43NzYxNDIzNyA2Ljc3NjE0MjM3LDMgNi41LDMgTDMsMyBaIE0yMCwzIEwxNi41LDMgQzE2LjIyMzg1NzYsMyAxNiwyLjc3NjE0MjM3IDE2LDIuNSBDMTYsMi4yMjM4NTc2MyAxNi4yMjM4NTc2LDIgMTYuNSwyIEwyMC41LDIgQzIwLjc3NjE0MjQsMiAyMSwyLjIyMzg1NzYzIDIxLDIuNSBMMjEsNi41IEMyMSw2Ljc3NjE0MjM3IDIwLjc3NjE0MjQsNyAyMC41LDcgQzIwLjIyMzg1NzYsNyAyMCw2Ljc3NjE0MjM3IDIwLDYuNSBMMjAsMyBaIE0zLDIwIEw2LjUsMjAgQzYuNzc2MTQyMzcsMjAgNywyMC4yMjM4NTc2IDcsMjAuNSBDNywyMC43NzYxNDI0IDYuNzc2MTQyMzcsMjEgNi41LDIxIEwyLjUsMjEgQzIuMjIzODU3NjMsMjEgMiwyMC43NzYxNDI0IDIsMjAuNSBMMiwxNi41IEMyLDE2LjIyMzg1NzYgMi4yMjM4NTc2MywxNiAyLjUsMTYgQzIuNzc2MTQyMzcsMTYgMywxNi4yMjM4NTc2IDMsMTYuNSBMMywyMCBaIE0yMCwyMCBMMjAsMTYuNSBDMjAsMTYuMjIzODU3NiAyMC4yMjM4NTc2LDE2IDIwLjUsMTYgQzIwLjc3NjE0MjQsMTYgMjEsMTYuMjIzODU3NiAyMSwxNi41IEwyMSwyMC41IEMyMSwyMC43NzYxNDI0IDIwLjc3NjE0MjQsMjEgMjAuNSwyMSBMMTYuNSwyMSBDMTYuMjIzODU3NiwyMSAxNiwyMC43NzYxNDI0IDE2LDIwLjUgQzE2LDIwLjIyMzg1NzYgMTYuMjIzODU3NiwyMCAxNi41LDIwIEwyMCwyMCBaIE0yLjUsMTIgQzIuMjIzODU3NjMsMTIgMiwxMS43NzYxNDI0IDIsMTEuNSBDMiwxMS4yMjM4NTc2IDIuMjIzODU3NjMsMTEgMi41LDExIEwyMC41LDExIEMyMC43NzYxNDI0LDExIDIxLDExLjIyMzg1NzYgMjEsMTEuNSBDMjEsMTEuNzc2MTQyNCAyMC43NzYxNDI0LDEyIDIwLjUsMTIgTDIuNSwxMiBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48L2c+PC9zdmc+"
                    />
                </a>
            </Link>
        );
    };

    return <div className="floating-button">{renderLink()}</div>;
}
