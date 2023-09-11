const fs = require('fs').promises;
const path = require('path');

// const filePath = path.join(__dirname, '../talker.json');
const filePath = path.resolve(__dirname, './talker.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
    } catch (error) {
    console.error(error);
    }
};

module.exports = {
  readFile,
};
