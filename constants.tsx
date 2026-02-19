
import { Project, Service, Stage } from './types';

export const PROJECTS: Project[] = [
  { id: '1', title: 'Residência Jardins', year: '2023', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200', category: 'Residencial' },
  { id: '2', title: 'Apartamento Ipanema', year: '2023', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200', category: 'Residencial' },
  { id: '3', title: 'Studio Contemporâneo', year: '2022', image: 'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=1200', category: 'Residencial' },
  { id: '4', title: 'Escritório Hub 42', year: '2022', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200', category: 'Comercial' },
];

export const SERVICES: Service[] = [
  { title: 'Estudo de Layout', description: 'Otimização inteligente do espaço para fluidez e conforto.' },
  { title: 'Projeto de Interiores', description: 'Design completo de acabamentos, marcenaria e iluminação.' },
  { title: 'Imagens 3D Realistas', description: 'Visualização realista do seu futuro lar antes da obra começar.' },
  { title: 'Projeto Executivo Detalhado', description: 'Detalhamento técnico rigoroso para uma execução sem falhas.' },
  { title: 'Auxílio em Escolhas', description: 'Suporte na curadoria de materiais, revestimentos e mobiliário.' },
  { title: 'Acompanhamento', description: 'Suporte técnico ativo durante a execução para garantir fidelidade.' },
];

export const STAGES: Stage[] = [
  { number: '01', title: 'Reunião de Alinhamento', description: 'Entendemos suas necessidades, desejos e expectativas. Conversamos sobre estilo de vida, escopo, prazos e orçamento.' },
  { number: '02', title: 'Apresentação das Imagens 3D', description: 'Desenvolvemos modelos tridimensionais realistas, permitindo visualizar o projeto antes da execução. Fase de ajustes e refinamentos.' },
  { number: '03', title: 'Projeto Executivo', description: 'Elaboramos o projeto executivo completo, com todos os detalhes técnicos necessários para a execução fiel da obra.' },
  { number: '04', title: 'Compras de Materiais', description: 'Auxiliamos na escolha e compra dos materiais e revestimentos, garantindo que tudo esteja alinhado ao projeto aprovado.' },
  { number: '05', title: 'Início e Acompanhamento', description: 'Acompanhamos o desenvolvimento da obra, orientando e garantindo qualidade e fidelidade ao planejamento.' },
];
