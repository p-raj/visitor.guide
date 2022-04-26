import Image from "next/image";

// Module CSS
import styles from "./OrgList.module.css";
// CSS

export default function OrgListItem(props) {
    const data = props.data;

    return (
        <div className={styles.visitlist}>
            {/* org image */}
            <div className={styles.orglogo}>
                <Image
                    height={"100%"}
                    width={"100%"}
                    src={data.visit.visiting_organization_logo}
                />
            </div>
            {/* Host Details + Visit Details */}
            <div className={styles.visitmeta}>
                <p className={styles.orgname}>
                    {data.visit.visiting_organization}
                </p>
                <h2>{data.visit.host_name}</h2>
                <h5>{data.visit.host_designation}</h5>
                <p className={styles.visitdate}>{data.visit.visit_date}</p>
            </div>
        </div>
    );
}
