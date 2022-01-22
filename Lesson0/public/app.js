const buttonNumber = document.getElementById('button-number');
const buttonName = document.getElementById('button-name');
const rootTag = document.getElementById('root');
buttonNumber.addEventListener('click', fNumber);
buttonName.addEventListener('click', fName);

function fNumber() {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    rootTag.innerHTML = 'Your lucky numbers: '
    + n1 + ' and ' + n2;
}

function fName() {
    rootTag.innerHTML = 'My name is Rahul';
}