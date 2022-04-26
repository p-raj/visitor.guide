import Image from "next/image";

// Module CSS
import styles from "./VisitList.module.css";
// CSS

export default function VisitListItem(props) {
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
            {/* QR Code */}
            <div className={styles.qrcode}>
                <Image
                    height={"100%"}
                    width={"100%"}
                    src={
                        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHN0eWxlPSIiIGQ9Ik00MS43NTUsNzQuODg5Yy02LjY0MSwwLTEyLjA0NC01LjQwMy0xMi4wNDQtMTIuMDQ0YzAtMy41MzYsMS41MTItNi44MTEsNC4xNzUtOS4xMDRWMjguODUyICAgYzAtMy41NDIsMi44ODItNi40MjQsNi40MjQtNi40MjRINDMuMmMzLjU0MiwwLDYuNDI0LDIuODgyLDYuNDI0LDYuNDI0VjUzLjc0YzIuNjY0LDIuMjk0LDQuMTc2LDUuNTY4LDQuMTc2LDkuMTA0ICAgQzUzLjc5OSw2OS40ODYsNDguMzk2LDc0Ljg4OSw0MS43NTUsNzQuODg5eiBNNDAuMzA5LDI1LjY0Yy0xLjc3MSwwLTMuMjEyLDEuNDQxLTMuMjEyLDMuMjEydjI2LjQ1N2wtMC42NCwwLjQ4MiAgIGMtMi4yNDcsMS42OTEtMy41MzUsNC4yNjItMy41MzUsNy4wNTRjMCw0Ljg3LDMuOTYyLDguODMzLDguODMzLDguODMzczguODMzLTMuOTYyLDguODMzLTguODMzYzAtMi43OTItMS4yODktNS4zNjMtMy41MzUtNy4wNTQgICBsLTAuNjQtMC40ODJWMjguODUyYzAtMS43NzEtMS40NDEtMy4yMTItMy4yMTItMy4yMTJINDAuMzA5eiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxjaXJjbGUgc3R5bGU9IiIgY3g9IjQxLjc1NSIgY3k9IjYyLjc1NSIgcj0iNi4yNDUiIGZpbGw9IiMwMDAwMDAiPjwvY2lyY2xlPjxwYXRoIHN0eWxlPSIiIGQ9Ik00MS43NTUsNjAuODgxYy0xLjMzLDAtMi40MDktMS4wNzgtMi40MDktMi40MDlWNDQuOTExYzAtMS4zMywxLjA3OC0yLjQwOSwyLjQwOS0yLjQwOSAgIGMxLjMzLDAsMi40MDksMS4wNzgsMi40MDksMi40MDl2MTMuNTYxQzQ0LjE2NCw1OS44MDMsNDMuMDg1LDYwLjg4MSw0MS43NTUsNjAuODgxeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIHN0eWxlPSIiIGQ9Ik02Ni4zOTgsNTcuMTI0Yy01LjI1OCwwLTkuNTM2LTQuMjc4LTkuNTM2LTkuNTM2YzAtNS4yNTgsNC4yNzgtOS41MzYsOS41MzYtOS41MzYgICBjMi41NDcsMCw0Ljk0MSwwLjk5Miw2Ljc0MywyLjc5M2MwLjUyMywwLjUyMywwLjUyMywxLjM3LDAsMS44OTNjLTAuNTIzLDAuNTIzLTEuMzcsMC41MjMtMS44OTMsMCAgIGMtMS4yOTYtMS4yOTYtMy4wMTgtMi4wMDktNC44NS0yLjAwOWMtMy43ODIsMC02Ljg1OSwzLjA3Ny02Ljg1OSw2Ljg1OXMzLjA3Nyw2Ljg1OSw2Ljg1OSw2Ljg1OWMxLjU2MywwLDMuMDM1LTAuNTEyLDQuMjU3LTEuNDggICBjMC41NzktMC40NTksMS40MjEtMC4zNjIsMS44OCwwLjIxN2MwLjQ1OSwwLjU3OSwwLjM2MiwxLjQyMS0wLjIxNywxLjg4QzcwLjYxOCw1Ni40MTEsNjguNTcxLDU3LjEyNCw2Ni4zOTgsNTcuMTI0eiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIHN0eWxlPSIiIGQ9Ik01Ni4wNTksMzguNTc3Yy0xLjgyLDAtMy4zMDEtMS40ODEtMy4zMDEtMy4zMDFzMS40ODEtMy4zMDEsMy4zMDEtMy4zMDFzMy4zMDEsMS40ODEsMy4zMDEsMy4zMDEgICBTNTcuODgsMzguNTc3LDU2LjA1OSwzOC41Nzd6IE01Ni4wNTksMzMuNThjLTAuOTM1LDAtMS42OTUsMC43NjEtMS42OTUsMS42OTVzMC43NjEsMS42OTUsMS42OTUsMS42OTUgICBjMC45MzUsMCwxLjY5NS0wLjc2LDEuNjk1LTEuNjk1UzU2Ljk5NCwzMy41OCw1Ni4wNTksMzMuNTh6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    }
                />
                <Image
                    height={"100%"}
                    width={"100%"}
                    src={
                        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeD0iMHB4IiB5PSIwcHgiPjxwYXRoIGQ9Ik0yNCAyM0MyMS40NjE3IDIyLjk4NyAxOC45MjY2IDIzLjE4MzEgMTYuNDIwNSAyMy41ODY0TDE2LjU3OTQgMjQuNTczN0MxOS4wMzIxIDI0LjE3OSAyMS41MTMyIDIzLjk4NzEgMjMuOTk3NCAyNEgyNC4wMDI2QzI2LjQ4NjggMjMuOTg3MSAyOC45Njc4IDI0LjE3OSAzMS40MjA1IDI0LjU3MzdMMzEuNTc5NCAyMy41ODY0QzI5LjA3MzMgMjMuMTgzMSAyNi41MzgzIDIyLjk4NyAyNCAyM1oiIGZpbGw9ImJsYWNrIj48L3BhdGg+PHBhdGggZD0iTTE4LjkyMjQgMjcuNTA2MUMyMC42MDE5IDI3LjI0MTkgMjIuMjk5OSAyNy4xMTI4IDI0LjAwMDEgMjcuMTJDMjUuNzAwMiAyNy4xMTI4IDI3LjM5ODIgMjcuMjQxOSAyOS4wNzc3IDI3LjUwNjFMMjguOTIyNCAyOC40OTM5QzI3LjI5NDkgMjguMjM4IDI1LjY0OTYgMjguMTEyOSAyNC4wMDIyIDI4LjEySDIzLjk5NzlDMjIuMzUwNSAyOC4xMTI5IDIwLjcwNTIgMjguMjM4IDE5LjA3NzcgMjguNDkzOUwxOC45MjI0IDI3LjUwNjFaIiBmaWxsPSJibGFjayI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAuNDUgMzUuMDdMMzAuNyAzNUMzMy4xNzc3IDM0LjI3NTEgMzUuMzU1NSAzMi43NzA1IDM2LjkxMDIgMzAuNzA5NkMzNy43OTExIDI5LjU0MTkgMzguNDQ1MyAyOC4yMzA4IDM4Ljg0OTkgMjYuODQ0MkM0MC40NDEyIDI1LjU1NjQgNDEuNzI3MSAyMy45MzEzIDQyLjYxNDQgMjIuMDg1N0M0My41MTIzIDIwLjIxODEgNDMuOTc5IDE4LjE3MjMgNDMuOTgwMSAxNi4xTDQzLjk4MDEgMTQuOTNMNDMuOTggMTQuOTI3OUM0My45Nzg4IDE0LjYzMTMgNDMuODg5NiAxNC4zNDE2IDQzLjcyMzggMTQuMDk1N0M0My41NTc5IDEzLjg0OTcgNDMuMzIyOSAxMy42NTg0IDQzLjA0ODMgMTMuNTQ2QzQyLjc3MzggMTMuNDMzNiA0Mi40NzIxIDEzLjQwNTIgNDIuMTgxNCAxMy40NjQyQzQxLjg5MSAxMy41MjMzIDQxLjYyNDYgMTMuNjY2OSA0MS40MTU4IDEzLjg3NzFMMzguNTA3NiAxNi43ODU0TDI0IDEzTDkuNDkyNTEgMTYuNzg1NEw2LjU4NTAyIDEzLjg3NzlMNi41ODQyIDEzLjg3NzFDNi4zNzU0MSAxMy42NjY5IDYuMTA5MDYgMTMuNTIzMiA1LjgxODcyIDEzLjQ2NDJDNS41MjggMTMuNDA1MiA1LjIyNjI5IDEzLjQzMzYgNC45NTE3NSAxMy41NDZDNC42NzcyIDEzLjY1ODQgNC40NDIxNCAxMy44NDk3IDQuMjc2MjkgMTQuMDk1N0M0LjExMDQ1IDE0LjM0MTYgNC4wMjEyNiAxNC42MzEzIDQuMDIwMDIgMTQuOTI3OVYxNi4xMDAzQzQuMDIxMDcgMTguMTcyNSA0LjQ4Nzc5IDIwLjIxODEgNS4zODU3IDIyLjA4NTdDNi4yNzMwMSAyMy45MzEzIDcuNTU4OTYgMjUuNTU2NiA5LjE1MDQxIDI2Ljg0NDRDOS41NTMxNCAyOC4yMjQ1IDEwLjIwMzEgMjkuNTI5OCAxMS4wNzggMzAuNjkzNkMxMi42MzMzIDMyLjc2MjUgMTQuODE1OSAzNC4yNzMxIDE3LjMgMzVMMTcuNTUgMzUuMDdDMjEuNzYwNiAzNi4zMTAxIDI2LjIzOTUgMzYuMzEwMSAzMC40NSAzNS4wN1pNNDEuNzEzMSAyMS42NTI1QzQxLjA4MjcgMjIuOTYzNyA0MC4yMzU0IDI0LjE1NSAzOS4yMSAyNS4xNzc3QzM5LjI4NjEgMjQuNjQ0IDM5LjMyNjUgMjQuMTAzNyAzOS4zMyAyMy41NlYxNy4zNzcxTDQyLjEyMzYgMTQuNTgzNkw0Mi4xMjUxIDE0LjU4MjFDNDIuMTk0NyAxNC41MTE5IDQyLjI4MzYgMTQuNDYzOSA0Mi4zODA1IDE0LjQ0NDJDNDIuNDc3NCAxNC40MjQ1IDQyLjU3OCAxNC40MzQgNDIuNjY5NSAxNC40NzE1QzQyLjc2MSAxNC41MDg5IDQyLjgzOTQgMTQuNTcyNyA0Mi44OTQ2IDE0LjY1NDdDNDIuOTQ5OCAxNC43MzY0IDQyLjk3OTUgMTQuODMyNyA0Mi45ODAxIDE0LjkzMTNWMTYuMDk5OEM0Mi45NzkxIDE4LjAyMjIgNDIuNTQ2MSAxOS45MTk4IDQxLjcxMzEgMjEuNjUyNVpNNS44NzUwMSAxNC41ODIxTDguNjcwMDQgMTcuMzc3MVYyMy41MkM4LjY3MTc3IDI0LjA3NzIgOC43MTIyNyAyNC42MzExIDguNzkwMjggMjUuMTc3OUM3Ljc2NDc4IDI0LjE1NTIgNi45MTc0IDIyLjk2MzggNi4yODY5NSAyMS42NTI1QzUuNDU0IDE5LjkxOTkgNS4wMjEwMyAxOC4wMjIxIDUuMDIwMDIgMTYuMDk5OEw1LjAyMDAyIDE0LjkzMTJDNS4wMjA2IDE0LjgzMjcgNS4wNTAzMiAxNC43MzY0IDUuMTA1NDQgMTQuNjU0N0M1LjE2MDcyIDE0LjU3MjcgNS4yMzkwNyAxNC41MDg5IDUuMzMwNTkgMTQuNDcxNUM1LjQyMjExIDE0LjQzNCA1LjUyMjY4IDE0LjQyNDUgNS42MTk1OCAxNC40NDQyQzUuNzE2NDkgMTQuNDYzOSA1LjgwNTM4IDE0LjUxMTkgNS44NzUwMSAxNC41ODIxWk0xNy41NzU0IDM0LjAzODZMMTcuODMyNiAzNC4xMTA3QzIxLjg1ODcgMzUuMjk2NCAyNi4xNDE0IDM1LjI5NjUgMzAuMTY3NSAzNC4xMTA3TDMwLjE4MDQgMzQuMTA2OUwzMC40MjQ3IDM0LjAzODZDMzIuNjkzNiAzMy4zNzM1IDM0LjY4NzkgMzEuOTk1IDM2LjExMTggMzAuMTA3NEMzNy41MzYzIDI4LjIxOTEgMzguMzE0MiAyNS45MjIgMzguMzMgMjMuNTU2OFYxNy43NzI2TDI0IDE0LjAzMzVMOS42NzAwNCAxNy43NzI2VjE5LjIxMTlMMjMuODc0MSAxNS41MTYxTDI0LjEyNTkgMTYuNDgzOUw5LjY3MDA0IDIwLjI0NTJWMjMuNTE4NEM5LjY3NzcgMjUuODkwNSAxMC40NTIgMjguMTk2NiAxMS44NzczIDMwLjA5MjdDMTMuMzAxOSAzMS45ODc3IDE1LjMwMDUgMzMuMzcxNyAxNy41NzU0IDM0LjAzODZaIiBmaWxsPSJibGFjayI+PC9wYXRoPjwvc3ZnPg=="
                    }
                />

                <Image
                    height={"100%"}
                    width={"100%"}
                    src={
                        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz48cGF0aCBkPSJNMjMuODYsMTguODJoLTkuMjdsLTEsMWgxMC4yN2MwLjc1LDAsMS4zNi0wLjYxLDEuMzYtMS4zN1Y5Ljk4YzAtMC40OS0wLjI1LTAuOTEtMC42My0xLjE2TDIzLjgsOS42MWgwLjA2ICAgIGMwLjIsMCwwLjM2LDAuMTcsMC4zNiwwLjM3djguNDdDMjQuMjIsMTguNjYsMjQuMDYsMTguODIsMjMuODYsMTguODJ6Ij48L3BhdGg+PHBhdGggZD0iTTI3LjEsMjAuOGgtMC4yOVY5LjQxYzAtMC43Ny0wLjM2LTEuNDUtMC45My0xLjg4bC0wLjcxLDAuNzFjMC4zOSwwLjI0LDAuNjQsMC42OCwwLjY0LDEuMTdWMjAuOGgtMTMuMmwtMSwxaDE0LjdoMC4yNSAgICBjLTAuMjQsMS4yNC0xLjMzLDIuMTgtMi42MywyLjE4SDkuNDNsLTEsMWgxNS41YzIuMDMsMCwzLjY3LTEuNjUsMy42Ny0zLjY4QzI3LjYsMjEuMDMsMjcuMzgsMjAuOCwyNy4xLDIwLjh6Ij48L3BhdGg+PHBhdGggZD0iTTEwLjksMjEuOGwxLTFsMC45OC0wLjk4bDEtMWw5LjIxLTkuMjFsMC45OC0wLjk4bDAuNTktMC41OWwwLjc4LTAuNzhsMi40MS0yLjQxbC0wLjctMC43bC0yLjg3LDIuODdoLTAuNzFoLTE2ICAgIGMtMS4zMSwwLTIuMzgsMS4wNy0yLjM4LDIuMzlWMjAuOEg0LjljLTAuMjgsMC0wLjUsMC4yMy0wLjUsMC41YzAsMS4zMiwwLjcsMi40OSwxLjc1LDMuMTRjMC4xNSwwLjA5LDAuMzEsMC4xNywwLjQ3LDAuMjQgICAgbC0yLjQ3LDIuNDdsMC43LDAuN2wyLjg5LTIuODlsMC45OC0wLjk4TDEwLjksMjEuOHogTTEyLjQ4LDE4LjgyaC0wLjcxSDguMTRjLTAuMiwwLTAuMzYtMC4xNi0wLjM2LTAuMzdWOS45OCAgICBjMC0wLjIsMC4xNi0wLjM3LDAuMzYtMC4zN2gxMi44NGgwLjcxTDEyLjQ4LDE4LjgyeiBNNi4xOSw5LjQxYzAtMC43NywwLjYyLTEuMzksMS4zOC0xLjM5aDE1aDAuNzFsLTAuNTksMC41OWgtMC43MUg4LjE0ICAgIGMtMC43NSwwLTEuMzYsMC42MS0xLjM2LDEuMzd2OC40N2MwLDAuNzYsMC42MSwxLjM3LDEuMzYsMS4zN2gyLjYzaDAuNzFMMTAuNSwyMC44SDkuNzloLTMuNlY5LjQxeiBNNi44OSwyMy43ICAgIGMtMC43NC0wLjM2LTEuMjktMS4wNi0xLjQ1LTEuOWgwLjI1aDMuMUg5LjVsLTIuMDksMi4wOUM3LjIzLDIzLjg1LDcuMDYsMjMuNzgsNi44OSwyMy43eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    }
                />
                <Image
                    height={"100%"}
                    width={"100%"}
                    src={
                        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz48cGF0aCBkPSJNMjEuNSwyMWgtOS4wOWwtMSwxSDIxLjV2Mi40YzAsMC4zMy0wLjI3LDAuNi0wLjYsMC42aC05LjhjLTAuMzMsMC0wLjYtMC4yNy0wLjYtMC42di0xLjQ5bC0xLDF2MC40OSAgICBjMCwwLjg4LDAuNzIsMS42LDEuNiwxLjZoOS44YzAuODgsMCwxLjYtMC43MiwxLjYtMS42di0yLjlWMTAuOTFsLTEsMVYyMXoiPjwvcGF0aD48cGF0aCBkPSJNMTgsOGgtNGMtMC4yNzYsMC0wLjUsMC4yMjQtMC41LDAuNVMxMy43MjQsOSwxNCw5aDRjMC4yNzYsMCwwLjUtMC4yMjQsMC41LTAuNVMxOC4yNzYsOCwxOCw4eiI+PC9wYXRoPjxwYXRoIGQ9Ik0xOCwyNGMwLjI3NiwwLDAuNS0wLjIyNCwwLjUtMC41UzE4LjI3NiwyMywxOCwyM2gtNGMtMC4yNzYsMC0wLjUsMC4yMjQtMC41LDAuNVMxMy43MjQsMjQsMTQsMjRIMTh6Ij48L3BhdGg+PHBhdGggZD0iTTI2LjY1LDQuNjVMMjIuNSw4LjhWOC4wOVY3LjZjMC0wLjg4LTAuNzItMS42LTEuNi0xLjZoLTkuOGMtMC44OCwwLTEuNiwwLjcyLTEuNiwxLjZ2MTMuNDl2MC40MXYwLjNsLTQuODUsNC44NWwwLjcsMC43ICAgIEw5LjUsMjMuMmwxLTFsMC4yLTAuMmwxLTFsOS44LTkuOGwxLTFsNC44NS00Ljg1TDI2LjY1LDQuNjV6IE0xMC41LDIwLjh2LTAuNzFWNy42YzAtMC4zMywwLjI3LTAuNiwwLjYtMC42aDkuOCAgICBjMC4zMywwLDAuNiwwLjI3LDAuNiwwLjZ2MS40OVY5LjhMMTAuNSwyMC44eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    }
                />
            </div>
        </div>
    );
}