const myList = document.getElementById('myList');
const addItemBtn = document.getElementById('add-item');
const inputItem = document.getElementById('input-item');

const list = new List(myList);
list.update();

// Listen for submit click
addItemBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	addItem();
});

// 
inputItem.addEventListener('keyup', (evt) => {
	if (evt.keyCode === 13) addItem();
});

addItem = () => {
	const item = inputItem.value;
	if (!item)
		alert('Please enter an item');
	else {
		list.add(item);
		inputItem.value = '';
	}
}

removeElement = (evt) => {
	const text = evt.parentElement.children[1].children[0].textContent;
	console.log(evt.parentElement)
	console.log(evt.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML)
	let txt = evt.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
	list.remove(txt);
	console.log(`${text} is successfuly removed...`);
}
