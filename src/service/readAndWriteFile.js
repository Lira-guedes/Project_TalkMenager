const fs = require('fs').promises;
const path = require('path');

// const filePath = path.join(__dirname, '../talker.json');
const filePath = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
};

const writeFile = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
  readFile,
  writeFile,
};