import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora:100,
    editora:"Darkside Books ",
    titulo: 'Alice no País das Maravilhas',
    resumo:'Uma menina chamada Alice cai em um buraco e entra em um mundo mágico, repleto de criaturas excêntricas e situações surreais. Uma aventura fantástica repleta de enigmas e descobertas.',
    autor: ['Lewis Carroll'],
    
 
 
  },
  {
    codigo: 2,
    codEditora:200,
    editora:"Harper Collins",
    titulo: 'O Hobbit',
    resumo:'Bilbo Bolseiro, um hobbit relutante, embarca em uma jornada com um grupo de anões e o mago Gandalf. Eles enfrentam perigos, trolls, elfos e um dragão para reivindicar o tesouro perdido dos anões.',
    autor: ['J.R.R. Tolkien'],


  },
  {
    codigo: 3,
    codEditora:300,
    editora:"Leya",
    titulo: 'A Culpa é das Estrelas',
    resumo:' A Culpa é das Estrelas narra a história de Hazel e Gus, dois jovens com câncer que se apaixonam. Juntos, eles enfrentam os desafios da doença, exploram o significado da vida e buscam encontrar esperança e felicidade.',
    autor: ['John Green'],

  }
];

export class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const ultimoCodigo = livros.reduce(
      (maiorCodigo, livro) => Math.max(maiorCodigo, livro.codigo),
      0
    );

    livro.codigo = ultimoCodigo + 1;

    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = livros.findIndex((livro) => livro.codigo === codigo);

    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  }
}

export default ControleLivros;