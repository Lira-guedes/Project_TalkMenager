const express = require('express');
const { readFile } = require('./service/readAndWriteFile');
const { writeFile } = require('./service/readAndWriteFile');
const { generateToken } = require('./service/generateToken');
const { validateLogin } = require('./service/validateLogin');
const { rateValidation,
  talkValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  watchedAtValidation } = require('./service/registerTalker');

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
  if (!data) return res.status(HTTP_OK_STATUS).json([]);
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
// code req 3 e 4
app.post('/login', validateLogin, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});
// code req 5
app.post('/talker', rateValidation,
  talkValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  watchedAtValidation, async (req, res) => {
    const { name, age, talk } = req.body;
    const talker = await readFile();
    const addTalker = { id: talker.length + 1, name, age, talk };
    talker.push(addTalker);
    await writeFile(talker);
    res.status(201).json(addTalker);
});
// code req 6
 app.put('/talker/:id', rateValidation,
  talkValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  watchedAtValidation, async (req, res) => {
    const { name, age, talk } = req.body;
    const talker = await readFile();
    const { id } = req.params;
    const editTalker = talker.find((elem) => elem.id === Number(id));
    if (editTalker) {
      editTalker.name = name;
      editTalker.age = age;
      editTalker.talk = talk;
      const index = talker.indexOf(editTalker);
      const updateTalker = { id: editTalker.id, ...req.body };
      talker.splice(index, 1, updateTalker);
      await writeFile(talker);
      res.status(200).json(editTalker);
    }
    if (!editTalker) return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  });