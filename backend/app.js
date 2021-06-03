const express = require('express');
const path = require('path')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require("cors");


const app = express();
app.use(cors({origin: true}))


/*
 * Parser
 */
app.use(bodyParser.json()); // application/json


/*
 * Routes
 */
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', routes)
app.use('/', (req, res, next) => {
    res.status(200).json({
        'msg': 'running smoothly'
    })
});

app.listen(3030);

