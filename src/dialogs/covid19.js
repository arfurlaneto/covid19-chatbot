/* eslint-disable react/jsx-one-expression-per-line */

export default {
  startNode: () => 'inicio',
  nodes: {
    inicio: {
      text: (ctx) => `Olá ${ctx.name}. Antes de continuar, clique em uma das opções listadas abaixo:`,
      attachment: () => null,
      options: () => [
        {
          id: 'pre_diagnostico',
          label: 'Pré Diagnóstico',
          callback: () => 'diagnosticoSintomaGripe',
        },
        {
          id: 'atendimento',
          label: 'Atendimento',
          callback: () => 'atendimento',
        },
      ],
    },

    reinicio: {
      text: (ctx) => `Clique em uma das opções listadas abaixo ${ctx.name}:`,
      attachment: () => null,
      options: () => [
        {
          id: 'pre_diagnostico',
          label: 'Pré Diagnóstico',
          callback: () => 'diagnosticoSintomaGripe',
        },
        {
          id: 'atendimento',
          label: 'Atendimento',
          callback: () => 'atendimento',
        },
        {
          id: 'sair',
          label: 'Sair',
          callback: () => 'sair',
        },
      ],
    },

    atendimento: {
      text: () => 'Por favor, entre em contato no telefone ? das ? da manhã até as ? da noite.',
      attachment: () => null,
      options: () => [
      ],
    },

    sair: {
      text: (ctx) => `Obrigado pelo seu acesso ${ctx.name}.\n\n# Caso precise, nos ligue entre ? e ?.`,
      attachment: () => ({
        type: 'image',
        source: 'https://dhhr.wv.gov/Coronavirus%20Disease-COVID-19/PublishingImages/website%20and%20hotline.JPG',
      }),
      options: () => [
      ],
    },

    diagnosticoSintomaGripe: {
      text: () => '---\nIMPORTANTE: Este diagnóstico virtual NÃO SUBSTITUI A AVALIAÇÃO CLÍNICA PRESENCIAL por equipe de saúde!\n---\n\n'
        + 'Você está sentindo algum SINTOMA DE GRIPE?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: () => {},
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: () => 'diagnosticoSemSintomaGripe',
        },
      ],
    },

    diagnosticoSemSintomaGripe: {
      text: (ctx) => `${ctx.name}, você não tem suspeita de contaminação pelo NOVO CORONAVIRUS, então não se preocupe\n\n\n`
        + '# Gostaria de verificar mais alguma coisa?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: () => 'reinicio',
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: () => 'sair',
        },
      ],
    },

    diagnosticoSintomasFaltaAr: {
      text: () => '1. Sente FALTA DE AR, DIFICULDADE PARA RESPIRAR?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: () => '',
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: () => '',
        },
      ],
    },

    naoImplementado: {
      text: () => 'Humm... parece que o programador não terminou esta parte aqui :/',
      attachment: () => null,
      options: () => [
      ],
    },
  },
};
