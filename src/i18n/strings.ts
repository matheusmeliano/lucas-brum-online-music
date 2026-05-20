export type Locale = "pt" | "en";

export type Dictionary = {
  langPrompt: {
    title: string;
    subtitle: string;
    action: string;
    dismiss: string;
  };
  languageModal: {
    title: string;
    close: string;
    pt: string;
    en: string;
  };
  nav: {
    models: string;
    benefits: string;
    testimonials: string;
  };
  header: {
    cta: string;
  };
  hero: {
    headline: string;
    badge: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: Array<{ k: string; v: string }>;
    paymentLocal: string;
  };
  carousel: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  models: {
    title: string;
    subtitle: string;
    hint: string;
    individual: {
      title: string;
      tagline: string;
      bullets: string[];
      label: string;
    };
    hybrid: {
      title: string;
      tagline: string;
      bullets: string[];
      label: string;
      recommended: string;
    };
    micro: string[];
    choose: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    hint: string;
    items: Array<{ quote: string; name: string; role: string }>;
  };
  finalCta: {
    badge: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    micro: string;
  };
  thanks: {
    badge: string;
    title: string;
    body: string;
    nextTitle: string;
    nextBody: string;
    whatsapp: string;
    back: string;
  };
  footer: {
    brand: string;
    desc: string;
    start: string;
  };
};

export const strings: Record<Locale, Dictionary> = {
  pt: {
    langPrompt: {
      title: "O site está em português. Deseja alterar?",
      subtitle: "This website is in Portuguese. Change?",
      action: "Alterar idioma",
      dismiss: "Agora não",
    },
    languageModal: {
      title: "Escolha o idioma",
      close: "Fechar",
      pt: "Português",
      en: "English",
    },
    nav: {
      models: "Modelos",
      benefits: "Benefícios",
      testimonials: "Depoimentos",
    },
    header: {
      cta: "Começar agora",
    },
    hero: {
      headline: "De brasileiro para brasileiro nos EUA.",
      badge: "Aulas de violão",
      subheadline: "Escolha o modelo ideal para sua rotina e acelere seus resultados.",
      ctaPrimary: "Começar agora",
      ctaSecondary: "Ver resultados",
      highlights: [
        { k: "Aulas ao vivo", v: "com direção" },
        { k: "Método", v: "validado" },
      ],
      paymentLocal: "Pagamento em moeda local.",
    },
    carousel: {
      title: "Pontos essenciais",
      items: [
        {
          title: "Resultados em curto prazo",
          desc: "",
        },
        {
          title: "Suporte humanizado.",
          desc: "",
        },
        {
          title: "Aulas de onde você estiver.",
          desc: "",
        },
        {
          title: "Método com direção e evolução.",
          desc: "",
        },
        {
          title: "Feedback para corrigir e acelerar.",
          desc: "",
        },
      ],
    },
    models: {
      title: "Identifique o modelo ideal de aula para você.",
      subtitle: "Deixe que nossa Inteligência Artificial encontre, de forma rápida o modelo ideal para você.",
      hint: "Hover para sentir o premium",
      individual: {
        title: "Modelo Individual",
        tagline: "Ideal para quem quer acompanhamento próximo e evolução rápida",
        bullets: [
          "1 aula online ao vivo por semana",
          "Ensino personalizado + acompanhamento contínuo",
          "Plano ajustado com base no seu progresso",
        ],
        label: "Destaque",
      },
      hybrid: {
        title: "Modelo Híbrido",
        tagline: "Ideal para quem quer flexibilidade",
        bullets: ["Aula introdutória + 4 aulas gravadas", "1 aula ao vivo mensal", "Estude no seu ritmo, sem perder direção"],
        label: "Modelo",
        recommended: "Recomendado",
      },
      micro: ["Agenda realista", "Clareza do próximo passo", "Feedback que acelera"],
      choose: "Quero este",
    },
    benefits: {
      title: "Benefícios que aumentam seu nível de execução",
      subtitle: "Cada detalhe foi desenhado para gerar clareza, consistência e resultados visíveis.",
      items: [
        { title: "Evolução acelerada", desc: "Acompanhamento com direção e ajustes claros a cada etapa." },
        { title: "Flexibilidade total", desc: "Do ao vivo ao gravado, com estrutura e ritmo sustentável." },
        { title: "Método validado", desc: "Processo com estratégia e foco no que realmente muda o jogo." },
        { title: "Acompanhamento estratégico", desc: "Você não fica no escuro: tem orientação, feedback e prioridade." },
      ],
    },
    testimonials: {
      title: "Prova e autoridade",
      subtitle: "Espaço para depoimentos reais e resultados. A estrutura abaixo já entra com animação suave.",
      hint: "Fade + slide",
      items: [
        {
          quote: "Eu finalmente tive clareza do que estudar e como executar. O acompanhamento manteve minha consistência.",
          name: "Aluno",
          role: "Modelo Individual",
        },
        {
          quote: "O híbrido me deu flexibilidade sem perder direção. O mês rende mais quando o plano é certo.",
          name: "Aluna",
          role: "Modelo Híbrido",
        },
        {
          quote: "O método é direto e estratégico. Parece premium porque cada aula tem um porquê e um próximo passo.",
          name: "Responsável",
          role: "Acompanhamento",
        },
      ],
    },
    finalCta: {
      badge: "Decisão com alto valor percebido",
      title: "O próximo nível depende da sua decisão.",
      subtitle: "Escolha o modelo, entre na rotina e avance com direção.",
      primary: "Quero começar agora",
      secondary: "Rever modelos",
      micro: "Resposta rápida • Estrutura clara • Evolução contínua",
    },
    thanks: {
      badge: "Confirmação",
      title: "Obrigado! Recebemos seu contato.",
      body: "Você deu o primeiro passo. Em breve, eu retorno com as próximas orientações para te encaixar no melhor modelo.",
      nextTitle: "Próximos passos",
      nextBody: "Revisão do seu cenário, sugestão do modelo ideal e definição do melhor caminho de execução.",
      whatsapp: "Falar agora no WhatsApp",
      back: "Voltar para a landing",
    },
    footer: {
      brand: "Online Music USA",
      desc: "Aulas e acompanhamento com estética premium, espaçamento estratégico e interações suaves.",
      start: "Começar",
    },
  },
  en: {
    langPrompt: {
      title: "This website is in Portuguese. Change?",
      subtitle: "O site está em português. Deseja alterar?",
      action: "Change language",
      dismiss: "Not now",
    },
    languageModal: {
      title: "Choose language",
      close: "Close",
      pt: "Português",
      en: "English",
    },
    nav: {
      models: "Plans",
      benefits: "Benefits",
      testimonials: "Testimonials",
    },
    header: {
      cta: "Start now",
    },
    hero: {
      headline: "Learn with strategy. Evolve for real.",
      badge: "Guitar lessons",
      subheadline: "Choose the best option for your routine and accelerate your results.",
      ctaPrimary: "Start now",
      ctaSecondary: "See results",
      highlights: [
        { k: "Live lessons", v: "with guidance" },
        { k: "Method", v: "validated" },
      ],
      paymentLocal: "Pay in local currency.",
    },
    carousel: {
      title: "Key points",
      items: [
        {
          title: "Meaningful results in a short time.",
          desc: "",
        },
        {
          title: "Close guidance and human support.",
          desc: "",
        },
        {
          title: "Easy lessons, wherever you are.",
          desc: "",
        },
        {
          title: "A method with clear direction.",
          desc: "",
        },
        {
          title: "Feedback to fix and speed up.",
          desc: "",
        },
      ],
    },
    models: {
      title: "Two plans. Faster evolution.",
      subtitle: "Compare clearly and choose the format that fits your routine — without losing depth.",
      hint: "Hover to feel premium",
      individual: {
        title: "1:1",
        tagline: "Best for close guidance and fast growth",
        bullets: ["1 live online lesson per week", "Personalized teaching + ongoing support", "Plan adjusted to your progress"],
        label: "Featured",
      },
      hybrid: {
        title: "Hybrid",
        tagline: "Best for flexibility",
        bullets: ["Intro lesson + 4 recorded lessons", "1 live lesson per month", "Study at your pace, with direction"],
        label: "Plan",
        recommended: "Recommended",
      },
      micro: ["Realistic schedule", "Clarity on next step", "Feedback that accelerates"],
      choose: "Choose this",
    },
    benefits: {
      title: "Benefits that increase execution",
      subtitle: "Every detail is designed for clarity, consistency, and visible results.",
      items: [
        { title: "Faster evolution", desc: "Guided support with clear adjustments at every stage." },
        { title: "Full flexibility", desc: "From live to recorded, with sustainable structure." },
        { title: "Validated method", desc: "A strategic process focused on what truly moves the needle." },
        { title: "Strategic support", desc: "You never feel lost: guidance, feedback, and priority." },
      ],
    },
    testimonials: {
      title: "Proof & authority",
      subtitle: "Space for real testimonials and results, with smooth entry animations.",
      hint: "Fade + slide",
      items: [
        {
          quote: "I finally got clarity on what to study and how to execute. The support kept me consistent.",
          name: "Student",
          role: "1:1",
        },
        {
          quote: "Hybrid gave me flexibility without losing direction. The month performs better with the right plan.",
          name: "Student",
          role: "Hybrid",
        },
        {
          quote: "The method is direct and strategic. It feels premium because every lesson has a reason and a next step.",
          name: "Parent",
          role: "Support",
        },
      ],
    },
    finalCta: {
      badge: "High perceived value",
      title: "Your next level depends on your decision.",
      subtitle: "Choose a plan, get into a routine, and evolve with direction.",
      primary: "I want to start",
      secondary: "See plans",
      micro: "Fast reply • Clear structure • Continuous evolution",
    },
    thanks: {
      badge: "Confirmation",
      title: "Thanks! We received your message.",
      body: "You took the first step. Soon, we will reply with the next guidance to place you in the best plan.",
      nextTitle: "Next steps",
      nextBody: "Review your scenario, recommend the ideal plan, and define the best execution path.",
      whatsapp: "Chat on WhatsApp",
      back: "Back to landing",
    },
    footer: {
      brand: "Online Music USA",
      desc: "Lessons and coaching with a premium look, clean spacing, and smooth interactions.",
      start: "Start",
    },
  },
};
