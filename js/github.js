var github = {
    releases : function() {
        return fetch('https://api.github.com/repos/eclipse/kitalpha/releases')
        .then( res => { return res.json() })
        .then( res => {
            let result = res.map(r => {
                return { 
                    name: r.tag_name, 
                    link: r.html_url, 
                    body: r.body,
                    prerelease: r.prerelease, 
                    created_at: Date.parse(r.created_at)
                }
            });
            return Promise.resolve( result );
        });
    },

    events: function() {
        let result =  [
            { 
                name: "EclipseCon North America", 
                description: "Viewpoint: the making of. Customizing your MBE Workbench with Kitalpha in 20 minutes", 
                created_at: Date.parse("2015/03/12"),
                type: "video"
            },
            { 
                name: "EclipseCon North America", 
                description: "Viewpoint: the making of. Customizing your MBE Workbench with Kitalpha in 20 minutes", 
                created_at: Date.parse("2015/03/12"),
                type: "video"
            },
            { 
                name: "DSM14", 
                description: "New paper and presentation of Kitalpha at DSM14", 
                created_at: Date.parse("2015/01/08"),
                type: "video"
            },
        ];

        return github.releases().then(releases => {
            let relEvents = releases.map(r => {
                let release = { 
                    name: (r.prerelease ? "A stable release ":"Official " )+r.name + " has been released",
                    description: "It can be downloaded <a href='"+r.link+"'>here</a>", 
                    created_at: r.created_at,
                    type: "release"
                };
                return release;
            });
            return Promise.resolve( result.concat(relEvents).sort((a,b) => b.created_at - a.created_at));
        });
    }

};
