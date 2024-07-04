let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob){
    let boxDiv = document.createElement('div');
    boxDiv.className = 'box';

    let boxLink = document.createElement('a');
    boxLink.href = "/contentDetails?" + ob.id;

    let imgTag = document.createElement('img');
    imgTag.src = ob.preview;

    let detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';

    let h3 = document.createElement('h3');
    h3.style.fontSize = '1.5em';
    let h3Text = document.createTextNode(ob.name);
    h3.appendChild(h3Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(ob.brand);
    h4.appendChild(h4Text);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("$" + (ob.price / 100).toFixed(2));
    h2.appendChild(h2Text);

    boxDiv.appendChild(boxLink);
    boxLink.appendChild(imgTag);
    boxLink.appendChild(detailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(h4);
    detailsDiv.appendChild(h2);

    return boxDiv;
}

let containerClothing = document.getElementById('containerClothing');

// Backend Calling
fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
    .then(response => response.json())
    .then(json => console.log(json))

