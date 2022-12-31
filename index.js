const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Library",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// to get data from the database and send it to the front end
// this is the route that the front end will use to get data from the database

// app.get('/api/all-books', (req, res) => {
//     const sqlSelect = "SELECT book_id,title FROM Book";
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     });
// });

app.get("/hello", (req, res) => {
  res.send("hell0");
});

// to get user data from the database and send it to the front end
// app.get('/profile', (req, res) => {
//     const sqlProfile = "SELECT * FROM Member";
//     db.query(sqlProfile, (err, result) => {
//         res.send(result);
//     });
// });

app.post("/profile", (req, res) => {
  username = req.body.userName;

  const sqlProfile = "SELECT * FROM Member WHERE username = ?";
  db.query(sqlProfile, [username], (err, result) => {
    res.send(result);
    res.end();
  });
});

app.post("/booksIssued", (req, res) => {
  username = req.body.userName;

  const issuedBooks =
    "select b.title as title, a.first_name as first_name,a.last_name as last_name,i.date_due as due_date from Issue as i join Member as m on i.member_id = m.member_id join Book as b on i.book_id = b.book_id join Author as a on b.author_id = a.author_id where m.username = ?";
  db.query(issuedBooks, [username], (err, result) => {
    console.log(result);
    res.send(result);
    res.end();
  });
});

app.post("/login", (req, res) => {
  const username = req.body.userName;
  const password = req.body.password;

  const validate = "select username,password from Member";

  db.query(validate, (err, result) => {
    // this will host data on an api
    // app.get("/login", (req, res1) => {
    //   res1.send(result);
    // });

    res.send(result);
    res.end();
  });
});


app.post("/signup", (req, res) => {
  const username = req.body.userName;
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const emailaddress = req.body.emailAddress;
  const phonenumber = req.body.phoneNumber;
  const dateofbirth = req.body.dateOfBirth;
  const password = req.body.password;
  const studentstate = req.body.Student;
  const facultystate = req.body.Faculty;
  if (studentstate) {
    const stdclass = req.body.stdClass;
    const section = req.body.Section;
    const insertion = `insert into Member (username, first_name, last_name, phone, email, date_of_birth)
    values ({username},{firstname},{lastname},{phonenumber},{emailaddress},{dateofbirth});
    insert into Student (class, section) values ({stdclass}, {section});
    `;
  }

  if (facultystate) {
    const department = req.body.Department;
    const insertion = `insert into Member(username, first_name, last_name, phone, email, date_of_birth)
    values ({username}, {firstname}, {lastname}, {phonenumber}, {emailaddress}, {dateofbirth});
    insert into Faculty (department) values ({department});`
  }
  
  db.query(insertion, (err, result) => {
    res.send(result);
    res.end();
  });
});
  





// app.get('/', (req, res) => {

// to take input from the user on the front end
// app.post('/api/insert', (req, res) => {
//     const movieName = req.body.movieName;
//     const movieReview = req.body.movieReview;

//     const sqlInsert = "INSERT INTO movie_review (movieName, movieReview) VALUES (?,?);";
//     db.query(sqlInsert, [movieName,movieReview], (err, result) => {
//         console.log(res);
//     });
// });

// app.post('/api/login', (req, res) => {
//     const username = req.body.userName;
//     const password = req.body.password;
//     console.log(username, password);
//     const sqlLogin = "SELECT * FROM Member WHERE first_name = ? AND last_name = ?";
//     db.query(sqlLogin, [username, password], (err, result) => {
//         app.get('/valid', (req, res) => {
//             console.log(result);
//             res.send(result);
//         }
//         );
//     });
// }
// );

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
