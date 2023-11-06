import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'languagelearninggame.clvjkcleznlq.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'sneha_2002',
  database: 'languagelearninggame',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

function getQuestions(language, difficulty, category, gameMode, callback) {
  const query = `
    SELECT question, option_1, option_2, option_3, option_4, correct_answer
    FROM languagelearninggame
    WHERE languages = 'French' AND difficulty = 'Easy' AND category = 'Colors' AND game_mode = 'MCQ'
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error querying the database: ' + error.stack);
      callback(error, null);
      return;
    }

    console.log('Questions:', results);
    callback(null, results);
  });
}

export default {
  getQuestions,
  closeConnection: () => {
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection: ' + err.stack);
      }
      console.log('Database connection closed');
    });
  },
};
