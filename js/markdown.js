	var markdown = {

		toHtml: function(md) {
			md = md.replace(new RegExp('#### ([^\n]+)\r?\n', 'g'), "<h4>$1</h4>");
			md = md.replace(new RegExp('### ([^\n]+)\r?\n', 'g'), "<h3>$1</h3>");
			md = md.replace(new RegExp('## ([^\n]+)\r?\n', 'g'), "<h2>$1</h2>");
			md = md.replace(new RegExp('# ([^\n]+)\r?\n', 'g'), "<h1>$1</h1>");
			md = md.replace(new RegExp('\\*\\*([^\\*]+)\\*\\*', 'g'), "<b>$1</b>");
			md = md.replace(new RegExp(' *\\*([^\n]+)\r?\n', 'g'), "<li>$1</li>");
			md = md.replace(new RegExp('\r?\n', 'g'), "<br/>");
			md = md.replace(new RegExp("!\\[([^\\]]+)\\]\\(([^\\)]+)\\)", 'g'), "<img width=\"300px\" title=\"$1\" src=\"$2\"/>");
			md = md.replace(new RegExp("\\[([^\\]]+)\\]\\(([^\\)]+)\\)", 'g'), "<a title=\"$1\" href=\"$2\">$1</a>");
			return md;
		}

	};