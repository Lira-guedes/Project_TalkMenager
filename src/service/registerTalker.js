const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16 || typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const watchedAtValidation = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const dateRejex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!dateRejex.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const rateValidation = (req, res, next) => {
  const { rate } = req.body.talk;
  const integerRate = Number.isInteger(rate);
  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (rate < 1 || rate > 5 || !integerRate) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
};

const ageValidation = (req, res, next) => {
  const { age } = req.body;
  const integerAge = Number.isInteger(age);
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18 || !integerAge) {
    return res.status(400).json({ 
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  }
  next();
};

module.exports = {
  rateValidation,
  talkValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  watchedAtValidation,
};