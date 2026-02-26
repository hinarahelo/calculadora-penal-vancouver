function normalizarTexto(txt) {
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/* ================= ARTIGOS (ATUALIZADOS 1–78) ================= */
const artigos = [
  /* 🔴 VIDA / GRAVES */
  {numero:1, nome:"Direção Perigosa", descricao:"Utilização do veículo para demonstrar manobras perigosas colocando terceiros em risco.", pena:15, multa:2000, fianca:1500},
  {numero:2, nome:"Homicídio Culposo", descricao:"Morte causada por imprudência, negligência ou imperícia, sem intenção de matar.", pena:30, multa:6000, fianca:0},
  {numero:3, nome:"Homicídio Doloso", descricao:"Matar alguém intencionalmente.", pena:40, multa:12000, fianca:0},
  {numero:4, nome:"Tentativa de Homicídio", descricao:"Iniciar execução de homicídio sem consumar por circunstâncias alheias à vontade.", pena:35, multa:10000, fianca:0},
  {numero:5, nome:"Latrocínio", descricao:"Roubo seguido de morte.", pena:45, multa:8000, fianca:0},
  {numero:6, nome:"Execução de Pessoa Rendida", descricao:"Matar pessoa rendida/incapaz de reagir.", pena:60, multa:15000, fianca:0},
  {numero:7, nome:"Genocídio", descricao:"Atos com objetivo de destruir grupo nacional, étnico, racial ou religioso.", pena:70, multa:7000, fianca:0},
  {numero:8, nome:"Terrorismo", descricao:"Atos criminosos para provocar terror social ou generalizado.", pena:70, multa:10000, fianca:0},
  {numero:9, nome:"Agressão ou Lesão Corporal", descricao:"Ato intencional de causar dano físico ou psicológico.", pena:20, multa:4000, fianca:7000},
  {numero:10, nome:"Maus Tratos / Tortura", descricao:"Submeter alguém a sofrimento físico ou psicológico grave, expondo a perigo.", pena:40, multa:5000, fianca:0},

  /* 🟡 LIBERDADE */
  {numero:11, nome:"Sequestro", descricao:"Privar alguém de sua liberdade para obter vantagem.", pena:50, multa:5000, fianca:0},
  {numero:12, nome:"Cárcere Privado", descricao:"Restringir a liberdade de alguém contra sua vontade.", pena:35, multa:3000, fianca:0},
  {numero:13, nome:"Omissão de Socorro", descricao:"Deixar de prestar assistência a quem está em perigo.", pena:30, multa:8000, fianca:3000},
  {numero:14, nome:"Atentado Violento ao Pudor", descricao:"Constranger alguém a ato libidinoso mediante violência ou grave ameaça.", pena:250, multa:0, fianca:0},
  {numero:15, nome:"Ameaça", descricao:"Prometer causar mal físico, moral ou patrimonial.", pena:30, multa:2000, fianca:10000},
  {numero:16, nome:"Abandono de Incapaz", descricao:"Abandonar pessoa incapaz em situação de risco.", pena:30, multa:8000, fianca:7000},
  {numero:17, nome:"Assédio Sexual", descricao:"Constranger alguém com intenção sexual, por palavras, gestos ou condutas invasivas sem consentimento.", pena:35, multa:6000, fianca:0},

  /* 🟣 HONRA / DIREITOS */
  {numero:18, nome:"Difamação", descricao:"Atribuir fato ofensivo à reputação de alguém.", pena:30, multa:2500, fianca:8500},
  {numero:19, nome:"Injúria", descricao:"Ofender a dignidade ou honra de alguém.", pena:20, multa:2500, fianca:8500},
  {numero:20, nome:"Calúnia", descricao:"Acusar falsamente alguém de crime.", pena:20, multa:2500, fianca:8500},
  {numero:21, nome:"Uso Indevido de Imagem", descricao:"Utilizar imagem de alguém sem autorização.", pena:0, multa:3500, fianca:7000},
  {numero:22, nome:"Assédio (Não Sexual)", descricao:"Conduta abusiva repetitiva que cause constrangimento e perturbação.", pena:20, multa:1500, fianca:3000},

  /* 🟠 PATRIMÔNIO */
  {numero:23, nome:"Furto", descricao:"Subtração de bem alheio sem violência ou ameaça.", pena:30, multa:4000, fianca:8500},
  {numero:24, nome:"Furto Qualificado", descricao:"Furto mediante arrombamento, fraude ou abuso de confiança.", pena:35, multa:5500, fianca:12000},
  {numero:25, nome:"Tentativa de Furto", descricao:"Início de furto não consumado por circunstâncias alheias.", pena:20, multa:1500, fianca:5000},
  {numero:26, nome:"Roubo", descricao:"Subtração de bem mediante violência ou grave ameaça.", pena:30, multa:3500, fianca:8500},
  {numero:27, nome:"Tentativa de Roubo", descricao:"Início de roubo não consumado por circunstâncias alheias.", pena:20, multa:1500, fianca:5000},
  {numero:28, nome:"Roubo com Arma de Fogo", descricao:"Subtração mediante ameaça/uso de arma de fogo.", pena:45, multa:8000, fianca:0},
  {numero:29, nome:"Extorsão", descricao:"Forçar vantagem indevida mediante ameaça ou constrangimento.", pena:20, multa:2000, fianca:5000},
  {numero:30, nome:"Estelionato", descricao:"Obter vantagem mediante fraude ou engano.", pena:25, multa:4000, fianca:8500},
  {numero:31, nome:"Receptação", descricao:"Adquirir, receber ou ocultar bem produto de crime.", pena:25, multa:1500, fianca:2500},
  {numero:32, nome:"Receptação de Veículos", descricao:"Adquirir ou ocultar veículo sabendo ser produto de crime.", pena:25, multa:1500, fianca:2500},
  {numero:33, nome:"Desmanche de Veículo", descricao:"Levar veículo para desmanche ilegal visando lucro.", pena:30, multa:2000, fianca:4500},
  {numero:34, nome:"Vandalismo", descricao:"Destruição de bens públicos ou privados.", pena:25, multa:2500, fianca:3000},
  {numero:35, nome:"Dano ao Patrimônio Público", descricao:"Depredar patrimônio estatal, causando prejuízo ao erário.", pena:25, multa:4000, fianca:6000},

  /* 🔫 ARMAS, DROGAS E PRODUTOS ILÍCITOS */
  {numero:36, nome:"Posse de Drogas (Uso)", descricao:"Portar pequena quantidade para consumo próprio.", pena:10, multa:1500, fianca:3000},
  {numero:37, nome:"Tráfico de Drogas", descricao:"Comercialização, distribuição ou posse acima do limite permitido.", pena:50, multa:2500, fianca:1000},
  {numero:38, nome:"Associação ao Tráfico", descricao:"União para crimes de tráfico.", pena:45, multa:5000, fianca:0},
  {numero:39, nome:"Porte Ilegal de Arma", descricao:"Portar arma ou munição sem autorização.", pena:50, multa:7500, fianca:12000},
  {numero:40, nome:"Uso Indevido do Porte de Armas", descricao:"Uso do armamento para fins ilegais.", pena:40, multa:2000, fianca:2000},
  {numero:41, nome:"Tráfico de Material Ilegal", descricao:"Distribuição de bens proibidos por lei.", pena:25, multa:4000, fianca:8750},
  {numero:42, nome:"Posse de Material Ilícito", descricao:"Guardar item ilícito ou produto de crime.", pena:20, multa:3500, fianca:6000},
  {numero:43, nome:"Tráfico Ilegal de Armas", descricao:"Fornecimento de armas ou munições ilegalmente.", pena:60, multa:9500, fianca:0},
  {numero:44, nome:"Porte de Dinheiro Sujo", descricao:"Portar dinheiro proveniente de crime.", pena:15, multa:1500, fianca:2000},

  /* 🟢 ORDEM PÚBLICA / ADMINISTRAÇÃO */
  {numero:45, nome:"Fuga de Abordagem", descricao:"Evitar contato com autoridade após crime.", pena:20, multa:1500, fianca:2500},
  {numero:46, nome:"Perturbação da Ordem Pública", descricao:"Alterar a ordem e disciplina pública causando tumulto.", pena:15, multa:1500, fianca:2500},
  {numero:47, nome:"Perturbação do Sossego Público", descricao:"Perturbar lazer em local público.", pena:0, multa:7500, fianca:0},
  {numero:48, nome:"Desacato à Autoridade", descricao:"Faltar com respeito a agente público.", pena:25, multa:4000, fianca:4000},
  {numero:49, nome:"Desobediência de Ordem Legal", descricao:"Não cumprir ordem legal de autoridade.", pena:25, multa:5000, fianca:5000},
  {numero:50, nome:"Abandono de Função", descricao:"Servidor deixa de cumprir suas funções.", pena:25, multa:4000, fianca:2500},
  {numero:51, nome:"Prevaricação", descricao:"Servidor age por interesse pessoal.", pena:30, multa:4000, fianca:2000},
  {numero:52, nome:"Tentativa de Suborno", descricao:"Oferecer vantagem indevida.", pena:40, multa:4000, fianca:8750},
  {numero:53, nome:"Abuso de Autoridade", descricao:"Uso indevido de poder por agente público.", pena:25, multa:4000, fianca:2500},
  {numero:54, nome:"Fraudar Informações", descricao:"Manipular dados para obter vantagem.", pena:20, multa:3000, fianca:2000},
  {numero:55, nome:"Obstrução de Justiça", descricao:"Embaraçar investigação ou processo.", pena:20, multa:3000, fianca:4500},
  {numero:56, nome:"Corrupção de Testemunha", descricao:"Oferecer vantagem para alterar depoimento.", pena:30, multa:5000, fianca:0},
  {numero:57, nome:"Ocultação de Provas", descricao:"Destruir ou ocultar provas.", pena:20, multa:1500, fianca:3000},
  {numero:58, nome:"Perjúrio", descricao:"Mentir sob juramento.", pena:20, multa:1500, fianca:2500},
  {numero:59, nome:"Tráfico de Influência", descricao:"Usar posição para vantagem ilícita.", pena:20, multa:3000, fianca:4500},
  {numero:60, nome:"Associação Criminosa", descricao:"Grupo organizado para crimes.", pena:30, multa:2500, fianca:4000},
  {numero:61, nome:"Formação de Quadrilha", descricao:"Associação de quatro ou mais pessoas para crimes.", pena:45, multa:5000, fianca:7000},
  {numero:62, nome:"Incitar a Prática de Crime", descricao:"Incentivar publicamente a prática de crime.", pena:25, multa:6250, fianca:3000},

  /* ✅ NOVOS COMPLEMENTARES (63–77) */
  {numero:63, nome:"Falsa Identidade", descricao:"Fornecer nome/dados falsos para evitar responsabilização.", pena:20, multa:2500, fianca:5000},
  {numero:64, nome:"Omissão de Identificação", descricao:"Recusar-se a informar identidade ao ser legalmente solicitado.", pena:10, multa:1000, fianca:2000},
  {numero:65, nome:"Porte de Itens de Arrombamento", descricao:"Portar ferramentas destinadas a invasão/arrombamento sem justificativa.", pena:15, multa:2000, fianca:4000},
  {numero:66, nome:"Invasão aos Órgãos Públicos", descricao:"Invadir repartição pública/área restrita.", pena:20, multa:3000, fianca:2000},
  {numero:67, nome:"Invasão de Domicílio", descricao:"Entrar em casa alheia sem consentimento.", pena:20, multa:3500, fianca:2500},
  {numero:68, nome:"Corrida Ilegal", descricao:"Corridas visando lucro ilícito.", pena:30, multa:5000, fianca:2250},
  {numero:69, nome:"Destruição de Patrimônio Essencial", descricao:"Depredar hospital, delegacia, tribunal, bombeiros, energia/água.", pena:30, multa:6000, fianca:10000},
  {numero:70, nome:"Descaminho", descricao:"Evitar pagamento de impostos.", pena:40, multa:20000, fianca:8500},
  {numero:71, nome:"Peculato", descricao:"Servidor se apropria de bens públicos.", pena:20, multa:2000, fianca:3000},
  {numero:72, nome:"Cúmplice", descricao:"Auxiliar ou colaborar com crime.", pena:20, multa:2000, fianca:4300},
  {numero:73, nome:"Apologia ao Crime", descricao:"Elogiar ou justificar crime publicamente.", pena:15, multa:1500, fianca:2500},
  {numero:74, nome:"Fraude em Atendimento Jurídico", descricao:"Apresentar informação falsa para obter redução, fiança ou benefício.", pena:25, multa:4000, fianca:8000},
  {numero:75, nome:"Violação de Medida Judicial", descricao:"Descumprir ordem judicial válida (afastamento, restrição, proibição).", pena:25, multa:4000, fianca:8000},
  {numero:76, nome:"Resistência com Lesão", descricao:"Resistir à prisão e causar lesão em agente/terceiro.", pena:35, multa:7000, fianca:12000},
  {numero:77, nome:"Descarte/Destruição de Provas em Abordagem", descricao:"Descartar itens ilícitos/provas durante perseguição ou abordagem.", pena:25, multa:3500, fianca:7000},

  /* 78 (FECHAMENTO) */
  {numero:78, nome:"Legítima Defesa", descricao:"Exclusão de ilicitude.", pena:0, multa:0, fianca:0},
];

/* ================= CONTROLE ================= */
const artigosSelecionados = new Set();

/* ================= PESQUISA (COM VALORES VISÍVEIS) ================= */
document.getElementById("searchButton").onclick = () => {
  const termo = normalizarTexto(document.getElementById("searchInput").value);
  const container = document.getElementById("artigosContainer");

  container.innerHTML = "";
  container.style.display = "block";

  artigos
    .filter(a =>
      normalizarTexto(a.nome).includes(termo) ||
      a.numero.toString() === termo
    )
    .forEach(a => {
      const marcado = artigosSelecionados.has(a.numero);

      const fiancaTexto =
        a.numero === 44 ? "R$ 0" :
        a.fianca === 0 ? "INAFIANÇÁVEL" :
        "R$ " + a.fianca;

      container.innerHTML += `
        <div class="article">
          <strong>Art. ${a.numero} – ${a.nome}</strong>
          <p>${a.descricao}</p>
          <p>
            Pena: ${a.pena} meses |
            Multa: R$ ${a.multa} |
            Fiança: ${fiancaTexto}
          </p>
          <label>
            <input type="checkbox" class="artigo" data-numero="${a.numero}" ${marcado ? "checked" : ""}>
            Selecionar
          </label>
        </div>
      `;
    });

  document.querySelectorAll(".artigo").forEach(cb => {
    cb.onchange = () => {
      const num = Number(cb.dataset.numero);
      cb.checked ? artigosSelecionados.add(num) : artigosSelecionados.delete(num);
    };
  });
};

/* ================= CÁLCULO ================= */
function calcular() {
  let pena = 0, multa = 0, fianca = 0, honorarios = 0, perc = 0;
  let inafiançavel = false;

  artigos.forEach(a => {
    if (artigosSelecionados.has(a.numero)) {
      pena += a.pena;
      multa += a.multa;

      if (a.fianca === 0 && a.numero !== 44) {
        inafiançavel = true;
      } else {
        fianca += a.fianca;
      }
    }
  });

  document.querySelectorAll(".atenuante:checked").forEach(a => perc += +a.dataset.percent);
  if (perc > 0.4) perc = 0.4;

  document.querySelectorAll(".honorario:checked").forEach(h => honorarios += +h.dataset.valor);

  const penaFinal = pena - Math.round(pena * perc);
  const totalHonorarios = inafiançavel ? honorarios : fianca + honorarios;

  document.getElementById("resultado").innerHTML = `
    ${inafiançavel ? `
      <div style="background:#8b0000;color:#fff;padding:10px;border-radius:6px;font-weight:bold;text-align:center;margin-bottom:10px;">
        ⚠️ CRIME INAFIANÇÁVEL
      </div>` : ""}
    <strong>Artigos Selecionados:</strong> ${[...artigosSelecionados].join(", ") || "Nenhum"}<br><br>
    <strong>Pena:</strong> ${penaFinal} meses<br>
    <strong>Multa:</strong> R$ ${multa}<br>
    <strong>Fiança:</strong> R$ ${fianca}<br>
    <strong>Total com Honorários:</strong> R$ ${totalHonorarios}
  `;
}

/* ================= LIMPAR ================= */
function limparCalculo() {
  artigosSelecionados.clear();
  document.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = false);
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("artigosContainer").innerHTML = "";
  document.getElementById("artigosContainer").style.display = "none";
  document.getElementById("searchInput").value = "";
}
