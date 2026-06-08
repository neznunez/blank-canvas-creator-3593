// Real Sana, Macaé photos (Wikimedia Commons, CC)
export const heroImage =
  'https://upload.wikimedia.org/wikipedia/commons/1/1c/Cachoeira_do_Sana.jpg';
export const valeImage =
  'https://upload.wikimedia.org/wikipedia/commons/1/16/Sana_-_Maca%C3%A9_-_RJ_-_panoramio.jpg';
export const peitoPomboImage =
  'https://upload.wikimedia.org/wikipedia/commons/d/db/Peito_do_Pombo_Sana.jpg';
export const peitoPombo2Image =
  'https://upload.wikimedia.org/wikipedia/commons/3/39/Peito_do_Pombo_Sana_2.jpg';
export const peitoPomboMacae =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Peito_do_Pombo_em_Maca%C3%A9.jpg/1920px-Peito_do_Pombo_em_Maca%C3%A9.jpg';
export const campingSana =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CAMPING_SANA_-_panoramio.jpg/1920px-CAMPING_SANA_-_panoramio.jpg';
export const serraImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Caminhando_pela_serra.JPG/1920px-Caminhando_pela_serra.JPG';
export const picoImage =
  'https://upload.wikimedia.org/wikipedia/commons/f/fb/Pico_do_Peito_de_Pombo.jpg';
export const pedraAlturas =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/A_pedra_das_alturas.JPG/1920px-A_pedra_das_alturas.JPG';
export const sanaPeitoPombo =
  'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sana-peito_do_Pombo.jpg';

export const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Rotas', href: '#rotas' },
  { name: 'Mapa', href: '#mapa' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Diretório', href: '#diretorio' },
  { name: 'Diário', href: '#blog' },
];

export const projects = [
  {
    title: 'Reflorestamento do Vale',
    description:
      'Plantio de mudas nativas da Mata Atlântica em áreas degradadas do entorno do Sana, em parceria com moradores e voluntários.',
    image: serraImage,
    tags: ['Reflorestamento', 'Mata Atlântica'],
  },
  {
    title: 'Agrofloresta Comunitária',
    description:
      'Sistemas agroflorestais que unem produção de alimentos, regeneração do solo e biodiversidade junto a famílias locais.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['Agrofloresta', 'Alimento'],
  },
  {
    title: 'Educação Ambiental',
    description:
      'Oficinas com escolas e visitantes sobre bioma, manejo de resíduos, bambu e cultura serrana do território.',
    image: campingSana,
    tags: ['Educação', 'Cultura'],
  },
  {
    title: 'Águas do Sana',
    description:
      'Monitoramento e proteção de nascentes, rios e cachoeiras que abastecem a região e sustentam a vida no vale.',
    image: heroImage,
    tags: ['Água', 'Preservação'],
  },
  {
    title: 'Bambu Vivo',
    description:
      'Cultivo e uso do bambu em construção, artesanato e bioarquitetura, fortalecendo uma economia regenerativa local.',
    image:
      'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Bambu', 'Bioconstrução'],
  },
  {
    title: 'Resíduo Zero Sana',
    description:
      'Mutirões, compostagem e logística reversa para reduzir o impacto do turismo e da rotina local.',
    image: valeImage,
    tags: ['Sustentabilidade', 'Comunidade'],
  },
];

export const routes = [
  {
    title: 'Cachoeira do Sana',
    type: 'Cachoeiras',
    duration: '1h • Fácil',
    description:
      'Queda d’água símbolo do distrito, com poços cristalinos a poucos minutos do arraial.',
    image: heroImage,
  },
  {
    title: 'Peito do Pombo',
    type: 'Trilhas',
    duration: '6h • Avançada',
    description:
      'Subida clássica até o pico mais famoso do Sana, com vista de 360º sobre a serra.',
    image: peitoPomboImage,
  },
  {
    title: 'Vale do Sana',
    type: 'Mirantes',
    duration: 'Roteiro de 1 dia',
    description:
      'Caminhos pelo arraial, pousadas, cafés e mirantes naturais do distrito de Macaé.',
    image: valeImage,
  },
  {
    title: 'Caminho da Serra',
    type: 'Experiências',
    duration: '3h • Guiada',
    description:
      'Imersão pela Mata Atlântica com guias locais, práticas de presença e silêncio.',
    image: serraImage,
  },
  {
    title: 'Pedra das Alturas',
    type: 'Trilhas',
    duration: '4h • Moderada',
    description:
      'Caminhada por um dos pontos altos do vale, com paredões e vegetação preservada.',
    image: pedraAlturas,
  },
  {
    title: 'Pico do Peito de Pombo',
    type: 'Mirantes',
    duration: '7h • Avançada',
    description:
      'Trilha mais longa até o cume, atravessando floresta, campos de altitude e vistas abertas.',
    image: picoImage,
  },
];

export const mapCategories = [
  'Cachoeiras',
  'Trilhas',
  'Restaurantes',
  'Pousadas',
  'Projetos',
  'Negócios locais',
  'Mirantes',
];

export const events = [
  {
    date: '12 Mar',
    title: 'Mutirão de Plantio',
    location: 'Vale do Sana',
    description:
      'Plantio coletivo de mudas nativas e roda de conversa sobre regeneração.',
  },
  {
    date: '05 Abr',
    title: 'Feira Agroecológica',
    location: 'Arraial do Sana',
    description:
      'Produtores locais, alimentos orgânicos, artesanato e gastronomia da serra.',
  },
  {
    date: '20 Abr',
    title: 'Festival do Bambu',
    location: 'Sede Bambu do Sana',
    description:
      'Oficinas de bioconstrução, música e exposição de artesãos do território.',
  },
  {
    date: '11 Mai',
    title: 'Caminhada das Águas',
    location: 'Nascentes do Sana',
    description:
      'Trilha guiada com educadores ambientais e monitoramento participativo.',
  },
];

export const directory = [
  {
    name: 'Pousada Mata Viva',
    category: 'Pousada',
    description:
      'Hospedagem aconchegante em meio à floresta, com práticas sustentáveis.',
    image: campingSana,
  },
  {
    name: 'Restaurante Raízes',
    category: 'Gastronomia',
    description:
      'Cozinha autoral com ingredientes da agrofloresta e produtores locais.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Guia Caminhos do Sana',
    category: 'Guia local',
    description:
      'Trilhas, cachoeiras e experiências guiadas por moradores da região.',
    image: peitoPombo2Image,
  },
  {
    name: 'Ateliê de Bambu',
    category: 'Artesanato',
    description:
      'Peças utilitárias e artísticas feitas com bambu cultivado localmente.',
    image:
      'https://images.unsplash.com/photo-1528283648649-33347faa5d9e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Café da Serra',
    category: 'Gastronomia',
    description:
      'Cafés especiais, pães de fermentação natural e doces da casa.',
    image:
      'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Permacultura Sana',
    category: 'Negócio ecológico',
    description: 'Consultoria, cursos e implantação de sistemas regenerativos.',
    image: sanaPeitoPombo,
  },
];

export const posts = [
  {
    title: 'Por que regenerar é mais do que preservar',
    excerpt:
      'Conheça a filosofia regenerativa que move o Bambu do Sana e como ela transforma o jeito de habitar o vale.',
    image: valeImage,
    category: 'Sustentabilidade',
    date: '08 Fev 2025',
  },
  {
    title: 'Roteiro de inverno: cachoeiras e fogueiras',
    excerpt:
      'Um guia afetivo para visitar o Sana nos meses mais frios, com dicas de roteiros, pousadas e experiências.',
    image: heroImage,
    category: 'Turismo',
    date: '02 Jul 2024',
  },
  {
    title: 'Histórias do vale: vozes da comunidade',
    excerpt:
      'Retratos e relatos de moradores que constroem, cuidam e celebram o território do Sana há décadas.',
    image: peitoPomboMacae,
    category: 'Comunidade',
    date: '15 Out 2024',
  },
];
