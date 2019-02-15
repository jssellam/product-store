const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const database =[ {
        1: {
               id: '1',
               name: 'basketball',
               price: 59.99,
               description: 'with this bouncy ball, you could beat Michael Jordan!',
               stock: 5
            }, 
        2: {
                id: '2',
                name: 'soccerball',
                price: 49.99,
                description: 'with this bouncy ball, you could beat Zinadine Zidane!',
                stock: 18
             },
        3: {
                id: '3',
                name: 'punchingball',
                price: 49.99,
                description: 'with this bouncy ball, you could beat Rocky Balboa!',
                stock: 18
             },              
        4: {
                id: '4',
                name: 'billard',
                price: 49.99,
                description: 'with this bouncy ball, you could beat snooker!',
                stock: 18
             }
     }
    ]
     

// this line MUST be before any routes are defined
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world!');
});

// send all users to client
app.get('/products', (req, res) => {    
    res.send(database);
});

// add a user to server
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`user #${users.length} has been added`);
});

app.listen(port, () => {
    console.log(`app is running at port ${port}`);
});