// // server.js
// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// const connection = mysql.createConnection({
//   host: 'languagelearninggame.clvjkcleznlq.us-east-2.rds.amazonaws.com',
//   user: 'admin',
//   password: 'sneha_2002',
//   database: 'languagelearninggame',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the database');
// });

// app.get('/questions', (req, res) => {
//   const query = `
//     SELECT question, option_1, option_2, option_3, option_4, correct_answer
//     FROM languagelearninggame
//     WHERE languages = 'French' AND difficulty = 'Easy' AND category = 'Colors' AND game_mode = 'MCQ'
//   `;

//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Error querying the database: ' + error.stack);
//       res.status(500).json({ error: 'Error querying the database' });
//       return;
//     }

//     console.log('Questions:', results);
//     res.json(results);
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

