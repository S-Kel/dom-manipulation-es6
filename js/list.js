class List{
	constructor(element){
		this.listElement = element;
		this.items = ['Kodh'];
	}
	
	static clearItem(elements){
		while(elements.listElement.firstChild)
			elements.listElement.removeChild(elements.listElement.firstChild);
	}
	static createElement(text){		
		const liz = 
		`<li class='list-group-item d-flex justify-content-between align-items-center' > 		<span>${text}</span> <button onClick="removeElement(this)" class='btn btn-sm btn-link btn-danger'>X</Button>
		</li>`;
		return liz;
	}
	update(){
		List.clearItem(this);
		this.items.forEach((text)=>{	
			console.log(text)
			this.listElement.innerHTML +=(List.createElement(text));
		});
	}
	
	add(text){
		this.items.unshift(text);
		this.update();
	}
	
	remove(text){
		this.items = this.items.filter(item=> item!==text);
		this.update();
	}
}