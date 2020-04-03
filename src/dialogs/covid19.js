/* eslint-disable react/jsx-one-expression-per-line */

export default {
  initialContext: () => ({
    sintomas: {},
  }),
  startNodeKey: () => 'inicio',
  restartNodeKey: () => 'reinicio',
  nodes: {
    inicio: {
      text: () => 'Olá!\nDo que você precisa?\nEscolha uma das opções listadas abaixo:',
      attachment: () => null,
      options: () => [
        {
          id: 'pre_diagnostico',
          label: 'Pré-Diagnóstico',
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
      text: () => 'Olá!\nPrecisa de mais alguma coisa?\nEscolha uma das opções listadas abaixo:',
      attachment: () => null,
      options: () => [
        {
          id: 'pre_diagnostico',
          label: 'Pré-Diagnóstico',
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
      text: () => 'Por favor, entre em contato no telefone ? em horário comercial.\nFora do horário comercial acesse o site ?.',
      attachment: () => null,
      options: () => [
      ],
    },

    sair: {
      text: () => 'Obrigado pelo seu acesso!',
      attachment: () => ({
        type: 'image',
        source: 'http://www.blog.saude.gov.br/images/WhatsApp_Image_2020-01-30_at_14.30.13.jpeg',
      }),
      options: () => [
      ],
    },

    diagnosticoSintomaGripe: {
      text: () => 'Este diagnóstico virtual NÃO SUBSTITUI A AVALIAÇÃO CLÍNICA PRESENCIAL!\n\n'
        + 'Sente algum SINTOMA DE GRIPE?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: () => 'diagnostico1',
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: () => 'diagnosticoSemSintomaGripe',
        },
      ],
    },

    diagnosticoSemSintomaGripe: {
      text: () => 'Você não tem suspeita de contaminação pelo NOVO CORONAVÍRUS.\n\n'
        + 'Gostaria de verificar mais alguma coisa?',
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

    diagnostico1: {
      text: () => '1. FALTA DE AR?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.faltaDeAr = true; return 'diagnostico2'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.faltaDeAr = false; return 'diagnostico2'; },
        },
      ],
    },

    diagnostico2: {
      text: () => '2. FEBRE?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.febre = true; return 'diagnostico3'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.febre = false; return 'diagnostico3'; },
        },
      ],
    },

    diagnostico3: {
      text: () => '3. TOSSE?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.tosse = true; return 'diagnostico4'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.tosse = false; return 'diagnostico4'; },
        },
      ],
    },

    diagnostico4: {
      text: () => '4. DIFICULDADE PARA URINAR?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.urina = true; return 'diagnostico5'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.urina = false; return 'diagnostico5'; },
        },
      ],
    },

    diagnostico5: {
      text: () => '5.  MANCHAS OU ERUPÇÕES NA PELE?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.manchas = true; return 'diagnostico6'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.manchas = false; return 'diagnostico6'; },
        },
      ],
    },

    diagnostico6: {
      text: () => '6. CANSAÇO, DOR NO CORPO OU MAL ESTAR?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.cansaco = true; return 'diagnostico7'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.cansaco = false; return 'diagnostico7'; },
        },
      ],
    },

    diagnostico7: {
      text: () => '7. DOR DE GARGANTA?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.dorGarganta = true; return 'diagnostico8'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.dorGarganta = false; return 'diagnostico8'; },
        },
      ],
    },

    diagnostico8: {
      text: () => '8. DOR DE CABEÇA?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.dorCabeca = true; return 'diagnostico9'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.dorCabeca = false; return 'diagnostico9'; },
        },
      ],
    },

    diagnostico9: {
      text: () => '9. CORIZA OU NARIZ ENTUPIDO?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.coriza = true; return 'diagnostico10'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.coriza = false; return 'diagnostico10'; },
        },
      ],
    },

    diagnostico10: {
      text: () => '10. ESPIRROS?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.espirros = true; return 'diagnostico11'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.espirros = false; return 'diagnostico11'; },
        },
      ],
    },

    diagnostico11: {
      text: () => '11. PERDA DO PALADAR?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.perdaPaladar = true; return 'diagnostico12'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.perdaPaladar = false; return 'diagnostico12'; },
        },
      ],
    },

    diagnostico12: {
      text: () => '12. PERDA DO OLFATO?',
      attachment: () => null,
      options: () => [
        {
          id: 'sim',
          label: 'SIM',
          callback: (ctx) => { ctx.sintomas.perdaOlfato = true; return 'diagnosticoFinal'; },
        },
        {
          id: 'nao',
          label: 'NÃO',
          callback: (ctx) => { ctx.sintomas.perdaOlfato = false; return 'diagnosticoFinal'; },
        },
      ],
    },

    diagnosticoFinal: {
      text: (ctx) => {
        const pontuacao = (ctx.sintomas.faltaDeAr ? 4 : 0)
        + (ctx.sintomas.febre ? 4 : 0)
        + (ctx.sintomas.tosse ? 3 : 0)
        + (ctx.sintomas.urina ? 3 : 0)
        + (ctx.sintomas.manchas ? 3 : 0)
        + (ctx.sintomas.cansaco ? 1 : 0)
        + (ctx.sintomas.dorGarganta ? 1 : 0)
        + (ctx.sintomas.dorCabeca ? 1 : 0)
        + (ctx.sintomas.coriza ? 1 : 0)
        + (ctx.sintomas.espirros ? 1 : 0)
        + (ctx.sintomas.perdaPaladar ? 1 : 0)
        + (ctx.sintomas.perdaOlfato ? 1 : 0);

        // eslint-disable-next-line no-nested-ternary
        const situacao = pontuacao <= 7
          ? 'Quadro Clínico Leve'
          : (pontuacao <= 11 ? 'Quadro Clínico Moderado' : 'Quadro Clínico Exacerbado');

        const text = 'Pontuação das suas respostas:\n\n'
        + `Falta de Ar: ${ctx.sintomas.faltaDeAr ? 4 : 0} \n`
        + `Febre: ${ctx.sintomas.febre ? 4 : 0} \n`
        + `Tosse: ${ctx.sintomas.tosse ? 3 : 0} \n`
        + `Alteração da Urina: ${ctx.sintomas.urina ? 3 : 0} \n`
        + `Manchas: ${ctx.sintomas.manchas ? 3 : 0} \n`
        + `Cansaço: ${ctx.sintomas.cansaco ? 1 : 0} \n`
        + `Dor de Garganta: ${ctx.sintomas.dorGarganta ? 1 : 0} \n`
        + `Dor de Cabeça: ${ctx.sintomas.dorCabeca ? 1 : 0} \n`
        + `Coriza: ${ctx.sintomas.coriza ? 1 : 0} \n`
        + `Espirros: ${ctx.sintomas.espirros ? 1 : 0} \n`
        + `Perda do Paladar: ${ctx.sintomas.perdaPaladar ? 1 : 0} \n`
        + `Perda do Olfato: ${ctx.sintomas.perdaOlfato ? 1 : 0} \n\n`
        + `Sua pontuação: ${pontuacao} pontos.\nSua Situação: ${situacao}.\n\n`
        + 'Detalhamento dos Pontos\n\n'
        + '0-7 Quadro Clínico Leve\n8-11 Quadro Clínico Moderado\n12-24 Quadro Clínico Exacerbado.';

        return text;
      },
      attachment: () => null,
      options: () => [
      ],
    },
  },
};
