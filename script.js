const perguntas = [
    {
        titulo: "Qual é a sua faixa etária?",
        descricao: "Escolha a classificação indicativa máxima que deseja ver.",
        opcoes: ["Livre", "10 anos", "12 anos", "14 anos", "16 anos", "18 anos"]
    },
    {
        titulo: "O que você quer assistir?",
        descricao: "Escolha o formato da sua próxima história.",
        opcoes: ["Filme", "Série", "Tanto faz"]
    },
    {
        titulo: "Qual gênero você quer?",
        descricao: "Escolha o gênero que combina com seu mood.",
        opcoes: ["Comédia", "Romance", "Drama", "Fantasia", "Terror", "Animação"]
    },
    {
        titulo: "Você vai assistir...",
        descricao: "Pense em quem vai compartilhar esse momento com você.",
        opcoes: ["Sozinho(a)", "Com namorado(a)", "Com amigos", "Com a família", "Tanto faz"]
    },
    {
        titulo: "Que tipo de personagem você prefere?",
        descricao: "Escolha a personalidade que mais gosta de acompanhar.",
        opcoes: ["Corajoso", "Engraçado", "Um casal", "Inteligente", "Rebelde", "Tanto faz"]
    }
];

// Catálogo inicial do CineMood.

const catalogo = [
    {
        id: 1,
        titulo: "Scott Pilgrim Contra o Mundo",
        tipo: "Filme",
        generos: ["Comédia", "Romance", "Fantasia"],
        idade: 12,
        personagens: ["Engraçado", "Um casal", "Rebelde"],
        companhia: ["Sozinho(a)", "Com namorado(a)", "Com amigos"],
        poster: "imagens/scott pilgrim filme.jpg"
    },
    {
        id: 2,
        titulo: "Dash e Lily",
        tipo: "Série",
        generos: ["Romance", "Comédia"],
        idade: 10,
        personagens: ["Um casal", "Inteligente"],
        companhia: ["Sozinho(a)", "Com namorado(a)", "Com amigos"],
        poster: "imagens/lily.jpg"
    },
    {
        id: 3,
        titulo: "I Am Not Okay With This",
        tipo: "Série",
        generos: ["Drama", "Comédia", "Fantasia"],
        idade: 16,
        personagens: ["Rebelde", "Inteligente"],
        companhia: ["Sozinho(a)", "Com amigos"],
        poster: "imagens/imokay.jpg"
    },
    {
        id: 4,
        titulo: "Dinner in America",
        tipo: "Filme",
        generos: ["Romance", "Drama", "Comédia"],
        idade: 16,
        personagens: ["Rebelde", "Um casal"],
        companhia: ["Sozinho(a)", "Com namorado(a)"],
        poster: "imagens/dinner.png"
    },
    {
        id: 5,
        titulo: "Scott Pilgrim: A Série ",
        tipo: "Série",
        generos: ["Animação", "Comédia", "Romance"],
        idade: 12,
        personagens: ["Rebelde", "Engraçado", "Comédia"],
        companhia: ["Sozinho(a)", "Com amigos", "Com namorado(a)"],
        poster: "imagens/scott pilgrim serie.jpg"
    },
    {
        id: 6,
        titulo: "Viva: A Vida é uma Festa",
        tipo: "Filme",
        generos: ["Fantasia", "Animação"],
        idade: 0,
        personagens: ["Corajoso"],
        companhia: ["Sozinho(a)", "Com amigos", "Com familia"],
        poster: "imagens/viva.jpg"
    },
    {
        id: 7,
        titulo: "Wayne",
        tipo: "Série",
        generos: ["Comédia", "Drama"],
        idade: 18,
        personagens: ["Inteligente", "Rebelde"],
        companhia: ["Sozinho(a)", "Com amigos"],
        poster: "imagens/wayne.jpg"
    },
    {
        id: 8,
        titulo: "Homem-Aranha: Um Novo Dia",
        tipo: "Filme",
        generos: ["Drama"],
        idade: 12,
        personagens: ["Corajoso", "Inteligente"],
        companhia: ["Sozinho(a)", "Com amigos", "Com familia"],
        poster: "imagens/spider.jpg"
    },
    {
        id: 9,
        titulo: "Coraline",
        tipo: "Filme",
        generos: ["Fantasia", "Animação", "Terror"],
        idade: 10,
        personagens: ["Corajoso", "Inteligente"],
        companhia: ["Sozinho(a)", "Com amigos", "Com a família"],
        poster: "imagens/cora.jpg"
    },
    {
        id: 10,
        titulo: "Stranger Things",
        tipo: "Série",
        generos: ["Drama", "Fantasia", "Terror"],
        idade: 16,
        personagens: ["Corajoso", "Inteligente", "Rebelde"],
        companhia: ["Sozinho(a)", "Com amigos"],
        poster: "imagens/st.jpg"
    },
    {
        id: 11,
        titulo: "Toy Story 4",
        tipo: "Filme",
        generos: ["Animação", "Comédia"],
        idade: 0,
        personagens: ["Engraçado"],
        companhia: ["Sozinho(a)", "Com amigos", "Com a família"],
        poster: "imagens/toy.jpg"
    },
    {
        id: 12,
        titulo: "The End of the F***ing World",
        tipo: "Série",
        generos: ["Drama", "Comédia", "Romance"],
        idade: 16,
        personagens: ["Rebelde", "Um casal"],
        companhia: ["Sozinho(a)", "Com amigos"],
        poster: "imagens/tofw.jpg"
    },
    {
        id: 13,
        titulo: "Skins - Juventude à Flor da Pele",
        tipo: "Série",
        generos: ["Comédia", "Drama"],
        idade: 18,
        personagens: ["Rebelde", "Engraçado"],
        companhia: ["Sozinho(a)", "Com amigos"],
        poster: "imagens/skins.jpg"
    },
    {
        id: 14,
        titulo: "Gravity Falls: Um Verão de Mistério",
        tipo: "Série",
        generos: ["Animação", "Fantasia"],
        idade: 0,
        personagens: ["Corajoso", "Engraçado"],
        companhia: ["Sozinho(a)", "Com amigos", "Com a família"],
        poster: "imagens/falls.jpg"
    }
];

// Descrições e anos exibidos ao clicar em cada filme ou série.
const informacoesTitulos = {
    1: { ano: "2010", descricao: "Scott Pilgrim precisa enfrentar os sete ex-namorados malignos de Ramona Flowers para poder ficar com ela. Uma comédia romântica com videogames, música e fantasia." },
    2: { ano: "2020", descricao: "Dash e Lily trocam desafios e mensagens por meio de um caderno escondido em lugares de Nova York, aproximando-se mesmo sem se conhecerem pessoalmente." },
    3: { ano: "2020", descricao: "Uma adolescente que enfrenta problemas na escola e em casa descobre habilidades misteriosas enquanto tenta entender seus sentimentos e sua relação com as pessoas ao redor." },
    4: { ano: "2022", descricao: "Simon é um cantor de punk rock procurado pela polícia, que acidentalmente se encontra com Patty, uma garota desajeitada e obcecada pela sua banda. Juntos, eles embarcam em uma jornada pelos subúrbios decadentes dos Estados Unidos." },
    5: { ano: "2023", descricao: "Scott Pilgrim conhece Ramona Flowers, a garota dos seus sonhos, mas logo descobre que existem sete ex-namorados do mal no meio do caminho." },
    6: { ano: "2017", descricao: "Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso malandro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel." },
    7: { ano: "2019", descricao: "Após a morte de seu pai, um justiceiro de 16 anos de idade de bom coração sai com seu novo amigo para recuperar o 79 Trans Am roubado de seu pai." },
    8: { ano: "2026", descricao: "Após o mundo ter esquecido seu nome, Peter Parker inicia um novo capítulo em sua vida, conciliando as aulas da faculdade, um trabalho de meio período e sua responsabilidade como o Homem-Aranha. Mas quando uma força misteriosa começa a desmantelar a cidade de dentro para fora, Peter se vê preso entre inimigos poderosos, legados antigos e aliados inesperados." },
    9: { ano: "2009", descricao: "Coraline descobre uma porta para um mundo alternativo onde tudo parece perfeito, pais afetuosos e desejos realizados. Porém, todos têm botões nos olhos, e logo percebe que essa realidade paralela esconde intenções sombrias para mantê-la presa." },
    10: { ano: "2016", descricao: "Em uma pequena cidade nos anos 1980, um grupo de amigos se envolve em acontecimentos sobrenaturais após o desaparecimento de um garoto." },
    11: { ano: "2019", descricao: "Woody, Buzz Lightyear e o resto da turma embarcam em uma viagem com Bonnie e um novo brinquedo chamado Forky. A aventura logo se transforma em uma reunião inesperada quando o ligeiro desvio que Woody faz o leva ao seu amigo há muito perdido, Bo Peep." },
    12: { ano: "2017", descricao: "Dois adolescentes deslocados iniciam uma viagem juntos, e a relação entre eles muda enquanto enfrentam situações difíceis." },
    13: { ano: "2007", descricao: "Aclamada pela crítica, a série criada por Bryan Elsley e seu filho Jamie Brittain narra a história de um grupo de amigos entre 16 e 18 anos de Bristol , Inglaterra. Ao acompanhar os jovens ao longo de dois anos, a polêmica produção fala de temas controversos como o uso de drogas, sexualidade, gravidez adolescente, transtornos de personalidade e alimentares. A série é única em seu formato, que reune atores amadores, além da substituição do elenco a cada duas temporadas, quando os jovens saem da escola." },
    14: { ano: "2012", descricao: "Os gêmeos Dipper e Mabel Pines passam as férias com o tio-avô numa misteriosa cidade. Eles tentam se adaptar à estranha região, mas sentem algo estranho e começam a investigar. Dipper encontra um diário codificado e a aventura começa." }
};

catalogo.forEach(filme => {
    Object.assign(filme, informacoesTitulos[filme.id] || {
        ano: "Ano não informado",
        descricao: "Ainda não adicionamos uma descrição para este título."
    });
});

const formQuiz = document.getElementById("formQuiz");
const areaInicio = document.getElementById("inicio");
const areaQuiz = document.getElementById("areaQuiz");
const areaResultados = document.getElementById("areaResultados");
const areaFavoritos = document.getElementById("areaFavoritos");

const tituloPergunta = document.getElementById("tituloPergunta");
const descricaoPergunta = document.getElementById("descricaoPergunta");
const numeroPergunta = document.getElementById("numeroPergunta");
const opcoes = document.getElementById("opcoes");
const barraProgresso = document.getElementById("barraProgresso");
const mensagemErro = document.getElementById("mensagemErro");

const listaRecomendacoes = document.getElementById("listaRecomendacoes");
const listaFavoritos = document.getElementById("listaFavoritos");
const contadorFavoritos = document.getElementById("contadorFavoritos");
const btnAbrirCadastro = document.getElementById("btnAbrirCadastro");
const usuarioAtualTexto = document.getElementById("usuarioAtualTexto");
const modalCadastro = document.getElementById("modalCadastro");
const fecharCadastro = document.getElementById("fecharCadastro");
const formCadastro = document.getElementById("formCadastro");
const campoNome = document.getElementById("campoNome");
const campoEmail = document.getElementById("campoEmail");
const campoSenha = document.getElementById("campoSenha");
const tituloCadastro = document.getElementById("tituloCadastro");
const textoCadastro = document.getElementById("textoCadastro");
const labelNome = document.getElementById("labelNome");
const btnEnviarCadastro = document.getElementById("btnEnviarCadastro");
const textoAlternar = document.getElementById("textoAlternar");
const btnAlternarCadastro = document.getElementById("btnAlternarCadastro");
const mensagemCadastro = document.getElementById("mensagemCadastro");
const modalDetalhes = document.getElementById("modalDetalhes");
const fecharDetalhes = document.getElementById("fecharDetalhes");
const detalhesPoster = document.getElementById("detalhesPoster");
const detalhesTitulo = document.getElementById("detalhesTitulo");
const detalhesMeta = document.getElementById("detalhesMeta");
const detalhesDescricao = document.getElementById("detalhesDescricao");
const detalhesBotaoFavorito = document.getElementById("detalhesBotaoFavorito");
let filmeAberto = null;


let perguntaAtual = 0;
let respostas = [];
let ultimaTela = "inicio";

// Os cadastros e favoritos ficam neste navegador (demonstração escolar).
const CHAVE_CADASTROS = "cineMoodCadastros";
const CHAVE_SESSAO = "cineMoodUsuarioAtual";
let favoritos = [];
let usuarioAtual = localStorage.getItem(CHAVE_SESSAO) || "";
let modoCadastro = "cadastro";

function lerCadastros() {
    try {
        const dados = JSON.parse(localStorage.getItem(CHAVE_CADASTROS) || "{}");
        return dados && typeof dados === "object" ? dados : {};
    } catch { return {}; }
}

function chaveUsuario(email) { return email.trim().toLowerCase(); }

function carregarFavoritos() {
    if (!usuarioAtual) { favoritos = []; return; }
    try {
        const todos = JSON.parse(localStorage.getItem("cineMoodFavoritosPorUsuario") || "{}");
        favoritos = Array.isArray(todos[usuarioAtual]) ? todos[usuarioAtual] : [];
    } catch { favoritos = []; }
}

function salvarFavoritos() {
    atualizarContador();
    if (!usuarioAtual) return;
    let todos = {};
    try { todos = JSON.parse(localStorage.getItem("cineMoodFavoritosPorUsuario") || "{}"); } catch {}
    todos[usuarioAtual] = favoritos;
    localStorage.setItem("cineMoodFavoritosPorUsuario", JSON.stringify(todos));
}

function atualizarUsuarioNaTela() {
    if (usuarioAtual) {
        const cadastro = lerCadastros()[usuarioAtual];
        usuarioAtualTexto.textContent = cadastro ? `Olá, ${cadastro.nome}!` : "Conta conectada";
        btnAbrirCadastro.textContent = "Sair";
    } else {
        usuarioAtualTexto.textContent = "";
        btnAbrirCadastro.textContent = "Entrar / Cadastrar";
    }
    atualizarContador();
}

function abrirCadastro(modo = "cadastro") {
    modoCadastro = modo;
    atualizarModoCadastro();
    mensagemCadastro.textContent = "";
    modalCadastro.classList.remove("escondido");
    modalCadastro.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
    (modoCadastro === "cadastro" ? campoNome : campoEmail).focus();
}

function fecharModalCadastro() {
    modalCadastro.classList.add("escondido");
    modalCadastro.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
    formCadastro.reset();
    mensagemCadastro.textContent = "";
}

function atualizarModoCadastro() {
    const cadastro = modoCadastro === "cadastro";
    tituloCadastro.textContent = cadastro ? "Criar cadastro" : "Entrar no CineMood";
    textoCadastro.textContent = cadastro ? "Cadastre-se para guardar seus favoritos neste navegador." : "Entre com o e-mail e a senha do seu cadastro.";
    labelNome.classList.toggle("escondido", !cadastro);
    campoNome.classList.toggle("escondido", !cadastro);
    campoNome.required = cadastro;
    campoSenha.autocomplete = cadastro ? "new-password" : "current-password";
    btnEnviarCadastro.textContent = cadastro ? "Criar cadastro" : "Entrar";
    textoAlternar.textContent = cadastro ? "Já tem cadastro?" : "Ainda não tem cadastro?";
    btnAlternarCadastro.textContent = cadastro ? "Entrar" : "Criar cadastro";
}

function atualizarFavoritosVisiveis() {
    if (!areaResultados.classList.contains("escondido")) mostrarResultados();
    if (!areaFavoritos.classList.contains("escondido")) mostrarFavoritos();
    if (filmeAberto) atualizarBotaoDetalhes();
}

function atualizarContador() {
    contadorFavoritos.textContent = favoritos.length;
}

function esconderTelas() {
    areaInicio.classList.add("escondido");
    areaQuiz.classList.add("escondido");
    areaResultados.classList.add("escondido");
    areaFavoritos.classList.add("escondido");
}

function mostrarInicio() {
    esconderTelas();
    areaInicio.classList.remove("escondido");
    ultimaTela = "inicio";
}

function comecarQuiz() {
    perguntaAtual = 0;
    respostas = [];
    esconderTelas();
    areaQuiz.classList.remove("escondido");
    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];

    numeroPergunta.textContent =
        `PERGUNTA ${perguntaAtual + 1} DE ${perguntas.length}`;

    tituloPergunta.textContent = pergunta.titulo;
    descricaoPergunta.textContent = pergunta.descricao;

    barraProgresso.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

    opcoes.innerHTML = "";
    mensagemErro.textContent = "";

    pergunta.opcoes.forEach((opcao, indice) => {
        const label = document.createElement("label");
        label.className = "opcao";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "resposta";
        input.value = opcao;
        input.required = true;

        if (respostas[perguntaAtual] === opcao) {
            input.checked = true;
        }

        const texto = document.createElement("span");
        texto.textContent = opcao;

        label.append(input, texto);
        opcoes.appendChild(label);
    });

    document.getElementById("btnVoltar").style.visibility =
        perguntaAtual === 0 ? "hidden" : "visible";

    document.getElementById("btnContinuar").textContent =
        perguntaAtual === perguntas.length - 1
            ? "Ver recomendações"
            : "Próxima";
}

formQuiz.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const selecionada = formQuiz.querySelector(
        'input[name="resposta"]:checked'
    );

    if (!selecionada) {
        mensagemErro.textContent = "Escolha uma opção para continuar.";
        return;
    }

    respostas[perguntaAtual] = selecionada.value;

    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        mostrarResultados();
    }
});

document.getElementById("btnVoltar").addEventListener("click", function() {
    if (perguntaAtual > 0) {
        const selecionada = formQuiz.querySelector(
            'input[name="resposta"]:checked'
        );

        if (selecionada) {
            respostas[perguntaAtual] = selecionada.value;
        }

        perguntaAtual--;
        mostrarPergunta();
    }
});

function obterRecomendacoes() {
    const idadeEscolhida = Number(respostas[0].match(/\d+/)?.[0] || 0);
    const tipoEscolhido = respostas[1];
    const generoEscolhido = respostas[2];
    const companhiaEscolhida = respostas[3];
    const personagemEscolhido = respostas[4];

    const permitidos = catalogo.filter(filme => filme.idade <= idadeEscolhida);

    const pontuados = permitidos.map(filme => {
        let pontos = 0;

        if (tipoEscolhido === "Tanto faz" || filme.tipo === tipoEscolhido) {
            pontos += 3;
        }

        if (filme.generos.includes(generoEscolhido)) {
            pontos += 5;
        }

        if (
            companhiaEscolhida === "Tanto faz" ||
            filme.companhia.includes(companhiaEscolhida)
        ) {
            pontos += 2;
        }

        if (
            personagemEscolhido === "Tanto faz" ||
            filme.personagens.includes(personagemEscolhido)
        ) {
            pontos += 3;
        }

        return { ...filme, pontos };
    });

    pontuados.sort((a, b) => b.pontos - a.pontos);

    return pontuados.slice(0, 8);
}

function mostrarResultados() {
    esconderTelas();
    areaResultados.classList.remove("escondido");
    ultimaTela = "resultados";

    const recomendacoes = obterRecomendacoes();

    document.getElementById("textoResultados").textContent =
        "Escolhemos estes títulos com base nas suas respostas. Você pode salvar os favoritos usando o coração.";

    listaRecomendacoes.innerHTML = "";

    if (recomendacoes.length === 0) {
        listaRecomendacoes.innerHTML =
            '<p class="vazio">Não encontramos títulos para essa combinação. Tente refazer o quiz e escolher outra faixa etária.</p>';
        return;
    }

    recomendacoes.forEach(filme => {
        listaRecomendacoes.appendChild(criarCard(filme));
    });
}

function criarCard(filme) {
    const card = document.createElement("article");
    card.className = "card-filme";

    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = filme.poster || "";
    poster.alt = `Pôster de ${filme.titulo}`;
    poster.loading = "lazy";

    poster.onerror = function() {
        poster.onerror = null;
        poster.src =
            "https://placehold.co/400x600/202c40/f5c400?text=CineMood";
    };

    const info = document.createElement("div");
    info.className = "info-filme";

    const titulo = document.createElement("h3");
    titulo.textContent = filme.titulo;

    const detalhes = document.createElement("p");
    detalhes.className = "detalhes";
    detalhes.textContent =
        `${filme.tipo} • ${filme.generos.join(", ")}`;

    const idade = document.createElement("span");
    idade.className = "etiqueta";
    idade.textContent =
        filme.idade === 0 ? "Livre" : `${filme.idade} anos`;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "botao-favorito";

    function atualizarBotao() {
        const estaFavoritado = favoritos.includes(filme.id);

        botao.textContent = estaFavoritado
            ? "♥ Nos favoritos"
            : "♡ Adicionar aos favoritos";

        botao.classList.toggle("ativo", estaFavoritado);
        botao.setAttribute("aria-pressed", String(estaFavoritado));
    }

    botao.addEventListener("click", function() {
        if (!usuarioAtual) {
            alert("Faça seu cadastro ou entre para salvar seus favoritos.");
            abrirCadastro("cadastro");
            return;
        }

        if (favoritos.includes(filme.id)) {
            favoritos = favoritos.filter(id => id !== filme.id);
        } else {
            favoritos.push(filme.id);
        }

        salvarFavoritos();
        atualizarBotao();

        if (filmeAberto && filmeAberto.id === filme.id) atualizarBotaoDetalhes();
        if (!areaFavoritos.classList.contains("escondido")) mostrarFavoritos();
    });

    atualizarBotao();

    poster.tabIndex = 0;
    poster.setAttribute("role", "button");
    poster.setAttribute("aria-label", `Ver detalhes de ${filme.titulo}`);
    poster.title = "Clique para ver a descrição";
    poster.addEventListener("click", () => mostrarDetalhes(filme));
    poster.addEventListener("keydown", evento => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            mostrarDetalhes(filme);
        }
    });
    titulo.classList.add("titulo-clicavel");
    titulo.tabIndex = 0;
    titulo.setAttribute("role", "button");
    titulo.title = "Clique para ver a descrição";
    titulo.addEventListener("click", () => mostrarDetalhes(filme));
    titulo.addEventListener("keydown", evento => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            mostrarDetalhes(filme);
        }
    });

    info.append(titulo, detalhes, idade, botao);
    card.append(poster, info);

    return card;
}

function mostrarFavoritos() {
    if (!usuarioAtual) {
        alert("Faça seu cadastro ou entre para ver seus favoritos.");
        abrirCadastro("cadastro");
        return;
    }

    esconderTelas();
    areaFavoritos.classList.remove("escondido");
    ultimaTela = "favoritos";

    listaFavoritos.innerHTML = "";

    const filmesFavoritos = catalogo.filter(filme =>
        favoritos.includes(filme.id)
    );

    if (filmesFavoritos.length === 0) {
        listaFavoritos.innerHTML =
            '<p class="vazio">Você ainda não tem favoritos. Vá às recomendações e clique em “Adicionar aos favoritos” nos títulos que gostar. ♡</p>';
        return;
    }

    filmesFavoritos.forEach(filme => {
        listaFavoritos.appendChild(criarCard(filme));
    });
}

document.getElementById("btnComecar").addEventListener("click", comecarQuiz);

document.getElementById("navInicio").addEventListener("click", mostrarInicio);
document.getElementById("linkInicio").addEventListener("click", function(evento) {
    evento.preventDefault();
    mostrarInicio();
});

document.getElementById("navFavoritos").addEventListener("click", mostrarFavoritos);

document.getElementById("btnRefazer").addEventListener("click", comecarQuiz);

document.getElementById("btnVoltarResultados").addEventListener("click", mostrarResultados);

// Cadastro e login locais — sem Google, Firebase ou servidor.
btnAbrirCadastro.addEventListener("click", () => {
    if (usuarioAtual) {
        usuarioAtual = "";
        localStorage.removeItem(CHAVE_SESSAO);
        favoritos = [];
        atualizarUsuarioNaTela();
        mostrarInicio();
    } else {
        abrirCadastro("cadastro");
    }
});

btnAlternarCadastro.addEventListener("click", () => {
    modoCadastro = modoCadastro === "cadastro" ? "login" : "cadastro";
    atualizarModoCadastro();
    mensagemCadastro.textContent = "";
});

formCadastro.addEventListener("submit", evento => {
    evento.preventDefault();
    mensagemCadastro.textContent = "";
    const nome = campoNome.value.trim();
    const email = chaveUsuario(campoEmail.value);
    const senha = campoSenha.value;
    const cadastros = lerCadastros();

    if (modoCadastro === "cadastro") {
        if (!nome) { mensagemCadastro.textContent = "Digite seu nome."; return; }
        if (cadastros[email]) {
            mensagemCadastro.textContent = "Este e-mail já tem cadastro. Clique em Entrar.";
            return;
        }
        cadastros[email] = { nome, senha };
        localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastros));
    } else {
        if (!cadastros[email] || cadastros[email].senha !== senha) {
            mensagemCadastro.textContent = "E-mail ou senha incorretos.";
            return;
        }
    }

    usuarioAtual = email;
    localStorage.setItem(CHAVE_SESSAO, usuarioAtual);
    carregarFavoritos();
    atualizarUsuarioNaTela();
    fecharModalCadastro();
    atualizarFavoritosVisiveis();
});

fecharCadastro.addEventListener("click", fecharModalCadastro);
modalCadastro.addEventListener("click", evento => {
    if (evento.target === modalCadastro) fecharModalCadastro();
});

// Janela com a descrição do filme/série.
function mostrarDetalhes(filme) {
    filmeAberto = filme;
    detalhesPoster.src = filme.poster || "";
    detalhesPoster.alt = `Pôster de ${filme.titulo}`;
    detalhesPoster.onerror = function() {
        detalhesPoster.onerror = null;
        detalhesPoster.src = "https://placehold.co/400x600/202c40/f5c400?text=CineMood";
    };
    detalhesTitulo.textContent = filme.titulo;
    detalhesMeta.textContent = `${filme.tipo} • ${filme.ano} • ${filme.generos.join(", ")} • Classificação: ${filme.idade === 0 ? "Livre" : `${filme.idade} anos`}`;
    detalhesDescricao.textContent = filme.descricao || "Descrição ainda não cadastrada.";
    atualizarBotaoDetalhes();
    modalDetalhes.classList.remove("escondido");
    modalDetalhes.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
    fecharDetalhes.focus();
}

function atualizarBotaoDetalhes() {
    if (!filmeAberto) return;
    const estaFavoritado = favoritos.includes(filmeAberto.id);
    detalhesBotaoFavorito.textContent = estaFavoritado
        ? "♥ Nos favoritos"
        : "♡ Adicionar aos favoritos";
    detalhesBotaoFavorito.disabled = false;
    if (!usuarioAtual) detalhesBotaoFavorito.textContent = "Entre para salvar favoritos";
}

function fecharModalDetalhes() {
    modalDetalhes.classList.add("escondido");
    modalDetalhes.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
    filmeAberto = null;
}

fecharDetalhes.addEventListener("click", fecharModalDetalhes);
modalDetalhes.addEventListener("click", evento => {
    if (evento.target === modalDetalhes) fecharModalDetalhes();
});
document.addEventListener("keydown", evento => {
    if (evento.key === "Escape" && !modalDetalhes.classList.contains("escondido")) {
        fecharModalDetalhes();
    }
});

detalhesBotaoFavorito.addEventListener("click", async () => {
    if (!filmeAberto) return;
    if (!usuarioAtual) {
        alert("Faça seu cadastro ou entre para salvar seus favoritos.");
        abrirCadastro("cadastro");
        return;
    }

    if (favoritos.includes(filmeAberto.id)) {
        favoritos = favoritos.filter(id => id !== filmeAberto.id);
    } else {
        favoritos.push(filmeAberto.id);
    }

    await salvarFavoritos();
    atualizarBotaoDetalhes();
    if (!areaResultados.classList.contains("escondido")) mostrarResultados();
    if (!areaFavoritos.classList.contains("escondido")) mostrarFavoritos();
});

atualizarContador();

// Restaura a sessão e os favoritos ao abrir o site neste mesmo navegador.
if (usuarioAtual && !lerCadastros()[usuarioAtual]) {
    usuarioAtual = "";
    localStorage.removeItem(CHAVE_SESSAO);
}
carregarFavoritos();
atualizarUsuarioNaTela();
