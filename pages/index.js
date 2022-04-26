import React, { useRef } from "react";

import Link from "next/link";

import Layout from "../components/Layout";
import VisitListItem from "../components/VisitList";

import { data } from "./api/data";

export async function getStaticProps() {
    return {
        props: {
            data: data,
        },
    };
}

export default function Home({ data }) {
    const titleRef = useRef();

    function fnScrollToTitle() {
        console.log("fnScrollToTitle");
        titleRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const renderBadgeLink = () => {
        return [0, 1, 2, 3, 5, 6, 7].map((_, index) => (
            <Link key={index} href="/visits/1">
                <a>
                    <div className="card-sm">
                        <VisitListItem data={data} />
                    </div>
                </a>
            </Link>
        ));
    };

    return (
        <Layout fnHomeButtonClick={fnScrollToTitle}>
            <div>
                <div ref={titleRef} className={"sticky-title"}>
                    <h1>{"Upcoming Visits"}</h1>
                </div>
                <div>{renderBadgeLink()}</div>
            </div>
            <div>
                <div className={"sticky-title"}>
                    <h1>{"Past Visits"}</h1>
                </div>
                <div>{renderBadgeLink()}</div>
            </div>
        </Layout>
    );
}
