let n = 1;
let index = (n % 10) + 1; 
let toggleState = true;

document.addEventListener('click', function (event) {
    let listItems = document.querySelectorAll('ol li, ul li'); 
    let clickedElement = event.target;

    if (clickedElement === listItems[index - 1]) { 
        let elementId = listItems[index - 1].id;
        let elementById = document.getElementById(elementId);
        if (toggleState) {
            elementById.classList.add('active');
            elementById.classList.remove('inactive');
        } else {
            elementById.classList.add('inactive');
            elementById.classList.remove('active');
        }
    }

    if (clickedElement === listItems[index]) { 
        let querySelectorElement = document.querySelector(`li:nth-child(${index + 1})`);
        if (toggleState) {
            querySelectorElement.classList.add('active');
            querySelectorElement.classList.remove('inactive');
        } else {
            querySelectorElement.classList.add('inactive');
            querySelectorElement.classList.remove('active');
        }
        
        toggleState = !toggleState; 
    }
});

function addImage() {
    const img = document.createElement('img');
    img.src = 'sumy.jpg';
    img.alt = 'Суми';
    img.width = 500;
    document.body.appendChild(img);
}

function removeImage() {
    const img = document.querySelector('img');
    if (img) {
        img.remove();
    }
}

function increaseImage() {
    const img = document.querySelector('img');
    if (img) {
        img.width += 50;
    }
}

function decreaseImage() {
    const img = document.querySelector('img');
    if (img) {
        img.width = Math.max(50, img.width - 50); 
    }
}

document.getElementById('add').addEventListener('click', addImage);
document.getElementById('remove').addEventListener('click', removeImage);
document.getElementById('increase').addEventListener('click', increaseImage);
document.getElementById('decrease').addEventListener('click', decreaseImage);




