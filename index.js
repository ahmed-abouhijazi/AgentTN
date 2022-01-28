const express = require('express');
const AgentRouter = require('./api/agent/agent.router');

const app = express();
app.use(express.json());
app.use('/agents',AgentRouter);

app.listen(4000,()=>{
    console.log('Listening on 4000');
})