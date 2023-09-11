const express = require('express');
const { readFile } = require('./service/readFile');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// code req 1
app.get('/talker', async (_req, res) => {
  const data = await readFile();
  if (!data) return res.status(200).json([]);
  res.status(HTTP_OK_STATUS).json(data);
});
// code req 2
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readFile();
  const talkers = data.find((elem) => elem.id === Number(id));
  if (!talkers) return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talkers);
});