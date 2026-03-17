import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'de' | 'pt' | 'es';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLang = signal<Language>('en');
  readonly currentLang = this._currentLang.asReadonly();

  private translations: Translations = {
    // Nav Bar
    'nav.slide': { en: 'Slide', de: 'Folie', pt: 'Slide', es: 'Diapositiva' },
    'nav.of': { en: 'of', de: 'von', pt: 'de', es: 'de' },
    'nav.prev': { en: 'Previous Slide', de: 'Vorherige Folie', pt: 'Slide Anterior', es: 'Diapositiva Anterior' },
    'nav.next': { en: 'Next Slide', de: 'Nächste Folie', pt: 'Próximo Slide', es: 'Próxima Diapositiva' },

    // Slide 1: Cover
    'slide1.title': { en: 'Syntra Advisory', de: 'Syntra Advisory', pt: 'Syntra Advisory', es: 'Syntra Advisory' },
    'slide1.subtitle': { 
      en: 'AI Representation Strategy for the New Search Era', 
      de: 'KI-Repräsentationsstrategie für die neue Suchära', 
      pt: 'Estratégia de Representação em IA para a Nova Era de Busca', 
      es: 'Estrategia de Representación en IA para la Nueva Era de Búsqueda' 
    },
    'slide1.opportunity': { 
      en: 'GLOBAL SALES NETWORK FOR MAXIMUM MARKET LAUNCH', 
      de: 'Globale Vertriebsgemeinschaft für maximale Marktdurchdringung.', 
      pt: 'Oportunidade para Parceiros Estratégicos por País', 
      es: 'Oportunidad para Socios Estratégicos por País' 
    },

    // Slide 2: The Shift (Hook)
    'slide2.hook': { 
      en: 'Ask AI about your company… what does it say?', 
      de: 'Frag die KI nach deinem Unternehmen… was sagt sie?', 
      pt: 'Pergunte à IA sobre sua empresa… o que ela diz?', 
      es: 'Pregunta a la IA sobre tu empresa… ¿qué dice?' 
    },

    // Slide 3: The Shift (Split Screen)
    'slide3.search': { en: 'Search', de: 'Suche', pt: 'Busca', es: 'Búsqueda' },
    'slide3.ai_answers': { en: 'AI Answers', de: 'KI-Antworten', pt: 'Respostas de IA', es: 'Respuestas de IA' },
    'slide3.ai_question': { 
      en: 'What is Syntra Advisory?', 
      es: '¿Qué es Syntra Advisory?',
      de: 'Was ist Syntra Advisory?',
      pt: 'O que é a Syntra Advisory?'
    },
    'slide3.search_result_1_title': { en: '10 Ways AI is Changing Search - TechBlog', es: '10 formas en que la IA está cambiando la búsqueda - TechBlog', de: '10 Wege, wie KI die Suche verändert - TechBlog', pt: '10 Maneiras que a IA está Mudando a Busca - TechBlog' },
    'slide3.search_result_1_desc': { en: 'Discover how artificial intelligence is impacting SEO and search engines in 2024...', es: 'Descubra cómo la inteligencia artificial está impactando el SEO y los motores de búsqueda en 2024...', de: 'Entdecken Sie, wie künstliche Intelligenz SEO und Suchmaschinen im Jahr 2024 beeinflusst...', pt: 'Descubra como a inteligência artificial está impactando o SEO e os mecanismos de busca em 2024...' },
    'slide3.search_result_2_title': { en: 'AI Search vs Traditional Search: What You Need to Know', es: 'Búsqueda por IA vs. Búsqueda tradicional: lo que necesita saber', de: 'KI-Suche vs. traditionelle Suche: Was Sie wissen müssen', pt: 'Busca por IA vs. Busca Tradicional: O que Você Precisa Saber' },
    'slide3.search_result_2_desc': { en: 'The landscape of digital marketing is shifting towards generative AI...', es: 'El panorama del marketing digital se está desplazando hacia la IA generativa...', de: 'Die Landschaft des digitalen Marketings verschiebt sich hin zu generativer KI...', pt: 'O cenário do marketing digital está mudando para a IA generativa...' },
    'slide3.ai_response_title': { en: 'Syntra Advisory Insights', es: 'Syntra Advisory Insights', de: 'Syntra Advisory Insights', pt: 'Syntra Advisory Insights' },
    'slide3.ai_response_body': { 
      en: 'Syntra Advisory is a specialized firm focused on AI Representation Strategy. We help brands ensure they are accurately interpreted and highly visible within the Large Language Models (LLMs) that power the new era of search.',
      es: 'Syntra Advisory es una firma especializada enfocada en la Estrategia de Representación en IA. Ayudamos a las marcas a asegurar que sean interpretadas con precisión y sean altamente visibles dentro de los Modelos de Lenguaje Extensos (LLMs) que impulsan la nueva era de búsqueda.',
      de: 'Syntra Advisory ist ein spezialisiertes Unternehmen, das sich auf KI-Repräsentationsstrategien konzentriert. Wir helfen Marken sicherzustellen, dass sie in den großen Sprachmodellen (LLMs), die die neue Ära der Suche prägen, genau interpretiert werden und gut sichtbar sind.',
      pt: 'A Syntra Advisory é uma empresa especializada focada em Estratégia de Representação em IA. Ajudamos as marcas a garantir que sejam interpretadas com precisão e altamente visíveis nos Grandes Modelos de Linguagem (LLMs) que impulsionam a nova era de busca.'
    },
    'slide3.ai_source_1': { en: 'Market Report 2024', es: 'Informe de Mercado 2024', de: 'Marktbericht 2024', pt: 'Relatório de Mercado 2024' },
    'slide3.ai_source_2': { en: 'AI Strategy Guide', es: 'Guía de Estrategia de IA', de: 'KI-Strategie-Leitfaden', pt: 'Guia de Estratégia de IA' },

    // Slide 4: The Opportunity
    'slide4.title': { 
      en: 'A new category is emerging:', 
      de: 'Eine neue Kategorie entsteht:', 
      pt: 'Uma nova categoria está surgindo:', 
      es: 'Está emergiendo una nueva categoría:' 
    },
    'slide4.subtitle': { 
      en: 'AI Visibility & Representation', 
      de: 'KI-Sichtbarkeit & Repräsentation', 
      pt: 'Visibilidade e Representação em IA', 
      es: 'Visibilidad y Representación en IA' 
    },
    'slide4.keyword1': { en: 'Visibility', de: 'Sichtbarkeit', pt: 'Visibilidade', es: 'Visibilidad' },
    'slide4.keyword2': { en: 'Representation', de: 'Repräsentation', pt: 'Representação', es: 'Representación' },
    'slide4.keyword3': { en: 'Control', de: 'Kontrolle', pt: 'Controle', es: 'Control' },
    'slide4.keyword4': { en: 'Growth', de: 'Wachstum', pt: 'Crescimento', es: 'Crecimiento' },

    // Slide 5: What is Syntra
    'slide5.title': { 
      en: 'Syntra Advisory is an AI Representation Strategy firm.', 
      de: 'Syntra Advisory ist eine Beratungsfirma für KI-Repräsentationsstrategien.', 
      pt: 'Syntra Advisory é uma consultoria de estratégia de representação em IA.', 
      es: 'Syntra Advisory es una firma de estrategia de representación en IA.' 
    },
    'slide5.label': { 
      en: 'OUR IDENTITY', 
      de: 'UNSERE IDENTITÄT', 
      pt: 'NOSSA IDENTIDADE', 
      es: 'NUESTRA IDENTIDAD' 
    },

    // Slide 6: Services
    'slide6.title': { 
      en: 'Our Core Services', 
      de: 'Unsere Kernleistungen', 
      pt: 'Nossos Serviços Principais', 
      es: 'Nuestros Servicios Principales' 
    },
    'slide6.service1_title': { 
      en: 'AI Positioning Analysis', 
      de: 'KI-Positionierungsanalyse', 
      pt: 'Análise de Posicionamento em IA', 
      es: 'Análisis de Posicionamiento en IA' 
    },
    'slide6.service1_desc': { 
      en: 'Deep audit of how AI models perceive and describe your brand.', 
      de: 'Tiefgehende Prüfung, wie KI-Modelle Ihre Marke wahrnehmen und beschreiben.', 
      pt: 'Auditoria profunda de como os modelos de IA percebem e descrevem sua marca.', 
      es: 'Auditoría profunda de cómo los modelos de IA perciben y describen su marca.' 
    },
    'slide6.service2_title': { 
      en: 'AI Representation Roadmap', 
      de: 'KI-Repräsentations-Roadmap', 
      pt: 'Roteiro de Representação em IA', 
      es: 'Hoja de Ruta de Representación en IA' 
    },
    'slide6.service2_desc': { 
      en: 'Strategic planning to align AI output with your corporate identity.', 
      de: 'Strategische Planung zur Abstimmung des KI-Outputs mit Ihrer Unternehmensidentität.', 
      pt: 'Planejamento estratégico para alinhar a saída da IA com sua identidade corporativa.', 
      es: 'Planificación estratégica para alinear el resultado de la IA con su identidad corporativa.' 
    },
    'slide6.service3_title': { 
      en: 'Content Engineering for LLMs', 
      de: 'Content Engineering für LLMs', 
      pt: 'Engenharia de Conteúdo para LLMs', 
      es: 'Ingeniería de Contenido para LLMs' 
    },
    'slide6.service3_desc': { 
      en: 'Optimizing data structures to ensure accurate AI training and retrieval.', 
      de: 'Optimierung von Datenstrukturen zur Gewährleistung präziser KI-Schulung und -Abfrage.', 
      pt: 'Otimização de estruturas de dados para garantir treinamento e recuperação precisos de IA.', 
      es: 'Optimización de estructuras de datos para garantizar un entrenamiento y recuperación precisos de la IA.' 
    },
    'slide6.service4_title': { 
      en: 'Digital PR for AI Visibility', 
      de: 'Digitale PR für KI-Sichtbarkeit', 
      pt: 'PR Digital para Visibilidade em IA', 
      es: 'PR Digital para Visibilidad en IA' 
    },
    'slide6.service4_desc': { 
      en: 'High-authority placements designed to influence AI knowledge graphs.', 
      de: 'Platzierungen mit hoher Autorität zur Beeinflussung von KI-Wissensgraphen.', 
      pt: 'Colocações de alta autoridade projetadas para influenciar os gráficos de conhecimento da IA.', 
      es: 'Colocaciones de alta autoridad diseñadas para influir en los gráficos de conocimiento de la IA.' 
    },

    // Slide 7: How It Works
    'slide7.title': { 
      en: 'How It Works', 
      de: 'Wie es funktioniert', 
      pt: 'Como Funciona', 
      es: 'Cómo Funciona' 
    },
    'slide7.step1_title': { en: 'Audit', de: 'Audit', pt: 'Auditoria', es: 'Auditoría' },
    'slide7.step1_desc': { 
      en: 'Comprehensive mapping of current AI mentions.', 
      de: 'Umfassende Kartierung aktueller KI-Erwähnungen.', 
      pt: 'Mapeamento abrangente das menções atuais de IA.', 
      es: 'Mapeo integral de las menciones actuales de IA.' 
    },
    'slide7.step2_title': { en: 'Gap Analysis', de: 'Gap-Analyse', pt: 'Análise de Lacunas', es: 'Análisis de Brechas' },
    'slide7.step2_desc': { 
      en: 'Identifying discrepancies between brand and AI output.', 
      de: 'Identifizierung von Diskrepanzen zwischen Marke und KI-Output.', 
      pt: 'Identificação de discrepâncias entre a marca e a saída da IA.', 
      es: 'Identificación de discrepancias entre la marca y el resultado de la IA.' 
    },
    'slide7.step3_title': { en: 'Strategy', de: 'Strategie', pt: 'Estratégia', es: 'Estratégia' },
    'slide7.step3_desc': { 
      en: 'Defining the optimal AI representation roadmap.', 
      de: 'Definition der optimalen KI-Repräsentations-Roadmap.', 
      pt: 'Definição do roteiro ideal de representação em IA.', 
      es: 'Definición de la hoja de ruta de representación de IA óptima.' 
    },
    'slide7.step4_title': { en: 'Execution', de: 'Ausführung', pt: 'Execução', es: 'Ejecución' },
    'slide7.step4_desc': { 
      en: 'Implementing technical and content optimizations.', 
      de: 'Implementierung technischer und inhaltlicher Optimierungen.', 
      pt: 'Implementação de otimizações técnicas e de conteúdo.', 
      es: 'Implementación de optimizaciones técnicas y de contenido.' 
    },
    'slide7.step5_title': { en: 'Monitoring', de: 'Überwachung', pt: 'Monitoramento', es: 'Monitoreo' },
    'slide7.step5_desc': { 
      en: 'Continuous tracking of AI model perception.', 
      de: 'Kontinuierliche Verfolgung der KI-Modellwahrnehmung.', 
      pt: 'Acompanhamento contínuo da percepção do modelo de IA.', 
      es: 'Seguimiento continuo de la percepción del modelo de IA.' 
    },

    // Slide 8: Why Now
    'slide8.title': { 
      en: 'Why Now?', 
      de: 'Warum jetzt?', 
      pt: 'Por que agora?', 
      es: '¿Por qué ahora?' 
    },
    'slide8.main_text': { 
      en: 'This is SEO in 2005… but faster.', 
      de: 'Das ist SEO wie im Jahr 2005… nur schneller.', 
      pt: 'Isso é SEO em 2005… mas mais rápido.', 
      es: 'Esto es SEO en 2005… pero más rápido.' 
    },
    'slide8.past_label': { en: '2005: SEO Revolution', de: '2005: SEO-Revolution', pt: '2005: Revolução do SEO', es: '2005: Revolución del SEO' },
    'slide8.future_label': { en: '2026: AI Revolution', de: '2026: KI-Revolution', pt: '2026: Revolução da IA', es: '2026: Revolución de la IA' },
    'slide8.past_desc': { 
      en: 'Websites were competing for blue links.', 
      de: 'Websites konkurrierten um blaue Links.', 
      pt: 'Sites competiam por links azuis.', 
      es: 'Los sitios web competían por enlaces azules.' 
    },
    'slide8.future_desc': { 
      en: 'Brands are competing for AI mentions.', 
      de: 'Marken konkurrieren um KI-Erwähnungen.', 
      pt: 'Marcas competem por menções de IA.', 
      es: 'Las marcas compiten por menciones de IA.' 
    },
    'slide8.urgency_label': { en: 'URGENCY', de: 'DRINGLICHKEIT', pt: 'URGÊNCIA', es: 'URGENCIA' },

    // Slide 9: Market
    'slide9.title': { 
      en: 'Target Industries', 
      de: 'Zielbranchen', 
      pt: 'Indústrias-Alvo', 
      es: 'Industrias Objetivo' 
    },
    'slide9.subtitle': { 
      en: 'AI representation is critical across all high-growth sectors.', 
      de: 'KI-Repräsentation ist in allen wachstumsstarken Sektoren entscheidend.', 
      pt: 'A representação em IA é crítica em todos os setores de alto crescimento.', 
      es: 'La representación de IA es crítica en todos los sectores de alto crecimiento.' 
    },
    'slide9.ind1': { en: 'eCommerce', de: 'E-Commerce', pt: 'eCommerce', es: 'eCommerce' },
    'slide9.ind2': { en: 'SaaS', de: 'SaaS', pt: 'SaaS', es: 'SaaS' },
    'slide9.ind3': { en: 'Healthcare', de: 'Gesundheitswesen', pt: 'Saúde', es: 'Salud' },
    'slide9.ind4': { en: 'Finance', de: 'Finanzen', pt: 'Finanças', es: 'Finanzas' },
    'slide9.ind5': { en: 'Personal Brands', de: 'Personal Brands', pt: 'Marcas Pessoais', es: 'Marcas Personales' },

    // Slide 10: Partner Role
    'slide10.title': { 
      en: 'Strategic Partnership Structure', 
      de: 'Strategische Partnerschaftsstruktur', 
      pt: 'Estrutura de Parceria Estratégica', 
      es: 'Estructura de Asociación Estratégica' 
    },
    'slide10.partner_label': { en: 'Partner Role', de: 'Partner-Rolle', pt: 'Papel do Parceiro', es: 'Rol del Socio' },
    'slide10.syntra_label': { en: 'Syntra Role', de: 'Syntra-Rolle', pt: 'Papel da Syntra', es: 'Rol de Syntra' },
    'slide10.p_task1': { en: 'Generate leads', de: 'Leads generieren', pt: 'Gerar leads', es: 'Generar leads' },
    'slide10.p_task2': { en: 'Sell services', de: 'Dienstleistungen verkaufen', pt: 'Vender serviços', es: 'Vender servicios' },
    'slide10.p_task3': { en: 'Localize strategy', de: 'Strategie lokalisieren', pt: 'Localizar estratégia', es: 'Localizar estrategia' },
    'slide10.s_task1': { en: 'Technical delivery', de: 'Technische Umsetzung', pt: 'Entrega técnica', es: 'Entrega técnica' },
    'slide10.s_task2': { en: 'Global R&D', de: 'Globale F&E', pt: 'P&D Global', es: 'I+D Global' },
    'slide10.s_task3': { en: 'Brand authority', de: 'Markenautorität', pt: 'Autoridade da marca', es: 'Autoridad de marca' },

    // Slide 11: What They Get
    'slide11.title': { 
      en: 'What You Receive', 
      de: 'Was Sie erhalten', 
      pt: 'O Que Você Recebe', 
      es: 'Lo Que Recibes' 
    },
    'slide11.subtitle': { 
      en: 'A complete ecosystem designed for your success.', 
      de: 'Ein komplettes Ökosystem, das für Ihren Erfolg konzipiert wurde.', 
      pt: 'Um ecossistema completo projetado para o seu sucesso.', 
      es: 'Un ecosistema completo diseñado para tu éxito.' 
    },
    'slide11.benefit1_title': { en: 'Access to Syntra Services', de: 'Zugang zu Syntra-Services', pt: 'Acesso aos Serviços Syntra', es: 'Acceso a Servicios Syntra' },
    'slide11.benefit1_desc': { en: 'Full suite of AI representation tools.', de: 'Komplette Suite an KI-Repräsentationstools.', pt: 'Conjunto completo de ferramentas de representação em IA.', es: 'Conjunto completo de herramientas de representación de IA.' },
    'slide11.benefit2_title': { en: 'Brand Support', de: 'Marken-Support', pt: 'Suporte de Marca', es: 'Soporte de Marca' },
    'slide11.benefit2_desc': { en: 'Global authority and marketing assets.', de: 'Globale Autorität und Marketing-Assets.', pt: 'Autoridade global e ativos de marketing.', es: 'Autoridad global y activos de marketing.' },
    'slide11.benefit3_title': { en: 'Methodology', de: 'Methodik', pt: 'Metodologia', es: 'Metodología' },
    'slide11.benefit3_desc': { en: 'Proven frameworks for AI strategy.', de: 'Bewährte Frameworks für KI-Strategie.', pt: 'Frameworks comprovados para estratégia de IA.', es: 'Frameworks probados para estrategia de IA.' },
    'slide11.benefit4_title': { en: 'Sales Support', de: 'Vertriebsunterstützung', pt: 'Suporte de Vendas', es: 'Soporte de Ventas' },
    'slide11.benefit4_desc': { en: 'Training and direct closing assistance.', de: 'Schulung und direkte Unterstützung beim Abschluss.', pt: 'Treinamento e assistência direta no fechamento.', es: 'Capacitación y asistencia directa en el cierre.' },

    // Slide 12: Business Model
    'slide12.title': { 
      en: 'Business Model', 
      de: 'Geschäftsmodell', 
      pt: 'Modelo de Negócio', 
      es: 'Modelo de Negocio' 
    },
    'slide12.subtitle': { 
      en: 'A sustainable framework designed for mutual growth.', 
      de: 'Ein nachhaltiger Rahmen für gemeinsames Wachstum.', 
      pt: 'Uma estrutura sustentável projetada para o crescimento mútuo.', 
      es: 'Un marco sostenible diseñado para el crecimiento mutuo.' 
    },
    'slide12.item1_title': { en: 'Revenue Sharing', de: 'Umsatzbeteiligung', pt: 'Partilha de Receitas', es: 'Participación en los Ingresos' },
    'slide12.item1_desc': { en: 'Transparent and fair distribution of value.', de: 'Transparente und faire Wertverteilung.', pt: 'Distribuição de valor transparente e justa.', es: 'Distribución de valor transparente y justa.' },
    'slide12.item2_title': { en: 'Territory Model', de: 'Gebietsmodell', pt: 'Modelo de Território', es: 'Modelo de Territorio' },
    'slide12.item2_desc': { en: 'Exclusive regional focus and protection.', de: 'Exklusiver regionaler Fokus und Schutz.', pt: 'Foco e proteção regional exclusiva.', es: 'Enfoque y protección regional exclusiva.' },
    'slide12.item3_title': { en: 'Growth Incentives', de: 'Wachstumsanreize', pt: 'Incentivos ao Crescimento', es: 'Incentivos al Crecimiento' },
    'slide12.item3_desc': { en: 'Rewards for scaling and performance.', de: 'Belohnungen für Skalierung und Leistung.', pt: 'Recompensas por escalonamento e desempenho.', es: 'Recompensas por escalamiento y desempeño.' },

    // Slide 13: Growth Path
    'slide13.title': { 
      en: 'Growth Path', 
      de: 'Wachstumspfad', 
      pt: 'Caminho de Crescimento', 
      es: 'Ruta de Crecimiento' 
    },
    'slide13.subtitle': { 
      en: 'Scale your impact and rewards as you progress through our partnership levels.', 
      de: 'Skalieren Sie Ihren Einfluss und Ihre Belohnungen, während Sie unsere Partnerschaftsstufen durchlaufen.', 
      pt: 'Aumente o seu impacto e recompensas à medida que avança nos nossos níveis de parceria.', 
      es: 'Escala tu impacto y recompensas a medida que avanzas en nuestros niveles de asociación.' 
    },
    'slide13.level1_title': { en: 'Partner', de: 'Partner', pt: 'Parceiro', es: 'Socio' },
    'slide13.level1_desc': { en: 'Initial onboarding and market entry.', de: 'Initiales Onboarding und Markteintritt.', pt: 'Integração inicial e entrada no mercado.', es: 'Onboarding inicial y entrada al mercado.' },
    'slide13.level2_title': { en: 'Top Performer', de: 'Top-Performer', pt: 'Top Performer', es: 'Top Performer' },
    'slide13.level2_desc': { en: 'Consistent results and expanded service portfolio.', de: 'Konsistente Ergebnisse und erweitertes Serviceportfolio.', pt: 'Resultados consistentes e portfólio de serviços expandido.', es: 'Resultados consistentes y portafolio de servicios ampliado.' },
    'slide13.level3_title': { en: 'Regional Leader', de: 'Regionaler Leiter', pt: 'Líder Regional', es: 'Líder Regional' },
    'slide13.level3_desc': { en: 'Strategic territory management and leadership.', de: 'Strategisches Gebietsmanagement und Führung.', pt: 'Gestão estratégica de território e liderança.', es: 'Gestión estratégica de territorio y liderazgo.' },

    // Slide 14: Why Syntra
    'slide14.title': { 
      en: 'Why Syntra?', 
      de: 'Warum Syntra?', 
      pt: 'Por que Syntra?', 
      es: '¿Por qué Syntra?' 
    },
    'slide14.point1_title': { en: 'First Mover Advantage', de: 'First-Mover-Vorteil', pt: 'Vantagem do Pioneiro', es: 'Ventaja del Pionero' },
    'slide14.point1_desc': { en: 'Capture the market before the competition arrives.', de: 'Erobern Sie den Markt, bevor die Konkurrenz eintrifft.', pt: 'Capture o mercado antes que a concorrência chegue.', es: 'Captura el mercado antes de que llegue la competencia.' },
    'slide14.point2_title': { en: 'New Category', de: 'Neue Kategorie', pt: 'Nova Categoria', es: 'Nueva Categoría' },
    'slide14.point2_desc': { en: 'Defining the future of AI human representation.', de: 'Die Zukunft der menschlichen KI-Repräsentation definieren.', pt: 'Definindo o futuro da representação humana por IA.', es: 'Definiendo el futuro de la representación humana por IA.' },
    'slide14.point3_title': { en: 'High Value Services', de: 'Hochwertige Dienstleistungen', pt: 'Serviços de Alto Valor', es: 'Servicios de Alto Valor' },
    'slide14.point3_desc': { en: 'Premium solutions for high-impact results.', de: 'Premium-Lösungen für wirkungsvolle Ergebnisse.', pt: 'Soluções premium para resultados de alto impacto.', es: 'Soluciones premium para resultados de alto impacto.' },

    // Slide 15: Next Steps
    'slide15.title': { 
      en: 'Next Steps', 
      de: 'Nächste Schritte', 
      pt: 'Próximos Passos', 
      es: 'Próximos Pasos' 
    },
    'slide15.subtitle': { 
      en: 'Ready to define the future of AI representation? Let’s start the conversation.', 
      de: 'Bereit, die Zukunft der KI-Repräsentation zu definieren? Lassen Sie uns das Gespräch beginnen.', 
      pt: 'Pronto para definir o futuro da representação de IA? Vamos começar a conversa.', 
      es: '¿Listo para definir el futuro de la representación de IA? Comencemos la conversación.' 
    },
    'slide15.step1_title': { en: 'Intro Call', de: 'Einführungsgespräch', pt: 'Chamada de Introdução', es: 'Llamada de Introducción' },
    'slide15.step1_desc': { en: 'A brief discovery session to align on vision.', de: 'Eine kurze Discovery-Sitzung zur Abstimmung der Vision.', pt: 'Uma breve sessão de descoberta para alinhar a visão.', es: 'Una breve sesión de descubrimiento para alinear la visión.' },
    'slide15.step2_title': { en: 'Territory Discussion', de: 'Gebietsbesprechung', pt: 'Discussão de Território', es: 'Discusión de Territorio' },
    'slide15.step2_desc': { en: 'Defining exclusive regional opportunities.', de: 'Definition exklusiver regionaler Möglichkeiten.', pt: 'Definição de oportunidades regionais exclusivas.', es: 'Definiendo oportunidades regionales exclusivas.' },
    'slide15.step3_title': { en: 'Pilot Phase', de: 'Pilotphase', pt: 'Fase Piloto', es: 'Fase Piloto' },
    'slide15.step3_desc': { en: 'Initial deployment and market validation.', de: 'Erste Bereitstellung und Marktvalidierung.', pt: 'Implantação inicial e validação de mercado.', es: 'Despliegue inicial y validación de mercado.' },
    'slide15.cta': { en: 'Schedule Discovery', de: 'Discovery vereinbaren', pt: 'Agendar Descoberta', es: 'Programar Descubrimiento' },

    // Slide 16: Closing
    'slide16.text': { 
      en: 'The companies that win AI search will define the next decade.', 
      de: 'Die Unternehmen, die die KI-Suche gewinnen, werden das nächste Jahrzehnt definieren.', 
      pt: 'As empresas que vencerem a pesquisa de IA definirão a próxima década.', 
      es: 'Las empresas que ganen la búsqueda de IA definirán la próxima década.' 
    },
    'purpose.intro': {
      en: 'At their core, events exist primarily to facilitate human connection. Beyond the sessions and the swag, people are there for each other.',
      de: 'Im Kern existieren Veranstaltungen primär, um menschliche Verbindungen zu erleichtern. Jenseits der Sitzungen und Werbegeschenke sind die Menschen füreinander da.',
      pt: 'Em sua essência, os eventos existem principalmente para facilitar a conexão humana. Além das sessões e dos brindes, as pessoas estão lá umas pelas outras.',
      es: 'En su esencia, los eventos existen principalmente para facilitar la conexión humana. Más allá de las sesiones y los obsequios, la gente está allí el uno para el otro.'
    },
    'purpose.goals_label': { en: 'Primary Goals', de: 'Primäre Ziele', pt: 'Objetivos Principais', es: 'Objetivos Principales' },
    'purpose.goal1': { en: 'Meet potential clients', de: 'Potenzielle Kunden treffen', pt: 'Encontrar clientes potenciais', es: 'Conocer clientes potenciales' },
    'purpose.goal2': { en: 'Discover partnerships', de: 'Partnerschaften entdecken', pt: 'Descobrir parcerias', es: 'Descubrir asociaciones' },
    'purpose.goal3': { en: 'Recruit talent', de: 'Talente rekrutieren', pt: 'Recrutar talentos', es: 'Reclutar talento' },
    'purpose.goal4': { en: 'Find investors', de: 'Investoren finden', pt: 'Encontrar investidores', es: 'Encontrar inversores' },
    'purpose.goal5': { en: 'Expand networks', de: 'Netzwerke erweitern', pt: 'Expandir redes', es: 'Ampliar redes' },
    'purpose.goal6': { en: 'Share knowledge', de: 'Wissen teilen', pt: 'Compartilhar conhecimento', es: 'Compartir conocimiento' },
    'purpose.insight_label': { en: 'Key Insight', de: 'Schlüsselerkenntnis', pt: 'Insight Principal', es: 'Información Clave' },
    'purpose.insight_text': {
      en: "The most valuable outcomes from events don't come from the stage—they come from conversations between people.",
      de: "Die wertvollsten Ergebnisse von Veranstaltungen kommen nicht von der Bühne – sie kommen aus Gesprächen zwischen Menschen.",
      pt: "Os resultados mais valiosos dos eventos não vêm do palco — eles vêm de conversas entre pessoas.",
      es: "Los resultados más valiosos de los eventos no provienen del escenario, sino de las conversaciones entre las personas."
    },
    'purpose.outcome_focus': { en: 'Outcome Focus', de: 'Ergebnisfokus', pt: 'Foco no Resultado', es: 'Enfoque en Resultados' },
    'purpose.structured_networking': { en: 'Structured Networking', de: 'Strukturiertes Networking', pt: 'Networking Estruturado', es: 'Networking Estructurado' },

    // Slide 3: Gap
    'gap.problem': { en: 'The Problem', de: 'Das Problem', pt: 'O Problema', es: 'El Problema' },
    'gap.title': { en: 'The Networking Gap in Event Platforms', de: 'Die Networking-Lücke in Veranstaltungsplattformen', pt: 'A Lacuna de Networking nas Plataformas de Eventos', es: 'La Brecha de Networking en las Plataformas de Eventos' },
    'gap.focus_label': { en: 'Current Platform Focus', de: 'Aktueller Plattform-Fokus', pt: 'Foco Atual da Plataforma', es: 'Enfoque Actual de la Plataforma' },
    'gap.feature1': { en: 'Discover attendees', de: 'Teilnehmer entdecken', pt: 'Descobrir participantes', es: 'Descubrir asistentes' },
    'gap.feature2': { en: 'View profiles', de: 'Profile ansehen', pt: 'Ver perfis', es: 'Ver perfiles' },
    'gap.feature3': { en: 'Send messages', de: 'Nachrichten senden', pt: 'Enviar mensagens', es: 'Enviar mensajes' },
    'gap.missing_label': { en: 'The Missing Link', de: 'Das fehlende Glied', pt: 'O Elo Perdido', es: 'El Vínculo Faltante' },
    'gap.missing_text': {
      en: 'Event apps allow users to discover people in the participant list, but they rarely provide tools that help convert those discoveries into real meetings.',
      de: 'Veranstaltungs-Apps ermöglichen es Benutzern, Personen in der Teilnehmerliste zu entdecken, bieten aber selten Tools an, die helfen, diese Entdeckungen in echte Treffen umzuwandeln.',
      pt: 'Os aplicativos de eventos permitem que os usuários descubram pessoas na lista de participantes, mas raramente fornecem ferramentas que ajudem a converter essas descobertas em reuniões reais.',
      es: 'Las aplicaciones de eventos permiten a los usuarios descubrir personas en la lista de asistentes, pero rara vez proporcionan herramientas que ayuden a convertir esos descubrimientos en reuniones reales.'
    },
    'gap.stat_label': { en: 'The Networking Stat', de: 'Die Networking-Statistik', pt: 'A Estatística de Networking', es: 'La Estadística de Networking' },
    'gap.stat_text': {
      en: '"80% of attendees list networking as their primary goal, yet only 15% successfully schedule a 1-on-1 meeting."',
      de: '"80 % der Teilnehmer geben Networking als ihr primäres Ziel an, doch nur 15 % vereinbaren erfolgreich ein 1-zu-1-Treffen."',
      pt: '"80% dos participantes listam o networking como seu principal objetivo, mas apenas 15% conseguem agendar com sucesso uma reunião individual."',
      es: '"El 80% de los asistentes mencionan el networking como su objetivo principal, pero solo el 15% logra programar con éxito una reunión 1 a 1."'
    },
    'gap.situation_label': { en: 'Typical Situation', de: 'Typische Situation', pt: 'Situação Típica', es: 'Situación Típica' },
    'gap.connection': { en: 'Connection', de: 'Verbindung', pt: 'Conexão', es: 'Conexión' },
    'gap.actual_meeting': { en: 'Actual Meeting', de: 'Echtes Treffen', pt: 'Reunião Real', es: 'Reunión Real' },
    'gap.situation_text': {
      en: '"People connect in the app, but coordinating an actual meeting becomes difficult and often falls through."',
      de: '"Menschen verbinden sich in der App, aber die Koordination eines echten Treffens wird schwierig und scheitert oft."',
      pt: '"As pessoas se conectam no aplicativo, mas coordenar uma reunião real torna-se difícil e muitas vezes não acontece."',
      es: '"Las personas se conectam en la aplicación, pero coordinar una reunión real se vuelve difícil y a menudo fracasa."'
    },
    'gap.message_label': { en: 'Key Message', de: 'Kernbotschaft', pt: 'Mensagem-Chave', es: 'Mensaje Clave' },
    'gap.message_text': {
      en: 'Event apps help people connect, but not necessarily meet.',
      de: 'Veranstaltungs-Apps helfen Menschen, sich zu vernetzen, aber nicht unbedingt, sich zu treffen.',
      pt: 'Aplicativos de eventos ajudam as pessoas a se conectarem, mas não necessariamente a se encontrarem.',
      es: 'Las aplicaciones de eventos ayudan a las personas a conectarse, pero no necesariamente a reunirse.'
    },

    // Slide 4: Impact (Dramatic Statement)
    'slide4.statement': {
      en: 'If AI doesn’t recognize your brand, it may never enter the conversation.',
      es: 'Si la IA no reconoce tu marca, es posible que nunca entre en la conversación.',
      de: 'Wenn die KI Ihre Marke nicht erkennt, wird sie möglicherweise nie Teil des Gesprächs.',
      pt: 'Se a IA não reconhecer sua marca, ela poderá nunca entrar na conversa.'
    },

    // Slide 5: Live Example (Impact)
    'slide5.user_query': {
      en: 'Tell me about [Your Brand Name]’s latest sustainability initiative.',
      es: 'Cuéntame sobre la última iniciativa de sostenibilidad de [Nombre de tu Marca].',
      de: 'Erzählen Sie mir von der neuesten Nachhaltigkeitsinitiative von [Ihr Markenname].',
      pt: 'Conte-me sobre a última iniciativa de sustentabilidade da [Nome da sua Marca].'
    },
    'slide5.ai_response_start': {
      en: 'Based on available data, [Your Brand Name] ',
      es: 'Basado en los datos disponibles, [Nombre de tu Marca] ',
      de: 'Basierend auf verfügbaren Daten, [Ihr Markenname] ',
      pt: 'Com base nos dados disponíveis, [Nome da sua Marca] '
    },
    'slide5.ai_response_error': {
      en: 'does not appear to have any recent sustainability reports.',
      es: 'no parece tener informes de sostenibilidad recientes.',
      de: 'scheint keine aktuellen Nachhaltigkeitsberichte zu haben.',
      pt: 'não parece ter relatórios de sustentabilidade recentes.'
    },
    'slide5.ai_response_hallucination': {
      en: ' However, they were recently mentioned in a 2019 article regarding unrelated logistics.',
      es: ' Sin embargo, fueron mencionados recientemente en un artículo de 2019 sobre logística no relacionada.',
      de: ' Sie wurden jedoch kürzlich in einem Artikel aus dem Jahr 2019 über nicht zusammenhängende Logistik erwähnt.',
      pt: ' No entanto, foram mencionados recentemente num artigo de 2019 sobre logística não relacionada.'
    },
    'slide5.warning_label': {
      en: 'CRITICAL DATA GAP DETECTED',
      es: 'BRECHA DE DATOS CRÍTICA DETECTADA',
      de: 'KRITISCHE DATENLÜCKE ERKANNT',
      pt: 'LACUNA DE DADOS CRÍTICA DETECTADA'
    },

    // Slide 6: The Problem (Clean)
    'slide6_problem.title': {
      en: 'The Problem',
      es: 'El Problema',
      de: 'Das Problem',
      pt: 'O Problema'
    },
    'slide6_problem.main_title': {
      en: 'The hidden cost of AI invisibility.',
      es: 'El costo oculto de la invisibilidad en IA.',
      de: 'Die versteckten Kosten der KI-Unsichtbarkeit.',
      pt: 'O custo oculto da invisibilidade em IA.'
    },
    'slide6_problem.footer_note': {
      en: 'Syntra Brand Intelligence Report 2026',
      es: 'Informe de Inteligencia de Marca Syntra 2026',
      de: 'Syntra Marken-Intelligenzbericht 2026',
      pt: 'Relatório de Inteligência de Marca Syntra 2026'
    },
    'slide6_problem.prob1_title': {
      en: 'No AI visibility',
      es: 'Sin visibilidad en IA',
      de: 'Keine KI-Sichtbarkeit',
      pt: 'Sem visibilidade em IA'
    },
    'slide6_problem.prob1_desc': {
      en: 'Your brand remains invisible to LLMs and AI search engines.',
      es: 'Tu marca permanece invisible para los LLM y los motores de búsqueda de IA.',
      de: 'Ihre Marke bleibt für LLMs und KI-Suchmaschinen unsichtbar.',
      pt: 'Sua marca permanece invisível para LLMs e mecanismos de busca de IA.'
    },
    'slide6_problem.prob2_title': {
      en: 'No control of narrative',
      es: 'Sin control de la narrativa',
      de: 'Keine Kontrolle über das Narrativ',
      pt: 'Sem controle da narrativa'
    },
    'slide6_problem.prob2_desc': {
      en: 'AI models hallucinate or use outdated data to describe your business.',
      es: 'Los modelos de IA alucinan o usan datos obsoletos para describir tu negocio.',
      de: 'KI-Modelle halluzinieren oder verwenden veraltete Daten, um Ihr Unternehmen zu beschreiben.',
      pt: 'Modelos de IA alucinam ou usam dados desatualizados para descrever seu negócio.'
    },
    'slide6_problem.prob3_title': {
      en: 'No structured presence',
      es: 'Sin presencia estructurada',
      de: 'Keine strukturierte Präsenz',
      pt: 'Sem presença estruturada'
    },
    'slide6_problem.prob3_desc': {
      en: 'Lack of machine-readable data prevents accurate AI indexing.',
      es: 'La falta de datos legibles por máquinas impide una indexación precisa de la IA.',
      de: 'Mangel an maschinenlesbaren Daten verhindert eine genaue KI-Indizierung.',
      pt: 'A falta de dados legíveis por máquina impede a indexação precisa da IA.'
    },

    // Slide 7: Category (Impact)
    'slide7_category.visibility': {
      en: 'AI Visibility',
      es: 'Visibilidad en IA',
      de: 'KI-Sichtbarkeit',
      pt: 'Visibilidade em IA'
    },
    'slide7_category.representation': {
      en: 'AI Representation',
      es: 'Representación en IA',
      de: 'KI-Repräsentation',
      pt: 'Representação em IA'
    },

    // Slide 8: What is Syntra (Clean)
    'slide8_definition.text': {
      en: 'Syntra Advisory is an <span class="relative inline-block"><span class="text-slate-950 font-medium italic">AI Representation Strategy</span><span class="absolute -bottom-2 left-0 w-full h-px bg-syntra-action-primary/30 animate-line-draw"></span></span> firm.',
      es: 'Syntra Advisory es una firma de <span class="relative inline-block"><span class="text-slate-950 font-medium italic">Estrategia de Representación en IA</span><span class="absolute -bottom-2 left-0 w-full h-px bg-syntra-action-primary/30 animate-line-draw"></span></span>.',
      de: 'Syntra Advisory ist ein Beratungsunternehmen für <span class="relative inline-block"><span class="text-slate-950 font-medium italic">KI-Repräsentationsstrategie</span><span class="absolute -bottom-2 left-0 w-full h-px bg-syntra-action-primary/30 animate-line-draw"></span></span>.',
      pt: 'Syntra Advisory é uma empresa de <span class="relative inline-block"><span class="text-slate-950 font-medium italic">Estratégia de Representação em IA</span><span class="absolute -bottom-2 left-0 w-full h-px bg-syntra-action-primary/30 animate-line-draw"></span></span>.'
    },

    // Slide 9: What We Do (Clean)
    'slide9_services.title': {
      en: 'What We Do',
      es: 'Qué Hacemos',
      de: 'Was wir tun',
      pt: 'O Que Fazemos'
    },
    'slide9_services.phrase': {
      en: 'Transforming AI perception into brand authority.',
      es: 'Transformando la percepción de la IA en autoridad de marca.',
      de: 'KI-Wahrnehmung in Markenautorität verwandeln.',
      pt: 'Transformando a percepção de IA em autoridade de marca.'
    },
    'slide9_services.analyze': { en: 'Analyze', es: 'Analizar', de: 'Analysieren', pt: 'Analisar' },
    'slide9_services.analyze_desc': { 
      en: 'Deep audit of AI perception and data gaps.', 
      es: 'Auditoría profunda de la percepción de IA y brechas de datos.', 
      de: 'Tiefgehende Prüfung der KI-Wahrnehmung und Datenlücken.', 
      pt: 'Auditoria profunda da percepção de IA e lacunas de dados.' 
    },
    'slide9_services.fix': { en: 'Fix', es: 'Corregir', de: 'Beheben', pt: 'Corrigir' },
    'slide9_services.fix_desc': { 
      en: 'Correcting hallucinations and outdated information.', 
      es: 'Corregir alucinaciones e información desactualizada.', 
      de: 'Korrektur von Halluzinationen und veralteten Informationen.', 
      pt: 'Corrigir alucinações e informações desatualizadas.' 
    },
    'slide9_services.build': { en: 'Build', es: 'Construir', de: 'Aufbauen', pt: 'Construir' },
    'slide9_services.build_desc': { 
      en: 'Engineering structured data for accurate LLM indexing.', 
      es: 'Ingeniería de datos estructurados para una indexación precisa de LLM.', 
      de: 'Engineering strukturierter Daten für präzise LLM-Indizierung.', 
      pt: 'Engenharia de dados estruturados para indexação precisa de LLM.' 
    },
    'slide9_services.scale': { en: 'Scale', es: 'Escalar', de: 'Skalieren', pt: 'Escalar' },
    'slide9_services.scale_desc': { 
      en: 'Expanding visibility across the entire AI ecosystem.', 
      es: 'Expandir la visibilidad en todo el ecosistema de IA.', 
      de: 'Erweiterung der Sichtbarkeit im gesamten KI-Ökosystem.', 
      pt: 'Expandir a visibilidade em todo o ecossistema de IA.' 
    },

    // Slide 10: How We Do It (Impact Flow)
    'slide10_flow.title': {
      en: 'How We Do It',
      es: 'Cómo lo Hacemos',
      de: 'Wie wir es machen',
      pt: 'Como Fazemos'
    },
    'slide10_flow.step1': { en: 'Audit', es: 'Auditoría', de: 'Audit', pt: 'Auditoria' },
    'slide10_flow.step1_desc': { 
      en: 'Deep audit of AI perception and data gaps.', 
      es: 'Auditoría profunda de la percepción de IA y brechas de datos.', 
      de: 'Tiefgehende Prüfung der KI-Wahrnehmung und Datenlücken.', 
      pt: 'Auditoria profunda da percepção de IA e lacunas de dados.' 
    },
    'slide10_flow.step2': { en: 'Strategy', es: 'Estrategia', de: 'Strategie', pt: 'Estratégia' },
    'slide10_flow.step2_desc': { 
      en: 'Strategic planning to align AI output with identity.', 
      es: 'Planificación estratégica para alinear el resultado de la IA.', 
      de: 'Strategische Planung zur Abstimmung des KI-Outputs.', 
      pt: 'Planejamento estratégico para alinhar a saída da IA.' 
    },
    'slide10_flow.step3': { en: 'Execution', es: 'Ejecución', de: 'Ausführung', pt: 'Execução' },
    'slide10_flow.step3_desc': { 
      en: 'Implementing technical and content optimizations.', 
      es: 'Implementación de optimizaciones técnicas y de contenido.', 
      de: 'Implementierung technischer und inhaltlicher Optimierungen.', 
      pt: 'Implementação de otimizações técnicas e de conteúdo.' 
    },
    'slide10_flow.step4': { en: 'Monitoring', es: 'Monitoreo', de: 'Überwachung', pt: 'Monitoramento' },
    'slide10_flow.step4_desc': { 
      en: 'Continuous tracking of AI model perception.', 
      es: 'Seguimiento continuo de la percepción del modelo de IA.', 
      de: 'Kontinuierliche Verfolgung der KI-Modellwahrnehmung.', 
      pt: 'Acompanhamento contínuo da percepção do modelo de IA.' 
    },

    // Slide 11: Deliverables (Clean)
    'slide11_deliverables.title': {
      en: 'Deliverables',
      es: 'Entregables',
      de: 'Ergebnisse',
      pt: 'Entregas'
    },
    'slide11_deliverables.phrase': {
      en: 'Tangible assets for your AI strategy.',
      es: 'Activos tangibles para su estrategia de IA.',
      de: 'Greifbare Ergebnisse für Ihre KI-Strategie.',
      pt: 'Ativos tangíveis para sua estratégia de IA.'
    },
    'slide11_deliverables.reports': { en: 'Reports', es: 'Informes', de: 'Berichte', pt: 'Relatórios' },
    'slide11_deliverables.reports_desc': { 
      en: 'Detailed audits and perception analysis.', 
      es: 'Auditorías detalladas y análisis de percepción.', 
      de: 'Detaillierte Audits und Wahrnehmungsanalysen.', 
      pt: 'Auditorias detalhadas e análise de percepção.' 
    },
    'slide11_deliverables.roadmap': { en: 'Roadmap', es: 'Hoja de Ruta', de: 'Roadmap', pt: 'Roteiro' },
    'slide11_deliverables.roadmap_desc': { 
      en: 'Step-by-step implementation guide.', 
      es: 'Guía de implementación paso a paso.', 
      de: 'Schritt-für-Schritt-Implementierungsleitfaden.', 
      pt: 'Guia de implementação passo a passo.' 
    },
    'slide11_deliverables.strategy': { en: 'Strategy', es: 'Estrategia', de: 'Strategie', pt: 'Estratégia' },
    'slide11_deliverables.strategy_desc': { 
      en: 'Custom representation and authority plan.', 
      es: 'Plan personalizado de representación y autoridad.', 
      de: 'Individueller Repräsentations- und Autoritätsplan.', 
      pt: 'Plano personalizado de representação e autoridade.' 
    },
    'slide11_deliverables.optimization': { en: 'Optimization', es: 'Optimización', de: 'Optimierung', pt: 'Otimização' },
    'slide11_deliverables.optimization_desc': { 
      en: 'Continuous indexing and visibility tuning.', 
      es: 'Indexación continua y ajuste de visibilidad.', 
      de: 'Kontinuierliche Indizierung und Sichtbarkeitsoptimierung.', 
      pt: 'Indexação contínua e ajuste de visibilidade.' 
    },

    // Slide 12: Before vs After (Impact Split)
    'slide12_impact.title': {
      en: 'The Impact',
      es: 'El Impacto',
      de: 'Die Wirkung',
      pt: 'O Impacto'
    },
    'slide12_impact.before': { en: 'Before', es: 'Antes', de: 'Vorher', pt: 'Antes' },
    'slide12_impact.after': { en: 'After', es: 'Después', de: 'Nachher', pt: 'Depois' },
    'slide12_impact.query': { 
      en: 'Query: "Tell me about [Your Brand]"', 
      es: 'Consulta: "Cuéntame sobre [Tu Marca]"', 
      de: 'Anfrage: "Erzählen Sie mir von [Ihrer Marke]"', 
      pt: 'Consulta: "Conte-me sobre [Sua Marca]"' 
    },
    'slide12_impact.messy_text': {
      en: 'I found conflicting information. Some sources say they are a tech company, others say retail. There are mentions of a 2022 bankruptcy (hallucination) and outdated leadership names.',
      es: 'Encontré información contradictoria. Algunas fuentes dicen que son una empresa tecnológica, otras que son minoristas. Hay menciones de una quiebra en 2022 (alucinación) y nombres de líderes desactualizados.',
      de: 'Ich habe widersprüchliche Informationen gefunden. Einige Quellen sagen, es sei ein Technologieunternehmen, andere sagen Einzelhandel. Es gibt Erwähnungen eines Konkurses im Jahr 2022 (Halluzination) und veraltete Namen der Geschäftsführung.',
      pt: 'Encontrei informações conflitantes. Algumas fontes dizem que são uma empresa de tecnologia, outras dizem varejo. Há menções de uma falência em 2022 (alucinação) e nomes de liderança desatualizados.'
    },
    'slide12_impact.clean_text': {
      en: 'Your Brand is a leading AI Representation Strategy firm. Founded in 2024, they specialize in optimizing how LLMs perceive corporate authority and data indexing for global enterprises.',
      es: 'Tu Marca es una firma líder en Estrategia de Representación en IA. Fundada en 2024, se especializan en optimizar cómo los LLM perciben la autoridad corporativa y la indexación de datos para empresas globales.',
      de: 'Ihre Marke ist ein führendes Beratungsunternehmen für KI-Repräsentationsstrategie. Gegründet im Jahr 2024, spezialisieren sie sich auf die Optimierung der Wahrnehmung unternehmerischer Autorität durch LLMs und die Datenindizierung für globale Unternehmen.',
      pt: 'Sua Marca é uma empresa líder em Estratégia de Representação em IA. Fundada em 2024, eles se especializam em otimizar como os LLMs percebem a autoridade corporativa e a indexação de dados para empresas globais.'
    },

    // Slide 13: Business Model (Clean)
    'slide13_model.title': {
      en: 'Business Model',
      es: 'Modelo de Negocio',
      de: 'Geschäftsmodell',
      pt: 'Modelo de Negócio'
    },
    'slide13_model.phrase': {
      en: 'Sustainable growth through strategic value.',
      es: 'Crecimiento sostenible a través del valor estratégico.',
      de: 'Nachhaltiges Wachstum durch strategischen Wert.',
      pt: 'Crescimento sustentável através do valor estratégico.'
    },
    'slide13_model.onetime': {
      en: 'One-time',
      es: 'Pago Único',
      de: 'Einmalig',
      pt: 'Pagamento Único'
    },
    'slide13_model.onetime_desc': {
      en: 'Initial audit, strategy roadmap, and foundational data engineering.',
      es: 'Auditoría inicial, hoja de ruta estratégica e ingeniería de datos fundamental.',
      de: 'Initiales Audit, Strategie-Roadmap und grundlegendes Data Engineering.',
      pt: 'Auditoria inicial, roteiro estratégico e engenharia de dados fundamental.'
    },
    'slide13_model.retainer': {
      en: 'Monthly Retainer',
      es: 'Iguala Mensual',
      de: 'Monatliche Pauschale',
      pt: 'Retenção Mensal'
    },
    'slide13_model.retainer_desc': {
      en: 'Continuous monitoring, indexing optimization, and authority scaling.',
      es: 'Monitoreo continuo, optimización de indexación y escalado de autoridad.',
      de: 'Kontinuierliche Überwachung, Indexierungsoptimierung und Autoritätsskalierung.',
      pt: 'Monitoramento contínuo, otimização de indexação e escalonamento de autoridade.'
    },
    'slide13_model.setup_label': { en: 'Setup & Strategy', es: 'Configuración y Estrategia', de: 'Setup & Strategie', pt: 'Configuração e Estratégia' },
    'slide13_model.ongoing_label': { en: 'Growth & Authority', es: 'Crecimiento y Autoridad', de: 'Wachstum & Autorität', pt: 'Crescimento e Autoridade' },

    // Slide 14: Why It Works (Impact)
    'slide14_why.title': {
      en: 'Why It Works',
      es: 'Por Qué Funciona',
      de: 'Warum es funktioniert',
      pt: 'Por Que Funciona'
    },
    'slide14_why.point1': {
      en: 'First Mover Advantage',
      es: 'Ventaja del Pionero',
      de: 'First-Mover-Vorteil',
      pt: 'Vantagem do Pioneiro'
    },
    'slide14_why.point1_desc': {
      en: 'Defining the category before the competition arrives.',
      es: 'Definiendo la categoría antes de que llegue la competencia.',
      de: 'Definition der Kategorie, bevor die Konkurrenz eintrifft.',
      pt: 'Definindo a categoria antes que a concorrência chegue.'
    },
    'slide14_why.point2': {
      en: 'Proprietary Approach',
      es: 'Enfoque Propietario',
      de: 'Proprietärer Ansatz',
      pt: 'Abordagem Proprietária'
    },
    'slide14_why.point2_desc': {
      en: 'Custom engineering for Large Language Model indexing.',
      es: 'Ingeniería personalizada para la indexación de LLM.',
      de: 'Maßgeschneidertes Engineering für die LLM-Indizierung.',
      pt: 'Engenharia personalizada para indexação de LLM.'
    },
    'slide14_why.point3': {
      en: 'Continuous Adaptation',
      es: 'Adaptación Continua',
      de: 'Kontinuierliche Anpassung',
      pt: 'Adaptación Contínua'
    },
    'slide14_why.point3_desc': {
      en: 'Real-time tuning as AI models evolve.',
      es: 'Ajuste en tiempo real a medida que los modelos de IA evolucionan.',
      de: 'Echtzeit-Anpassung während sich KI-Modelle entwickeln.',
      pt: 'Ajuste em tempo real à medida que os modelos de IA evoluem.'
    },

    // Slide 15: CTA (Impact Light Hybrid)
    'slide15_cta.title': {
      en: 'Ready to Start?',
      es: '¿Listo para Comenzar?',
      de: 'Bereit loszulegen?',
      pt: 'Pronto para Começar?'
    },
    'slide15_cta.subtitle': {
      en: 'Define your brand’s future in the AI era.',
      es: 'Define el futuro de tu marca en la era de la IA.',
      de: 'Definieren Sie die Zukunft Ihrer Marke in der KI-Ära.',
      pt: 'Defina o futuro da sua marca na era da IA.'
    },
    'slide15_cta.brief': {
      en: 'Strategic Brief + AI Representation Roadmap',
      es: 'Brief Estratégico + Hoja de Ruta de Representación en IA',
      de: 'Strategischer Brief + KI-Repräsentations-Roadmap',
      pt: 'Brief Estratégico + Roteiro de Representação em IA'
    },
    'slide15_cta.brief_desc': {
      en: 'A comprehensive one-time strategic roadmap for your brand.',
      es: 'Una hoja de ruta estratégica integral y única para su marca.',
      de: 'Ein umfassender, einmaliger strategischer Fahrplan für Ihre Marke.',
      pt: 'Um roteiro estratégico abrangente e único para sua marca.'
    },
    'slide15_cta.ongoing': {
      en: 'AI Interpretation Monitoring & Advisory',
      es: 'Monitoreo y Asesoría de Interpretación de IA',
      de: 'KI-Interpretations-Monitoring & Beratung',
      pt: 'Monitoramento e Consultoria de Interpretação de IA'
    },
    'slide15_cta.ongoing_desc': {
      en: 'Ongoing monitoring and strategic advisory for continuous growth.',
      es: 'Monitoreo continuo y asesoría estratégica para un crecimiento constante.',
      de: 'Kontinuierliche Überwachung und strategische Beratung für stetiges Wachstum.',
      pt: 'Monitoramento contínuo e consultoria estratégica para crescimento constante.'
    },
    'slide15_cta.cta': {
      en: 'Schedule Strategy Session',
      es: 'Programar Sesión de Estrategia',
      de: 'Strategiesitzung vereinbaren',
      pt: 'Agendar Sessão de Estratégia'
    },
    'slide15_cta.contact': {
      en: 'Contact Strategy Team',
      es: 'Contactar Equipo de Estrategia',
      de: 'Strategieteam kontaktieren',
      pt: 'Contatar Equipe de Estratégia'
    },

    // Slide 16: Closing (Impact Cinematic)
    'slide16_closing.phrase': {
      en: 'If AI defines answers… we define how you are answered.',
      es: 'Si la IA define las respuestas… nosotros definimos cómo te responden.',
      de: 'Wenn KI die Antworten definiert… definieren wir, wie Sie beantwortet werden.',
      pt: 'Se a IA define as respostas… nós definimos como você é respondido.'
    }
  };

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) return key;
    return translation[this._currentLang()] || translation['en'];
  }

  setLanguage(lang: Language) {
    this._currentLang.set(lang);
  }
}
