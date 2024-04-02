// function addTwoNumbers(num1,num2) {
//     let total  = num1 + num2
//     console.log(total)
//     t
// }

// addTwoNumbers(2, 3)

// let sum = document.getElementById("result")








// let title = document.querySelector('h1');
// title.innerHTML = 'Hello world'
// console.log(title)

// // let title = document.querySelectorAll('h1');
// // title.innerHTML = 'Hello world'
// // console.log(title)


// // strictly ID name without #
// // let title = document.getElementById () 




// // let title = document.getElementsByClassName




// let title = document.g

// let imgEle = document.getElementById('profile-img');
// console.log (imgEle);
// imgEle.setAttribute('src', './images/location-1.jpg');
// imgEle.setAttribute('alt','this is an image' );
// imgEle.setAttribute('class', 'myprofile-img');

// let containerEle = document.getElementById('container');

// let myHeading = document.createElement ('h2');
// console.log (myHeading);
// myHeading.innerHTML = "Bank Operations";
// myHeading.setAttribute('class', 'success')
// containerEle.appendChild(myHeading)





// let productEle = document.getElementById('product')

// const productImg = ['https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/460869/1.jpg?6710', 
// 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/4447531/1.jpg?8888', 
// 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/233407/1.jpg?4710', 
// 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/681138/1.jpg?4715',
//  'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/986649/1.jpg?6655']

//  for(output of productImg){
    


//  let greetingMsg = document.getElementById('greetingMsg')
//  let divBtn = document.getElementById('welcomeBtn')

//  function greetPerson() {
//     let userName = prompt('Enter your name')
//     let message = userName + " Welcome to GMC ATM"

//     greetingMsg.innerHTML = message;
//     greetingMsg.setAttribute('class', 'success')
//    //  divBtn.setAttribute('class', 'success')
//  }

//  divBtn.addEventListener('click', greetPerson)


 
//  function mOver(obj) {
//    obj.innerHTML = "Let's proceed!"
//  }
 
 
 
let form = document.getElementById ('form')



// id element
const idCardEle = document.getElementById('cardPreview');

// function to generate id card

function generateIdCard (stName, stDob, stEmail, StPhone, stImg)

{ 
    let idCard = document.createElement('div');
    idCard.setAttribute ('class', 'idCard');

    // company logo
    let logo = document.createElement('img');
    logo.setAttribute ('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAb1BMVEUAAACxBg/lCRO2Bg+eBg1WAwjoCRPrCRN1BAuqBg+VBg2uBg6nBg+kBQ/WCBKYBA6GAw2AAg29BxDQCBLFBxEaAQJaAwjxCRRQAwcoAQTbCBKNBA1lBAhuBAlHAwZMAggwAQU2AwUQAQI/AwUhAQOiGi1eAAACt0lEQVRoge2Z3XKbMBCFwaiA/pDABBwL27GT93/GCtPWOqTJdOrdO84lYvhGZ1e7KzvLNm3atGnT/+jsVKqXx8qlTjU9AxnGKtFYP1bqrkhkn4Ecml2isksgRZ5IPAP50VUpZffGAjHAqFoWSN6XqV89C6Qw4Ff1ygIRR4AEnp104FfDAtEihezGKwckV3BUKscCsQVs5cgCkQ4g1cAB0QH9khyQXGg4KscbB8R4PI8TB0SGPRyVnAOincVSfGOA5NYDY2ld1BATsBR3HBCpBPg1ckC08FiKfVw55bSQGBQsxXsOiFRYWsr3CNHUENd+al0nrWkhMSjF2q9JUkOsCiNs5ZxNRtJCol81+mWzyRpNDBFer1r9JKgh2gaPrf4yCCuJIca1WIrNwYkk9CQQ6TxOeeVZuST0FJAYlICluArBWdqdzEm88mvfqsQvGohxftW6fEjyiwQy+9UCo5TePfKLCBL96j/7RQuJfgWHfoXELzKIqjG/tH/kFw1k9gtb165p1Z+gkEFcUDjlRb+IIdqI9VEpvPsdFCpI3EqLWznWytJC7n5dyy/8ooJEv0K2mvJaRw2RQmU44O9a9SsodBDjsjccjVywtJB5K9nKr74VHJB6VYqVpIXE/IpPcDSywVBDTHyCU17vF7/oIHq++E6wldIvSUwHye+3a5zyTGCByDT0ZdNaDsiApXgJCiFE3581eOG+JzE5BC+QjTcckAOOkkpwQFZ+dUpzQFata05iesgHnkdhOCAZtvrOsUD8yi8WyAu2+jh9MUAy/IGiFwUHpF4dFRbIxw784rEry/EWYVggE7Z6Hgi2rrLjgUj8bV1RQJb/4PLHwmX5266MupeWZyBDFz8trVC+Pk3DIVmpT61Xpuj3zbGsxu7LL/yDrtP5+nr7/p3X98Op/v6VTZs2bdr0d/0EDl0uL6qLBFcAAAAASUVORK5CYII= ');
    logo.setAttribute ('class', 'logo')

    // company name
    let companyName = document.createElement('h2');
    companyName.innerHTML = 'NETFLIX';
    companyName.setAttribute('class', 'companyName');

    // // employee's image

    let employeeImg = document.createElement('img');
    employeeImg.setAttribute('src', stImg );
    employeeImg.setAttribute('class', 'employeeImg');

    // employees's name
    let employeeName = document.createElement ('p');
    employeeName.innerHTML = " Name: " + stName ;
    employeeName.setAttribute = ('class', 'stName');


    // employee's DOB

    employeeDob = document.createElement('p');
    employeeDob.innerHTML = "Dob: " + stDob ;


    // employee email

    let employeeEmail = document.createElement('p');
    employeeEmail.innerHTML = "Email: " + stEmail;

    // employee phone

    let employeePhone = document.createElement('p');
    employeePhone.innerHTML = "NO: " + StPhone;

    // expiry date

    let expiryDate = document.createElement('p');
    expiryDate.innerHTML = 'Expiry Date: 2024';
    expiryDate.setAttribute ('class', 'expiryDate')

    // add element to idCard

    idCard.appendChild(logo);
    idCard.appendChild(companyName);
    idCard.appendChild(employeeImg);
    idCard.appendChild(employeeName);
    idCard.appendChild(employeeDob);
    idCard.appendChild(employeeEmail);
    idCard.appendChild(employeePhone);
    idCard.appendChild(expiryDate);

    // add card to idCardEle
    idCardEle.appendChild(idCard);



}

// form handler
function formHandler (e) {
    e.preventDefault();
 
    // get input values
 
 const name = form.name.value;
 const dob = form.dob.value
 const email = form.email.value
 const phone = form.phone.value
 const imageurl = form.imageurl.value
 const aboutInfo = form.aboutInfo.value

 generateIdCard(name, dob, email, phone, imageurl, aboutInfo )

 
 }

 form.addEventListener('submit', formHandler)




 
 







