function normalizarTexto(texto) {
  return texto
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatarMoeda(valor) {
  return Number(valor).toLocaleString("pt-BR");
}

function formatarFianca(valor) {
  if (valor === null) return "INAFIANÇÁVEL";
  if (valor === 0) return "R$ 0";
  return `R$ ${formatarMoeda(valor)}`;
}

function formatarNumeroArtigo(numero) {
  return String(numero).padStart(2, "0");
}

const artigos = [
  {
    numero: 1,
    categoria: "Trânsito",
    nome: "Alta Velocidade",
    descricao: "Conduzir veículo acima do limite de velocidade permitido na via.",
    pena: 0,
    multa: 5000,
    fianca: 0
  },
  {
    numero: 2,
    categoria: "Trânsito",
    nome: "Abandono de Veículo",
    descricao: "Deixar veículo estacionado ou abandonado em via pública sem justificativa plausível.",
    pena: 0,
    multa: 2000,
    fianca: 0
  },
  {
    numero: 3,
    categoria: "Trânsito",
    nome: "Abandono de Veículo Militar",
    descricao: "Abandonar veículo pertencente às forças públicas ou instituições oficiais.",
    pena: 0,
    multa: 10000,
    fianca: 0
  },
  {
    numero: 4,
    categoria: "Trânsito",
    nome: "Estacionar em Local Proibido",
    descricao: "Estacionar veículo em área proibida ou que prejudique o fluxo de veículos ou pedestres.",
    pena: 0,
    multa: 3000,
    fianca: 0
  },
  {
    numero: 5,
    categoria: "Trânsito",
    nome: "Utilização Indevida de Veículo Público",
    descricao: "Utilizar veículo pertencente ao poder público sem autorização ou finalidade institucional.",
    pena: 0,
    multa: 15000,
    fianca: 0
  },
  {
    numero: 6,
    categoria: "Trânsito",
    nome: "Condução Imprudente",
    descricao: "Conduzir veículo de forma irresponsável colocando terceiros em risco.",
    pena: 0,
    multa: 3500,
    fianca: 0
  },
  {
    numero: 7,
    categoria: "Trânsito",
    nome: "Bloqueio de Via Pública",
    descricao: "Parar ou estacionar veículo bloqueando totalmente via pública.",
    pena: 0,
    multa: 4000,
    fianca: 0
  },
  {
    numero: 8,
    categoria: "Ordem Pública",
    nome: "Ocultação Facial",
    descricao: "Utilizar máscara ou item para ocultar identidade em atividade ilegal.",
    pena: 0,
    multa: 3000,
    fianca: 0
  },
  {
    numero: 9,
    categoria: "Materiais Ilícitos",
    nome: "Posse de Materiais Ilegais",
    descricao: "Portar lockpick, C4, chipe hacker, masterpick, utilizados para práticas ilegais, devendo o indivíduo possuir abaixo de 10 itens ilegais no bolso na hora da apreensão.",
    pena: 0,
    multa: 3000,
    fianca: 0
  },
  {
    numero: 10,
    categoria: "Trânsito",
    nome: "Veículo Danificado",
    descricao: "Trafegar com o veículo irregular e fora de situação segura em via pública.",
    pena: 0,
    multa: 3000,
    fianca: 0
  },
  {
    numero: 11,
    categoria: "Crimes contra a Vida",
    nome: "Atropelamento Culposo",
    descricao: "Atropelar uma pessoa com veículo automotor sem intenção de causar dano ou morte.",
    pena: 10,
    multa: 1000,
    fianca: 3000
  },
  {
    numero: 12,
    categoria: "Crimes contra a Vida",
    nome: "Atropelamento Doloso",
    descricao: "Atropelar uma pessoa com intenção de causar dano grave ou morte utilizando veículo automotor.",
    pena: 15,
    multa: 1500,
    fianca: 5000
  },
  {
    numero: 13,
    categoria: "Crimes contra a Vida",
    nome: "Atropelamento Coletivo",
    descricao: "Atropelar quatro ou mais pessoas em um mesmo evento, ainda que sem intenção direta.",
    pena: 25,
    multa: 5000,
    fianca: null
  },
  {
    numero: 14,
    categoria: "Crimes contra a Vida",
    nome: "Homicídio Culposo",
    descricao: "Causar a morte de alguém sem intenção de matar.",
    pena: 20,
    multa: 5000,
    fianca: null
  },
  {
    numero: 15,
    categoria: "Crimes contra a Vida",
    nome: "Homicídio Doloso",
    descricao: "Causar a morte de alguém com intenção de matar.",
    pena: 30,
    multa: 10000,
    fianca: null
  },
  {
    numero: 16,
    categoria: "Crimes contra a Vida",
    nome: "Homicídio de Servidor Público",
    descricao: "Causar a morte de servidor público em exercício da função, como policiais, médicos ou autoridades.",
    pena: 35,
    multa: 15000,
    fianca: null
  },
  {
    numero: 17,
    categoria: "Crimes contra a Vida",
    nome: "Genocídio",
    descricao: "Extermínio deliberado de quatro ou mais pessoas.",
    pena: 50,
    multa: 7000,
    fianca: null
  },
  {
    numero: 18,
    categoria: "Crimes contra a Vida",
    nome: "Latrocínio",
    descricao: "Praticar roubo ou assalto que resulte na morte da vítima.",
    pena: 35,
    multa: 8000,
    fianca: null
  },
  {
    numero: 19,
    categoria: "Crimes contra a Vida",
    nome: "Lesão Corporal",
    descricao: "Agredir alguém causando dano físico ou à saúde.",
    pena: 15,
    multa: 4000,
    fianca: 3750
  },
  {
    numero: 20,
    categoria: "Crimes contra a Vida",
    nome: "Terrorismo",
    descricao: "Praticar atos violentos com objetivo de intimidar ou causar terror coletivo.",
    pena: 55,
    multa: 20000,
    fianca: null
  },
  {
    numero: 21,
    categoria: "Crimes contra a Liberdade",
    nome: "Sequestro",
    descricao: "Privar alguém de sua liberdade mantendo a vítima em cativeiro contra sua vontade.",
    pena: 30,
    multa: 5000,
    fianca: null
  },
  {
    numero: 22,
    categoria: "Crimes contra a Vida",
    nome: "Omissão de Socorro",
    descricao: "Deixar de prestar assistência a pessoa em perigo quando possível fazê-lo sem risco.",
    pena: 25,
    multa: 8000,
    fianca: null
  },
  {
    numero: 23,
    categoria: "Crimes contra a Vida",
    nome: "Maus-Tratos",
    descricao: "Colocar em risco a vida ou saúde de pessoa sob responsabilidade do agente.",
    pena: 35,
    multa: 2300,
    fianca: 8000
  },
  {
    numero: 24,
    categoria: "Crimes contra a Liberdade",
    nome: "Abandono de Incapaz",
    descricao: "Abandonar pessoa incapaz sob responsabilidade legal colocando-a em risco.",
    pena: 45,
    multa: 8000,
    fianca: null
  },
  {
    numero: 25,
    categoria: "Crimes contra a Liberdade",
    nome: "Ameaça",
    descricao: "Ameaçar causar mal grave a alguém por palavras ou gestos.",
    pena: 25,
    multa: 1000,
    fianca: 3750
  },
  {
    numero: 26,
    categoria: "Crimes contra a Liberdade",
    nome: "Atentado ao Pudor",
    descricao: "Constranger alguém mediante violência ou ameaça para ato de natureza sexual.",
    pena: 30,
    multa: 3000,
    fianca: null
  },
  {
    numero: 27,
    categoria: "Crimes contra a Liberdade",
    nome: "Stalking",
    descricao: "Perseguir alguém de forma insistente ameaçando sua integridade ou privacidade.",
    pena: 100,
    multa: 25000,
    fianca: null
  },
  {
    numero: 28,
    categoria: "Honra",
    nome: "Difamação",
    descricao: "Atribuir a alguém fato ofensivo à sua reputação, de forma a prejudicar sua imagem perante terceiros, por meio de qualquer forma de comunicação.",
    pena: 20,
    multa: 2500,
    fianca: 3000,
    observacao: "Ex.: postar em redes fatos ofensivos que prejudiquem a reputação de alguém."
  },
  {
    numero: 29,
    categoria: "Honra",
    nome: "Injúria",
    descricao: "Ofender a dignidade ou o decoro de outra pessoa por meio de palavras, gestos ou qualquer forma de expressão, atingindo sua honra subjetiva, ainda que sem imputação de fato específico.",
    pena: 20,
    multa: 2500,
    fianca: 3700,
    observacao: "Ex.: ofender a dignidade ou o decoro de outra pessoa."
  },
  {
    numero: 30,
    categoria: "Honra",
    nome: "Calúnia",
    descricao: "Imputar falsamente a alguém a prática de fato definido como crime, com o objetivo de prejudicar sua honra ou imagem, sabendo ou devendo saber da falsidade da acusação.",
    pena: 20,
    multa: 3500,
    fianca: 4500,
    observacao: "Ex.: acusar falsamente alguém da prática de crime."
  },
  {
    numero: 31,
    categoria: "Honra",
    nome: "Uso Indevido de Imagem",
    descricao: "Utilizar, divulgar ou compartilhar imagem, vídeo ou qualquer representação de terceiros sem autorização, de forma a expor, prejudicar ou obter vantagem indevida, salvo quando destinado a fins legais, como investigações policiais ou judiciais.",
    pena: 35,
    multa: 3500,
    fianca: 3800,
    observacao: "Ex.: utilizar imagem de terceiros sem autorização, salvo em investigações policiais."
  },
  {
    numero: 32,
    categoria: "Drogas",
    nome: "Posse de Drogas",
    descricao: "Portar menos de 10 unidades de drogas.",
    pena: 10,
    multa: 1500,
    fianca: 2000
  },
  {
    numero: 33,
    categoria: "Drogas",
    nome: "Tráfico de Drogas",
    descricao: "Comercializar, transportar ou portar 10 ou mais unidades de drogas.",
    pena: 15,
    multa: 2500,
    fianca: 3000
  },
  {
    numero: 34,
    categoria: "Armas",
    nome: "Porte Ilegal de Arma (Baixo Calibre)",
    descricao: "Portar arma leve sem autorização legal.",
    pena: 10,
    multa: 2000,
    fianca: 3000
  },
  {
    numero: 35,
    categoria: "Armas",
    nome: "Porte Ilegal de Arma (Médio Calibre)",
    descricao: "Portar submetralhadora ou arma equivalente sem autorização.",
    pena: 15,
    multa: 6000,
    fianca: 6500
  },
  {
    numero: 36,
    categoria: "Armas",
    nome: "Porte Ilegal de Arma (Alto Calibre)",
    descricao: "Portar armamento de alto calibre ou militar sem autorização.",
    pena: 20,
    multa: 7500,
    fianca: 7800
  },
  {
    numero: 37,
    categoria: "Armas",
    nome: "Tráfico de Armas Leves",
    descricao: "Comercializar ou transportar 2 (duas) ou mais armas leves.",
    pena: 20,
    multa: 5000,
    fianca: 5500
  },
  {
    numero: 38,
    categoria: "Armas",
    nome: "Tráfico de Armas Médias",
    descricao: "Comercializar ou transportar 2 (duas) ou mais armas de médio calibre.",
    pena: 30,
    multa: 7500,
    fianca: 7800
  },
  {
    numero: 39,
    categoria: "Armas",
    nome: "Tráfico de Armas de Alto Calibre",
    descricao: "Comercializar ou transportar 2 (duas) ou mais armas de alto calibre.",
    pena: 40,
    multa: 9500,
    fianca: 9800
  },
  {
    numero: 40,
    categoria: "Munições",
    nome: "Tráfico de Munição Leve",
    descricao: "Comercializar ou transportar acima de 70 munições leves.",
    pena: 15,
    multa: 3000,
    fianca: 3500
  },
  {
    numero: 41,
    categoria: "Munições",
    nome: "Tráfico de Munição Média",
    descricao: "Comercializar ou transportar acima de 150 munições médias.",
    pena: 20,
    multa: 5500,
    fianca: 5800
  },
  {
    numero: 42,
    categoria: "Munições",
    nome: "Tráfico de Munição de Alto Calibre",
    descricao: "Comercializar ou transportar acima de 180 munições de alto calibre.",
    pena: 25,
    multa: 7500,
    fianca: 7800
  },
  {
    numero: 43,
    categoria: "Materiais Ilícitos",
    nome: "Tráfico de Materiais Ilegais",
    descricao: "Comercializar lockpick, C4, chipe hacker, masterpick, órgãos humanos ou outros materiais utilizados para práticas ilegais, devendo o indivíduo possuir acima de 10 itens ilegais no bolso na hora da apreensão.",
    pena: 10,
    multa: 4000,
    fianca: 4800
  },
  {
    numero: 44,
    categoria: "Materiais Ilícitos",
    nome: "Posse de Material para Fabricação",
    descricao: "Possuir matéria-prima ou insumos utilizados na fabricação de drogas, armas, munição ou explosivos.",
    pena: 10,
    multa: 1500,
    fianca: 2000,
    observacao: "Ex.: corpo de rifle, pólvora, projetos de arma e munição, desde que não haja dúvidas da utilização para fabricação de material ilegal."
  },
  {
    numero: 45,
    categoria: "Ordem Pública",
    nome: "Fuga de Abordagem",
    descricao: "Desobedecer ordem de parada policial e fugir de abordagem.",
    pena: 15,
    multa: 1500,
    fianca: 2500
  },
  {
    numero: 46,
    categoria: "Armas",
    nome: "Uso Indevido de Porte de Arma",
    descricao: "Utilizar arma legalizada de forma irresponsável ou ilegal.",
    pena: 30,
    multa: 1500,
    fianca: 3750
  },
  {
    numero: 47,
    categoria: "Patrimônio Ilícito",
    nome: "Posse de Dinheiro Sujo",
    descricao: "Portar qualquer quantia de dinheiro sujo no momento da apreensão.",
    pena: 10,
    multa: 1500,
    fianca: 2700
  },
  {
    numero: 48,
    categoria: "Administração Pública",
    nome: "Uso Indevido de Traje Público",
    descricao: "Utilizar uniforme ou traje de servidor público sem exercer a função.",
    pena: 20,
    multa: 1500,
    fianca: 2000
  },
  {
    numero: 49,
    categoria: "Administração Pública",
    nome: "Falsidade Ideológica",
    descricao: "Se passar por outra pessoa ou por autoridade oficial com intuito de enganar ou obter vantagem.",
    pena: 25,
    multa: 2250,
    fianca: 3125
  },
  {
    numero: 50,
    categoria: "Administração Pública",
    nome: "Desacato",
    descricao: "Desrespeitar ou ofender funcionário público no exercício da função.",
    pena: 10,
    multa: 1875,
    fianca: 7000
  },
  {
    numero: 51,
    categoria: "Administração Pública",
    nome: "Desobediência à Ordem Legal",
    descricao: "Descumprir ordem judicial, mandado ou determinação legal emitida por autoridade competente.",
    pena: 20,
    multa: 4500,
    fianca: null
  },
  {
    numero: 52,
    categoria: "Administração Pública",
    nome: "Abandono de Função",
    descricao: "Abandonar, ausentar-se ou deixar de exercer, sem justificativa legal, as atribuições do cargo ou função pública, comprometendo o serviço ou o interesse público.",
    pena: 10,
    multa: 5000,
    fianca: null
  },
  {
    numero: 53,
    categoria: "Administração Pública",
    nome: "Tentativa de Suborno",
    descricao: "Oferecer vantagem indevida a servidor público.",
    pena: 25,
    multa: 4000,
    fianca: 4500
  },
  {
    numero: 54,
    categoria: "Administração Pública",
    nome: "Abuso de Autoridade",
    descricao: "Exceder os limites das atribuições do cargo ou utilizar a função pública de forma ilegal, arbitrária ou com desvio de finalidade, causando prejuízo, constrangimento ou violação de direitos a terceiros.",
    pena: 50,
    multa: 2500,
    fianca: 4500,
    observacao: "Ex.: servidor público que excede seus poderes ou usa o cargo de forma ilegal."
  },
  {
    numero: 55,
    categoria: "Administração Pública",
    nome: "Fraude de Informações",
    descricao: "Fornecer, omitir ou manipular informações com o objetivo de induzir agente público ao erro, obter vantagem indevida ou prejudicar investigações e procedimentos legais.",
    pena: 25,
    multa: 3500,
    fianca: 3800
  },
  {
    numero: 56,
    categoria: "Administração Pública",
    nome: "Corrupção Passiva",
    descricao: "Solicitar, receber ou aceitar promessa de vantagem indevida, direta ou indiretamente, em razão do cargo público, para si ou para terceiro, em troca de favorecimento, omissão ou prática de ato funcional.",
    pena: 50,
    multa: 5500,
    fianca: 5800,
    observacao: "Ex.: solicitar ou receber vantagem indevida em razão do cargo público."
  },
  {
    numero: 57,
    categoria: "Concurso de Pessoas",
    nome: "Cúmplice",
    descricao: "Auxiliar ou colaborar conscientemente na prática de crime cometido por outra pessoa.",
    pena: 20,
    multa: 2000,
    fianca: 4300
  },
  {
    numero: 58,
    categoria: "Patrimônio",
    nome: "Furto à Registradora",
    descricao: "Roubar valores de caixas registradoras de estabelecimentos comerciais.",
    pena: 25,
    multa: 2000,
    fianca: 2500
  },
  {
    numero: 59,
    categoria: "Patrimônio",
    nome: "Furto a Caixa Eletrônico",
    descricao: "Roubar ou violar caixa eletrônico.",
    pena: 25,
    multa: 2000,
    fianca: 2800
  },
  {
    numero: 60,
    categoria: "Trânsito",
    nome: "Corrida Ilegal",
    descricao: "Participar de racha ou corrida clandestina.",
    pena: 25,
    multa: 3250,
    fianca: 4000
  },
  {
    numero: 61,
    categoria: "Patrimônio",
    nome: "Furto à Residência",
    descricao: "Invadir residência para subtrair bens.",
    pena: 25,
    multa: 3000,
    fianca: 4750
  },
  {
    numero: 62,
    categoria: "Administração Pública",
    nome: "Invasão ao Departamento Policial",
    descricao: "Acessar, invadir ou permanecer em dependências de unidade policial sem autorização, especialmente mediante uso de violência, grave ameaça ou emprego de armas, comprometendo a segurança do local, de agentes públicos ou de investigações em andamento.",
    pena: 35,
    multa: 25000,
    fianca: null,
    observacao: "Ex.: entrar em dependências policiais sem autorização."
  },
  {
    numero: 63,
    categoria: "Patrimônio",
    nome: "Roubo de Veículo",
    descricao: "Ameaçar ou forçar alguém a entregar seu veículo.",
    pena: 15,
    multa: 3000,
    fianca: 3750
  },
  {
    numero: 64,
    categoria: "Patrimônio",
    nome: "Furto de Veículo",
    descricao: "Subtrair veículo sem uso de violência.",
    pena: 15,
    multa: 3000,
    fianca: 3000
  },
  {
    numero: 65,
    categoria: "Patrimônio",
    nome: "Roubo",
    descricao: "Subtrair bens mediante ameaça ou violência.",
    pena: 15,
    multa: 3000,
    fianca: 4500
  },
  {
    numero: 66,
    categoria: "Patrimônio",
    nome: "Furto",
    descricao: "Subtrair bem alheio sem violência.",
    pena: 20,
    multa: 2000,
    fianca: 3500
  },
  {
    numero: 67,
    categoria: "Patrimônio",
    nome: "Tentativa de Furto",
    descricao: "Tentar subtrair bem sem consumar o crime.",
    pena: 10,
    multa: 1500,
    fianca: 2500
  },
  {
    numero: 68,
    categoria: "Patrimônio",
    nome: "Vandalismo",
    descricao: "Destruir ou danificar patrimônio público ou privado.",
    pena: 30,
    multa: 2000,
    fianca: 2500
  },
  {
    numero: 69,
    categoria: "Patrimônio",
    nome: "Extorsão",
    descricao: "Constranger ou obrigar alguém, mediante ameaça, intimidação ou violência, a entregar dinheiro, bens ou qualquer vantagem indevida, realizando a ação por medo ou coação.",
    pena: 30,
    multa: 3000,
    fianca: 4500
  },
  {
    numero: 70,
    categoria: "Propriedade",
    nome: "Invasão de Propriedade",
    descricao: "Entrar, permanecer ou acessar propriedade privada sem autorização do proprietário, possuidor ou responsável legal, sem justificativa legítima ou amparo legal.",
    pena: 25,
    multa: 1500,
    fianca: 2750
  },
  {
    numero: 71,
    categoria: "Ordem Urbana",
    nome: "Poluição Sonora",
    descricao: "Perturbar o sossego público com ruídos excessivos.",
    pena: 5,
    multa: 5000,
    fianca: 2300
  },
  {
    numero: 72,
    categoria: "Patrimônio",
    nome: "Posse de Materiais de Furto a Residência",
    descricao: "Possuir, armazenar ou transportar bens provenientes de furto ou roubo em residências, incluindo objetos, móveis ou quaisquer itens adquiridos de forma ilícita.",
    pena: 15,
    multa: 3000,
    fianca: 3500
  },
  {
    numero: 73,
    categoria: "Ordem Pública",
    nome: "Apologia ao Crime",
    descricao: "Incentivar ou apoiar crimes, seja falando, postando ou divulgando fotos, vídeos ou mensagens que mostrem ou estimulem atividades ilegais.",
    pena: 20,
    multa: 3000,
    fianca: 4500
  },
  {
    numero: 74,
    categoria: "Administração Pública",
    nome: "Obstrução da Justiça",
    descricao: "Ocultar, destruir ou alterar provas, bem como dificultar ou interferir em investigações ou processos judiciais, com o objetivo de impedir ou atrasar a atuação da justiça.",
    pena: 30,
    multa: 6000,
    fianca: 8000
  },
  {
    numero: 75,
    categoria: "Crimes contra a Liberdade",
    nome: "Violação de Medida Protetiva",
    descricao: "Descumprir determinação judicial que imponha restrições de contato, aproximação ou convivência com a vítima, colocando em risco sua integridade física ou psicológica.",
    pena: 20,
    multa: 5000,
    fianca: null
  },
  {
    numero: 76,
    categoria: "Concurso de Pessoas",
    nome: "Formação de Quadrilha",
    descricao: "Quando 4 (quatro) ou mais pessoas forem detidas na mesma ocorrência e os envolvidos atuarem juntos, especialmente se estiverem identificados como grupo ou forem detidos no mesmo contexto criminoso.",
    pena: 30,
    multa: 3000,
    fianca: 4000,
    observacao: "A caracterização do crime permite a abertura de investigação para apuração da participação de cada integrante."
  },
  {
    numero: 77,
    categoria: "Concurso de Pessoas",
    nome: "Associação Criminosa",
    descricao: "Associação a uma organização com fins ilegais com utilização de qualquer tipo de identificação.",
    pena: 15,
    multa: 5000,
    fianca: 6500
  },
  {
    numero: 78,
    categoria: "Materiais Ilícitos",
    nome: "Posse de Órgãos",
    descricao: "Portar, armazenar ou manter em posse membros humanos, abaixo de 10 órgãos, tais como pulmão, fígado ou coração, sem autorização legal.",
    pena: 10,
    multa: 5000,
    fianca: 6500
  },
  {
    numero: 79,
    categoria: "Materiais Ilícitos",
    nome: "Tráfico de Órgãos",
    descricao: "Transportar, comercializar ou distribuir grande quantidade de membros humanos, igual ou superior a 10 unidades, com finalidade ilícita.",
    pena: 30,
    multa: 3000,
    fianca: 4000
  },
  {
    numero: 80,
    categoria: "Crimes Militares",
    nome: "Crime Militar Nível 1",
    descricao: "Descumprir ordens diretas, normas internas ou procedimentos operacionais de baixa relevância, sem gerar prejuízo significativo à hierarquia, disciplina ou funcionamento da instituição.",
    pena: 50,
    multa: 0,
    fianca: null,
    observacao: "Gravidade baixa."
  },
  {
    numero: 81,
    categoria: "Crimes Militares",
    nome: "Crime Militar Nível 2",
    descricao: "Violar normas, diretrizes ou ordens superiores de forma relevante, causando prejuízo à organização, disciplina ou ao bom funcionamento institucional, sem comprometer diretamente a segurança militar.",
    pena: 75,
    multa: 0,
    fianca: null,
    observacao: "Gravidade média."
  },
  {
    numero: 82,
    categoria: "Crimes Militares",
    nome: "Crime Militar Nível 3",
    descricao: "Cometer infrações graves contra a hierarquia, disciplina ou segurança militar, incluindo atos que coloquem em risco operações, integridade da corporação ou de terceiros.",
    pena: 130,
    multa: 0,
    fianca: null,
    observacao: "Gravidade alta."
  },
  {
    numero: 83,
    categoria: "Patrimônio",
    nome: "Assalto a Americano",
    descricao: "Subtrair bens de cidadão americano mediante ameaça, violência ou uso de arma branca ou de fogo.",
    pena: 15,
    multa: 2000,
    fianca: 3000
  },
  {
    numero: 84,
    categoria: "Ordem Pública",
    nome: "Fuga da Prisão",
    descricao: "Evadir-se ou tentar evadir-se do sistema prisional após detenção legal.",
    pena: 20,
    multa: 3000,
    fianca: 4000
  }
];

const artigosSelecionados = new Set();

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const showAllButton = document.getElementById("showAllButton");
const clearSearchButton = document.getElementById("clearSearchButton");
const artigosContainer = document.getElementById("artigosContainer");
const resultado = document.getElementById("resultado");
const selecionadosResumo = document.getElementById("selecionadosResumo");

const reducaoBomComportamento = document.getElementById("reducaoBomComportamento");
const reducaoReuPrimario = document.getElementById("reducaoReuPrimario");
const reducaoAdvogadoConstituido = document.getElementById("reducaoAdvogadoConstituido");
const reducaoCumplice = document.getElementById("reducaoCumplice");

function renderEstadoInicialResultado() {
  resultado.innerHTML = `
    <div class="document-empty">
      O resultado do cálculo será exibido aqui em formato de documento judicial.
    </div>
  `;
}

function renderArtigos(lista) {
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "grid";

  if (!lista.length) {
    artigosContainer.innerHTML = `
      <div class="article-card">
        <div class="article-title">Nenhum artigo encontrado.</div>
        <p class="article-description">Pesquise pelo número, nome ou termo relacionado ao artigo.</p>
      </div>
    `;
    return;
  }

  lista.forEach((artigo) => {
    const marcado = artigosSelecionados.has(artigo.numero);

    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
      <div class="article-top">
        <div class="article-title">Art. ${formatarNumeroArtigo(artigo.numero)} — ${artigo.nome}</div>
        ${artigo.categoria ? `<div class="article-badge">${artigo.categoria}</div>` : ""}
      </div>

      <p class="article-description">${artigo.descricao}</p>

      <div class="article-meta">
        <span><strong>Pena:</strong> ${artigo.pena === 0 ? "0 meses" : `${artigo.pena} meses`}</span>
        <span><strong>Multa:</strong> R$ ${formatarMoeda(artigo.multa)}</span>
        <span><strong>Fiança:</strong> ${formatarFianca(artigo.fianca)}</span>
      </div>

      ${artigo.observacao ? `<div class="article-note">${artigo.observacao}</div>` : ""}

      <label class="article-check">
        <input type="checkbox" class="artigo-checkbox" data-numero="${artigo.numero}" ${marcado ? "checked" : ""}>
        Selecionar artigo
      </label>
    `;

    artigosContainer.appendChild(card);
  });

  document.querySelectorAll(".artigo-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const numero = Number(event.target.dataset.numero);

      if (event.target.checked) {
        artigosSelecionados.add(numero);
      } else {
        artigosSelecionados.delete(numero);
      }

      atualizarResumoSelecionados();
    });
  });
}

function pesquisarArtigos() {
  const termo = normalizarTexto(searchInput.value);

  if (!termo) {
    renderArtigos(artigos);
    return;
  }

  const filtrados = artigos.filter((artigo) =>
    artigo.numero.toString() === termo ||
    formatarNumeroArtigo(artigo.numero) === termo ||
    normalizarTexto(artigo.nome).includes(termo) ||
    normalizarTexto(artigo.categoria || "").includes(termo) ||
    normalizarTexto(artigo.descricao).includes(termo)
  );

  renderArtigos(filtrados);
}

function atualizarResumoSelecionados() {
  if (!artigosSelecionados.size) {
    selecionadosResumo.textContent = "Nenhum artigo selecionado.";
    return;
  }

  const lista = artigos
    .filter((artigo) => artigosSelecionados.has(artigo.numero))
    .sort((a, b) => a.numero - b.numero)
    .map((artigo) => `Art. ${formatarNumeroArtigo(artigo.numero)} — ${artigo.nome}`);

  selecionadosResumo.innerHTML = lista.join("<br>");
}

function obterReducaoPena() {
  let percentual = 0;

  if (reducaoBomComportamento && reducaoBomComportamento.checked) {
    percentual += 0.05;
  }

  if (reducaoReuPrimario && reducaoReuPrimario.checked) {
    percentual += 0.10;
  }

  if (reducaoAdvogadoConstituido && reducaoAdvogadoConstituido.checked) {
    percentual += 0.20;
  }

  if (reducaoCumplice && reducaoCumplice.checked) {
    percentual += 0.15;
  }

  if (percentual > 0.5) percentual = 0.5;

  return percentual;
}

function calcular() {
  if (!artigosSelecionados.size) {
    resultado.innerHTML = `
      <div class="document-header">
        <span class="doc-power">PODER JUDICIÁRIO</span>
        <h3>Resultado do Cálculo Penal</h3>
        <p>Tribunal de Justiça de Snow</p>
      </div>
      <div class="document-body">
        <div class="document-alert danger">Selecione ao menos um artigo para realizar o cálculo.</div>
      </div>
    `;
    return;
  }

  let penaBase = 0;
  let multaTotal = 0;
  let fiancaTotal = 0;
  let honorarios = 0;
  let possuiInafiançavel = false;

  const listaArtigos = artigos
    .filter((artigo) => artigosSelecionados.has(artigo.numero))
    .sort((a, b) => a.numero - b.numero);

  listaArtigos.forEach((artigo) => {
    penaBase += artigo.pena;
    multaTotal += artigo.multa;

    if (artigo.fianca === null) {
      possuiInafiançavel = true;
    } else {
      fiancaTotal += artigo.fianca;
    }
  });

  document.querySelectorAll(".honorario:checked").forEach((item) => {
    honorarios += Number(item.dataset.valor);
  });

  const percentualReducao = obterReducaoPena();
  const penaFinal = Math.max(0, Math.round(penaBase * (1 - percentualReducao)));
  const totalComHonorarios = (possuiInafiançavel ? 0 : fiancaTotal) + honorarios;

  const listaFormatada = listaArtigos
    .map((artigo) => `Art. ${formatarNumeroArtigo(artigo.numero)} — ${artigo.nome}`)
    .join("<br>");

  resultado.innerHTML = `
    <div class="document-header">
      <span class="doc-power">PODER JUDICIÁRIO</span>
      <h3>Resultado do Cálculo Penal</h3>
      <p>Tribunal de Justiça de Snow</p>
    </div>

    <div class="document-body">
      <section class="result-status ${possuiInafiançavel ? "status-inafiançavel" : "status-fianca"}">
        <span class="result-status-label">Situação da fiança</span>
        <strong class="result-status-value">
          ${possuiInafiançavel ? "INAFIANÇÁVEL" : `FIANÇA FIXADA EM R$ ${formatarMoeda(fiancaTotal)}`}
        </strong>
      </section>

      <section class="result-cards-grid">
        <div class="result-card-box">
          <span class="result-card-label">Pena base</span>
          <strong class="result-card-value">${penaBase} meses</strong>
        </div>

        <div class="result-card-box">
          <span class="result-card-label">Redução total</span>
          <strong class="result-card-value">${Math.round(percentualReducao * 100)}%</strong>
        </div>

        <div class="result-card-box result-card-final">
          <span class="result-card-label">Pena final</span>
          <strong class="result-card-value">${penaFinal} meses</strong>
        </div>
      </section>

      <section class="result-values-panel">
        <div class="result-value-row">
          <span>Multa</span>
          <strong>R$ ${formatarMoeda(multaTotal)}</strong>
        </div>

        <div class="result-value-row ${possuiInafiançavel ? "result-value-row-danger" : ""}">
          <span>Fiança</span>
          <strong>${possuiInafiançavel ? "INAFIANÇÁVEL" : `R$ ${formatarMoeda(fiancaTotal)}`}</strong>
        </div>

        <div class="result-value-row result-value-row-total">
          <span>Total com honorários</span>
          <strong>${
            possuiInafiançavel
              ? `R$ ${formatarMoeda(honorarios)}`
              : `R$ ${formatarMoeda(totalComHonorarios)}`
          }</strong>
        </div>
      </section>

      <section class="document-section">
        <h4>Artigos considerados</h4>
        <div class="document-list">
          <p>${listaFormatada}</p>
        </div>
      </section>
    </div>
  `;
}

function limparCalculo() {
  artigosSelecionados.clear();

  document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
    item.checked = false;
  });

  searchInput.value = "";
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "none";
  atualizarResumoSelecionados();
  renderEstadoInicialResultado();
}

searchButton.addEventListener("click", pesquisarArtigos);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    pesquisarArtigos();
  }
});

showAllButton.addEventListener("click", () => {
  renderArtigos(artigos);
});

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "none";
});

atualizarResumoSelecionados();
renderEstadoInicialResultado();
