let links = [...document.getElementsByTagName("nav")[0].getElementsByTagName("a")];
links.filter(x => "/" + x.getAttribute("href") == document.location.pathname).forEach(e => e.parentNode.setAttribute("class", "selected"));
