import React from "react";
import { useRouter } from "next/router";

import OrgList from "../../../components/OrgList";
import Layout from "../../../components/Layout";

// Module CSS
import styles from "./Pid.module.css";
// CSS

import { data } from "../../api/data";

export default function Pid() {
    const router = useRouter();
    const { id } = router.query;

    const renderDataOwners = () => {
        console.log(router);

        return [0, 1, 2, 3, 5, 6, 7].map((_, index) => (
            <div className="card-sm" key={index}>
                <OrgList data={data} />
            </div>
        ));
    };

    const fnBackToMe = () => {
        console.log("fnBackToMe");
        router.push("/me");
        return false;
    };

    return (
        <Layout fnHomeButtonClick={fnBackToMe} fnHomeButtonUrl={""}>
            <div className={"container"}>
                <div className={`row ${styles["page-title"]}`}>
                    <h1>{"Data Shared With"}</h1>
                </div>
                <div className={`row ${styles.profile}`}>
                    {renderDataOwners()}
                </div>
            </div>
        </Layout>
    );
}
