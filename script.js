const events = [
    {
        name: 'Meet Yamcha!',
        description: `Here is your opportunity to 
        meet the one and only Yamcha, learn to fight like
        him and maybe some pointers on dealing 
        with saibermen!`,
        image: 'assets/Yamcha.webp',
        date: '20/12/2022',
        price: '£5'
    },    
    {
        name: 'Meet A  Scooby Snack!',
        description: " description of event",
        image: 'assets/scoobySnakck.jpeg',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'Meeet Meg Griffin!',
        description: " description of event",
        image: 'assets/meg-griffin.webp',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'Meet Plank!',
        description: " description of event",
        image: 'assets/plank.jpeg',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'Meet Meeseeks!',
        description: " description of event",
        image: 'assets/meeseeks.jpeg',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'Meet Mammy Two Shoes',
        description: " description of event",
        image: 'assets/Mammytwoshoes.webp',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'Meet Gary!',
        description: " description of event",
        image: 'assets/gary.webp',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'Meet Jerry Smith',
        description: " description of event",
        image: 'assets/Jerry_Smith.webp',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'event name',
        description: " description of event",
        image: 'assets/Anko.webp',
        date: 'date of event',
        price: 'price of event'
    },
    {
        name: 'N/A',
        description: "N/A",
        image: 'image of event',
        date: 'date of event',
        price: 'price of event'
    },
]

const eventSection = document.querySelector('#events')

function createEvent( name, description, image, date, price){
    
    const card = document.createElement('div')
    const eventName = document.createElement('h2')
    const eventDescription = document.createElement('p')
    const eventImg = document.createElement('img')
    const eventDate = document.createElement('p')
    const eventPrice = document.createElement('p')
    
    
    eventName.innerText = name
    eventDescription.innerText = description
    eventImg.src = `${image}`
    eventDate.innerText = date
    eventPrice.innerText = price
    
    card.appendChild(eventName)
    card.appendChild(eventImg)
    card.appendChild(eventDescription)
    card.appendChild(eventDate)
    card.appendChild(eventPrice)
    
    eventSection.appendChild(card)
    card.classList.add('card')


}

for(let event of events){
    createEvent(event.name, event.description, event.image, event.date, event.price)
}
