document.getElementById('clickMe').addEventListener('click', () => {
    alert('You clicked the button!');
});
const dateElement = document.createElement('p');
dateElement.innerText = `Today's date is: ${new Date().toLocaleDateString()}`;
document.querySelector('main').appendChild(dateElement);
document.getElementById('clickMe').addEventListener('click', () => {
    document.querySelector('main p').innerText = 'You changed the text!';
});
