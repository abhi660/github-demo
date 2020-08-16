let express = require('express');
let app = express();
let port = 3000;
let bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let friends = ['Tony', 'Harsh', 'Abhishek', 'Bansal', 'Kiran', 'Ishwar']

// app.post('/addFriend', (req, res) => {
//     let friend = req.body.addFriend;
//    friends.push(friend);
//    return res.redirect('/friends')
// });

app.post('/friends', (req, res) => {
    console.log(req.body.addFriend)
    let friend = req.body.addFriend;
    friends.push(friend);
    return res.redirect('/friends')
});

app.get('/friends', (req, res) => {
    return res.render("friends", {friends: friends})
});

// app.get('/', (req, res) => {
//     posts = [
//         {
//             title:'title1',
//             author:'author1'
//         },
//         {
//             title:'title2',
//             author:'author2'
//         },
//         {
//             title:'title3',
//             author:'author3'
//         }
//     ]
//     return res.render('greet.ejs', {posts})
// })

// app.get('/:firstName/:lastName', (req, res) => {
//     let firstName = req.params['firstName']
//     let lastName = req.params['lastName']
//     res.render("greet.ejs", {
//         firstName, lastName
//     })
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
