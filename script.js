const incrementBtn=document.querySelector('#increment')
const decrementBtn=document.querySelector('#decrement')
let counter=0;
const counterEl = document.getElementById('counter')
const ulElement = document.getElementById('list-items')


function incrementCounter() {
    counter++
    counterEl.innerText=counter;
    const li=document.createElement('li');
    li.setAttribute('data-counter',counter);
	if(counter % 2 ===0){
		li.style.background='none';
	}else{
		li.style.background='none';
	}
	
    li.innerHTML='<b>Sentence </b>'+counter;
    ulElement.appendChild(li);
}




function decrementCounter() {  
    const li=ulElement.querySelector('[data-counter="'+counter+'"]')
    li.remove()
    counter--
    counterEl.innerText=counter;
}




incrementBtn.addEventListener('click',incrementCounter )
decrementBtn.addEventListener('click',decrementCounter)

