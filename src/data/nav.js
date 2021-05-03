//This file contains the links and names for each link in the nav bar, if you want to add another page, 
//add it into this variable and then go to App.js and more comments will be there
export const nav = [
    {
        title: "About",
        dropdown: [
            {
                page: "Collaborators",
                url: "/about/collaborators"
            },
            {
                page: "Bibliography",
                url: "/about/bibliography"
            },
            {
                page: "Cite Our Work",
                url: "/about/citation"
            },
            {
                page: "Source Code",
                url: "https://github.com/SteveWLU/hda"
            },
            {
                page: "Technical Notes",
                url: "/about/technical"
            },
        ]
    },
    {
        title: "Praxis",
        dropdown: [
            {
                page: "General Criteria",
                url: "/test-praxis"
            },
            {
                page: "Padua Criteria",
                url: "/about/padua-praxis"
            },
        ]
    },
    {
        title: "Editions",
        dropdown: [
            {
                page: "Berlin (B)",
                url: "/editions-toc/b"
            },
            {
                page: "Turin (T)",
                url: "/editions-toc/t"
            },
            {
                page: "Padua (P)",
                url: "/editions-toc/p"
            },
            {
                page: "Barbieri Fragment (Br)",
                url: "/editions-toc/br"
            },
        ]
    },
    {
        title: "Translation",
        dropdown: [
            {
                page: "Berlin (B)",
                url: "/editions-toc/bt"

            },
        ]
    },
    {
        title: "Search",
        url: "/search"
    },
]