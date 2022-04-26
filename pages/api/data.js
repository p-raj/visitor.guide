const data = {
    visit: {
        visiting_organization: "Digicred Technologies",
        visiting_organization_logo: "/images/visiting-org.png",
        visit_date: " Fri May 14 2021, 2:55 PM",
        host_name: "Mad Hatter",
        host_designation: "Wonderland Guide",
        qr_code:
            "https://i2.wp.com/digiday.com/wp-content/uploads/2012/07/QR_Code.png",
    },
    cards: [
        {
            id: 1,
            position: 1,
            content: {
                type: "md__image",
                design: `![QR]({{link}})`,
                value: {
                    link: "https://www.getveris.com/wp-content/uploads/2020/05/Veris-Long-NEW-Gradient.png",
                },
            },
        },
        {
            id: 2,
            position: 2,
            content: {
                type: "antd__timeline",
                design: [
                    { title: "Approved", description: "At <time>" },
                    { title: "Check-In", description: "At <time>" },
                    { title: "Check-out", description: "At <time>" },
                ],
                value: {
                    step: 2,
                },
            },
        },
        {
            id: 3,
            position: 3,
            content: {
                type: "md__text",
                design: `
                    # Hi, {{visitor_name}}
                    ### {{company_name}}
                    `,
                value: {
                    visitor_name: "Alice Wonderland",
                    company_name: "No-Wonderland",
                },
            },
        },
        {
            id: 4,
            position: 4,
            content: {
                type: "md__time",
                design: `
                    Time
                    ## {{visit_date}}
                    #### {{visitor_tz}}
                    [<img src="{{link}}" width="250"/>]({{link}})
                    `,
                value: {
                    link: "https://i2.wp.com/digiday.com/wp-content/uploads/2012/07/QR_Code.png",
                    visit_date: " Fri May 14 2021, 2:55 PM",
                    visitor_tz: "Asia/Kolkatta",
                },
            },
        },
        {
            id: 5,
            position: 5,
            content: {
                type: "md__text",
                design: `
                    Here to Meet
                    # {{host_name}}
                    ### {{host_designation}}
                    `,
                value: {
                    host_name: "Mad Hatter",
                    host_designation: "Wonderland",
                },
            },
        },
        {
            id: 6,
            position: 6,
            content: {
                type: "md__map",
                design: `
                    Address
                    ### {{venue_address}}
                    [Get Directions]({{link}})
                    ![map]({{map}})
                    `,
                value: {
                    venue_address: `JMD Megapolis, Sohna Road, Sector 48, Gurugram, Haryana`,
                    link: "https://goo.gl/maps/jP12gGHpfx7jjbHf6",
                    map: "https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png",
                },
            },
        },
        {
            id: 7,
            position: 7,
            content: {
                type: "md__list",
                // we will loop through the list
                // the design is only for single row
                design: `
                    <div class="list-item">
                        <div class="col-span-5 my-2">
                            <span class="title">
                                {{title}}
                            </span>
                        </div>
                        <div class="col-span-1">
                            <img style="height: 32px;" src="{{icon}}" />
                        </div>
                        <div class="col-span-3">
                            {{description}}
                        </div>
                        <div class="col-span-1">
                            <a href="{{link}}"  class="float-right"> 
                                <b> 
                                    <img style="height: 32px;" src="{{icon_link}}" />
                                </b> 
                            </a>
                        </div>
                    </div>
                `,
                value: [
                    {
                        icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCA3OSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDc5IiB4bWw6c3BhY2U9InByZXNlcnZlIj48bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSImIzY1Mjc5OyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj48L3g6eG1wbWV0YT48P3hwYWNrZXQgZW5kPSJ3Ij8+PC9tZXRhZGF0YT48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48cGF0aCBkPSJNMzEuNzQsMTlIMTMuMzczYy0xLjUyMiwwLTIuNzU1LTEuNDc4LTIuNzU1LTNjMC0xLjUyMSwxLjIzMy0zLDIuNzU1LTNIMzEuNzRjMS41MjIsMCwyLjc1NSwxLjQ3OSwyLjc1NSwzICAgIEMzNC40OTYsMTcuNTIyLDMzLjI2MiwxOSwzMS43NCwxOXoiPjwvcGF0aD48cGF0aCBkPSJNMjkuOTAzLDExSDE1LjIwOWMtMS41MjIsMC0yLjc1NS0xLjQ3OS0yLjc1NS0zczEuMjMzLTMsMi43NTUtM2gxNC42OTRjMS41MjIsMCwyLjc1NSwxLjQ3OSwyLjc1NSwzUzMxLjQyNSwxMSwyOS45MDMsMTEgICAgeiI+PC9wYXRoPjxwYXRoIGQ9Ik05Mi4zNTMsMjJoLTkuMDI4bDMuMTAxLTEwLjQ4NmMwLjQzMy0xLjQ1OS0wLjM5OC0zLjAxNS0xLjg1Ni0zLjQ0OGMtMS40NjMtMC40MzMtMi45OTMsMC4zNTQtMy40MjYsMS44MTJMNzcuNTM1LDIyICAgIEg3Ljg2M0M2LjM0MSwyMiw1LDIyLjcsNSwyNC4yMjF2NDYuODM2YzAsMS41MjIsMS40NzksMi43NTUsMywyLjc1NXMzLTEuMjMzLDMtMi43NTVWMjdoNjUuMDQ2bC0xLjE5MSw0SDU2LjU1NyAgICBjLTAuNjcyLDAtMS4yOTIsMC4xOTItMS42MTMsMC43ODNjLTAuMzIxLDAuNTkxLTAuMjk0LDEuMTM1LDAuMDcxLDEuN0w2My43NDgsNDdINTAuMTA3Yy0xLjUyMiwwLTIuNzU1LDEuNDc5LTIuNzU1LDMgICAgYzAsMS41MjIsMS4yMzMsMywyLjc1NSwzSDU5djEwaC02LjEzNmMtMC42OTEsMC0xLjMyNSwwLjI4NC0xLjYzOCwwLjkwMWwtMi42MDYsNS4wOTJjLTEuMDY2LDAuMjY1LTEuODYsMS4yMjItMS44NiwyLjM3ICAgIGMwLDEuMzUzLDEuMDk3LDIuNDQ5LDIuNDQ5LDIuNDQ5YzEuMzM2LDAsMi40MTctMS4wNzEsMi40NDQtMi40TDUzLjk5MSw2N0g1OXYzLjIwOWMtMC4xODcsMC4zNDUtMC4zMDIsMC43MzQtMC4zMDIsMS4xNTQgICAgYzAsMS4zNTMsMS4wOTcsMi40NDksMi40NSwyLjQ0OWMxLjM1MiwwLDIuNDQ5LTEuMDk3LDIuNDQ5LTIuNDQ5YzAtMC42MDgtMC4yMy0xLjE1OC0wLjU5Ny0xLjU4NlY2N2g1LjI5NGwyLjM1OCw0LjIxNiAgICBjLTAuMDAzLDAuMDUtMC4wMTUsMC4wOTctMC4wMTUsMC4xNDdjMCwxLjM1MywxLjA5NywyLjQ0OSwyLjQ0OSwyLjQ0OXMyLjQ0OS0xLjA5NywyLjQ0OS0yLjQ0OWMwLTEuMDkzLTAuNzIxLTIuMDA3LTEuNzA5LTIuMzIzICAgIGwtMi44MTQtNS4xNzZDNzAuNjkyLDYzLjI2OSw3MC4wNyw2Myw2OS4zOTQsNjNINjNWNTNoOS4xNDhjMS4yMiwwLDIuMjk0LTAuOTY4LDIuNjQxLTIuMTM3TDgxLjg0NiwyN0g4OXY0NC4wNTcgICAgYzAsMS41MjIsMS40NzksMi43NTUsMywyLjc1NXMzLTEuMjMzLDMtMi43NTVWMjQuMjIxQzk1LDIyLjcsOTMuODc1LDIyLDkyLjM1MywyMnogTTcwLjA5Myw0N2gtMS44NDlsLTguMzEzLTEzaDE0LjAzMkw3MC4wOTMsNDcgICAgeiI+PC9wYXRoPjwvZz48L3N3aXRjaD48L3N2Zz4=",
                        description: "Desk 201",
                        title: "Desk Details",
                        link: "/desk",
                        icon_link:
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQgNTQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU0IDU0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMjcsMEMxMi4xMSwwLDAsMTIuMTEsMCwyN3MxMi4xMSwyNywyNywyN3MyNy0xMi4xMSwyNy0yN1M0MS44OSwwLDI3LDB6IE0yNyw1MkMxMy4yMSw1MiwyLDQwLjc5LDIsMjdTMTMuMjEsMiwyNywyICAgczI1LDExLjIxLDI1LDI1UzQwLjc5LDUyLDI3LDUyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMywxNC4yOWMtMC4zOS0wLjM5LTEuMDItMC4zOS0xLjQxLDBzLTAuMzksMS4wMiwwLDEuNDFMMzIuODgsMjdMMjEuNTksMzguMjljLTAuMzksMC4zOS0wLjM5LDEuMDIsMCwxLjQxICAgYzAuMiwwLjIsMC40NSwwLjI5LDAuNzEsMC4yOXMwLjUxLTAuMSwwLjcxLTAuMjlsMTEuNS0xMS41YzAuNjctMC42NywwLjY3LTEuNzUsMC0yLjQyTDIzLDE0LjI5eiI+PC9wYXRoPjwvZz48L3N2Zz4=",
                    },
                    {
                        icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+PGc+PHBhdGggZD0iTTU5LDcyLjhjLTUtNS0xMy01LTE4LDBsOSw5TDU5LDcyLjh6Ij48L3BhdGg+PHBhdGggZD0iTTIzLjEsNTQuOGw5LDljOS45LTkuOSwyNi05LjksMzUuOSwwbDktOUM2Mi4xLDM5LjksMzcuOSwzOS45LDIzLjEsNTQuOHoiPjwvcGF0aD48cGF0aCBkPSJNODUuOSw0NS44bDktOWMtMjQuOC0yNC44LTY1LTI0LjgtODkuOCwwbDksOUMzMy45LDI2LDY2LjEsMjYsODUuOSw0NS44eiI+PC9wYXRoPjwvZz48L3N2Zz4=",
                        description: "WiFi Access to Guest-Lobby",
                        title: "WiFi Access",
                        link: "/wifi",
                        icon_link:
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQgNTQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU0IDU0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMjcsMEMxMi4xMSwwLDAsMTIuMTEsMCwyN3MxMi4xMSwyNywyNywyN3MyNy0xMi4xMSwyNy0yN1M0MS44OSwwLDI3LDB6IE0yNyw1MkMxMy4yMSw1MiwyLDQwLjc5LDIsMjdTMTMuMjEsMiwyNywyICAgczI1LDExLjIxLDI1LDI1UzQwLjc5LDUyLDI3LDUyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMywxNC4yOWMtMC4zOS0wLjM5LTEuMDItMC4zOS0xLjQxLDBzLTAuMzksMS4wMiwwLDEuNDFMMzIuODgsMjdMMjEuNTksMzguMjljLTAuMzksMC4zOS0wLjM5LDEuMDIsMCwxLjQxICAgYzAuMiwwLjIsMC40NSwwLjI5LDAuNzEsMC4yOXMwLjUxLTAuMSwwLjcxLTAuMjlsMTEuNS0xMS41YzAuNjctMC42NywwLjY3LTEuNzUsMC0yLjQyTDIzLDE0LjI5eiI+PC9wYXRoPjwvZz48L3N2Zz4=",
                    },
                ],
            },
        },
        {
            id: 8,
            position: 8,
            content: {
                type: "md__grid",
                design: `
                <div class="grid-item">
                    <div class="title">
                        {{title}}
                    </div>
                    <div>
                        <img style="height: 32px;" src="{{icon_link}}" />
                    </div>
                    <div>
                        {{description}}
                    </div>
                </div>
                `,
                value: [
                    {
                        title: "Laptop",
                        icon_link:
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTU1LjUsNS41SDguNGMtMC41LDAtMSwwLjQtMSwxdjI5LjRjMCwwLjUsMC40LDEsMSwxaDQ3LjFjMC41LDAsMS0wLjQsMS0xVjYuNUM1Ni41LDYsNTYsNS41LDU1LjUsNS41eiBNNTQuNSwzNC45SDkuNCAgIFY3LjVoNDUuMVYzNC45eiI+PC9wYXRoPjxyZWN0IHg9IjguMiIgeT0iNDQuNCIgd2lkdGg9IjEuOSIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48cmVjdCB4PSIxMy4zIiB5PSI0NC40IiB3aWR0aD0iMS44IiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxyZWN0IHg9IjE4LjQiIHk9IjQ0LjQiIHdpZHRoPSIxLjkiIGhlaWdodD0iMS45Ij48L3JlY3Q+PHJlY3QgeD0iMjMuNSIgeT0iNDQuNCIgd2lkdGg9IjEuOCIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48cmVjdCB4PSIyOC41IiB5PSI0NC40IiB3aWR0aD0iMS44IiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxyZWN0IHg9IjMzLjYiIHk9IjQ0LjQiIHdpZHRoPSIxLjgiIGhlaWdodD0iMS45Ij48L3JlY3Q+PHJlY3QgeD0iMzguNyIgeT0iNDQuNCIgd2lkdGg9IjEuOCIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48cmVjdCB4PSI0My43IiB5PSI0NC40IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxyZWN0IHg9IjQ4LjgiIHk9IjQ0LjQiIHdpZHRoPSIxLjgiIGhlaWdodD0iMS45Ij48L3JlY3Q+PHJlY3QgeD0iNTMuOCIgeT0iNDQuNCIgd2lkdGg9IjEuOSIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48cmVjdCB4PSI4LjIiIHk9IjQ5LjQiIHdpZHRoPSIxLjkiIGhlaWdodD0iMS45Ij48L3JlY3Q+PHJlY3QgeD0iMTMuMyIgeT0iNDkuNCIgd2lkdGg9IjEuOCIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48cmVjdCB4PSIxOC40IiB5PSI0OS40IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxyZWN0IHg9IjIzLjUiIHk9IjQ5LjQiIHdpZHRoPSIxLjgiIGhlaWdodD0iMS45Ij48L3JlY3Q+PHJlY3QgeD0iMjguNSIgeT0iNDkuNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxyZWN0IHg9IjQzLjciIHk9IjQ5LjQiIHdpZHRoPSIxLjkiIGhlaWdodD0iMS45Ij48L3JlY3Q+PHJlY3QgeD0iNDguOCIgeT0iNDkuNCIgd2lkdGg9IjEuOCIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48cmVjdCB4PSI1My44IiB5PSI0OS40IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxwYXRoIGQ9Ik02NCw1NS4zTDY0LDU1LjNsLTMuMi0xNS4zVjQuMmMwLTEuNy0xLjMtMy0zLTNINi4yYy0xLjcsMC0zLDEuMy0zLDN2MzUuOUwwLDU1LjNsMCwwYzAsMC4xLDAsMC4xLDAsMC4ydjIuOSAgIGMwLDIuNCwyLDQuNCw0LjQsNC40aDU1LjNjMi40LDAsNC40LTEuOSw0LjQtNC40di0yLjlDNjQsNTUuNSw2NCw1NS40LDY0LDU1LjN6IE00LjksNDEuMWg1NC4xbDIuOCwxMy40SDIuMkw0LjksNDEuMXogTTUuMSw0LjIgICBjMC0wLjYsMC40LTEuMSwxLjEtMS4xaDUxLjZjMC42LDAsMS4xLDAuNCwxLjEsMS4xdjM1SDUuMVY0LjJ6IE02Mi4xLDU4LjRjMCwxLjQtMS4xLDIuNC0yLjQsMi40SDQuNGMtMS40LDAtMi40LTEuMS0yLjQtMi40di0xLjkgICBoNjAuMVY1OC40eiI+PC9wYXRoPjxyZWN0IHg9IjEyIiB5PSIxNC44IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC02LjAyMzIgMTcuMDcxNCkiIHdpZHRoPSIxMS4yIiBoZWlnaHQ9IjEuOSI+PC9yZWN0PjxyZWN0IHg9IjE3LjgiIHk9IjE4LjEiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzE0NiAtMC42OTk1IDAuNjk5NSAwLjcxNDYgLTcuMzgyOCAyMC4wODk0KSIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxLjkiPjwvcmVjdD48L2c+PC9zdmc+",
                        description: "intel inside",
                    },
                    {
                        title: "Mobile",
                        icon_link:
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0zOTksNTljMC0yOC43LTIzLjMtNTItNTItNTJIMTY1Yy0yOC43LDAtNTIsMjMuMy01Miw1MnYzOTRjMCwyOC43LDIzLjMsNTIsNTIsNTJoMTgyICAgYzI4LjcsMCw1Mi0yMy4zLDUyLTUyVjU5eiBNMTM3LDk3aDIzOHYyOTFIMTM3Vjk3eiBNMzQ3LjEsNDgxSDE2NC45Yy0xNS40LDAtMjcuOS0xMi44LTI3LjktMjguMlY0MTJoMjM4djQwLjggICBDMzc1LDQ2OC4yLDM2Mi41LDQ4MSwzNDcuMSw0ODF6IE0zNzUsNTkuMlY3M0gxMzdWNTkuMmMwLTE1LjQsMTIuNS0yOC4yLDI3LjktMjguMmgxODIuMkMzNjIuNSwzMSwzNzUsNDMuOCwzNzUsNTkuMnoiPjwvcGF0aD48cGF0aCBkPSJNMjgwLjQsNDM1aC00OC44Yy02LjYsMC0xMiw1LjQtMTIsMTJzNS40LDEyLDEyLDEyaDQ4LjhjNi42LDAsMTItNS40LDEyLTEyUzI4Nyw0MzUsMjgwLjQsNDM1eiI+PC9wYXRoPjwvZz48L3N2Zz4=",
                        description: "no smartphones allowed",
                    },
                    {
                        title: "Mobile",
                        icon_link:
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0zOTksNTljMC0yOC43LTIzLjMtNTItNTItNTJIMTY1Yy0yOC43LDAtNTIsMjMuMy01Miw1MnYzOTRjMCwyOC43LDIzLjMsNTIsNTIsNTJoMTgyICAgYzI4LjcsMCw1Mi0yMy4zLDUyLTUyVjU5eiBNMTM3LDk3aDIzOHYyOTFIMTM3Vjk3eiBNMzQ3LjEsNDgxSDE2NC45Yy0xNS40LDAtMjcuOS0xMi44LTI3LjktMjguMlY0MTJoMjM4djQwLjggICBDMzc1LDQ2OC4yLDM2Mi41LDQ4MSwzNDcuMSw0ODF6IE0zNzUsNTkuMlY3M0gxMzdWNTkuMmMwLTE1LjQsMTIuNS0yOC4yLDI3LjktMjguMmgxODIuMkMzNjIuNSwzMSwzNzUsNDMuOCwzNzUsNTkuMnoiPjwvcGF0aD48cGF0aCBkPSJNMjgwLjQsNDM1aC00OC44Yy02LjYsMC0xMiw1LjQtMTIsMTJzNS40LDEyLDEyLDEyaDQ4LjhjNi42LDAsMTItNS40LDEyLTEyUzI4Nyw0MzUsMjgwLjQsNDM1eiI+PC9wYXRoPjwvZz48L3N2Zz4=",
                        description: "no smartphones allowed",
                    },
                    {
                        title: "Mobile",
                        icon_link:
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0zOTksNTljMC0yOC43LTIzLjMtNTItNTItNTJIMTY1Yy0yOC43LDAtNTIsMjMuMy01Miw1MnYzOTRjMCwyOC43LDIzLjMsNTIsNTIsNTJoMTgyICAgYzI4LjcsMCw1Mi0yMy4zLDUyLTUyVjU5eiBNMTM3LDk3aDIzOHYyOTFIMTM3Vjk3eiBNMzQ3LjEsNDgxSDE2NC45Yy0xNS40LDAtMjcuOS0xMi44LTI3LjktMjguMlY0MTJoMjM4djQwLjggICBDMzc1LDQ2OC4yLDM2Mi41LDQ4MSwzNDcuMSw0ODF6IE0zNzUsNTkuMlY3M0gxMzdWNTkuMmMwLTE1LjQsMTIuNS0yOC4yLDI3LjktMjguMmgxODIuMkMzNjIuNSwzMSwzNzUsNDMuOCwzNzUsNTkuMnoiPjwvcGF0aD48cGF0aCBkPSJNMjgwLjQsNDM1aC00OC44Yy02LjYsMC0xMiw1LjQtMTIsMTJzNS40LDEyLDEyLDEyaDQ4LjhjNi42LDAsMTItNS40LDEyLTEyUzI4Nyw0MzUsMjgwLjQsNDM1eiI+PC9wYXRoPjwvZz48L3N2Zz4=",
                        description: "no smartphones allowed",
                    },
                ],
            },
        },
    ],
};

export default (req, res) => {
    res.status(200).json({ data: data });
};

export { data };
