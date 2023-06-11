import { Editora } from '../modelo/Editora';

let editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Darkside Books' },
  { codEditora: 2, nome: 'Harper Collins' },
  { codEditora: 3, nome: 'Leya' },
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora?.nome;
  }
}

export default ControleEditora;
