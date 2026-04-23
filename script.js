/* ═══════════════════════════════════════════════════════
   PARADA DA PIZZA  ·  script.js
   Cardápio real + admin oculto + preços por tamanho no card
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════
   1. CARDÁPIO REAL
══════════════════════════════════════════════ */
const CARDAPIO = [
  /* ─── PIZZAS SALGADAS ─── */
  {
    id: 1, cat: 'salgadas',
    nome: 'Mussarela',
    desc: 'Molho, mussarela, azeitona e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 35.00 },
      { label: 'Maracanã (35cm)', preco: 43.00 }
    ]
  },
  {
    id: 2, cat: 'salgadas',
    nome: 'Queijo e Presunto',
    desc: 'Molho, presunto, mussarela, azeitona e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 35.00 },
      { label: 'Maracanã (35cm)', preco: 45.00 }
    ]
  },
  {
    id: 3, cat: 'salgadas',
    nome: 'Calabresa',
    desc: 'Molho, mussarela, calabresa, azeitona, cebola e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 38.00 },
      { label: 'Maracanã (35cm)', preco: 48.00 }
    ]
  },
  {
    id: 4, cat: 'salgadas',
    nome: 'Peperone',
    desc: 'Molho, mussarela, peperone, azeitona e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 5, cat: 'salgadas',
    nome: 'Lombo Canadense',
    desc: 'Molho, mussarela, lombo canadense, catupiry e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 6, cat: 'salgadas',
    nome: 'Portuguesa',
    desc: 'Molho, presunto, queijo, tomate, milho, calabresa, azeitona, palmito, ovo, cebola e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 45.00 },
      { label: 'Maracanã (35cm)', preco: 55.00 }
    ]
  },
  {
    id: 7, cat: 'salgadas',
    nome: 'Frango com Catupiry',
    desc: 'Molho, mussarela, frango, catupiry e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 45.00 },
      { label: 'Maracanã (35cm)', preco: 55.00 }
    ]
  },
  {
    id: 8, cat: 'salgadas',
    nome: 'A Moda da Casa',
    desc: 'Molho, tomate, milho, calabresa, azeitona, palmito, ovo, frango, catupiry e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 9, cat: 'salgadas',
    nome: 'Marguerita',
    desc: 'Molho, mussarela, tomate, manjericão e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 38.00 },
      { label: 'Maracanã (35cm)', preco: 45.00 }
    ]
  },
  {
    id: 10, cat: 'salgadas',
    nome: '4 Queijos',
    desc: 'Molho, mussarela, catupiry, cheddar, parmesão, azeitona e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 11, cat: 'salgadas',
    nome: 'FranBacon',
    desc: 'Molho, mussarela, frango, catupiry, bacon e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 12, cat: 'salgadas',
    nome: 'Napolitana',
    desc: 'Molho, queijo, presunto, calabresa e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 38.00 },
      { label: 'Maracanã (35cm)', preco: 48.00 }
    ]
  },
  {
    id: 13, cat: 'salgadas',
    nome: 'Alho e Óleo',
    desc: 'Molho, mussarela, alho frito, azeite e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 14, cat: 'salgadas',
    nome: 'Caipira',
    desc: 'Molho, mussarela, frango, milho, catupiry e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 45.00 },
      { label: 'Maracanã (35cm)', preco: 55.00 }
    ]
  },
  {
    id: 15, cat: 'salgadas',
    nome: 'Brócolis com Bacon',
    desc: 'Molho, mussarela, brócolis, bacon, azeitona e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 16, cat: 'salgadas',
    nome: 'Baiana',
    desc: 'Molho, mussarela, calabresa, pimenta, cebola e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 17, cat: 'salgadas',
    nome: 'Tomate Seco e Rúcula',
    desc: 'Molho, mussarela, rúcula, tomate seco, catupiry e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 18, cat: 'salgadas',
    nome: 'Batata Frita',
    desc: 'Molho, mussarela, batata frita, queijo ralado por cima',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 19, cat: 'salgadas',
    nome: 'Rocket',
    desc: 'Qualquer sabor com batata frita no centro',
    tamanhos: [
      { label: 'Média (30cm)', preco: 60.00 },
      { label: 'Maracanã (35cm)', preco: 70.00 }
    ]
  },
  {
    id: 20, cat: 'salgadas',
    nome: 'Vegetariana',
    desc: 'Molho, tomate, mussarela, milho, ervilha, palmito, cebola e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 45.00 },
      { label: 'Maracanã (35cm)', preco: 55.00 }
    ]
  },
  {
    id: 21, cat: 'salgadas',
    nome: '3 Porquinhos',
    desc: 'Molho, mussarela, bacon, lombo, calabresa, azeitona e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 22, cat: 'salgadas',
    nome: 'Explosão da Casa',
    desc: 'Molho, queijo, frango, catupiry, bacon, milho e batata palha',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 23, cat: 'salgadas',
    nome: 'Moda Nordestina',
    desc: 'Molho, queijo, presunto, carne seca, catupiry e cebola',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 24, cat: 'salgadas',
    nome: 'Atum',
    desc: 'Molho, queijo, atum e cebola',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 25, cat: 'salgadas',
    nome: 'Paulistinha',
    desc: 'Molho, queijo, calabresa, catupiry, cheddar e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 45.00 },
      { label: 'Maracanã (35cm)', preco: 55.00 }
    ]
  },
  {
    id: 26, cat: 'salgadas',
    nome: 'Calabresa Mineira',
    desc: 'Molho, queijo, calabresa, milho, bacon e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 27, cat: 'salgadas',
    nome: 'Bacon',
    desc: 'Molho, queijo, bacon, ovo e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 28, cat: 'salgadas',
    nome: 'Frango com Cheddar',
    desc: 'Molho, queijo, frango, cheddar e orégano',
    tamanhos: [
      { label: 'Média (30cm)', preco: 45.00 },
      { label: 'Maracanã (35cm)', preco: 55.00 }
    ]
  },

  /* ─── DOCES ─── */
  {
    id: 29, cat: 'doces',
    nome: 'Banana',
    desc: 'Leite condensado, mussarela, banana e canela',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 30, cat: 'doces',
    nome: 'Brigadeiro',
    desc: 'Leite condensado, brigadeiro e confete',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 31, cat: 'doces',
    nome: 'Beijinho',
    desc: 'Leite condensado, beijinho e confete',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 32, cat: 'doces',
    nome: 'Prestígio',
    desc: 'Leite condensado, brigadeiro, coco e confete',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },
  {
    id: 33, cat: 'doces',
    nome: 'Morango com Nutella',
    desc: 'Leite condensado, morango e nutella',
    tamanhos: [
      { label: 'Média (30cm)', preco: 50.00 },
      { label: 'Maracanã (35cm)', preco: 60.00 }
    ]
  },
  {
    id: 34, cat: 'doces',
    nome: 'Romeu e Julieta',
    desc: 'Leite condensado, queijo, goiabada e catupiry',
    tamanhos: [
      { label: 'Média (30cm)', preco: 40.00 },
      { label: 'Maracanã (35cm)', preco: 50.00 }
    ]
  },

  /* ─── ESFIHAS ─── */
  {
    id: 35, cat: 'esfihas',
    nome: 'Esfihas Variadas',
    desc: 'Diversos sabores disponíveis. Consulte no atendimento.',
    tamanhos: [{ label: 'Unidade', preco: 8.00 }]
  },

  /* ─── ADICIONAIS ─── */
  {
    id: 36, cat: 'adicionais',
    nome: 'Bacon',
    desc: 'Adicional de bacon crocante',
    tamanhos: [{ label: 'Unidade', preco: 10.00 }]
  },
  {
    id: 37, cat: 'adicionais',
    nome: 'Cheddar',
    desc: 'Adicional de cheddar cremoso',
    tamanhos: [{ label: 'Unidade', preco: 8.00 }]
  },
  {
    id: 38, cat: 'adicionais',
    nome: 'Catupiry',
    desc: 'Adicional de catupiry original',
    tamanhos: [{ label: 'Unidade', preco: 8.00 }]
  },
  {
    id: 39, cat: 'adicionais',
    nome: 'Queijo Mussarela',
    desc: 'Adicional de mussarela extra',
    tamanhos: [{ label: 'Unidade', preco: 10.00 }]
  },
  {
    id: 40, cat: 'adicionais',
    nome: 'Cream Cheese',
    desc: 'Adicional de cream cheese',
    tamanhos: [{ label: 'Unidade', preco: 10.00 }]
  }
];

/* ══════════════════════════════════════════════
   2. TAXAS DE ENTREGA
══════════════════════════════════════════════ */
const TAXAS_ENTREGA = {
  'centro': 5.00,
  'boa vista': 6.00,
  'barra mansa': 5.00,
  'ano bom': 7.00,
  'santa clara': 8.00,
  'vila industrial': 9.00,
  'getúlio vargas': 9.00,
  'getulio vargas': 9.00,
  'bocaininha': 11.00,
  'saudade': 9.00,
  'nossa senhora das graças': 7.00,
  'nsa. sra. das gracas': 7.00,
  'piteiras': 11.00,
  'paraíso': 9.00,
  'paraiso': 9.00,
  'caiçara': 10.00,
  'caicara': 10.00,
  'coqueiros': 8.00,
  'são luiz': 11.00,
  'sao luiz': 11.00,
  'voldac': 7.00,
  'jardim esperança': 10.00,
  'jardim esperanca': 10.00,
  'jardim presidente': 9.00,
  'colônia': 13.00,
  'colonia': 13.00,
  'nova esperança': 10.00,
  'nova esperanca': 10.00,
  'morada da colina': 12.00,
};

/* ══════════════════════════════════════════════
   3. ESTADO
══════════════════════════════════════════════ */
let carrinho = [];
let pedidos = JSON.parse(localStorage.getItem('pdp_pedidos') || '[]');
let numeroPedido = parseInt(localStorage.getItem('pdp_counter') || '0', 10);
let taxaEntrega = 0; // 0 sem taxa / -1 inválido / >0 válido
let modalProduto = null;
let modalTamanhoIdx = null;

/* admin oculto */
let adminClickCount = 0;
let adminLastClickTime = 0;
const ADMIN_PASSWORD = 'marcelo2026';

/* ══════════════════════════════════════════════
   4. CATEGORIAS
══════════════════════════════════════════════ */
const CATS = [
  { key: 'salgadas', label: '🍕 Pizzas Salgadas' },
  { key: 'doces', label: '🍫 Pizzas Doces' },
  { key: 'esfihas', label: '🥙 Esfihas' },
  { key: 'adicionais', label: '➕ Adicionais' }
];

/* ══════════════════════════════════════════════
   5. VIEWS
══════════════════════════════════════════════ */
function goView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  const target = document.getElementById('view' + capitalize(view));
  if (target) target.classList.add('active');

  const navCardapio = document.getElementById('navCardapio');
  if (navCardapio) navCardapio.classList.toggle('active', view === 'cardapio');

  if (view === 'painel') renderPainel();
  if (view === 'checkout') {
    renderCoCart();
    atualizarTotais();
  }

  window.scrollTo(0, 0);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ══════════════════════════════════════════════
   6. CARDÁPIO
══════════════════════════════════════════════ */
function renderCardapio(filtro = 'all') {
  const catalog = document.getElementById('catalog');
  if (!catalog) return;

  catalog.innerHTML = '';

  CATS.forEach(cat => {
    if (filtro !== 'all' && filtro !== cat.key) return;

    const items = CARDAPIO.filter(p => p.cat === cat.key);
    if (!items.length) return;

    const section = document.createElement('div');
    section.className = 'cat-section';

    const title = document.createElement('div');
    title.className = 'cat-section-title';
    title.textContent = cat.label;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'products-grid';

    items.forEach(prod => {
      grid.appendChild(criarCard(prod));
    });

    section.appendChild(grid);
    catalog.appendChild(section);
  });
}

function criarCard(prod) {
  const card = document.createElement('div');
  card.className = 'prod-card';

  const temVariacao = prod.tamanhos.length > 1;
  const cardTop = document.createElement('div');
  cardTop.className = 'prod-card-top';

  let precosHtml = '';

  if (temVariacao) {
    const tam1 = prod.tamanhos[0];
    const tam2 = prod.tamanhos[1];

    precosHtml = `
      <div class="prod-prices">
        <div class="price-line">
          <span>30 cm</span>
          <span>R$ ${fmtPreco(tam1.preco)}</span>
        </div>
        <div class="price-line">
          <span>35 cm</span>
          <span>R$ ${fmtPreco(tam2.preco)}</span>
        </div>
      </div>
    `;
  } else {
    precosHtml = `
      <div class="prod-price-single">
        R$ ${fmtPreco(prod.tamanhos[0].preco)}
      </div>
    `;
  }

  cardTop.innerHTML = `
    <div class="prod-name">${prod.nome}</div>
    <div class="prod-desc">${prod.desc}</div>
    ${precosHtml}
  `;

  const cardBot = document.createElement('div');
  cardBot.className = 'prod-card-bot';
  cardBot.innerHTML = `<button class="btn-add" title="Adicionar">+</button>`;

  const btnAdd = cardBot.querySelector('.btn-add');
  btnAdd.addEventListener('click', e => {
    e.stopPropagation();
    abrirModal(prod);
  });

  card.addEventListener('click', () => abrirModal(prod));
  card.appendChild(cardTop);
  card.appendChild(cardBot);

  return card;
}

/* filtro categorias */
function bindCategoryFilter() {
  const catBar = document.getElementById('catBar');
  if (!catBar) return;

  catBar.addEventListener('click', e => {
    const pill = e.target.closest('.cat-pill');
    if (!pill) return;

    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    renderCardapio(pill.dataset.cat);
  });
}

/* ══════════════════════════════════════════════
   7. MODAL TAMANHO
══════════════════════════════════════════════ */
function abrirModal(prod) {
  modalProduto = prod;
  modalTamanhoIdx = null;

  const nomeEl = document.getElementById('msProdName');
  const descEl = document.getElementById('msProdDesc');
  const sizesContainer = document.getElementById('msSizes');

  if (!nomeEl || !descEl || !sizesContainer) return;

  nomeEl.textContent = prod.nome;
  descEl.textContent = prod.desc;
  sizesContainer.innerHTML = '';

  prod.tamanhos.forEach((tam, idx) => {
    const div = document.createElement('div');
    div.className = 'ms-size-opt';
    div.dataset.idx = idx;
    div.innerHTML = `
      <div class="ms-size-info">
        <div class="ms-size-label">${tam.label}</div>
      </div>
      <div class="ms-size-price">R$ ${fmtPreco(tam.preco)}</div>
    `;
    div.addEventListener('click', () => selecionarTamanho(div, idx));
    sizesContainer.appendChild(div);

    if (prod.tamanhos.length === 1) {
      setTimeout(() => selecionarTamanho(div, 0), 20);
    }
  });

  abrirOverlay('overlaySize');
}

function selecionarTamanho(el, idx) {
  document.querySelectorAll('.ms-size-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  modalTamanhoIdx = idx;
}

function confirmarAdicao() {
  if (!modalProduto || modalTamanhoIdx === null) {
    const sizes = document.getElementById('msSizes');
    if (sizes) {
      sizes.style.outline = '2px solid #CC1B1B';
      sizes.style.borderRadius = '8px';
      setTimeout(() => {
        sizes.style.outline = '';
        sizes.style.borderRadius = '';
      }, 1000);
    }
    return;
  }

  const tam = modalProduto.tamanhos[modalTamanhoIdx];
  const chave = `${modalProduto.id}_${modalTamanhoIdx}`;
  const existente = carrinho.find(c => c.chave === chave);

  if (existente) {
    existente.qtd += 1;
  } else {
    carrinho.push({
      chave,
      prodId: modalProduto.id,
      nome: modalProduto.nome,
      tamanho: tam.label,
      preco: tam.preco,
      qtd: 1
    });
  }

  fecharOverlay('overlaySize');
  atualizarCarrinhoUI();
  flashCartBar();
}

function overlayClickSize(e) {
  if (e.target === document.getElementById('overlaySize')) fecharSizeModal();
}

function fecharSizeModal() {
  fecharOverlay('overlaySize');
}

/* ══════════════════════════════════════════════
   8. CARRINHO
══════════════════════════════════════════════ */
function subtotalCarrinho() {
  return carrinho.reduce((s, i) => s + (i.preco * i.qtd), 0);
}

function qtdCarrinho() {
  return carrinho.reduce((s, i) => s + i.qtd, 0);
}

function atualizarCarrinhoUI() {
  const qtd = qtdCarrinho();
  const total = subtotalCarrinho();

  const bar = document.getElementById('cartFloat');
  const badge = document.getElementById('cfBadge');
  const totalEl = document.getElementById('cfTotal');

  if (bar && badge && totalEl) {
    if (qtd > 0) {
      bar.style.display = 'flex';
      badge.textContent = String(qtd);
      totalEl.textContent = 'R$ ' + fmtPreco(total);
    } else {
      bar.style.display = 'none';
    }
  }

  renderDrawer();
  renderCoCart();
  atualizarTotais();
}

function flashCartBar() {
  const bar = document.getElementById('cartFloat');
  if (!bar) return;

  bar.style.transform = 'translateX(-50%) scale(1.07)';
  setTimeout(() => {
    bar.style.transform = '';
  }, 200);
}

function mudarQtd(chave, delta) {
  const item = carrinho.find(c => c.chave === chave);
  if (!item) return;

  item.qtd += delta;
  if (item.qtd <= 0) {
    carrinho = carrinho.filter(c => c.chave !== chave);
    if (carrinho.length === 0) fecharCarrinho();
  }

  atualizarCarrinhoUI();
}

function removerItem(chave) {
  carrinho = carrinho.filter(c => c.chave !== chave);
  if (carrinho.length === 0) fecharCarrinho();
  atualizarCarrinhoUI();
}

/* drawer */
function abrirCarrinho() {
  renderDrawer();
  abrirOverlay('overlayCart');
}

function fecharCarrinho() {
  fecharOverlay('overlayCart');
}

function overlayClickCart(e) {
  if (e.target === document.getElementById('overlayCart')) fecharCarrinho();
}

function renderDrawer() {
  const body = document.getElementById('drawerBody');
  const totalEl = document.getElementById('drawerTotal');
  if (!body || !totalEl) return;

  if (!carrinho.length) {
    body.innerHTML = '<div class="drawer-empty">🛒<strong>Carrinho vazio</strong></div>';
    totalEl.textContent = 'R$ 0,00';
    return;
  }

  body.innerHTML = '';
  carrinho.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="ci-info">
        <div class="ci-name">${item.nome}</div>
        <div class="ci-size">${item.tamanho}</div>
      </div>
      <div class="ci-price">R$ ${fmtPreco(item.preco * item.qtd)}</div>
      <div class="ci-controls">
        <button class="qty-btn" onclick="mudarQtd('${item.chave}', -1)">−</button>
        <span class="qty-val">${item.qtd}</span>
        <button class="qty-btn" onclick="mudarQtd('${item.chave}', 1)">+</button>
      </div>
    `;
    body.appendChild(div);
  });

  totalEl.textContent = 'R$ ' + fmtPreco(subtotalCarrinho());
}

function irCheckout() {
  if (!carrinho.length) return;
  fecharCarrinho();
  renderCoCart();
  atualizarTotais();
  goView('checkout');
}

/* ══════════════════════════════════════════════
   9. CHECKOUT
══════════════════════════════════════════════ */
function renderCoCart() {
  const list = document.getElementById('coCartItems');
  const subEl = document.getElementById('coSubDisplay');
  if (!list || !subEl) return;

  list.innerHTML = '';

  carrinho.forEach(item => {
    const div = document.createElement('div');
    div.className = 'co-cart-item';
    div.innerHTML = `
      <div class="co-item-left">
        <div>
          <div class="co-item-name">${item.nome}</div>
          <div class="co-item-size">${item.tamanho}</div>
        </div>
      </div>
      <div class="co-item-right">
        <div class="co-item-price">R$ ${fmtPreco(item.preco * item.qtd)}</div>
        <div class="co-item-controls">
          <button class="qty-btn" onclick="mudarQtd('${item.chave}', -1)">−</button>
          <span class="qty-val">${item.qtd}</span>
          <button class="qty-btn" onclick="mudarQtd('${item.chave}', 1)">+</button>
        </div>
      </div>
    `;
    list.appendChild(div);
  });

  subEl.textContent = 'R$ ' + fmtPreco(subtotalCarrinho());
}

function onTipoChange() {
  const tipo = getRadio('tipo');
  const endBlock = document.getElementById('enderecoBlock');
  if (endBlock) {
    endBlock.style.display = tipo === 'entrega' ? 'block' : 'none';
  }

  if (tipo !== 'entrega') {
    taxaEntrega = 0;
    const rowTaxa = document.getElementById('rowTaxaEntrega');
    if (rowTaxa) rowTaxa.style.display = 'none';
  }

  atualizarTotais();

  ['lblRetirada', 'lblEntrega'].forEach(id => {
    const lbl = document.getElementById(id);
    if (!lbl) return;
    const inp = lbl.querySelector('input');
    const body = lbl.querySelector('.type-opt-body');
    if (!inp || !body) return;

    body.style.borderColor = inp.checked ? 'var(--red)' : '';
    body.style.background = inp.checked ? 'var(--red-soft)' : '';
  });
}

/* CEP */
function maskCep(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
  input.value = v;
}

async function buscarCep() {
  const cepRaw = document.getElementById('fCep')?.value.replace(/\D/g, '') || '';
  const msgEl = document.getElementById('cepMsg');

  if (cepRaw.length !== 8) {
    if (msgEl) setMsg(msgEl, 'CEP inválido. Use 8 dígitos.', 'err');
    return;
  }

  if (msgEl) setMsg(msgEl, 'Buscando...', '');

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cepRaw}/json/`);
    const data = await res.json();

    if (data.erro) {
      if (msgEl) setMsg(msgEl, 'CEP não encontrado.', 'err');
      limparEndereco();
      return;
    }

    setValue('fRua', data.logradouro || '');
    setValue('fBairro', data.bairro || '');
    setValue('fCidade', data.localidade || '');
    setValue('fUF', data.uf || '');

    if (msgEl) setMsg(msgEl, '✓ Endereço encontrado', 'ok');
    calcularTaxaEntrega();

    const num = document.getElementById('fNum');
    if (num) num.focus();
  } catch {
    if (msgEl) setMsg(msgEl, 'Erro ao buscar. Verifique a conexão.', 'err');
  }
}

function limparEndereco() {
  ['fRua', 'fBairro', 'fCidade', 'fUF'].forEach(id => setValue(id, ''));
}

function setValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

/* taxa bairro */
function onBairroInput() {
  calcularTaxaEntrega();
}

function calcularTaxaEntrega() {
  const bairroInput = document.getElementById('fBairro');
  const taxaEl = document.getElementById('taxaMsg');
  const rowTaxa = document.getElementById('rowTaxaEntrega');
  const ttEntrega = document.getElementById('ttEntrega');

  if (!bairroInput || !taxaEl || !rowTaxa || !ttEntrega) return;

  const bairroRaw = bairroInput.value.trim();

  if (!bairroRaw) {
    taxaEl.style.display = 'none';
    taxaEntrega = 0;
    atualizarTotais();
    return;
  }

  const bairroNorm = normalizar(bairroRaw);
  let taxa = null;

  for (const [chave, valor] of Object.entries(TAXAS_ENTREGA)) {
    const chaveNorm = normalizar(chave);
    if (bairroNorm.includes(chaveNorm) || chaveNorm.includes(bairroNorm)) {
      taxa = valor;
      break;
    }
  }

  taxaEl.style.display = 'block';

  if (taxa !== null) {
    taxaEntrega = taxa;
    taxaEl.className = 'taxa-msg ok';
    taxaEl.innerHTML = `✓ Entrega disponível em <strong>${bairroRaw}</strong> · Taxa: <strong>R$ ${fmtPreco(taxa)}</strong>`;
    rowTaxa.style.display = 'flex';
    ttEntrega.textContent = 'R$ ' + fmtPreco(taxa);
  } else {
    taxaEntrega = -1;
    taxaEl.className = 'taxa-msg err';
    taxaEl.innerHTML = '✗ No momento não entregamos para esse bairro.';
    rowTaxa.style.display = 'none';
  }

  atualizarTotais();
}

/* pagamento */
function onPagChange() {
  const pag = getRadio('pagamento');
  const trocoBox = document.getElementById('trocoBox');
  const rowTaxaCartao = document.getElementById('rowTaxaCartao');

  if (trocoBox) trocoBox.style.display = pag === 'dinheiro' ? 'block' : 'none';
  if (rowTaxaCartao) rowTaxaCartao.style.display = pag === 'cartao' ? 'flex' : 'none';

  if (pag !== 'dinheiro') {
    const cb = document.getElementById('cbTroco');
    const fields = document.getElementById('trocoFields');
    const result = document.getElementById('trocoResult');
    const valorPago = document.getElementById('fValorPago');

    if (cb) cb.checked = false;
    if (fields) fields.style.display = 'none';
    if (result) result.textContent = '';
    if (valorPago) valorPago.value = '';
  }

  atualizarTotais();
}

function onTrocoToggle() {
  const checked = document.getElementById('cbTroco')?.checked;
  const fields = document.getElementById('trocoFields');
  const result = document.getElementById('trocoResult');
  const valorPago = document.getElementById('fValorPago');

  if (fields) fields.style.display = checked ? 'block' : 'none';
  if (!checked) {
    if (result) result.textContent = '';
    if (valorPago) valorPago.value = '';
  }
}

function calcTroco() {
  const total = totalFinal();
  const pago = parseFloat(document.getElementById('fValorPago')?.value || '0') || 0;
  const el = document.getElementById('trocoResult');
  if (!el) return;

  if (pago <= 0) {
    el.textContent = '';
    el.className = 'troco-result';
    return;
  }

  if (pago < total) {
    el.className = 'troco-result insuf';
    el.textContent = `⚠ Valor insuficiente. Faltam R$ ${fmtPreco(total - pago)}`;
  } else {
    el.className = 'troco-result ok';
    el.textContent = `Troco: R$ ${fmtPreco(pago - total)}`;
  }
}

/* totais */
function totalFinal() {
  const sub = subtotalCarrinho();
  const entrega = (taxaEntrega > 0 && getRadio('tipo') === 'entrega') ? taxaEntrega : 0;
  const cartao = getRadio('pagamento') === 'cartao' ? 1.00 : 0;
  return sub + entrega + cartao;
}

function atualizarTotais() {
  const sub = subtotalCarrinho();
  const entrega = (taxaEntrega > 0 && getRadio('tipo') === 'entrega') ? taxaEntrega : 0;
  const cartao = getRadio('pagamento') === 'cartao' ? 1.00 : 0;
  const total = sub + entrega + cartao;

  setText('ttSub', 'R$ ' + fmtPreco(sub));
  setText('ttEntrega', 'R$ ' + fmtPreco(entrega));
  setText('ttTotal', 'R$ ' + fmtPreco(total));

  const rowTaxaEntrega = document.getElementById('rowTaxaEntrega');
  if (rowTaxaEntrega) rowTaxaEntrega.style.display = entrega > 0 ? 'flex' : 'none';
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* finalizar */
function finalizarPedido() {
  const nome = document.getElementById('fNome')?.value.trim() || '';
  const tel = document.getElementById('fTel')?.value.trim() || '';
  const tipo = getRadio('tipo');
  const pag = getRadio('pagamento');

  if (!nome) {
    alerta('Informe seu nome.');
    document.getElementById('fNome')?.focus();
    return;
  }
  if (!tel) {
    alerta('Informe seu WhatsApp.');
    document.getElementById('fTel')?.focus();
    return;
  }
  if (!tipo) {
    alerta('Selecione o tipo de pedido (Retirada ou Entrega).');
    return;
  }
  if (!pag) {
    alerta('Selecione a forma de pagamento.');
    return;
  }
  if (!carrinho.length) {
    alerta('Seu carrinho está vazio!');
    return;
  }

  let rua = '', numero = '', bairro = '', cidade = '', uf = '', cep = '';

  if (tipo === 'entrega') {
    rua = document.getElementById('fRua')?.value.trim() || '';
    numero = document.getElementById('fNum')?.value.trim() || '';
    bairro = document.getElementById('fBairro')?.value.trim() || '';
    cidade = document.getElementById('fCidade')?.value.trim() || '';
    uf = document.getElementById('fUF')?.value.trim() || '';
    cep = document.getElementById('fCep')?.value.trim() || '';

    if (!rua) {
      alerta('Busque o CEP para preencher o endereço.');
      return;
    }
    if (!numero) {
      alerta('Informe o número do endereço.');
      document.getElementById('fNum')?.focus();
      return;
    }
    if (!bairro) {
      alerta('Informe o bairro.');
      document.getElementById('fBairro')?.focus();
      return;
    }
    if (taxaEntrega === -1) {
      alerta('No momento não entregamos para esse bairro. Escolha Retirada ou altere o endereço.');
      return;
    }
    if (taxaEntrega === 0 && bairro) {
      alerta('Bairro não reconhecido. Verifique o bairro ou escolha Retirada.');
      return;
    }
  }

  if (pag === 'dinheiro' && document.getElementById('cbTroco')?.checked) {
    const pago = parseFloat(document.getElementById('fValorPago')?.value || '0') || 0;
    const total = totalFinal();
    if (pago > 0 && pago < total) {
      alerta('O valor informado para troco é menor que o total do pedido.');
      document.getElementById('fValorPago')?.focus();
      return;
    }
  }

  const sub = subtotalCarrinho();
  const entrega = (taxaEntrega > 0 && tipo === 'entrega') ? taxaEntrega : 0;
  const taxaCart = pag === 'cartao' ? 1.00 : 0;
  const total = sub + entrega + taxaCart;

  const valorPago = parseFloat(document.getElementById('fValorPago')?.value || '0') || 0;
  const troco = (pag === 'dinheiro' && document.getElementById('cbTroco')?.checked && valorPago > 0)
    ? (valorPago - total)
    : null;

  const pagLabels = {
    pix: 'Pix',
    cartao: 'Cartão',
    dinheiro: 'Dinheiro'
  };

  numeroPedido += 1;
  localStorage.setItem('pdp_counter', String(numeroPedido));

  const pedido = {
    id: numeroPedido,
    data: new Date().toLocaleString('pt-BR'),
    nome,
    tel,
    tipo,
    endereco: tipo === 'entrega' ? { rua, numero, bairro, cidade, uf, cep } : null,
    itens: carrinho.map(i => ({
      nome: i.nome,
      tamanho: i.tamanho,
      qtd: i.qtd,
      preco: i.preco
    })),
    sub,
    entrega,
    taxaCart,
    total,
    pagamento: pagLabels[pag],
    troco
  };

  pedidos.unshift(pedido);
  localStorage.setItem('pdp_pedidos', JSON.stringify(pedidos));

  const linhasItens = pedido.itens
    .map(i => `  • ${i.qtd}x ${i.nome} (${i.tamanho}) — R$ ${fmtPreco(i.preco * i.qtd)}`)
    .join('\n');

  const msg = [
    `🍕 *PARADA DA PIZZA — Pedido #${String(numeroPedido).padStart(3, '0')}*`,
    ``,
    `👤 *Nome:* ${nome}`,
    `📞 *Telefone:* ${tel}`,
    ``,
    `📦 *Tipo:* ${tipo === 'entrega' ? 'Entrega 🛵' : 'Retirada 🏪'}`,
    tipo === 'entrega' ? `📍 *Endereço:* ${rua}, ${numero} — ${bairro}, ${cidade}-${uf} (CEP: ${cep})` : null,
    ``,
    `🛒 *Itens:*`,
    linhasItens,
    ``,
    `💰 *Subtotal:* R$ ${fmtPreco(sub)}`,
    entrega > 0 ? `🛵 *Entrega:* R$ ${fmtPreco(entrega)}` : null,
    taxaCart > 0 ? `💳 *Taxa cartão:* R$ ${fmtPreco(taxaCart)}` : null,
    `✅ *TOTAL: R$ ${fmtPreco(total)}*`,
    ``,
    `💳 *Pagamento:* ${pagLabels[pag]}`,
    troco !== null ? `💵 *Troco para:* R$ ${fmtPreco(valorPago)} (troco: R$ ${fmtPreco(troco)})` : null,
  ].filter(Boolean).join('\n');

  const waURL = `https://wa.me/5524999057453?text=${encodeURIComponent(msg)}`;
  window.open(waURL, '_blank');

  renderPainel();
}

/* ══════════════════════════════════════════════
   10. PAINEL
══════════════════════════════════════════════ */
function renderPainel() {
  const list = document.getElementById('painelList');
  if (!list) return;

  list.innerHTML = '';

  if (!pedidos.length) {
    list.innerHTML = `
      <div class="painel-empty">
        <big>📋</big>
        <p>Nenhum pedido registrado ainda.</p>
        <small>Os pedidos aparecem aqui após a finalização.</small>
      </div>
    `;
    return;
  }

  pedidos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pedido-card';

    const itensHtml = p.itens
      .map(i => `${i.qtd}x ${i.nome} (${i.tamanho}) — R$ ${fmtPreco(i.preco * i.qtd)}`)
      .join('\n');

    const badgeClass = p.tipo === 'retirada' ? 'badge-retirada' : 'badge-entrega';
    const badgeLabel = p.tipo === 'retirada' ? '🏪 Retirada' : '🛵 Entrega';

    let endHtml = '';
    if (p.endereco) {
      const e = p.endereco;
      endHtml = `<div class="pedido-addr">📍 ${e.rua}, ${e.numero} — ${e.bairro}, ${e.cidade}-${e.uf} (CEP: ${e.cep})</div>`;
    }

    let trocoHtml = '';
    if (p.troco !== null && p.troco !== undefined) {
      trocoHtml = `<div class="pedido-pay">💵 Troco: R$ ${fmtPreco(p.troco)}</div>`;
    }

    card.innerHTML = `
      <div class="pedido-header">
        <div>
          <div class="pedido-num">Pedido #${String(p.id).padStart(3, '0')}</div>
          <div class="pedido-time">${p.data}</div>
        </div>
        <span class="pedido-badge ${badgeClass}">${badgeLabel}</span>
      </div>

      <div>
        <div class="pedido-client-name">${p.nome}</div>
        <div class="pedido-client-tel">📞 ${p.tel}</div>
      </div>

      <pre class="pedido-items" style="font-family:inherit;white-space:pre-wrap;font-size:13px;line-height:1.7">${itensHtml}</pre>
      ${endHtml}
      <div class="pedido-pay">💳 ${p.pagamento}</div>
      ${trocoHtml}

      <div class="pedido-total-line">
        <span>Total</span>
        <span>R$ ${fmtPreco(p.total)}</span>
      </div>

      <div class="pedido-actions">
        <button class="btn-imprimir" onclick="imprimirPedido(${p.id})">🖨️ Imprimir</button>
        <button class="btn-remover-pedido" onclick="removerPedido(${p.id})">✕</button>
      </div>
    `;

    list.appendChild(card);
  });
}

function removerPedido(id) {
  if (!confirm('Remover este pedido?')) return;
  pedidos = pedidos.filter(p => p.id !== id);
  localStorage.setItem('pdp_pedidos', JSON.stringify(pedidos));
  renderPainel();
}

function limparTodos() {
  if (!confirm('Deseja apagar todos os pedidos?')) return;
  pedidos = [];
  localStorage.removeItem('pdp_pedidos');
  renderPainel();
}

/* ══════════════════════════════════════════════
   11. IMPRESSÃO
══════════════════════════════════════════════ */
function imprimirPedido(id) {
  const p = pedidos.find(o => o.id === id);
  if (!p) return;

  const itensHtml = p.itens.map(i => `
    <div class="prt-row">
      <span>${i.qtd}x ${i.nome} (${i.tamanho})</span>
      <span class="r">R$ ${fmtPreco(i.preco * i.qtd)}</span>
    </div>
  `).join('');

  let endBloco = '';
  if (p.endereco) {
    const e = p.endereco;
    endBloco = `
      <div class="prt-section-title">Endereço:</div>
      <div>${e.rua}, ${e.numero}</div>
      <div>${e.bairro}</div>
      <div>${e.cidade} - ${e.uf}</div>
      <div>CEP: ${e.cep}</div>
    `;
  }

  let trocoBloco = '';
  if (p.troco !== null && p.troco !== undefined) {
    trocoBloco = `<div class="prt-row"><span>Troco:</span><span class="r">R$ ${fmtPreco(p.troco)}</span></div>`;
  }

  const printArea = document.getElementById('printArea');
  if (!printArea) return;

  printArea.innerHTML = `
    <div class="prt-logo">PARADA DA PIZZA</div>
    <hr class="prt-sep"/>
    <div class="prt-row"><span><strong>Pedido:</strong></span><span class="r">#${String(p.id).padStart(3, '0')}</span></div>
    <div class="prt-row"><span><strong>Data:</strong></span><span class="r">${p.data}</span></div>
    <hr class="prt-sep"/>

    <div class="prt-row"><span><strong>Cliente:</strong></span><span class="r">${p.nome}</span></div>
    <div class="prt-row"><span><strong>Telefone:</strong></span><span class="r">${p.tel}</span></div>
    <div class="prt-row"><span><strong>Tipo:</strong></span><span class="r">${p.tipo === 'entrega' ? 'Entrega' : 'Retirada'}</span></div>
    ${endBloco}
    <hr class="prt-sep"/>

    <div class="prt-section-title">Itens:</div>
    ${itensHtml}
    <hr class="prt-sep"/>

    <div class="prt-row"><span>Subtotal:</span><span class="r">R$ ${fmtPreco(p.sub)}</span></div>
    ${p.entrega > 0 ? `<div class="prt-row"><span>Entrega:</span><span class="r">R$ ${fmtPreco(p.entrega)}</span></div>` : ''}
    ${p.taxaCart > 0 ? `<div class="prt-row"><span>Taxa Cartão:</span><span class="r">R$ ${fmtPreco(p.taxaCart)}</span></div>` : ''}
    <div class="prt-total prt-row"><span>TOTAL:</span><span class="r">R$ ${fmtPreco(p.total)}</span></div>
    <hr class="prt-sep"/>

    <div class="prt-row"><span>Pagamento:</span><span class="r">${p.pagamento}</span></div>
    ${trocoBloco}

    <div class="prt-rodape">
      ---- Obrigado pela preferência! ----<br/>
      instagram: @paradadapizza_bm<br/>
      (24) 99905-7453
    </div>
  `;

  window.print();
}

/* ══════════════════════════════════════════════
   12. ADMIN OCULTO
══════════════════════════════════════════════ */
function bindAdminSecretAccess() {
  const trigger = document.getElementById('brandNameTrigger');
  if (!trigger) return;

  trigger.addEventListener('click', () => {
    const now = Date.now();

    if (now - adminLastClickTime <= 1500) {
      adminClickCount += 1;
    } else {
      adminClickCount = 1;
    }

    adminLastClickTime = now;

    if (adminClickCount >= 3) {
      adminClickCount = 0;

      const senha = window.prompt('Acesso restrito - paradadapizza');
      if (senha === ADMIN_PASSWORD) {
        goView('painel');
      } else if (senha !== null) {
        alert('Acesso negado');
      }
    }
  });
}

/* ══════════════════════════════════════════════
   13. UTILITÁRIOS
══════════════════════════════════════════════ */
function fmtPreco(v) {
  return Number(v).toFixed(2).replace('.', ',');
}

function normalizar(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getRadio(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function setMsg(el, txt, tipo) {
  el.textContent = txt;
  el.className = 'fmsg' + (tipo ? ' ' + tipo : '');
}

function alerta(msg) {
  alert('⚠️ ' + msg);
}

function abrirOverlay(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharOverlay(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════
   14. INIT
══════════════════════════════════════════════ */
(function init() {
  renderCardapio();
  atualizarCarrinhoUI();
  bindCategoryFilter();
  bindAdminSecretAccess();

  const fCep = document.getElementById('fCep');
  if (fCep) {
    fCep.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        buscarCep();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
      e.preventDefault();
    }
  });
})();