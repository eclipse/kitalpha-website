    github.events().then(data => {
        let lists = data.slice(0, 3).map(n => 
            "<li class='event'><span class='event-date'>"+new Date(n.created_at).toLocaleDateString()+"</span> "+
			"<span class='event-name'>"+n.name+"</span>"+"<span class='event-description'>"+n.description+"</span>"+"</li>").join("");
        document.getElementById("news-list").innerHTML += lists;
    }).catch(err => { 
        document.getElementById("news-list").innerHTML += "Cannot retrieve events";
    });
