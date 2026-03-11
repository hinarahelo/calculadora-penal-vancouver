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

const artigos = [
  { numero: 1, categoria: "Crimes contra a vida", nome: "Homicídio Culposo", descricao: "Causar a morte de alguém sem intenção, por imprudência, negligência ou imperícia.", pena: 30, multa: 6000, fianca: null, agravanteServidor: 0.10, observacao: "Agravante de +10% se contra servidor público." },
  { numero: 2, categoria: "Crimes contra a vida", nome: "Homicídio Doloso", descricao: "Matar alguém com intenção.", pena: 40, multa: 12000, fianca: null, agravanteServidor: 0.10, observacao: "Agravante de +10% se contra servidor público." },
  { numero: 3, categoria: "Crimes contra a vida", nome: "Tentativa de Homicídio", descricao: "Iniciar execução do homicídio sem consumação por fator externo.", pena: 35, multa: 10000, fianca: null },
  { numero: 4, categoria: "Crimes contra a vida", nome: "Lesão Corporal", descricao: "Causar dano físico ou psicológico a outra pessoa.", pena: 20, multa: 4000, fianca: 7000, agravanteServidor: 0.05, observacao: "Agravante de +5% se contra servidor público." },
  { numero: 5, categoria: "Crimes contra a vida", nome: "Omissão de Socorro", descricao: "Deixar de prestar assistência a pessoa em perigo quando possível.", pena: 30, multa: 8000, fianca: 3000 },
  { numero: 6, categoria: "Crimes contra a vida", nome: "Maus-Tratos / Tortura", descricao: "Submeter alguém a sofrimento físico ou psicológico intenso.", pena: 40, multa: 5000, fianca: null },
  { numero: 7, categoria: "Crimes contra a vida", nome: "Atentado Violento ao Pudor", descricao: "Constranger alguém mediante violência ou grave ameaça para ato libidinoso.", pena: 60, multa: 15000, fianca: null },
  { numero: 8, categoria: "Crimes contra a vida", nome: "Execução de Pessoa Rendida", descricao: "Matar pessoa incapacitada de reagir.", pena: 60, multa: 15000, fianca: null },
  { numero: 9, categoria: "Crimes contra a vida", nome: "Genocídio", descricao: "Atos destinados à destruição de grupo protegido.", pena: 70, multa: 7000, fianca: null },
  { numero: 10, categoria: "Crimes contra a vida", nome: "Terrorismo", descricao: "Praticar atos violentos para gerar terror coletivo.", pena: 70, multa: 10000, fianca: null },

  { numero: 11, categoria: "Crimes contra a liberdade", nome: "Sequestro", descricao: "Privar alguém de liberdade visando vantagem.", pena: 50, multa: 5000, fianca: null },
  { numero: 12, categoria: "Crimes contra a liberdade", nome: "Cárcere Privado", descricao: "Restringir liberdade de locomoção ilegalmente.", pena: 35, multa: 3000, fianca: 6000 },
  { numero: 13, categoria: "Crimes contra a liberdade", nome: "Ameaça", descricao: "Prometer causar mal físico, moral ou patrimonial.", pena: 30, multa: 2000, fianca: 10000 },
  { numero: 14, categoria: "Crimes contra a liberdade", nome: "Abandono de Incapaz", descricao: "Deixar pessoa vulnerável sob responsabilidade em risco.", pena: 30, multa: 8000, fianca: 7000 },
  { numero: 15, categoria: "Crimes contra a liberdade", nome: "Assédio Sexual", descricao: "Constranger alguém com conduta de natureza sexual sem consentimento.", pena: 35, multa: 6000, fianca: null },

  { numero: 16, categoria: "Crimes contra o patrimônio", nome: "Furto", descricao: "Subtrair bem sem violência.", pena: 30, multa: 4000, fianca: 8500 },
  { numero: 17, categoria: "Crimes contra o patrimônio", nome: "Furto Qualificado", descricao: "Furto mediante arrombamento ou fraude.", pena: 35, multa: 5500, fianca: 12000 },
  { numero: 18, categoria: "Crimes contra o patrimônio", nome: "Tentativa de Furto", descricao: "Início de furto não consumado.", pena: 20, multa: 1500, fianca: 5000 },
  { numero: 19, categoria: "Crimes contra o patrimônio", nome: "Roubo", descricao: "Subtrair bem com violência ou ameaça.", pena: 30, multa: 3500, fianca: 8500 },
  { numero: 20, categoria: "Crimes contra o patrimônio", nome: "Tentativa de Roubo", descricao: "Início de roubo não consumado.", pena: 20, multa: 1500, fianca: 5000 },
  { numero: 21, categoria: "Crimes contra o patrimônio", nome: "Roubo com Arma de Fogo", descricao: "Roubo utilizando arma.", pena: 45, multa: 8000, fianca: null },
  { numero: 22, categoria: "Crimes contra o patrimônio", nome: "Latrocínio", descricao: "Roubo seguido de morte.", pena: 45, multa: 8000, fianca: null },
  { numero: 23, categoria: "Crimes contra o patrimônio", nome: "Extorsão", descricao: "Constranger alguém para obter vantagem indevida.", pena: 20, multa: 2000, fianca: 5000 },
  { numero: 24, categoria: "Crimes contra o patrimônio", nome: "Estelionato", descricao: "Obter vantagem por meio de fraude.", pena: 25, multa: 4000, fianca: 8500 },
  { numero: 25, categoria: "Crimes contra o patrimônio", nome: "Receptação de Veículos", descricao: "Adquirir veículo sabendo ser produto de crime.", pena: 25, multa: 1500, fianca: 2500 },
  { numero: 26, categoria: "Crimes contra o patrimônio", nome: "Desmanche de Veículo", descricao: "Desmontar veículo produto de crime.", pena: 30, multa: 2000, fianca: 4500 },
  { numero: 27, categoria: "Crimes contra o patrimônio", nome: "Vandalismo / Dano ao Patrimônio Público", descricao: "Destruir ou danificar bem público ou privado.", pena: 25, multa: 4000, fianca: 6000 },

  { numero: 28, categoria: "Honra e direitos", nome: "Difamação", descricao: "Atribuir fato ofensivo à reputação.", pena: 30, multa: 2500, fianca: 8500 },
  { numero: 29, categoria: "Honra e direitos", nome: "Injúria", descricao: "Ofender dignidade ou honra.", pena: 20, multa: 2500, fianca: 8500 },
  { numero: 30, categoria: "Honra e direitos", nome: "Calúnia", descricao: "Acusar falsamente alguém de crime.", pena: 20, multa: 2500, fianca: 8500 },
  { numero: 31, categoria: "Honra e direitos", nome: "Uso Indevido de Imagem", descricao: "Utilizar imagem sem autorização.", pena: 0, multa: 3500, fianca: 7000 },
  { numero: 32, categoria: "Honra e direitos", nome: "Assédio (Não Sexual)", descricao: "Conduta abusiva repetitiva que cause constrangimento.", pena: 20, multa: 1500, fianca: 3000 },

  { numero: 33, categoria: "Armas, drogas e produtos ilícitos", nome: "Posse de Drogas (Uso Pessoal)", descricao: "Portar pequena quantidade para consumo próprio.", pena: 10, multa: 1500, fianca: 3000 },
  { numero: 34, categoria: "Armas, drogas e produtos ilícitos", nome: "Tráfico de Drogas", descricao: "Comercializar, distribuir ou portar quantidade superior ao limite legal.", pena: 50, multa: 2500, fianca: 1000 },
  { numero: 35, categoria: "Armas, drogas e produtos ilícitos", nome: "Associação ao Tráfico", descricao: "Unir-se a outros para prática reiterada de tráfico.", pena: 45, multa: 5000, fianca: null },
  { numero: 36, categoria: "Armas, drogas e produtos ilícitos", nome: "Porte Ilegal de Arma", descricao: "Portar arma de fogo sem autorização.", pena: 50, multa: 7500, fianca: 12000 },
  { numero: 37, categoria: "Armas, drogas e produtos ilícitos", nome: "Uso Indevido do Porte de Arma", descricao: "Utilizar arma legal para prática criminosa.", pena: 40, multa: 2000, fianca: 2000 },
  { numero: 38, categoria: "Armas, drogas e produtos ilícitos", nome: "Tráfico Ilegal de Armas", descricao: "Comercializar armas ou munições ilegalmente.", pena: 60, multa: 9500, fianca: 10000 },
  { numero: 39, categoria: "Armas, drogas e produtos ilícitos", nome: "Tráfico de Material Ilícito", descricao: "Distribuir ou vender itens proibidos por lei.", pena: 25, multa: 4000, fianca: 8750 },
  { numero: 40, categoria: "Armas, drogas e produtos ilícitos", nome: "Posse de Material Ilícito", descricao: "Guardar produto proveniente de crime ou item ilegal.", pena: 20, multa: 3500, fianca: 6000 },
  { numero: 41, categoria: "Armas, drogas e produtos ilícitos", nome: "Porte de Dinheiro de Origem Ilícita", descricao: "Portar valores provenientes de atividade criminosa.", pena: 15, multa: 1500, fianca: 2000 },
  { numero: 42, categoria: "Armas, drogas e produtos ilícitos", nome: "Porte de Itens de Arrombamento", descricao: "Portar ferramentas destinadas a invasão sem justificativa.", pena: 15, multa: 2000, fianca: 4000 },

  { numero: 43, categoria: "Administração e ordem pública", nome: "Fuga de Abordagem", descricao: "Evitar intencionalmente abordagem policial.", pena: 20, multa: 1500, fianca: 2500 },
  { numero: 44, categoria: "Administração e ordem pública", nome: "Resistência à Prisão", descricao: "Opor-se à execução de ato legal.", pena: 20, multa: 2500, fianca: 7000 },
  { numero: 45, categoria: "Administração e ordem pública", nome: "Resistência com Lesão", descricao: "Resistir à prisão causando lesão.", pena: 35, multa: 7000, fianca: 12000 },
  { numero: 46, categoria: "Administração e ordem pública", nome: "Desacato à Autoridade", descricao: "Desrespeitar agente público no exercício da função.", pena: 25, multa: 4000, fianca: 4000 },
  { numero: 47, categoria: "Administração e ordem pública", nome: "Desobediência de Ordem Legal", descricao: "Descumprir ordem emitida por autoridade competente.", pena: 25, multa: 5000, fianca: 5000 },
  { numero: 48, categoria: "Administração e ordem pública", nome: "Abandono de Função", descricao: "Servidor público deixar de cumprir dever funcional.", pena: 25, multa: 4000, fianca: 2500 },
  { numero: 49, categoria: "Administração e ordem pública", nome: "Prevaricação", descricao: "Servidor agir por interesse pessoal.", pena: 30, multa: 4000, fianca: 2000 },
  { numero: 50, categoria: "Administração e ordem pública", nome: "Abuso de Autoridade", descricao: "Exceder limites legais do cargo.", pena: 25, multa: 4000, fianca: 2500 },
  { numero: 51, categoria: "Administração e ordem pública", nome: "Tentativa de Suborno", descricao: "Oferecer vantagem indevida a agente público.", pena: 40, multa: 4000, fianca: 8750 },
  { numero: 52, categoria: "Administração e ordem pública", nome: "Fraudar Informações", descricao: "Manipular dados para obter vantagem indevida.", pena: 20, multa: 3000, fianca: 2000 },
  { numero: 53, categoria: "Administração e ordem pública", nome: "Obstrução de Justiça", descricao: "Impedir ou dificultar investigação ou processo.", pena: 20, multa: 3000, fianca: 4500 },
  { numero: 54, categoria: "Administração e ordem pública", nome: "Corrupção de Testemunha", descricao: "Oferecer vantagem para alterar depoimento.", pena: 30, multa: 5000, fianca: null },
  { numero: 55, categoria: "Administração e ordem pública", nome: "Perjúrio", descricao: "Mentir sob compromisso legal em procedimento oficial.", pena: 20, multa: 1500, fianca: 2500 },
  { numero: 56, categoria: "Administração e ordem pública", nome: "Ocultação de Provas", descricao: "Destruir ou ocultar provas.", pena: 20, multa: 1500, fianca: 3000 },
  { numero: 57, categoria: "Administração e ordem pública", nome: "Descarte de Provas em Abordagem", descricao: "Descartar itens ilícitos durante perseguição.", pena: 25, multa: 3500, fianca: 7000 },
  { numero: 58, categoria: "Administração e ordem pública", nome: "Falsa Identidade", descricao: "Fornecer dados falsos para evitar responsabilização.", pena: 20, multa: 2500, fianca: 5000 },
  { numero: 59, categoria: "Administração e ordem pública", nome: "Omissão de Identificação", descricao: "Recusar-se a informar identidade quando legalmente solicitado.", pena: 10, multa: 1000, fianca: 2000 },
  { numero: 60, categoria: "Administração e ordem pública", nome: "Associação Criminosa", descricao: "Unir-se a outros para prática criminosa específica.", pena: 30, multa: 2500, fianca: 4000 },
  { numero: 61, categoria: "Administração e ordem pública", nome: "Formação de Quadrilha", descricao: "Associação de quatro ou mais pessoas para crimes indeterminados.", pena: 45, multa: 5000, fianca: 7000 },
  { numero: 62, categoria: "Administração e ordem pública", nome: "Tráfico de Influência", descricao: "Usar posição ou contatos para obter vantagem ilícita.", pena: 20, multa: 3000, fianca: 4500 },
  { numero: 63, categoria: "Administração e ordem pública", nome: "Peculato", descricao: "Apropriar-se de bem público em razão do cargo.", pena: 20, multa: 2000, fianca: 3000 },

  { numero: 64, categoria: "Ordem social e urbana", nome: "Perturbação da Ordem Pública", descricao: "Provocar tumulto coletivo.", pena: 15, multa: 1500, fianca: 2500 },
  { numero: 65, categoria: "Ordem social e urbana", nome: "Incitação e Organização de Tumulto", descricao: "Organizar ou liderar tumulto que impeça ação pública.", pena: 30, multa: 5000, fianca: 10000 },
  { numero: 66, categoria: "Ordem social e urbana", nome: "Perturbação do Sossego Público", descricao: "Perturbar lazer ou descanso coletivo.", pena: 0, multa: 7500, fianca: 0 },
  { numero: 67, categoria: "Ordem social e urbana", nome: "Corrida Ilegal", descricao: "Participar de corrida clandestina.", pena: 30, multa: 5000, fianca: 2250 },
  { numero: 68, categoria: "Ordem social e urbana", nome: "Direção Perigosa", descricao: "Conduzir veículo colocando terceiros em risco.", pena: 15, multa: 2000, fianca: 1500 },
  { numero: 69, categoria: "Ordem social e urbana", nome: "Veículo Altamente Danificado", descricao: "Circular com veículo em estado crítico.", pena: 0, multa: 5000, fianca: 0 },
  { numero: 70, categoria: "Ordem social e urbana", nome: "Invasão de Domicílio", descricao: "Entrar em residência sem autorização legal.", pena: 20, multa: 3500, fianca: 2500 },
  { numero: 71, categoria: "Ordem social e urbana", nome: "Invasão a Órgão Público", descricao: "Invadir área restrita pública.", pena: 20, multa: 3000, fianca: 2000 },
  { numero: 72, categoria: "Ordem social e urbana", nome: "Destruição de Patrimônio em Serviço Essencial", descricao: "Depredar hospital, delegacia, tribunal ou similar.", pena: 30, multa: 6000, fianca: 10000 },
  { numero: 73, categoria: "Ordem social e urbana", nome: "Descaminho", descricao: "Evitar pagamento de tributo ou imposto.", pena: 40, multa: 20000, fianca: 8500 },
  { numero: 74, categoria: "Ordem social e urbana", nome: "Fraude em Atendimento Jurídico", descricao: "Fornecer informação falsa para obter benefício legal.", pena: 25, multa: 4000, fianca: 8000 },
  { numero: 75, categoria: "Ordem social e urbana", nome: "Violação de Medida Judicial", descricao: "Descumprir ordem judicial válida.", pena: 25, multa: 4000, fianca: 8000 },
  { numero: 76, categoria: "Ordem social e urbana", nome: "Cúmplice", descricao: "Auxiliar conscientemente na prática de crime.", pena: 20, multa: 2000, fianca: 4300 },
  { numero: 77, categoria: "Ordem social e urbana", nome: "Apologia ao Crime", descricao: "Elogiar ou justificar crime publicamente.", pena: 15, multa: 1500, fianca: 2500 },
  { numero: 78, categoria: "Ordem social e urbana", nome: "Legítima Defesa", descricao: "Reação moderada para repelir agressão injusta.", pena: 0, multa: 0, fianca: 0, observacao: "Isento de pena, multa e fiança." }
];

const artigosSelecionados = new Set();

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const showAllButton = document.getElementById("showAllButton");
const clearSearchButton = document.getElementById("clearSearchButton");
const artigosContainer = document.getElementById("artigosContainer");
const resultado = document.getElementById("resultado");
const selecionadosResumo = document.getElementById("selecionadosResumo");
const colaboracaoCheck = document.getElementById("colaboracaoCheck");
const colaboracaoPercent = document.getElementById("colaboracaoPercent");
const agravanteServidor = document.getElementById("agravanteServidor");

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
        <div class="article-title">Art. ${artigo.numero} — ${artigo.nome}</div>
        <div class="article-badge">${artigo.categoria}</div>
      </div>

      <p class="article-description">${artigo.descricao}</p>

      <div class="article-meta">
        <span><strong>Pena:</strong> ${artigo.pena === 0 ? "Isento / 0 meses" : `${artigo.pena} meses`}</span>
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
    normalizarTexto(artigo.nome).includes(termo) ||
    normalizarTexto(artigo.categoria).includes(termo) ||
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
    .map((artigo) => `Art. ${artigo.numero} — ${artigo.nome}`);

  selecionadosResumo.innerHTML = lista.join("<br>");
}

function obterReducaoAtenuantes() {
  let percentual = 0;

  document.querySelectorAll(".atenuante:checked").forEach((item) => {
    percentual += Number(item.dataset.percent);
  });

  if (colaboracaoCheck.checked) {
    const valor = Number(colaboracaoPercent.value);
    if (!Number.isNaN(valor) && valor > 0) {
      percentual += valor / 100;
    }
  }

  if (percentual > 0.8) percentual = 0.8;

  return percentual;
}

function calcularAgravantes() {
  let acrescimo = 0;

  if (!agravanteServidor.checked) return acrescimo;

  artigos.forEach((artigo) => {
    if (artigosSelecionados.has(artigo.numero) && artigo.agravanteServidor) {
      acrescimo += artigo.pena * artigo.agravanteServidor;
    }
  });

  return Math.round(acrescimo);
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

  const acrescimo = calcularAgravantes();
  const penaComAgravante = penaBase + acrescimo;
  const percentualReducao = obterReducaoAtenuantes();
  const desconto = Math.round(penaComAgravante * percentualReducao);
  const penaFinal = Math.max(0, penaComAgravante - desconto);
  const totalComHonorarios = (possuiInafiançavel ? 0 : fiancaTotal) + honorarios;

  const listaFormatada = listaArtigos
    .map((artigo) => `Art. ${artigo.numero} — ${artigo.nome}`)
    .join("<br>");

  resultado.innerHTML = `
    <div class="document-header">
      <span class="doc-power">PODER JUDICIÁRIO</span>
      <h3>Resultado do Cálculo Penal</h3>
      <p>Tribunal de Justiça de Snow — Documento preliminar de apuração</p>
    </div>

    <div class="document-body">
      ${
        possuiInafiançavel
          ? `<div class="document-alert danger">Consta crime inafiançável entre os artigos selecionados.</div>`
          : `<div class="document-alert success">Não há crime inafiançável entre os artigos selecionados.</div>`
      }

      <section class="document-section">
        <h4>Dosimetria preliminar</h4>
        <div class="document-grid">
          <div class="document-card">
            <p><strong>Pena base:</strong> ${penaBase} meses</p>
            <p><strong>Agravantes aplicadas:</strong> ${acrescimo} meses</p>
            <p><strong>Pena antes das atenuantes:</strong> ${penaComAgravante} meses</p>
            <p><strong>Redução total:</strong> ${Math.round(percentualReducao * 100)}%</p>
            <p><strong>Desconto em meses:</strong> ${desconto} meses</p>
            <p><strong>Pena final:</strong> ${penaFinal} meses</p>
          </div>

          <div class="document-card">
            <p><strong>Multa total:</strong> R$ ${formatarMoeda(multaTotal)}</p>
            <p><strong>Fiança:</strong> ${possuiInafiançavel ? "INAFIANÇÁVEL" : `R$ ${formatarMoeda(fiancaTotal)}`}</p>
            <p><strong>Honorários jurídicos:</strong> R$ ${formatarMoeda(honorarios)}</p>
            <p><strong>Total com honorários:</strong> ${
              possuiInafiançavel
                ? `R$ ${formatarMoeda(honorarios)}`
                : `R$ ${formatarMoeda(totalComHonorarios)}`
            }</p>
          </div>
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
  colaboracaoPercent.value = "";
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

colaboracaoCheck.addEventListener("change", () => {
  if (!colaboracaoCheck.checked) {
    colaboracaoPercent.value = "";
  }
});

atualizarResumoSelecionados();
renderEstadoInicialResultado();
