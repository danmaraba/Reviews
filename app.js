const reviews = [
  {
    id: 1,
    image: "./images/istockphoto-1090878494-1024x1024.jpg",
    name: "Ian Kibet",
    jobTitle: "Web Developer",
    reviewDescription: "The website is user friendly.",
  },
  {
    id: 2,
    image: "./images/istockphoto-1196391449-1024x1024.jpg",
    name: "Maurine Cherono",
    jobTitle: "UX Designer",
    reviewDescription: "The site is well-designed. I love it!",
  },
  {
    id: 3,
    image: "./images/istockphoto-1200677760-612x612.jpg",
    name: "James Kariuki",
    jobTitle: "Mobile Developer",
    reviewDescription: "The site is responsive.Amazing",
  },
  {
    id: 4,
    image: "/images/istockphoto-1278139568-612x612.jpg",
    name: "Felix Omondi",
    jobTitle: "Blockchain Developer",
    reviewDescription: "I love the choice of colors for this site",
  },
];

// select items
const image=document.querySelector('#img');
const name=document.querySelector('.name');
const jobTitle=document.querySelector('.jobTitle');
const description=document.querySelector('.description');
const previousButton=document.querySelector('#prev-icon');
const nextButton=document.querySelector('#next-icon');
const random=document.querySelector('.random');

// first item
let currentItem=0;
// load initial item
window.addEventListener('DOMContentLoaded',function(){
    displayPerson(currentItem)
})

function displayPerson(){
    const item=reviews[currentItem];
    image.src=item.image;
    name.textContent=item.name;
    jobTitle.textContent=item.jobTitle;
    description.textContent=item.reviewDescription;
}
// display next person
nextButton.addEventListener('click', function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    displayPerson()
})

// display previous person
previousButton.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    displayPerson()
})

// display random person
random.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    displayPerson();
})

