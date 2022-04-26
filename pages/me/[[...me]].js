import React from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../components/Layout";

// Module CSS
import styles from "./Me.module.css";
// CSS

export default function Me() {
    const renderAvatar = () => {
        return (
            <>
                <div className={styles["profile-image"]}>
                    <Image width={200} height={200} src="/images/me.jpg" />
                </div>
                <div>
                    <h2>{"Jane Doe"}</h2>
                    <h4>{"Wonderland"}</h4>
                </div>
            </>
        );
    };

    const renderProfile = () => {
        return (
            <div className={styles["profile-list"]}>
                {renderProfileListItem()}
            </div>
        );
    };

    const renderProfileListItem = () => {
        const data = [
            { title: "Full Name", value: "Jane Doe", id: "fullname" },
            { title: "Age", value: "38", id: "age" },
            { title: "Gender", value: "She/Her", id: "gender" },
            { title: "Organization", value: "Wonderland", id: "organization" },
        ];
        return data.map((d, index) => (
            <div className={styles["profile-list-item"]} key={index}>
                <div className={styles.title}>{d.title}</div>
                <div className={styles.value}>
                    <Link href={`/me/pid/${d.id}`}>
                        <a>{d.value}</a>
                    </Link>
                </div>
            </div>
        ));
    };
    return (
        <Layout>
            <div className={styles.avatar}>{renderAvatar()}</div>
            <div className={styles.profile}>{renderProfile()}</div>
        </Layout>
    );
}
