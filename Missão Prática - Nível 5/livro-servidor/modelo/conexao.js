const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const banco = mongoose;

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => {
    console.log('Conexão estabelecida');
  })
  .catch((error) => {
    console.error('Erro ao conectar', error);
  });

module.exports = banco;