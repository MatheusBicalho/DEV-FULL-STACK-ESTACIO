const Livro = require('./livro-schema');

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.error('Erro ao obter o livro:', error);
    throw error;
  }
};

const adicionar = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    console.error('Erro ao incluir o livro:', error);
    throw error;
  }
};

const deletar = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado;
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    throw error;
  }
};

module.exports = {
  obterLivros,
  adicionar,
  deletar
};