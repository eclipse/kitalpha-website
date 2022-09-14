let links = [...document.getElementsByTagName("nav")[0].getElementsByTagName("a")];
links.filter(x => document.location.pathname.endsWith("/" + x.getAttribute("href"))).forEach(e => e.parentNode.setAttribute("class", "selected"));
