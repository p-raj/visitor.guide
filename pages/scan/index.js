import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";

// Module CSS
import styles from "./Scan.module.css";
// CSS

export default function Scan() {
    const [scanned, setScanned] = useState(false);

    useEffect(
        () => {
            let timer1 = setTimeout(() => setScanned(true), 5 * 1000);

            // this will clear Timeout
            // when component unmount like in willComponentUnmount
            // and show will not change to true
            return () => {
                clearTimeout(timer1);
            };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        []
    );
    const renderProfileListItem = () => {
        const data = [
            { title: "Full Name", value: "Jane Doe" },
            { title: "Age", value: "38" },
            { title: "Gender", value: "She/Her" },
            { title: "Organization", value: "Wonderland" },
            { title: "Full Name", value: "Jane Doe" },
            { title: "Govt.ID", value: null },
            { title: "Whom to meet", value: null },
            { title: "Email", value: null },
        ];
        return data.map((d, index) => (
            <div
                className={`${styles["profile-list-item"]} ${styles["fade-in"]}`}
                key={index}>
                <div className={styles.status}>
                    <span
                        className={
                            d.value ? styles.ready : styles.empty
                        }></span>
                    <span className={styles.title}>{d.title}</span>
                </div>
                <div className={styles.value}>
                    {d.value ? d.value : "click to fill"}
                </div>
            </div>
        ));
    };

    const renderScanner = () => {
        return (
            <img
                // src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggZD0iTTUwLjUsMzUuNDM1aDQuOTQzdjYuMTc5aDIuNDcyVjI0LjMxMmgtMi40NzJ2OC42NWgtNC4zNzV2LTIuNDcxaC00Ljk0M3YyLjQ3Mkg1MC41VjM1LjQzNXogTTc1LjIxNiwyNi43ODRoLTkuODg3djkuODg2ICAgIGg5Ljg4N1YyNi43ODR6IE01MC41LDM5LjE0MmgwLjU2OFYzNi42N2gtNC45NDN2Mi40NzJoLTAuNTY4di0xNC44M2gtMi40NzJ2MTcuMzAxSDUwLjVWMzkuMTQyeiBNNTIuNDcyLDI3LjI3OGgtNC45NDN2Mi40NzIgICAgaDQuOTQzVjI3LjI3OHogTTYyLjg1Nyw0NC4wODV2Mi40NzFoLTQuOTQydjIuNDcyaDkuODg2di00Ljk0M0g2Mi44NTd6IE04MC4xNTksNTguOTE1di0yLjQ3MmgtNC45NDN2Mi40NzJIODAuMTU5eiAgICAgTTc3LjY4OCw1My45NzJWNTEuNWgyLjQ3MnYtNC45NDNoLTIuNDcydi0yLjQ3MWgtNy40MTV2NC45NDNoNC45NDNWNTEuNWgtMi40NzJ2Mi40NzJoLTIuNDcydi00Ljk0M2gtMi40NzJ2OS44ODdoNC45NDN2LTIuNDcyICAgIGgyLjQ3MnYtMi40NzJINzcuNjg4eiBNNjUuMzI5LDYzLjg1OGg0Ljk0M3YtMi40NzJoLTQuOTQzVjYzLjg1OHogTTEwLjk1NSwxMy45MzJoMTUuODE4VjkuOTc4SDdWMjkuNzVoMy45NTVWMTMuOTMyeiAgICAgTTgwLjE1OSwyMS44NDFINjAuMzg3djE5Ljc3M2gxOS43NzJWMjEuODQxeiBNNzcuNjg4LDM5LjE0MmgtMTQuODN2LTE0LjgzaDE0LjgzVjM5LjE0MnogTTYwLjM4Nyw3Ni4yMTZoNC45NDJ2LTIuNDcyaC00Ljk0MiAgICBWNzYuMjE2eiBNMjUuNzg0LDM2LjY3aDkuODg2di05Ljg4NmgtOS44ODZWMzYuNjd6IE01MC41LDczLjc0NGgtNC45NDN2NC45NDNINTAuNXYyLjQ3Mmg0Ljk0M3YtMi40NzJoMi40NzJ2Mi40NzJoNC45NDJ2LTIuNDcyICAgIGgtMi40NzF2LTIuNDcySDUwLjVWNzMuNzQ0eiBNNzQuMjI4LDkuOTc4djMuOTU0aDE1LjgxN1YyOS43NUg5NFY5Ljk3OEg3NC4yMjh6IE04MC4xNTksODEuMTU5di05Ljg4N2gtNC45NDN2NC45NDNoLTIuNDcyICAgIHYtMi40NzJoLTIuNDcydi0yLjQ3Mmg0Ljk0M1Y2Ni4zM2gyLjQ3MnYtMi40NzJoMi40NzJ2LTIuNDcyaC00Ljk0M3YyLjQ3MmgtMi40NzJ2Mi40NzJoLTQuOTQzdjIuNDcxaC0yLjQ3MlY2Ni4zM2gtOS44ODZ2LTIuNDcyICAgIGgyLjQ3MnYtMi40NzJoMi40NzJ2LTIuNDcyaDIuNDcxdi00Ljk0M2gtMi40NzFWNTEuNWgtNy40MTV2NC45NDNINTAuNXY5Ljg4N2gtMi40NzJ2LTQuOTQzaC00Ljk0M3Y0Ljk0M2gyLjQ3MnY0Ljk0Mmg3LjQxNSAgICB2Mi40NzJoNy40MTV2LTQuOTQzaDIuNDcxdjIuNDcyaDIuNDcydjIuNDcyaDIuNDcydjIuNDcyaDIuNDcydjIuNDcyaDIuNDcydjIuNDcySDgwLjE1OXogTTUyLjk3Miw1OC45MTVoMi40NzJ2Mi40NzJoLTIuNDcyICAgIFY1OC45MTV6IE01NS40NDMsNDkuMDI4di00Ljk0M0gzNS42N3YyLjQ3MWgtMi40NzJ2LTIuNDcxaC03LjQxNXY0Ljk0M2g0Ljk0M1Y1MS41aC0yLjQ3MnYyLjQ3MmgtMi40NzJ2LTQuOTQzaC00Ljk0M3Y5Ljg4NyAgICBoNy40MTV2LTIuNDcyaDIuNDcydi0yLjQ3MmgyLjQ3MVY1MS41aDIuNDcydi0yLjQ3MmgyLjQ3MnYtMi40NzJoMi40NzJWNTEuNWgtMi40NzJ2Mi40NzJoNC45NDN2LTQuOTQzaDIuNDcydjcuNDE1SDMzLjE5OXYyLjQ3MiAgICBoMTQuODN2LTIuNDcySDUwLjV2LTcuNDE1SDU1LjQ0M3ogTTIwLjg0MSw4MS4xNTloMTkuNzczVjYxLjM4N0gyMC44NDFWODEuMTU5eiBNMjMuMzEyLDYzLjg1OGgxNC44M3YxNC44MjloLTE0LjgzVjYzLjg1OHogICAgIE0yMC44NDEsNDEuNjE0aDE5Ljc3M1YyMS44NDFIMjAuODQxVjQxLjYxNHogTTIzLjMxMiwyNC4zMTJoMTQuODN2MTQuODNoLTE0LjgzVjI0LjMxMnogTTEwLjk1NSw3My4yNUg3djE5Ljc3MmgxOS43NzJ2LTMuOTU0ICAgIEgxMC45NTVWNzMuMjV6IE0yNS43ODQsNzYuMjE2aDkuODg2VjY2LjMzaC05Ljg4NlY3Ni4yMTZ6IE05MC4wNDUsODkuMDY4SDc0LjIyOHYzLjk1NEg5NFY3My4yNWgtMy45NTVWODkuMDY4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                src="/images/qr-scan.gif"
            />
        );
    };

    const renderShareButton = () => {
        return <button>{"Fill and Share the data"}</button>;
    };

    return (
        <Layout>
            <div className={"container"}>
                <div className={`row ${styles["page-title"]}`}>
                    <h1>
                        {scanned ? "Fill & Share the data" : "Scan the Code"}
                    </h1>
                </div>
                <div
                    className={
                        scanned
                            ? `row ${styles.scanner} ${styles["squeeze-in"]}`
                            : `row ${styles.scanner}`
                    }>
                    {renderScanner()}
                </div>
                <div className={`row ${styles.profile}`}>
                    {renderProfileListItem()}
                </div>
                <div className={`row ${styles.share}`}>
                    {renderShareButton()}
                </div>
            </div>
        </Layout>
    );
}
