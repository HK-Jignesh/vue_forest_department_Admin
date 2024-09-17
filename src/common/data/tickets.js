const ticketList = [
    {
        id: 1,
        assignedto: [
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: require("@/assets/images/users/avatar-1.jpg")
            }, {
                assigneeName: "Marisol Gaylord",
                assigneeImg: require("@/assets/images/users/avatar-2.jpg")
            }
        ],
        ticketTitle: "Webstorm does not recognize tags",
        clientName: "Domenic Dach",
        createDate: "17 Jan, 2023",
        dueDate: "23 Jan, 2023",
        priority: "Low",
        status: "Pending"
    }, {
        id: 2,
        assignedto: [
            {
                assigneeName: "Merlin Heaney",
                assigneeImg: require("@/assets/images/users/avatar-3.jpg")
            }, {
                assigneeName: "Alexys Collier",
                assigneeImg: require("@/assets/images/users/avatar-4.jpg")
            }, {
                assigneeName: "Kyla O'Hara",
                assigneeImg: require("@/assets/images/users/avatar-5.jpg")
            }
        ],
        ticketTitle: "Form error style for input addonAfter slot",
        clientName: "Prezy Mark",
        createDate: "29 Jan, 2023",
        dueDate: "06 Feb, 2023",
        priority: "Medium",
        status: "Open"
    }, {
        id: 3,
        assignedto: [
            {
                assigneeName: "Twila Stark",
                assigneeImg: require("@/assets/images/users/avatar-6.jpg")
            }, {
                assigneeName: "Bennett Rice",
                assigneeImg: require("@/assets/images/users/avatar-7.jpg")
            }, {
                assigneeName: "Dusty Hackett",
                assigneeImg: require("@/assets/images/users/avatar-8.jpg")
            }, {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: require("@/assets/images/users/avatar-1.jpg")
            }
        ],
        ticketTitle: "Not following the ReactJS folder structure",
        clientName: "Nelson Schaden",
        createDate: "01 Feb, 2023",
        dueDate: "07 Feb, 2023",
        priority: "High",
        status: "Pending"
    }, {
        id: 4,
        assignedto: [
            {
                assigneeName: "Marisol Gaylord",
                assigneeImg: require("@/assets/images/users/avatar-2.jpg")
            }
        ],
        ticketTitle: "Error message when placing an orders?",
        clientName: "Deondre Huel",
        createDate: "13 Feb, 2023",
        dueDate: "19 Feb, 2023",
        priority: "Low",
        status: "New"
    }, {
        id: 5,
        assignedto: [
            {
                assigneeName: "Ines Stracke",
                assigneeImg: require("@/assets/images/users/avatar-9.jpg")
            }, {
                assigneeName: "Abner Wisozk",
                assigneeImg: require("@/assets/images/users/avatar-10.jpg")
            }
        ],
        ticketTitle: "Forgetting to start a component name with a capital letter",
        clientName: "Sarai Schmidt",
        createDate: "20 Feb, 2023",
        dueDate: "26 Feb, 2023",
        priority: "Low",
        status: "Close"
    }, {
        id: 6,
        assignedto: [
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: require("@/assets/images/users/avatar-1.jpg")
            }, {
                assigneeName: "Twila Stark",
                assigneeImg: require("@/assets/images/users/avatar-6.jpg")
            }, {
                assigneeName: "Kyla O'Hara",
                assigneeImg: require("@/assets/images/users/avatar-5.jpg")
            }, {
                assigneeName: "Alexys Collier",
                assigneeImg: require("@/assets/images/users/avatar-4.jpg")
            }
        ],
        ticketTitle: "Sending props as strings (instead of numbers)",
        clientName: "Ophelia Steuber",
        createDate: "06 Apr, 2023",
        dueDate: "12 Apr, 2023",
        priority: "High",
        status: "Open"
    }, {
        id: 7,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: require("@/assets/images/users/avatar-4.jpg")
            }, {
                assigneeName: "Twila Stark",
                assigneeImg: require("@/assets/images/users/avatar-6.jpg")
            }
        ],
        ticketTitle: "Creating and using God components",
        clientName: "Nelson Schaden",
        createDate: "27 Feb, 2023",
        dueDate: "05 Mar, 2023",
        priority: "Medium",
        status: "Pending"
    }, {
        id: 8,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: require("@/assets/images/users/avatar-4.jpg")
            }, {
                assigneeName: "Twila Stark",
                assigneeImg: require("@/assets/images/users/avatar-6.jpg")
            }, {
                assigneeName: "Bennett Rice",
                assigneeImg: require("@/assets/images/users/avatar-7.jpg")
            }
        ],
        ticketTitle: "Forgetting that setState is asynchronous",
        clientName: "Zachary Stokes",
        createDate: "16 Mar, 2023",
        dueDate: "05 Mar, 2023",
        priority: "Medium",
        status: "Close"
    }, {
        id: 9,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: require("@/assets/images/users/avatar-4.jpg")
            }, {
                assigneeName: "Merlin Heaney",
                assigneeImg: require("@/assets/images/users/avatar-3.jpg")
            }
        ],
        ticketTitle: "Modifying the state directly",
        clientName: "Lloyd Vanburen",
        createDate: "21 Mar, 2023",
        dueDate: "26 Mar, 2023",
        priority: "Low",
        status: "New"
    }, {
        id: 10,
        assignedto: [
            {
                assigneeName: "Stefanie Cartwright",
                assigneeImg: require("@/assets/images/users/avatar-1.jpg")
            }
        ],
        ticketTitle: "Not creating enough components",
        clientName: "Janet Guin",
        createDate: "28 Mar, 2023",
        dueDate: "06 Apr, 2023",
        priority: "High",
        status: "Open"
    }, {
        id: 11,
        assignedto: [
            {
                assigneeName: "Alexys Collier",
                assigneeImg: require("@/assets/images/users/avatar-4.jpg")
            }, {
                assigneeName: "Twila Stark",
                assigneeImg: require("@/assets/images/users/avatar-6.jpg")
            }
        ],
        ticketTitle: "Creating and using God components",
        clientName: "Nelson Schaden",
        createDate: "27 Feb, 2023",
        dueDate: "05 Mar, 2023",
        priority: "Medium",
        status: "Pending"
    }
];

export { ticketList };