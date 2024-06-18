const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Qual tecnologia tem potencial para revolucionar o esporte no futuro?",
        alternativas: [
            "Realidade aumentada",
            "Inteligência Artificial",
            "Nanotecnologia",
            "Veículos autônomos"
        ]
    },
    {
        enunciado: "Qual tendência tem impactado o esporte atualmente?",
        alternativas: [
            "Esportes eletrônicos(E-sports)",
            "Treinamento com realidade virtual",
            "Monitoramento genético de atletas",
            "Equipamentos biodegradáveis"
        ]
    },
    {
        enunciado: "Como a prática esportiva pode ser influenciada pela tecnologia no futuro?",
        alternativas: [
            "Personalização extrema de treinamentos",
            "Competições interplanetárias",
            "Uniformes com capacidade de autorregeneração",
            "Implantes bioeletrônicos para melhorar o desempenho"
        ]
    },
    {
        enunciado: "Qual fator terá maior impacto nas competições esportivas no futuro?",
        alternativas: [
            "Mudanças climáticas e adaptação dos esportes",
            "Integração de atletas humano com atletas ciborgues",
            "Competições espaciais",
            "Uso generalizado de tecnologia ded levitação magnética em arenas esportivas"
        ]
    },
    {
        enunciado: "Como a prática esportiva pode se adaptar às necessidades futuras da sociedade?",
        alternativas: [
            "Esportes aquáticos devido à elevação do nivel do mar",
            "Esportes de resistencia em ambientes extremos",
            "Esportes adaptados para habitats extraterrestres",
            "Esportes visuais para combater restrições de mobilidade"
        ]
    },
    {
        enunciado: "Qual será o principal desafio ético no esporte no futuro?",
        alternativas: [
            "Uso da tecnologia para alterar geneticamente atletas",
            "Competições entre humanos e inteligências artificiais",
            "Acesso desigual a tecnologia esportiva avançada",
            "Exploração comercial de eventos esportivos em outros planetas"
        ]
    },
]; 
