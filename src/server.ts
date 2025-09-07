import express from 'express';

const app = express();
app.use(express.json());

app.listen(1212, () => {
    console.log("Servidor iniciado!")
})