import Express from 'express';

let app = new Express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

export default app
