import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'A Ilha Perdida', resumo: 'Quatro jovens naufragam em uma ilha deserta e precisam lutar pela sobrevivência, enfrentando perigos, explorando o ambiente e buscando um meio de voltar para casa.', autores: ['Maria José Dupré'] },
    { codigo: 2, codEditora: 2, titulo: '1984', resumo: 'Em um mundo governado por um regime totalitário, Winston Smith vive sob constante vigilância e manipulação. Ele se envolve em um romance proibido e se rebela contra o sistema, enfrentando as consequências de desafiar a autoridade opressora.', autores: ['George Orwell'] },
    { codigo: 3, codEditora: 3, titulo: 'Cosmos', resumo: 'Carl Sagan leva os leitores em uma jornada fascinante pelo cosmos, explorando desde a formação do universo até a possibilidade de vida extraterrestre. Com uma abordagem científica e poética, Cosmos nos instiga a refletir sobre nossa insignificância e nossa curiosidade infinita.', autores: ['Carl Sagan'] },
    { codigo: 4, codEditora: 1, titulo: 'O Hobbit', resumo: 'Bilbo Bolseiro, um hobbit pacato, é levado em uma aventura épica por Gandalf e um grupo de anões, em busca do tesouro guardado pelo dragão Smaug. Bilbo descobre coragem e poderes inesperados enquanto enfrenta criaturas mágicas e desafios perigosos.', autores: ['J.R.R. Tolkien'] }
  ];


  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}