const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

// new API route: GET /users, returning a list of users
app.get('/', (request, response) => {
  let res = {
      "api1": { id: 546, name: 'John' },
      "api3": { id: 326, name: 'Jane' },
      "api2": { id: 894, name: 'Mary' },
    }
  if (request.query.id){
    res = res[request.query.id]
  }
  response.json(
    res
  );
});

// DELETE user
app.delete('/', (request, response) => {
  response.json({ result: 'success' });
});

app.listen(3001, () => {});