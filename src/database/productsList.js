const productsList = [
  {
    name: "Truss - Tratamento Reconstrutor 260ml",
    type: "hair",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/21701/afc590e3-928f-47f4-8362-36b732ad1138-truss-uso-obrigatorio-tratamento-reconstrutor-260ml.png",
    price: "129,90",
    description:
      "Reconstrutor para cabelos danificados. Truss Uso Obrigatório recupera o aspecto saudável enquanto disciplina e protege do calor.",
    link: "https://www.belezanaweb.com.br/truss-uso-obrigatorio-tratamento-reconstrutor-260ml/",
  },

  {
    name: "Truss Ultra Hydration - Shampoo 300ml",
    type: "hair",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/5/truss-ultra-hydration-plus-ultra-hydration-shampoo-300ml-36550-2029994840242667930.png",
    price: "79,90",
    description:
      "Shampoo para cabelo danificado. Truss Ultra Hydration Shampoo restaura a hidratação e repara danos das áreas fragilizadas.",
    link: "https://www.belezanaweb.com.br/truss-ultra-hydration-shampoo-300ml",
  },

  {
    name: "Truss Frizz Zero - Condicionador 260ml",
    type: "hair",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/20047896/d73de855-a5e0-44ac-add9-e4957d2dc5a6-truss-frizz-zero-condicionador-260ml.png",
    price: "149,90",
    description:
      "Condicionador para todos os tipos de cabelos. Truss Frizz Zero pode ser usado como pré-shampoo ou máscara líquida nas lavagens. ",
    link: "https://www.belezanaweb.com.br/truss-frizz-zero-condicionador-260ml/",
  },

  {
    name: "Truss Protector - Leave-in 250ml",
    type: "hair",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/4531/4531.png",
    price: "85,90",
    description:
      "Leave-in indicado para todos os tipos de cabelos. Truss Protector desembaraça e protege dos raios UV, calor do secador e dos danos mecânicos causados pela escova.",
    link: "https://www.belezanaweb.com.br/truss-protector-leavein-250ml/",
  },

  {
    name: "Deva Curl - Ativador de Cachos 250g",
    type: "hair",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/5/deva-curl-supercream-ativador-de-cachos-250g-32295-1729492017369035885.jpg",
    price: "63,90",
    description:
      "Ativador de cachos para cabelos cacheados em tamanho profissional. Deva Curl Supercream deixa o cacho definido, hidratado, nutrido e com o frizz controlado por mais tempo. ",
    link: "https://www.belezanaweb.com.br/deva-curl-supercream-creme-modelador-250g/",
  },

  {
    name: "Tangle Teezer Ultimate Black - Escova de Cabelo",
    type: "hair",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/5/tangle-teezer-the-ultimate-black-escova-45581-2026499460422649378.png",
    price: "98,90",
    description:
      "Escova para todos os tipos de cabelo. Tangle Teezer The Ultimate finaliza o visual já seco, desembaraça e suaviza as cutículas.",
    link: "https://www.belezanaweb.com.br/tangle-teezer-the-ultimate-black-escova/",
  },

  {
    name: "Givenchy Mister Glow - Gel Iluminador 30ml",
    type: "skincare",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/63328/29c530a8-ee1b-4891-90b2-8e866f19d9ea-givenchy-mister-healthy-glow-n00-universal-tan-gel-iluminador-30ml.png",
    price: "79,90",
    description:
      "Gel iluminador para todos os tipos de pele. Givenchy Mister Healthy Glow Gel melhora o tom do rosto com efeito de brilho e bronze natural.",
    link: "https://www.belezanaweb.com.br/givenchy-mister-healthy-glow-n00-universal-tan-gel-iluminador-30ml/",
  },

  {
    name: "Biomarine Rever - Sérum Anti-Idade para Área dos Olhos 20g",
    type: "skincare",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/65079/65079.png",
    price: "88,90",
    description:
      "Sérum antioxidante para área dos olhos. Biomarine Rever C Ageless Rejuvenescedor para Área dos Olhos reduz a aparência de rugas e linhas finas, além de iluminar a região. Também diminui bolsas e olheiras para um visual mais descansado.",
    link: "https://www.belezanaweb.com.br/biomarine-rever-c-ageless-serum-antiidade-para-area-dos-olhos-20g/",
  },

  {
    name: "Adcos Acne Solution - Sabonete para Acne 120ml",
    type: "skincare",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/67431/6f8d3b54-3e23-4dd3-902d-c1f17d5be5da-67431-adcos-acne-solution-sabonete-antiacne-120ml.png",
    price: "79,00",
    description:
      "Sabonete líquido para peles acneicas ou com tendência à acne. Adcos Acne Solution Sabonete Antiacne limpa, regula a oleosidade e previne o surgimento da acne sem ressecar. Possui ação secativa, cicatrizante, anti-inflamatória e suavemente esfoliante.",
    link: "https://www.belezanaweb.com.br/adcos-acne-solution-sabonete-liquido-para-acne-120ml/",
  },

  {
    name: "Skin Aqua Tone FPS50 - Protetor Solar 80g",
    type: "skincare",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/20050199/0cb17363-229f-471a-b939-978cbabe3d6f-20050199-skin-aqua-to-mint-gre-fps50-pro-sol-80g.png",
    price: "123,90",
    description:
      "Protetor solar. Skin Aqua Tone Up UV Essence Mint Green FPS50 confere proteção UVA e UVB para o rosto e para o corpo com textura leve e fácil de aplicar.",
    link: "https://www.belezanaweb.com.br/skin-aqua-tone-up-uv-essence-mint-green-fps50-protetor-solar-80g/",
  },

  {
    name: "Mantecorp Reviline - Creme para Área dos Olhos 15g",
    type: "skincare",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/84192/9189679d-d850-42cc-b494-402ef0716a33-84192-mantecorp-reviline-olhos-creme-rejuvenescedor-15g.png",
    price: "150,90",
    description:
      "Creme para a área dos olhos. Mantecorp Reviline é um creme rejuvenescedor que ajuda na redução de rugas profundas, devolve a firmeza e rejuvenesce a pele.",
    link: "https://www.belezanaweb.com.br/mantecorp-reviline-creme-para-area-dos-olhos-15g/",
  },

  {
    name: "Kit L'Oréal Paris Hialurônico & UV Defender (2 produtos)",
    type: "skincare",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/90157/d6dda0b0-e98a-4742-bb19-0c87c7070460-kit-loreal-paris-hialuronico-e-uv-defender-2-produtos.png",
    price: "159,90",
    description:
      "Kit com sérum e protetor solar facial. Kit L'Oréal Paris Hialurônico & UV Defender protege a pele, previne manchas solares e reduz linhas de expressão logo nas quatro primeiras semanas de uso. Você vai amar! ",
    link: "https://www.belezanaweb.com.br/kit-loreal-paris-hialuronico-e-uv-defender-2-produtos/",
  },

  {
    name: "Dance Midnight Muse Shakira - Perfume Feminino 80ml",
    type: "perfume",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/20049570/0b4c403a-ec32-45a1-84d5-3d4ac5fb8127-20049570-shakira-dance-midnight-muse-fem-edt-80ml.png",
    price: "166,90",
    description:
      "Dance Midnight Muse é um perfume Shakira feminino âmbar floral. Fragrância ideal para mulheres fortes, empoderadas e inspiradoras, deixando-as mais confiantes.",
    link: "https://www.belezanaweb.com.br/dance-midnight-muse-shakira-eau-de-toilette-perfume-feminino-80ml/",
  },

  {
    name: "Acqua di Giò Giorgio Armani - Perfume Masculino 100ml",
    type: "perfume",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/7354/a64ddbd7-2696-45cc-beac-5bcf2bab9277-giorgio-armani-perfume-masculino-acqua-di-gio-pour-homme-eau-de-toilette.png",
    price: "489,90",
    description:
      "Acqua Di Giò é um perfume Giorgio Armani masculino aquático e fresco. Proporciona uma sensação de liberdade, juventude e equilíbrio para homens livres.",
    link: "https://www.belezanaweb.com.br/giorgio-armani-perfume-masculino-acqua-di-gio-pour-homme-eau-de-toilette/",
  },

  {
    name: "1 Million Paco Rabanne - Perfume Masculino 200ml",
    type: "perfume",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/5/18183-complementar-2-5392007029366567915.jpg",
    price: "699,90",
    description:
      "1 Million é um perfume Paco Rabanne masculino amadeirado especiado. Fresco, apimentado e sexy para o homem poderoso e sofisticado.",
    link: "https://www.belezanaweb.com.br/1-million-paco-rabanne-eau-de-toilette-perfume-masculino-200ml/",
  },

  {
    name: "The Icon Antonio Banderas - Perfume Masculino 50ml",
    type: "perfume",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/90540/0e8a8124-39fb-4977-ad5a-450ee6012593-the-icon-antonio-banderas-eau-de-toilette-perfume-masculino-50ml.png",
    price: "139,90",
    description:
      "The Icon é um perfume Antonio Banderas masculino oriental amadeirado. Uma fragrância cheia de atitude, que abre territórios para o homem de sucesso mostrar a singularidade de um verdadeiro ícone.",
    link: "https://www.belezanaweb.com.br/the-icon-antonio-banderas-eau-de-toilette-perfume-masculino-50ml/",
  },

  {
    name: "Chloé Rose Tangerine - Perfume Feminino 50ml",
    type: "perfume",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/88725/4172ad06-2271-45a5-998c-f60136850266-88725-chloe-rose-tangerine-edt-50ml.png",
    price: "525,90",
    description:
      "Chloé Rose Tangerine é um perfume Chloé feminino floral frutado. Traz uma fragrância luminosa que revela a expressão de uma feminilidade livre e ousada, mais independente e confiante do que nunca. ",
    link: "https://www.belezanaweb.com.br/chloe-rose-tangerine-eau-de-toilette-perfume-feminino-50ml/",
  },

  {
    name: "Miss Dream La Rive - Perfume Feminino 100ml",
    type: "perfume",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/5/49666-complementar-2-851475153552952890.png",
    price: "74,90",
    description:
      "Miss Dream é um perfume La Rive feminino oriental floral. Encanta tudo ao seu redor com magnetismo, mistério e sedução.",
    link: "https://www.belezanaweb.com.br/miss-dream-la-rive-eau-de-parfum-perfume-feminino-100ml/",
  },

  {
    name: "Granado Pink Cera Nutritiva - Hidratante para Unhas 7g",
    type: "nails",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/5/granado-pink-cera-nutritiva-hidratante-para-unhas-e-cuticulas-7g-27771-8140027448484999338.png",
    price: "34,90",
    description:
      "Cera hidratante para as unhas e cutículas. Com uma fórmula poderosa, Granado Pink Cera Nutritiva proporciona hidratação e nutrição para a pele delicada da região, garantindo maciez e saúde. ",
    link: "https://www.belezanaweb.com.br/granado-pink-cera-nutritiva-hidratante-para-unhas-e-cuticulas-7g/",
  },

  {
    name: "Granado Pink - Removedor de Esmalte 75ml",
    type: "nails",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/62745/879c1543-ceaa-4036-b635-70d149930795-granado-pink-removedor-de-esmalte-75ml.png",
    price: "27,90",
    description:
      "Removedor de esmalte sem acetona. Granado Pink Removedor de Esmalte remove todo o esmalte em poucos segundos enquanto trata as unhas. Sua fórmula rica em ação hidratante e vitaminas, auxilia na recuperação de unhas quebradiças e frágeis. ",
    link: "https://www.belezanaweb.com.br/granado-pink-removedor-de-esmalte-75ml/",
  },

  {
    name: "OPI Coca-Cola Red - Esmalte Cremoso 15ml",
    type: "nails",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/68564/93a7005b-0dd4-453c-8d44-0e7e6fe87886-opi-cocacola-red-esmalte-cremoso-15ml.png",
    price: "25,90",
    description:
      "Esmalte vermelho com acabamento variado. OPI Nail Polish traz as mais diversas nuances de vermelho para você chamar a atenção aonde estiver.",
    link: "https://www.belezanaweb.com.br/opi-cocacola-red-esmalte-cremoso-15ml/",
  },

  {
    name: "Essence Shine Last & Go - Esmalte Cremoso 8ml",
    type: "nails",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/67786/52c43cae-c6be-4472-88d7-55a7b2bda408-essence-shine-last-e-go-14-do-you-speak-love-esmalte-cremoso-8ml.png",
    price: "9,90",
    description:
      "Esmalte com acabamentos variados. Com efeito gel, Essence Shine, Last & Go Nail Polish destaca as unhas com cores intensas, duradouras, que vão das clássicas até as tendências mais coloridas do momento.",
    link: "https://www.belezanaweb.com.br/essence-shine-last-e-go-14-do-you-speak-love-esmalte-cremoso-8ml/",
  },

  {
    name: "Kiss New York Bloco 4 Faces - Lixa de Unha",
    type: "nails",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/82866/005ce55f-b9c3-409c-8386-fe960a6390d9-82866-kiss-new-york-kiss-lixa-bloco-4-faces-24un.png",
    price: "5,90",
    description:
      "Lixa de unha para moldar, remover ondulações, polir e dar brilho. Kiss New York Bloco 4 Faces garante acabamento perfeito em instantes.",
    link: "https://www.belezanaweb.com.br/kiss-new-york-bloco-4-faces-lixa-de-unha/",
  },

  {
    name: "Lixadeira Motor Elétrica Unhas Digital Bivolt 110v - 220v",
    type: "nails",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/MP37363/Capa-Nail-drill-FOTO-1.jpg",
    price: "589,90",
    description:
      "A JMD 108 é uma evolução na categoria lixadeira de unhas no Brasil, importada exclusivamente pela Arte Sedução, o produto é único, e de qualidade incomparável. JMD-108 Jimdoa 35.000 RPM.",
    link: "https://www.belezanaweb.com.br/mp37363-lixadeira-motor-eletrica-unhas-digital-jmd-108-jimdoa-35-000-rpm-bivolt-110v-220v-cinza/",
  },

  {
    name: "Real Techniques - Pincel para Maquiagem",
    type: "makeup",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/52078/38022ebd-920f-41da-ac07-ed4e8c5352b3-real-techniques-mini-multitask-pincel-para-maquiagem.png",
    price: "62,90",
    description:
      "Pincel para maquiagem em miniatura. De cerdas sintéticas e volumosas, Real Techniques Mini Multitask Brush aplica blush, iluminador e bronzer com perfeição e acabamento profissional, já que consegue espalhar os produtos muito bem e, assim, garantir um efeito esfumado e natural.",
    link: "https://www.belezanaweb.com.br/real-techniques-mini-multitask-pincel-para-maquiagem/",
  },

  {
    name: "Lancôme Lash Idôle - Máscara para Cílios 8ml",
    type: "makeup",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/87139/0e62b337-bd40-46e1-bc55-b1698627d752-87139-lancome-lash-idole-mascara-de-cilios-01-8ml.png",
    price: "178,90",
    description:
      "Máscara para cílios na cor preta. Lancôme Lash Idôle garante cílios poderosos com volume e definição por até 24 horas.",
    link: "https://www.belezanaweb.com.br/lancome-lash-idole-mascara-para-cilios-8ml/",
  },

  {
    name: "Givenchy Prisme Libre Skin-Caring Glow 2-N120 - Base Líquida 30ml",
    type: "makeup",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/94419/fcadf16f-f5d6-4e6b-b4c5-394ec9c731a9-94419-givenchy-prisme-libre-skincaring-glow-base-2-n120-30ml.png",
    price: "309,90",
    description:
      "Base líquida com acabamento luminoso. Givenchy Prisme Libre Skin-Caring Glow combina uma cobertura radiante com o tratamento hidratante da pele. Promove um rosto com tom perfeitamente uniforme, com manchas corrigidas, por até 12 horas.",
    link: "https://www.belezanaweb.com.br/givenchy-prisme-libre-skincaring-glow-2n120-base-liquida-30ml/",
  },

  {
    name: "Givenchy Prisme Libre N02 Tafetá Rosé - Blush em Pó Solto 6g",
    type: "makeup",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/95238/d00fbd71-73c9-4a0c-9140-fbade2cff5f5-givenchy-prisme-libre-n02-tafeta-rose-blush-em-po-solto-6g.png",
    price: "285,90",
    description:
      "Blush em pó solto com acabamento fosco luminoso. Givenchy Prisme Libre oferece cores radiantes e translúcidas, como uma segunda pele pela naturalidade no visual, com multidimensionalidade e aspecto saudável. ",
    link: "https://www.belezanaweb.com.br/givenchy-prisme-libre-n02-tafeta-rose-blush-em-po-solto-6g/",
  },

  {
    name: "Make More Batom Liquido Mykonos 4ml",
    type: "makeup",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/MP37570/d8a75d31-cd4a-4ec8-a650-877b730c6668-61dd747099d5404f13dc824a-1433043034992535251.jpg",
    price: "39,90",
    description:
      "Make More Batom Liquido Mykonos 4ml- Textura matte, hidratante que promove um tempo inteligente de secagem, permitindo o contono total dos labios, com longa duração e sem craquelar. ",
    link: "https://www.belezanaweb.com.br/mp37570-make-more-batom-liquido-mykonos-4ml/",
  },

  {
    name: "Maybelline Lifter Gloss Petal - Gloss Labial 5,4ml",
    type: "makeup",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/84873/0f51ac70-a8bf-4e0a-a00e-9ba2b02a6834-84873-maybelline-lifter-petal-gloss-labial-54ml.png",
    price: "89,90",
    description:
      "Gloss labial com ácido hialurônico. Maybelline Lifter Gloss oferece brilho intenso e hidratação aos lábios enquanto melhora o contorno e promove aparência mais cheia e suavizada.",
    link: "https://www.belezanaweb.com.br/maybelline-lifter-gloss-petal-gloss-labial-54ml/",
  },
];

export { productsList };
