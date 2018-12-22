class List {
	constructor(element) {
		this.listElement = element;
		this.items = ['Kodh'];
	}
	static capitalize(text){
		return text.charAt(0).toUpperCase() + text.slice(1)
	}
	static timeAgo(date) {
		var seconds = Math.floor((new Date() - date) / 1000);
		if (Math.round(seconds / (60 * 60 * 24 * 365.25)) >= 2) return Math.round(seconds / (60 * 60 * 24 * 365.25)) + " years ago";
		else if (Math.round(seconds / (60 * 60 * 24 * 365.25)) >= 1) return "1 year ago";
		else if (Math.round(seconds / (60 * 60 * 24 * 30.4)) >= 2) return Math.round(seconds / (60 * 60 * 24 * 30.4)) + " months ago";
		else if (Math.round(seconds / (60 * 60 * 24 * 30.4)) >= 1) return "1 month ago";
		else if (Math.round(seconds / (60 * 60 * 24 * 7)) >= 2) return Math.round(seconds / (60 * 60 * 24 * 7)) + " weeks ago";
		else if (Math.round(seconds / (60 * 60 * 24 * 7)) >= 1) return "1 week ago";
		else if (Math.round(seconds / (60 * 60 * 24)) >= 2) return Math.round(seconds / (60 * 60 * 24)) + " days ago";
		else if (Math.round(seconds / (60 * 60 * 24)) >= 1) return "1 day ago";
		else if (Math.round(seconds / (60 * 60)) >= 2) return Math.round(seconds / (60 * 60)) + " hours ago";
		else if (Math.round(seconds / (60 * 60)) >= 1) return "1 hour ago";
		else if (Math.round(seconds / 60) >= 2) return Math.round(seconds / 60) + " minutes ago";
		else if (Math.round(seconds / 60) >= 1) return "1 minute ago";
		else if (seconds >= 2) return seconds + " seconds ago";
		else return seconds + "1 second ago";
	}
	
	static clearItem(elements) {
		while (elements.listElement.firstChild)
			elements.listElement.removeChild(elements.listElement.firstChild);
	}
	
	static createElement(text, index) {		
		const card =
		   `<div class="col-md-4 cards"> 
			 <div class="card">
				<img class="card-img-top" src="${'https://picsum.photos/' + (100 + index) + '/100/?random'}" alt="Card image cap">
				<div class="card-body">
				  <h5 class="card-title">${List.capitalize(text)}</h5>				  
				  <p class="card-text"><small class="text-muted">Last updated ${List.timeAgo(new Date(Date.now()))}</small></p>
				</div>
			 </div>
		    </div>`;
		return card;
	}
	update() {
		List.clearItem(this);
		this.items.forEach((text, index) => {
			console.log(text)
			this.listElement.innerHTML += (List.createElement(text, index));
		});
	}

	add(text) {
		this.items.unshift(text);
		this.update();
	}

	remove(text) {
		this.items = this.items.filter(item => item !== text);
		this.update();
	}
}



/*	const liz =
`<li class='list-group-item d-flex justify-content-between align-items-center' > 		<span>${text}</span> <button onClick="removeElement(this)" class='btn btn-sm btn-link btn-danger'>X</Button>
</li>`;
return liz;*/
