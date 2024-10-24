const app = require('./app')


const PORT = 3000


// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

