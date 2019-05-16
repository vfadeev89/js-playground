const isMomHappy = true;
const haveFriend = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            'phone': 'samsung',
            'color': 'black'
        };
        resolve(phone);
    } else {
        reject(new Error('Mom is not happy :('));
    }
});

const showOff = (phone) => {
    const message = `Hey friend! Look at my new ${phone.phone} ${phone.color}`;
    return new Promise((resolve, reject) => {
        if (haveFriend) {
            resolve(message);
        } else {
            reject(new Error('I don\'t have a friend ;('));
        }
    });
};


// promises
willGetNewPhone
    .then(showOff)
    .then(fullfilled => {
        console.log(fullfilled);
    })
    .catch(error => {
        console.log(error.message);
    });

// async await
async function askMom() {
    try {
        const phone = await willGetNewPhone;
        const msgToFriend = await showOff(phone);
        console.log(msgToFriend);
    } catch (e) {
        console.log(e.message);
    }
}

askMom();


function getTodo() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data[0]);
        })
        .catch(error => {
            console.log(error.message);
        });
}

/*async function getTodo() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    console.log(data[0]);
}*/

getTodo(44418);
