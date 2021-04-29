function cardComponent(data) {
    // card
    const card = document.createElement('div');
    card.className = "card";

    // card image
    const cardImage = document.createElement('div');
    cardImage.className = "card-img";

    // image in card
    const image = document.createElement('img');
    image.className = "img";
    image.src = data.largeImageURL;

    // card body
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    // card title
    const cardTitle = document.createElement('h2');
    cardTitle.className = "card-title";
    cardTitle.textContent = data.user;

    // card description
    const cardDescription = document.createElement('p');
    cardDescription.className = "description";
    cardDescription.textContent = "#Tags: " + data.tags;

    // card footer
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    // card like 
    const like = document.createElement('span');
    like.setAttribute('id', 'like');
    like.textContent = "Likes: " + data.likes;

    // card comment 
    const comment = document.createElement('span');
    comment.setAttribute('id', 'comment');
    comment.textContent = "Comments: " + data.comments;

    // card view 
    const view = document.createElement('span');
    view.setAttribute('id', 'view');
    view.textContent = "Views: " + data.views;


    // add image to card image
    cardImage.appendChild(image);

    // add title and description to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);

    // add date and author to footer
    cardFooter.appendChild(like);
    cardFooter.appendChild(comment);
    cardFooter.appendChild(view);


    // add card image, card body , card footer to card
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    return card;
}

let  displayData = (response) => {
    let cards = document.querySelectorAll('.card');
    cards.forEach( card=> card.remove());
    for (let photo of response.data.hits) {
        container.appendChild(cardComponent(photo));
    }
}

let errorRequest = (error) => console.error("Error request", error);

let searchPhoto = (event) => {
    let keyword = document.querySelector('#search').value;
    console.log(keyword)
    const key = "14001068-da63091f2a2cb98e1d7cc1d82";
    const url = "https://pixabay.com/api/?key=" + key +"&q="+ keyword + "&image_type=photo&pretty=true";
    axios(url)
       .then(displayData)
       .catch(errorRequest)
}


// container
const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);


const btnSearch = document.querySelector('button');
btnSearch.addEventListener('click', searchPhoto);