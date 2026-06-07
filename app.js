const stocks = [
  {
    ticker: 'NVDA',
    name: 'NVIDIA',
    market: 'US',
    sector: 'AI',
    price: 143.8,
    momentum: 88,
    quality: 86,
    valuationRisk: 78,
    drawdownRisk: 62,
    liquidity: 96,
    growth: 92,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: 'AI 加速计算需求仍强，但估值已经包含较高增长预期。',
    bear: '若云厂商资本开支放缓或毛利率回落，估值压力会快速放大。',
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft',
    market: 'US',
    sector: 'AI',
    price: 468.1,
    momentum: 74,
    quality: 91,
    valuationRisk: 58,
    drawdownRisk: 42,
    liquidity: 95,
    growth: 74,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '云、AI 助手和企业软件形成高质量复合增长。',
    bear: 'AI 投入期资本开支高，短期利润率和估值扩张空间受限。',
  },
  {
    ticker: 'AAPL',
    name: 'Apple',
    market: 'US',
    sector: 'Consumer',
    price: 203.2,
    momentum: 55,
    quality: 88,
    valuationRisk: 54,
    drawdownRisk: 38,
    liquidity: 94,
    growth: 46,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '现金流质量和生态粘性强，适合作为质量型观察标的。',
    bear: '硬件换机周期疲弱时，收入增长弹性不足。',
  },
  {
    ticker: 'LLY',
    name: 'Eli Lilly',
    market: 'US',
    sector: 'Healthcare',
    price: 812.4,
    momentum: 76,
    quality: 82,
    valuationRisk: 73,
    drawdownRisk: 48,
    liquidity: 88,
    growth: 85,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: 'GLP-1 需求和管线预期支撑成长叙事。',
    bear: '药品定价、产能兑现和竞品数据可能压缩估值。',
  },
  {
    ticker: 'JPM',
    name: 'JPMorgan Chase',
    market: 'US',
    sector: 'Finance',
    price: 221.7,
    momentum: 70,
    quality: 78,
    valuationRisk: 35,
    drawdownRisk: 45,
    liquidity: 90,
    growth: 52,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '大型银行资产质量和盈利韧性较强，估值风险相对低。',
    bear: '经济下行、信贷损失或利率曲线变化会影响利润。',
  },
  {
    ticker: 'XOM',
    name: 'Exxon Mobil',
    market: 'US',
    sector: 'Energy',
    price: 117.3,
    momentum: 58,
    quality: 72,
    valuationRisk: 38,
    drawdownRisk: 52,
    liquidity: 89,
    growth: 38,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '现金流和分红回购能力强，适合能源周期配置观察。',
    bear: '油价下行会直接压缩盈利和资本回报。',
  },
  {
    ticker: 'TSLA',
    name: 'Tesla',
    market: 'US',
    sector: 'EV',
    price: 188.9,
    momentum: 43,
    quality: 54,
    valuationRisk: 82,
    drawdownRisk: 86,
    liquidity: 95,
    growth: 61,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '自动驾驶和储能叙事有弹性，但基本面波动大。',
    bear: '价格战、利润率下滑和估值高波动会放大回撤。',
  },
  {
    ticker: 'ASML',
    name: 'ASML Holding',
    market: 'US',
    sector: 'AI',
    price: 952.6,
    momentum: 68,
    quality: 89,
    valuationRisk: 66,
    drawdownRisk: 55,
    liquidity: 72,
    growth: 77,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '先进制程设备稀缺性强，是半导体资本开支核心环节。',
    bear: '出口限制和晶圆厂资本开支周期会影响订单。',
  },
  {
    ticker: '600519',
    name: '贵州茅台',
    market: 'CN',
    sector: 'Consumer',
    price: 1580,
    momentum: 48,
    quality: 92,
    valuationRisk: 46,
    drawdownRisk: 50,
    liquidity: 78,
    growth: 42,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '品牌、渠道和利润率质量高，适合质量因子观察。',
    bear: '消费景气和高端白酒批价走弱会压制估值。',
  },
  {
    ticker: '00700',
    name: '腾讯控股',
    market: 'CN',
    sector: 'AI',
    price: 386.4,
    momentum: 66,
    quality: 84,
    valuationRisk: 42,
    drawdownRisk: 58,
    liquidity: 82,
    growth: 62,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '游戏、广告、云和 AI 应用构成现金流与再增长组合。',
    bear: '监管、消费和云竞争会影响估值弹性。',
  },
  {
    ticker: '300750',
    name: '宁德时代',
    market: 'CN',
    sector: 'EV',
    price: 205.6,
    momentum: 59,
    quality: 76,
    valuationRisk: 50,
    drawdownRisk: 63,
    liquidity: 81,
    growth: 64,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '动力电池龙头地位强，海外储能和技术迭代提供看点。',
    bear: '产业链价格压力和新能源车增速放缓会影响利润。',
  },
  {
    ticker: 'PDD',
    name: 'PDD Holdings',
    market: 'US',
    sector: 'Consumer',
    price: 142.5,
    momentum: 62,
    quality: 79,
    valuationRisk: 45,
    drawdownRisk: 70,
    liquidity: 86,
    growth: 88,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '跨境电商增长快，利润弹性强。',
    bear: '海外监管、补贴强度和竞争加剧可能影响利润质量。',
  },
];

const presets = {
  balanced: {
    name: '均衡成长',
    minScore: 68,
    momentum: 55,
    quality: 60,
    valuationRisk: 78,
    drawdown: 72,
    positiveCashFlow: true,
    profitable: true,
    liquid: true,
    hasCatalyst: false,
  },
  growth: {
    name: '高成长',
    minScore: 74,
    momentum: 62,
    quality: 55,
    valuationRisk: 86,
    drawdown: 78,
    positiveCashFlow: false,
    profitable: true,
    liquid: true,
    hasCatalyst: true,
  },
  quality: {
    name: '高质量',
    minScore: 76,
    momentum: 45,
    quality: 78,
    valuationRisk: 68,
    drawdown: 62,
    positiveCashFlow: true,
    profitable: true,
    liquid: true,
    hasCatalyst: false,
  },
  defensive: {
    name: '防守低波',
    minScore: 68,
    momentum: 40,
    quality: 68,
    valuationRisk: 58,
    drawdown: 55,
    positiveCashFlow: true,
    profitable: true,
    liquid: true,
    hasCatalyst: false,
  },
};

const els = {
  matchCount: document.getElementById('matchCount'),
  topScore: document.getElementById('topScore'),
  strategyName: document.getElementById('strategyName'),
  dataStamp: document.getElementById('dataStamp'),
  market: document.getElementById('marketInput'),
  sector: document.getElementById('sectorInput'),
  minScore: document.getElementById('minScoreInput'),
  momentum: document.getElementById('momentumInput'),
  quality: document.getElementById('qualityInput'),
  valuationRisk: document.getElementById('valuationRiskInput'),
  drawdown: document.getElementById('drawdownInput'),
  minScoreValue: document.getElementById('minScoreValue'),
  momentumValue: document.getElementById('momentumValue'),
  qualityValue: document.getElementById('qualityValue'),
  valuationRiskValue: document.getElementById('valuationRiskValue'),
  drawdownValue: document.getElementById('drawdownValue'),
  positiveCashFlow: document.getElementById('positiveCashFlowInput'),
  profitable: document.getElementById('profitableInput'),
  liquid: document.getElementById('liquidInput'),
  hasCatalyst: document.getElementById('hasCatalystInput'),
  sort: document.getElementById('sortInput'),
  stockRows: document.getElementById('stockRows'),
  emptyState: document.getElementById('emptyState'),
  selectedCard: document.getElementById('selectedCard'),
  momentumMeter: document.getElementById('momentumMeter'),
  qualityMeter: document.getElementById('qualityMeter'),
  valuationMeter: document.getElementById('valuationMeter'),
  riskMeter: document.getElementById('riskMeter'),
  quantList: document.getElementById('quantList'),
  subjectiveList: document.getElementById('subjectiveList'),
  riskList: document.getElementById('riskList'),
  compareGrid: document.getElementById('compareGrid'),
  reset: document.getElementById('resetBtn'),
  copy: document.getElementById('copyBtn'),
  tabs: Array.from(document.querySelectorAll('.tab-btn')),
};

let selectedTicker = stocks[0].ticker;
let activePreset = 'balanced';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function scoreStock(stock) {
  const valuationSafety = 100 - stock.valuationRisk;
  const riskSafety = 100 - stock.drawdownRisk;
  const quant = Math.round(
    stock.momentum * 0.22 +
    stock.quality * 0.2 +
    valuationSafety * 0.14 +
    riskSafety * 0.14 +
    stock.liquidity * 0.12 +
    stock.growth * 0.18
  );
  const subjective = Math.round(
    stock.growth * 0.42 +
    (stock.catalyst ? 88 : 52) * 0.28 +
    stock.quality * 0.18 +
    riskSafety * 0.12
  );
  const score = Math.round(quant * 0.7 + subjective * 0.3);
  return { score, quant, subjective, valuationSafety, riskSafety };
}

function labelFor(stock, score) {
  if (stock.drawdownRisk >= 78 || stock.valuationRisk >= 82) return '高风险观察';
  if (score >= 82) return '重点研究';
  if (score >= 74) return '候选';
  if (score >= 66) return '观察';
  return '剔除';
}

function riskClass(stock) {
  if (stock.drawdownRisk >= 78 || stock.valuationRisk >= 80) return 'danger';
  if (stock.drawdownRisk >= 62 || stock.valuationRisk >= 68) return 'warn';
  return 'ok';
}

function getFilters() {
  return {
    market: els.market.value,
    sector: els.sector.value,
    minScore: Number(els.minScore.value),
    momentum: Number(els.momentum.value),
    quality: Number(els.quality.value),
    valuationRisk: Number(els.valuationRisk.value),
    drawdown: Number(els.drawdown.value),
    positiveCashFlow: els.positiveCashFlow.checked,
    profitable: els.profitable.checked,
    liquid: els.liquid.checked,
    hasCatalyst: els.hasCatalyst.checked,
    sort: els.sort.value,
  };
}

function enrichedStocks() {
  return stocks.map(stock => ({ ...stock, ...scoreStock(stock) }));
}

function passesFilters(stock, filters) {
  if (filters.market !== 'all' && stock.market !== filters.market) return false;
  if (filters.sector !== 'all' && stock.sector !== filters.sector) return false;
  if (stock.score < filters.minScore) return false;
  if (stock.momentum < filters.momentum) return false;
  if (stock.quality < filters.quality) return false;
  if (stock.valuationRisk > filters.valuationRisk) return false;
  if (stock.drawdownRisk > filters.drawdown) return false;
  if (filters.positiveCashFlow && !stock.fcfPositive) return false;
  if (filters.profitable && !stock.profitable) return false;
  if (filters.liquid && stock.liquidity < 70) return false;
  if (filters.hasCatalyst && !stock.catalyst) return false;
  return true;
}

function sortStocks(list, sortKey) {
  return [...list].sort((a, b) => {
    if (sortKey === 'momentum') return b.momentum - a.momentum;
    if (sortKey === 'quality') return b.quality - a.quality;
    if (sortKey === 'risk') return a.drawdownRisk - b.drawdownRisk;
    if (sortKey === 'valuation') return a.valuationRisk - b.valuationRisk;
    return b.score - a.score;
  });
}

function formatPrice(stock) {
  const prefix = stock.market === 'US' ? '$' : '¥/HK$ ';
  return `${prefix}${stock.price.toFixed(stock.price > 1000 ? 0 : 1)}`;
}

function renderRows(list) {
  els.stockRows.innerHTML = list.map(stock => `
    <tr class="${stock.ticker === selectedTicker ? 'selected' : ''}" data-ticker="${escapeHtml(stock.ticker)}">
      <td><button class="ticker-btn" type="button">${escapeHtml(stock.ticker)}</button></td>
      <td>${escapeHtml(stock.name)}</td>
      <td>${escapeHtml(stock.sector)}</td>
      <td><strong>${stock.score}</strong></td>
      <td>${stock.quant}</td>
      <td>${stock.subjective}</td>
      <td><span class="risk-pill ${riskClass(stock)}">${stock.drawdownRisk}</span></td>
      <td>${escapeHtml(labelFor(stock, stock.score))}</td>
    </tr>
  `).join('');
}

function renderSelected(stock) {
  const label = labelFor(stock, stock.score);
  els.selectedCard.innerHTML = `
    <div>
      <span class="market-tag">${escapeHtml(stock.market)}</span>
      <h3>${escapeHtml(stock.ticker)} ${escapeHtml(stock.name)}</h3>
      <p>${escapeHtml(stock.sector)} · ${formatPrice(stock)}</p>
    </div>
    <strong>${stock.score}</strong>
    <span class="status-line">${escapeHtml(label)}</span>
  `;
  els.momentumMeter.value = stock.momentum;
  els.qualityMeter.value = stock.quality;
  els.valuationMeter.value = stock.valuationSafety;
  els.riskMeter.value = stock.riskSafety;
  els.quantList.innerHTML = [
    `趋势/动量：${stock.momentum}，${stock.momentum >= 70 ? '价格强势明确' : '趋势证据一般'}`,
    `质量/盈利：${stock.quality}，${stock.profitable ? '盈利状态通过' : '盈利状态未通过'}`,
    `估值风险：${stock.valuationRisk}，${stock.valuationRisk <= 60 ? '估值压力可控' : '估值压力偏高'}`,
    `流动性：${stock.liquidity}，${stock.liquidity >= 70 ? '交易容量通过' : '流动性不足'}`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
  els.subjectiveList.innerHTML = [
    `长期逻辑：${stock.thesis}`,
    `催化剂：${stock.catalyst ? '存在近期催化剂，需要跟踪兑现节奏' : '缺少明确短期催化剂，更适合观察'}`,
    `反方观点：${stock.bear}`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
  els.riskList.innerHTML = [
    `最大仓位建议：单票不超过自定义组合上限，未做适当性评估前不输出买入指令。`,
    `触发复查：综合分跌破 ${Math.max(60, stock.score - 10)}、回撤风险升至 75 以上、或核心逻辑被财报/新闻证伪。`,
    `数据缺口：当前为示例静态数据，真实使用必须接入行情、财报、公告和新闻更新时间。`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderCompare(list) {
  const top = list.slice(0, 5);
  els.compareGrid.innerHTML = top.map(stock => `
    <article class="compare-card">
      <div>
        <b>${escapeHtml(stock.ticker)}</b>
        <span>${escapeHtml(stock.name)}</span>
      </div>
      <div class="mini-bars">
        <span style="--w:${stock.score}%"><i>综合 ${stock.score}</i></span>
        <span style="--w:${stock.momentum}%"><i>动量 ${stock.momentum}</i></span>
        <span style="--w:${stock.quality}%"><i>质量 ${stock.quality}</i></span>
      </div>
    </article>
  `).join('');
}

function updateLabels() {
  els.minScoreValue.textContent = els.minScore.value;
  els.momentumValue.textContent = els.momentum.value;
  els.qualityValue.textContent = els.quality.value;
  els.valuationRiskValue.textContent = els.valuationRisk.value;
  els.drawdownValue.textContent = els.drawdown.value;
  els.strategyName.textContent = presets[activePreset]?.name ?? '自定义';
  els.dataStamp.textContent = '示例数据 2026-06-08';
}

function render() {
  updateLabels();
  const filters = getFilters();
  const list = sortStocks(enrichedStocks().filter(stock => passesFilters(stock, filters)), filters.sort);
  if (!list.some(stock => stock.ticker === selectedTicker)) {
    selectedTicker = list[0]?.ticker ?? stocks[0].ticker;
  }
  const selected = enrichedStocks().find(stock => stock.ticker === selectedTicker) ?? enrichedStocks()[0];
  els.matchCount.textContent = list.length;
  els.topScore.textContent = list[0]?.score ?? 0;
  els.emptyState.hidden = list.length > 0;
  renderRows(list);
  renderSelected(selected);
  renderCompare(list);
}

function applyPreset(key) {
  activePreset = key;
  const preset = presets[key];
  els.minScore.value = preset.minScore;
  els.momentum.value = preset.momentum;
  els.quality.value = preset.quality;
  els.valuationRisk.value = preset.valuationRisk;
  els.drawdown.value = preset.drawdown;
  els.positiveCashFlow.checked = preset.positiveCashFlow;
  els.profitable.checked = preset.profitable;
  els.liquid.checked = preset.liquid;
  els.hasCatalyst.checked = preset.hasCatalyst;
  els.tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.preset === key)));
  render();
}

function analysisText() {
  const stock = enrichedStocks().find(item => item.ticker === selectedTicker) ?? enrichedStocks()[0];
  return [
    `标的/主题：${stock.ticker} ${stock.name}`,
    '数据时点：示例静态数据 2026-06-08',
    '适用对象假设：仅用于研究筛选，不构成个性化投资建议',
    '',
    `量化评分70：${stock.quant}`,
    `- 趋势/动量：${stock.momentum}`,
    `- 估值/质量：质量 ${stock.quality}；估值风险 ${stock.valuationRisk}`,
    `- 波动/回撤：回撤风险 ${stock.drawdownRisk}`,
    `- 流动性/交易成本：${stock.liquidity}`,
    '',
    `主观评分30：${stock.subjective}`,
    `- 长期逻辑：${stock.thesis}`,
    `- 催化剂：${stock.catalyst ? '有' : '无明确短期催化剂'}`,
    `- 反方观点：${stock.bear}`,
    '',
    `最终状态：${labelFor(stock, stock.score)}`,
    '建议动作：进入研究清单；真实交易前必须更新行情、财报、新闻和个人风险约束。',
    '仓位/风控：未做适当性评估前不输出买入仓位；单票需设置最大损失和复查触发器。',
  ].join('\n');
}

[
  els.market,
  els.sector,
  els.minScore,
  els.momentum,
  els.quality,
  els.valuationRisk,
  els.drawdown,
  els.positiveCashFlow,
  els.profitable,
  els.liquid,
  els.hasCatalyst,
  els.sort,
].forEach(input => {
  input.addEventListener('input', () => {
    activePreset = 'custom';
    els.tabs.forEach(tab => tab.setAttribute('aria-pressed', 'false'));
    render();
  });
  input.addEventListener('change', () => {
    activePreset = 'custom';
    els.tabs.forEach(tab => tab.setAttribute('aria-pressed', 'false'));
    render();
  });
});

els.stockRows.addEventListener('click', event => {
  const row = event.target.closest('[data-ticker]');
  if (!row) return;
  selectedTicker = row.dataset.ticker;
  render();
});

els.tabs.forEach(tab => {
  tab.addEventListener('click', () => applyPreset(tab.dataset.preset));
});

els.reset.addEventListener('click', () => {
  els.market.value = 'all';
  els.sector.value = 'all';
  els.sort.value = 'score';
  selectedTicker = stocks[0].ticker;
  applyPreset('balanced');
});

els.copy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(analysisText());
    els.copy.textContent = '已复制';
    setTimeout(() => {
      els.copy.textContent = '复制分析';
    }, 1400);
  } catch (_) {
    els.copy.textContent = '复制失败';
  }
});

applyPreset('balanced');
