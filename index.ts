type Caminho = {
  tipo: 'cidade' | 'clareira' | 'corrego';
  nome: string;
  proximidade: number;
  tesouro?: string;
}

type Clareira = Caminho & { 
  tipo: 'clareira';
  tesouro: string;
  caminhos: Caminho[];
}

type Cidade = Caminho & { 
  tipo: 'cidade';
  tesouro?: string;
  caminhos: Caminho[];
}

type Regiao = Cidade | Clareira;

let caminho: Caminho;

if (Math.random() < 0.5) {
  const cidade: Cidade = {
    tipo: 'cidade',
    nome: 'Uma cidade',
    proximidade: 1,
    caminhos: [],
  };
  caminho = cidade;
} else {
  const clareira: Clareira = {
    tipo: 'clareira',
    nome: 'Uma clareira',
    proximidade: 2,
    tesouro: 'um tesouro',
    caminhos: [],
  };
  caminho = clareira;
}

if (caminho.tipo === 'clareira') {
  const c: Clareira = caminho;
  console.log(`Você está em ${c.nome} e encontrou ${c.tesouro}`);
} else if (caminho.tipo === 'cidade') {
  const c: Cidade = caminho;
  console.log(`Você está em ${c.nome}`);
} else {
  console.log('Você está em um córrego');
}

if (caminho.tesouro) {
	console.log(`Isso vai servir demais: ${caminho.tesouro}.`);
} else {
	console.log("Nada a ver.");
}
