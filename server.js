const express = require('express')
const app = express()
const port = 9329
const Redis = require('redis')
const cors = require('cors')
const path = require('path')

// add url as parameter before publishing
const redisClient = Redis.createClient();

//middleware
app.use(express.static('FE'));
app.use(express.json());  // expect JSON
app.use(cors());

// upload data to redis database
app.post('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { name, lat, lng } = req.body;
    console.log(`${name}, ${lat}, ${lng},`);

    await redisClient.connect();
    await redisClient.set(name, JSON.stringify(req.body));

    res.send(
        {
            id : `${name} lives at latitude=${lat}, longitude=${lng}`,
        });
    
    await redisClient.disconnect();
});

// Render HTML file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => console.log(`Server started at ${port}`));