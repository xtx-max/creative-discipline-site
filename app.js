let stocks = [
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

const sampleStocks = stocks.map(stock => ({ ...stock }));

const stockMeta = {
  NVDA: {
    cyclePhase: 'acceleration',
    cycleLabel: '加速确认',
    cycleElasticity: 93,
    earningsInflection: 84,
    narrativePower: 96,
    optionality: 88,
    pathMultiple: 5.8,
    tenXGate: true,
    path: 'AI 算力周期仍在扩张，若推理需求、网络和软件栈继续放量，存在高弹性路径。',
    invalidation: '云厂商资本开支连续下修、毛利率明显跌破预期、订单能见度下降。',
  },
  MSFT: {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 68,
    earningsInflection: 72,
    narrativePower: 82,
    optionality: 64,
    pathMultiple: 3.2,
    tenXGate: false,
    path: '质量和现金流强，但市值基数大，更像稳健复合而非一周期十倍候选。',
    invalidation: 'AI 投入无法转化为收入增长，云增长继续放缓。',
  },
  AAPL: {
    cyclePhase: 'late',
    cycleLabel: '后段拥挤',
    cycleElasticity: 42,
    earningsInflection: 46,
    narrativePower: 60,
    optionality: 44,
    pathMultiple: 2.1,
    tenXGate: false,
    path: '现金流质量强，但当前更偏质量资产，缺少一周期十倍所需的收入和估值双击。',
    invalidation: '硬件周期继续走弱，服务业务增速无法抵消估值压力。',
  },
  LLY: {
    cyclePhase: 'acceleration',
    cycleLabel: '加速确认',
    cycleElasticity: 79,
    earningsInflection: 86,
    narrativePower: 88,
    optionality: 76,
    pathMultiple: 4.8,
    tenXGate: true,
    path: '减重药和代谢疾病周期仍有放量空间，关键在产能、适应症扩展和定价韧性。',
    invalidation: '竞品临床数据显著优于预期，医保/定价压力超预期，产能兑现失败。',
  },
  JPM: {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 35,
    earningsInflection: 54,
    narrativePower: 42,
    optionality: 34,
    pathMultiple: 1.9,
    tenXGate: false,
    path: '适合金融质量和周期配置，不符合一周期十倍的高弹性要求。',
    invalidation: '信用损失上行、净息差收缩、监管资本要求提高。',
  },
  XOM: {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 44,
    earningsInflection: 38,
    narrativePower: 36,
    optionality: 40,
    pathMultiple: 2.3,
    tenXGate: false,
    path: '能源现金流和回购较强，但十倍路径更依赖极端周期价格，不适合作为默认候选。',
    invalidation: '油价中枢下移、资本回报下降、成本曲线恶化。',
  },
  TSLA: {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 86,
    earningsInflection: 46,
    narrativePower: 92,
    optionality: 95,
    pathMultiple: 6.4,
    tenXGate: true,
    path: '自动驾驶、机器人和储能提供期权性，但基本面和回撤风险使其只能进入高风险观察。',
    invalidation: '汽车利润率继续下行，FSD 商业化延后，现金流无法支持叙事。',
  },
  ASML: {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 74,
    earningsInflection: 78,
    narrativePower: 82,
    optionality: 72,
    pathMultiple: 5.1,
    tenXGate: true,
    path: '先进制程设备稀缺，若半导体资本开支从底部重新扩张，具备周期弹性。',
    invalidation: '先进制程需求推迟、出口限制扩大、订单恢复低于预期。',
  },
  '600519': {
    cyclePhase: 'late',
    cycleLabel: '后段拥挤',
    cycleElasticity: 28,
    earningsInflection: 40,
    narrativePower: 44,
    optionality: 24,
    pathMultiple: 1.8,
    tenXGate: false,
    path: '高质量现金流资产，但不符合十倍候选所需的高增长和高期权性。',
    invalidation: '批价持续下行、消费景气走弱、渠道库存压力上升。',
  },
  '00700': {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 70,
    earningsInflection: 72,
    narrativePower: 76,
    optionality: 68,
    pathMultiple: 4.3,
    tenXGate: true,
    path: '游戏、广告、AI 应用和回购形成再增长组合，关键在利润再加速能否兑现。',
    invalidation: '核心业务增长停滞，监管压力回升，AI 投入无法形成商业化。',
  },
  '300750': {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 76,
    earningsInflection: 66,
    narrativePower: 70,
    optionality: 72,
    pathMultiple: 4.5,
    tenXGate: true,
    path: '动力电池、储能和海外市场若重新进入利润扩张，具备周期修复弹性。',
    invalidation: '价格战持续、海外扩张受阻、储能利润率不达预期。',
  },
  PDD: {
    cyclePhase: 'acceleration',
    cycleLabel: '加速确认',
    cycleElasticity: 88,
    earningsInflection: 90,
    narrativePower: 84,
    optionality: 82,
    pathMultiple: 7.2,
    tenXGate: true,
    path: '跨境电商和平台效率提供高增长路径，关键在监管、补贴和利润质量。',
    invalidation: '海外监管显著收紧，获客成本失控，利润质量无法验证。',
  },
};

const presets = {
  tenx: {
    name: '一周期十倍',
    minScore: 64,
    pathScore: 72,
    pathMultiple: 4,
    momentum: 50,
    quality: 55,
    valuationRisk: 86,
    drawdown: 78,
    positiveCashFlow: true,
    profitable: true,
    liquid: true,
    hasCatalyst: true,
    tenXGate: true,
    qualityGate: false,
  },
  inflection: {
    name: '早期拐点',
    minScore: 60,
    pathScore: 66,
    pathMultiple: 3,
    momentum: 45,
    quality: 50,
    valuationRisk: 88,
    drawdown: 82,
    positiveCashFlow: false,
    profitable: false,
    liquid: true,
    hasCatalyst: false,
    tenXGate: false,
    qualityGate: false,
  },
  quality: {
    name: '质量十倍',
    minScore: 68,
    pathScore: 60,
    pathMultiple: 2,
    momentum: 45,
    quality: 78,
    valuationRisk: 68,
    drawdown: 62,
    positiveCashFlow: true,
    profitable: true,
    liquid: true,
    hasCatalyst: false,
    tenXGate: false,
    qualityGate: false,
  },
  defensive: {
    name: '防守观察',
    minScore: 62,
    pathScore: 45,
    pathMultiple: 1,
    momentum: 40,
    quality: 68,
    valuationRisk: 58,
    drawdown: 55,
    positiveCashFlow: true,
    profitable: true,
    liquid: true,
    hasCatalyst: false,
    tenXGate: false,
    qualityGate: false,
  },
};

const els = {
  matchCount: document.getElementById('matchCount'),
  topScore: document.getElementById('topScore'),
  strategyName: document.getElementById('strategyName'),
  dataStamp: document.getElementById('dataStamp'),
  market: document.getElementById('marketInput'),
  sector: document.getElementById('sectorInput'),
  cycle: document.getElementById('cycleInput'),
  pathScore: document.getElementById('pathScoreInput'),
  pathMultiple: document.getElementById('pathMultipleInput'),
  minScore: document.getElementById('minScoreInput'),
  momentum: document.getElementById('momentumInput'),
  quality: document.getElementById('qualityInput'),
  valuationRisk: document.getElementById('valuationRiskInput'),
  drawdown: document.getElementById('drawdownInput'),
  pathScoreValue: document.getElementById('pathScoreValue'),
  pathMultipleValue: document.getElementById('pathMultipleValue'),
  minScoreValue: document.getElementById('minScoreValue'),
  momentumValue: document.getElementById('momentumValue'),
  qualityValue: document.getElementById('qualityValue'),
  valuationRiskValue: document.getElementById('valuationRiskValue'),
  drawdownValue: document.getElementById('drawdownValue'),
  positiveCashFlow: document.getElementById('positiveCashFlowInput'),
  profitable: document.getElementById('profitableInput'),
  liquid: document.getElementById('liquidInput'),
  hasCatalyst: document.getElementById('hasCatalystInput'),
  tenXGate: document.getElementById('tenXGateInput'),
  qualityGate: document.getElementById('qualityGateInput'),
  dataInput: document.getElementById('dataInput'),
  importBtn: document.getElementById('importBtn'),
  sampleBtn: document.getElementById('sampleBtn'),
  importStatus: document.getElementById('importStatus'),
  sort: document.getElementById('sortInput'),
  stockRows: document.getElementById('stockRows'),
  emptyState: document.getElementById('emptyState'),
  selectedCard: document.getElementById('selectedCard'),
  momentumMeter: document.getElementById('momentumMeter'),
  qualityMeter: document.getElementById('qualityMeter'),
  valuationMeter: document.getElementById('valuationMeter'),
  riskMeter: document.getElementById('riskMeter'),
  pathCard: document.getElementById('pathCard'),
  quantList: document.getElementById('quantList'),
  subjectiveList: document.getElementById('subjectiveList'),
  pathList: document.getElementById('pathList'),
  riskList: document.getElementById('riskList'),
  qualityCard: document.getElementById('qualityCard'),
  qualityList: document.getElementById('qualityList'),
  watchlistBtn: document.getElementById('watchlistBtn'),
  clearWatchlistBtn: document.getElementById('clearWatchlistBtn'),
  watchlistRows: document.getElementById('watchlistRows'),
  journalLabel: document.getElementById('journalLabelInput'),
  journalNote: document.getElementById('journalNoteInput'),
  saveJournal: document.getElementById('saveJournalBtn'),
  exportJournal: document.getElementById('exportJournalBtn'),
  journalStatus: document.getElementById('journalStatus'),
  journalRows: document.getElementById('journalRows'),
  compareGrid: document.getElementById('compareGrid'),
  reviewGrid: document.getElementById('reviewGrid'),
  reset: document.getElementById('resetBtn'),
  copy: document.getElementById('copyBtn'),
  tabs: Array.from(document.querySelectorAll('.tab-btn')),
};

let selectedTicker = stocks[0].ticker;
let activePreset = 'tenx';
let dataMode = 'sample';
const qualityThreshold = 70;
const storageKeys = {
  watchlist: 'tenx-cycle-watchlist-v1',
  journal: 'tenx-cycle-journal-v1',
};

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {
    return false;
  }
  return true;
}

let watchlist = readStorage(storageKeys.watchlist, []);
let journal = readStorage(storageKeys.journal, []);

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

function hasText(value) {
  return String(value ?? '').trim().length > 0;
}

function hasNumber(value) {
  return Number.isFinite(Number(value));
}

function qualityClass(score) {
  if (score >= 85) return 'ok';
  if (score >= qualityThreshold) return 'warn';
  return 'danger';
}

function assessDataQuality(stock) {
  const missingFields = stock.missingFields ?? [];
  const missingPathText = [
    stock.thesis,
    stock.bear,
    stock.path,
    stock.invalidation,
  ].some(value => String(value ?? '').includes('未提供') || String(value ?? '').includes('数据缺失'));
  const checks = [
    {
      label: '基础标识',
      ok: hasText(stock.ticker) && hasText(stock.name) && hasText(stock.market) && hasText(stock.sector),
      fix: '补齐 ticker、name、market、sector。',
    },
    {
      label: '行情与因子',
      ok: stock.price > 0 &&
        ['momentum', 'quality', 'valuationRisk', 'drawdownRisk', 'liquidity', 'growth'].every(field => hasNumber(stock[field])),
      fix: '补齐价格、动量、质量、估值风险、回撤风险、流动性和增长字段。',
    },
    {
      label: '十倍路径',
      ok: stock.pathMultiple > 0 && hasText(stock.path) && hasText(stock.thesis) && !missingPathText,
      fix: '补齐 thesis、path、pathMultiple，并说明上限情景不是承诺收益。',
    },
    {
      label: '反方与失效',
      ok: hasText(stock.bear) && hasText(stock.invalidation) && !missingPathText,
      fix: '补齐 bear 和 invalidation，明确何时降级或剔除。',
    },
    {
      label: '来源与时间',
      ok: stock.source !== 'imported' || hasText(stock.dataDate),
      fix: '导入数据建议提供 dataDate/asOf/updatedAt，便于复盘。',
    },
  ];
  const score = Math.round((checks.filter(check => check.ok).length / checks.length) * 100);
  const warnings = checks
    .filter(check => !check.ok)
    .map(check => `${check.label}：${check.fix}`);
  if (stock.source === 'imported') {
    warnings.unshift(`本地导入：来源为 ${stock.dataSource || '未标注'}，需自行核验原始数据。`);
  } else {
    warnings.push('示例静态数据：仅用于验证界面和筛选逻辑，不能替代实时行情和公告。');
  }
  if (missingFields.length) {
    warnings.push(`导入缺失字段：${missingFields.slice(0, 8).join(', ')}${missingFields.length > 8 ? ' 等' : ''}`);
  }
  return {
    score,
    passed: score >= qualityThreshold,
    status: score >= qualityThreshold ? '可进入研究' : '需补数据',
    warnings,
    checks,
  };
}

function scoreStock(stock) {
  const valuationSafety = 100 - stock.valuationRisk;
  const riskSafety = 100 - stock.drawdownRisk;
  const pathPenalty = stock.valuationRisk * 0.07 + stock.drawdownRisk * 0.08;
  const pathScore = clamp(Math.round(
    stock.cycleElasticity * 0.22 +
    stock.earningsInflection * 0.2 +
    stock.narrativePower * 0.17 +
    stock.optionality * 0.18 +
    stock.growth * 0.1 +
    stock.momentum * 0.08 +
    stock.liquidity * 0.05 -
    pathPenalty
  ));
  const quant = Math.round(
    stock.momentum * 0.22 +
    stock.quality * 0.2 +
    valuationSafety * 0.14 +
    riskSafety * 0.14 +
    stock.liquidity * 0.12 +
    stock.growth * 0.18
  );
  const subjective = Math.round(
    stock.narrativePower * 0.28 +
    stock.optionality * 0.22 +
    stock.growth * 0.2 +
    (stock.catalyst ? 88 : 52) * 0.18 +
    riskSafety * 0.12
  );
  const score = Math.round(quant * 0.52 + subjective * 0.2 + pathScore * 0.28);
  return { score, quant, subjective, pathScore, valuationSafety, riskSafety };
}

function labelFor(stock, score) {
  if (stock.drawdownRisk >= 82 || stock.valuationRisk >= 88) return '高风险观察';
  if (stock.tenXGate && stock.pathScore >= 82 && stock.pathMultiple >= 6) return '十倍核心候选';
  if (stock.tenXGate && stock.pathScore >= 72 && stock.pathMultiple >= 4) return '十倍候选';
  if (score >= 66) return '路径待验证';
  if (!stock.tenXGate && stock.quality >= 78) return '非十倍质量池';
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
    cycle: els.cycle.value,
    pathScore: Number(els.pathScore.value),
    pathMultiple: Number(els.pathMultiple.value),
    minScore: Number(els.minScore.value),
    momentum: Number(els.momentum.value),
    quality: Number(els.quality.value),
    valuationRisk: Number(els.valuationRisk.value),
    drawdown: Number(els.drawdown.value),
    positiveCashFlow: els.positiveCashFlow.checked,
    profitable: els.profitable.checked,
    liquid: els.liquid.checked,
    hasCatalyst: els.hasCatalyst.checked,
    tenXGate: els.tenXGate.checked,
    qualityGate: els.qualityGate.checked,
    sort: els.sort.value,
  };
}

function enrichedStocks() {
  return stocks.map(stock => {
    const defaultMeta = {
      cyclePhase: 'mid',
      cycleLabel: '中段扩张',
      cycleElasticity: 50,
      earningsInflection: 50,
      narrativePower: 50,
      optionality: 50,
      pathMultiple: 2,
      tenXGate: false,
      path: '缺少十倍路径数据。',
      invalidation: '数据缺失。',
    };
    const meta = stock.source === 'imported'
      ? { ...defaultMeta, ...stock }
      : { ...defaultMeta, ...stock, ...(stockMeta[stock.ticker] ?? {}) };
    const full = { ...stock, ...meta };
    const scored = { ...full, ...scoreStock(full) };
    return { ...scored, dataQuality: assessDataQuality(scored) };
  });
}

function passesFilters(stock, filters) {
  if (filters.market !== 'all' && stock.market !== filters.market) return false;
  if (filters.sector !== 'all' && stock.sector !== filters.sector) return false;
  if (filters.cycle !== 'all' && stock.cyclePhase !== filters.cycle) return false;
  if (stock.pathScore < filters.pathScore) return false;
  if (stock.pathMultiple < filters.pathMultiple) return false;
  if (stock.score < filters.minScore) return false;
  if (stock.momentum < filters.momentum) return false;
  if (stock.quality < filters.quality) return false;
  if (stock.valuationRisk > filters.valuationRisk) return false;
  if (stock.drawdownRisk > filters.drawdown) return false;
  if (filters.positiveCashFlow && !stock.fcfPositive) return false;
  if (filters.profitable && !stock.profitable) return false;
  if (filters.liquid && stock.liquidity < 70) return false;
  if (filters.hasCatalyst && !stock.catalyst) return false;
  if (filters.tenXGate && !stock.tenXGate) return false;
  if (filters.qualityGate && !stock.dataQuality.passed) return false;
  return true;
}

function sortStocks(list, sortKey) {
  return [...list].sort((a, b) => {
    if (sortKey === 'pathScore') return b.pathScore - a.pathScore;
    if (sortKey === 'pathMultiple') return b.pathMultiple - a.pathMultiple;
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
      <td>${escapeHtml(stock.cycleLabel)}</td>
      <td><strong>${stock.pathScore}</strong></td>
      <td><strong>${stock.score}</strong></td>
      <td>${stock.pathMultiple.toFixed(1)}x</td>
      <td><span class="risk-pill ${riskClass(stock)}">${stock.drawdownRisk}</span></td>
      <td><span class="quality-pill ${qualityClass(stock.dataQuality.score)}">${stock.dataQuality.score}</span></td>
      <td>${escapeHtml(labelFor(stock, stock.score))}</td>
    </tr>
  `).join('');
}

function renderDataQuality(stock) {
  const quality = stock.dataQuality;
  els.qualityCard.innerHTML = `
    <div>
      <span>质量分</span>
      <strong class="${qualityClass(quality.score)}">${quality.score}</strong>
    </div>
    <div>
      <span>闸门状态</span>
      <strong>${escapeHtml(quality.status)}</strong>
    </div>
    <div>
      <span>数据时点</span>
      <strong>${escapeHtml(stock.dataDate || (stock.source === 'imported' ? '未标注' : '2026-06-08 示例'))}</strong>
    </div>
  `;
  els.qualityList.innerHTML = quality.warnings
    .slice(0, 6)
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join('');
}

function renderSelected(stock) {
  const label = labelFor(stock, stock.score);
  els.selectedCard.innerHTML = `
    <div>
      <span class="market-tag">${escapeHtml(stock.market)}</span>
      <h3>${escapeHtml(stock.ticker)} ${escapeHtml(stock.name)}</h3>
      <p>${escapeHtml(stock.sector)} · ${escapeHtml(stock.cycleLabel)} · ${formatPrice(stock)}</p>
    </div>
    <strong>${stock.pathScore}</strong>
    <span class="status-line">${escapeHtml(label)}</span>
  `;
  els.momentumMeter.value = stock.cycleElasticity;
  els.qualityMeter.value = stock.earningsInflection;
  els.valuationMeter.value = stock.narrativePower;
  els.riskMeter.value = stock.riskSafety;
  els.pathCard.innerHTML = `
    <div>
      <span>路径倍数</span>
      <strong>${stock.pathMultiple.toFixed(1)}x</strong>
    </div>
    <div>
      <span>十倍闸门</span>
      <strong>${stock.tenXGate ? '通过' : '未通过'}</strong>
    </div>
    <div>
      <span>综合分</span>
      <strong>${stock.score}</strong>
    </div>
  `;
  els.quantList.innerHTML = [
    `价格动量：${stock.momentum}，${stock.momentum >= 70 ? '资金趋势较强' : '趋势仍需确认'}`,
    `业绩拐点：${stock.earningsInflection}，${stock.earningsInflection >= 75 ? '增长斜率具备确认度' : '拐点证据不足'}`,
    `估值风险：${stock.valuationRisk}，${stock.valuationRisk <= 60 ? '估值压力可控' : '估值压力偏高'}`,
    `流动性：${stock.liquidity}，${stock.liquidity >= 70 ? '交易容量通过' : '流动性不足'}`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
  els.subjectiveList.innerHTML = [
    `长期逻辑：${stock.thesis}`,
    `叙事强度：${stock.narrativePower}，${stock.narrativePower >= 80 ? '市场能理解且可传播' : '叙事仍需证据支撑'}`,
    `期权性：${stock.optionality}，${stock.optionality >= 80 ? '存在非线性上行来源' : '非线性来源一般'}`,
    `反方观点：${stock.bear}`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
  els.pathList.innerHTML = [
    `周期阶段：${stock.cycleLabel}，一周期十倍更偏好早期拐点或加速确认阶段。`,
    `路径假设：${stock.path}`,
    `目标倍数不是承诺：当前仅把 ${stock.pathMultiple.toFixed(1)}x 作为研究路径上限情景。`,
    `失效条件：${stock.invalidation}`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
  els.riskList.innerHTML = [
    `最大仓位建议：十倍候选波动大，未做适当性评估前不输出买入指令或仓位。`,
    `触发复查：路径分跌破 ${Math.max(55, stock.pathScore - 12)}、回撤风险升至 80 以上、或核心逻辑被财报/新闻证伪。`,
    `数据缺口：当前为示例静态数据，真实使用必须接入行情、财报、公告和新闻更新时间。`,
  ].map(item => `<li>${escapeHtml(item)}</li>`).join('');
  renderDataQuality(stock);
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
        <span style="--w:${stock.pathScore}%"><i>路径 ${stock.pathScore}</i></span>
        <span style="--w:${Math.min(100, stock.pathMultiple * 10)}%"><i>倍数 ${stock.pathMultiple.toFixed(1)}x</i></span>
        <span style="--w:${stock.riskSafety}%"><i>风控 ${stock.riskSafety}</i></span>
      </div>
    </article>
  `).join('');
}

function renderReview(stock) {
  const gates = [
    ['01', '数据更新', '行情、财报、公告、新闻时间戳全部可追溯。'],
    ['02', '路径验证', `${stock.cycleLabel} 是否继续支持 ${stock.pathMultiple.toFixed(1)}x 上限情景。`],
    ['03', '反方压力', stock.invalidation],
    ['04', '退出纪律', '路径分、回撤风险或核心叙事任一破位即降级。'],
  ];
  els.reviewGrid.innerHTML = gates.map(gate => `
    <article class="review-card">
      <span>${gate[0]}</span>
      <b>${escapeHtml(gate[1])}</b>
      <p>${escapeHtml(gate[2])}</p>
    </article>
  `).join('');
}

function snapshotStock(stock) {
  return {
    ticker: stock.ticker,
    name: stock.name,
    market: stock.market,
    sector: stock.sector,
    score: stock.score,
    pathScore: stock.pathScore,
    pathMultiple: stock.pathMultiple,
    status: labelFor(stock, stock.score),
    qualityScore: stock.dataQuality.score,
    savedAt: new Date().toISOString(),
    path: stock.path,
    invalidation: stock.invalidation,
  };
}

function findByTicker(ticker, universe) {
  return universe.find(stock => stock.ticker === ticker);
}

function selectedStock(universe = enrichedStocks()) {
  return findByTicker(selectedTicker, universe) ?? universe[0];
}

function renderWatchlist(universe) {
  const selected = selectedStock(universe);
  const selectedSaved = watchlist.some(item => item.ticker === selected?.ticker);
  els.watchlistBtn.textContent = selectedSaved ? '移出研究清单' : '加入研究清单';
  els.clearWatchlistBtn.disabled = watchlist.length === 0;
  if (!watchlist.length) {
    els.watchlistRows.innerHTML = '<div class="empty-inline">还没有研究标的。先在候选表中选中股票，再加入研究清单。</div>';
    return;
  }
  els.watchlistRows.innerHTML = watchlist.map(item => {
    const live = findByTicker(item.ticker, universe);
    const stock = live ?? item;
    const status = live ? labelFor(live, live.score) : item.status;
    return `
      <article class="watch-item ${stock.ticker === selectedTicker ? 'active' : ''}">
        <button type="button" data-watch-select="${escapeHtml(stock.ticker)}">
          <b>${escapeHtml(stock.ticker)}</b>
          <span>${escapeHtml(stock.name)}</span>
        </button>
        <div>
          <span>路径 ${stock.pathScore}</span>
          <span>${Number(stock.pathMultiple).toFixed(1)}x</span>
          <span>数据 ${stock.qualityScore ?? stock.dataQuality?.score ?? '-'}</span>
        </div>
        <small>${escapeHtml(status)}</small>
        <button class="remove-btn" type="button" data-watch-remove="${escapeHtml(stock.ticker)}">移出</button>
      </article>
    `;
  }).join('');
}

function renderJournal(universe) {
  if (!journal.length) {
    els.journalRows.innerHTML = '<div class="empty-inline">暂无决策日志。保存时会记录当前标的、路径分、数据质量和判断理由。</div>';
    els.journalStatus.textContent = '暂无日志。';
    return;
  }
  els.journalStatus.textContent = `已保存 ${journal.length} 条日志。`;
  els.journalRows.innerHTML = journal.slice(0, 8).map(entry => {
    const live = findByTicker(entry.ticker, universe);
    const qualityScore = live?.dataQuality.score ?? entry.qualityScore ?? '-';
    return `
      <article class="journal-item">
        <div>
          <b>${escapeHtml(entry.ticker)} · ${escapeHtml(entry.state)}</b>
          <time>${escapeHtml(entry.timeLabel)}</time>
        </div>
        <p>${escapeHtml(entry.note)}</p>
        <span>路径分 ${entry.pathScore} · 路径倍数 ${Number(entry.pathMultiple).toFixed(1)}x · 数据质量 ${qualityScore}</span>
      </article>
    `;
  }).join('');
}

function updateLabels() {
  els.pathScoreValue.textContent = els.pathScore.value;
  els.pathMultipleValue.textContent = els.pathMultiple.value;
  els.minScoreValue.textContent = els.minScore.value;
  els.momentumValue.textContent = els.momentum.value;
  els.qualityValue.textContent = els.quality.value;
  els.valuationRiskValue.textContent = els.valuationRisk.value;
  els.drawdownValue.textContent = els.drawdown.value;
  els.strategyName.textContent = presets[activePreset]?.name ?? '自定义';
  els.dataStamp.textContent = dataMode === 'sample'
    ? '示例路径模型 2026-06-08'
    : '本地导入数据';
}

function render() {
  updateLabels();
  const filters = getFilters();
  const all = enrichedStocks();
  const list = sortStocks(all.filter(stock => passesFilters(stock, filters)), filters.sort);
  if (!list.some(stock => stock.ticker === selectedTicker)) {
    selectedTicker = list[0]?.ticker ?? stocks[0].ticker;
  }
  const selected = findByTicker(selectedTicker, all) ?? all[0];
  els.matchCount.textContent = list.length;
  els.topScore.textContent = list[0]?.pathScore ?? 0;
  els.emptyState.hidden = list.length > 0;
  renderRows(list);
  renderSelected(selected);
  renderWatchlist(all);
  renderJournal(all);
  renderCompare(list);
  renderReview(selected);
}

function applyPreset(key) {
  activePreset = key;
  const preset = presets[key];
  els.pathScore.value = preset.pathScore;
  els.pathMultiple.value = preset.pathMultiple;
  els.minScore.value = preset.minScore;
  els.momentum.value = preset.momentum;
  els.quality.value = preset.quality;
  els.valuationRisk.value = preset.valuationRisk;
  els.drawdown.value = preset.drawdown;
  els.positiveCashFlow.checked = preset.positiveCashFlow;
  els.profitable.checked = preset.profitable;
  els.liquid.checked = preset.liquid;
  els.hasCatalyst.checked = preset.hasCatalyst;
  els.tenXGate.checked = preset.tenXGate;
  els.qualityGate.checked = preset.qualityGate;
  els.tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.preset === key)));
  render();
}

function analysisText() {
  const stock = selectedStock();
  return [
    `标的/主题：${stock.ticker} ${stock.name}`,
    `数据时点：${dataMode === 'sample' ? '示例静态数据 2026-06-08' : '本地导入数据，需自行确认来源和时间戳'}`,
    '适用对象假设：仅用于一周期十倍候选研究，不构成个性化投资建议',
    `数据质量：${stock.dataQuality.score}，${stock.dataQuality.status}`,
    `数据缺口：${stock.dataQuality.warnings.slice(0, 3).join('；')}`,
    '',
    `十倍路径分：${stock.pathScore}`,
    `路径倍数假设：${stock.pathMultiple.toFixed(1)}x`,
    `周期阶段：${stock.cycleLabel}`,
    `路径假设：${stock.path}`,
    `失效条件：${stock.invalidation}`,
    '',
    `量化评分70：${stock.quant}`,
    `- 趋势/动量：${stock.momentum}`,
    `- 业绩拐点：${stock.earningsInflection}`,
    `- 估值/质量：质量 ${stock.quality}；估值风险 ${stock.valuationRisk}`,
    `- 波动/回撤：回撤风险 ${stock.drawdownRisk}`,
    `- 流动性/交易成本：${stock.liquidity}`,
    '',
    `主观评分30：${stock.subjective}`,
    `- 长期逻辑：${stock.thesis}`,
    `- 叙事强度：${stock.narrativePower}`,
    `- 期权性：${stock.optionality}`,
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
  els.cycle,
  els.pathScore,
  els.pathMultiple,
  els.minScore,
  els.momentum,
  els.quality,
  els.valuationRisk,
  els.drawdown,
  els.positiveCashFlow,
  els.profitable,
  els.liquid,
  els.hasCatalyst,
  els.tenXGate,
  els.qualityGate,
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

function parseBoolean(value) {
  const text = String(value ?? '').trim().toLowerCase();
  return ['1', 'true', 'yes', 'y', '是', '有'].includes(text);
}

function parseNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function splitCsvLine(line) {
  const cells = [];
  let current = '';
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      cells.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseRows(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (trimmed.startsWith('[')) {
    const parsed = JSON.parse(trimmed);
    if (!Array.isArray(parsed)) throw new Error('JSON 必须是数组');
    return parsed;
  }
  const lines = trimmed.split(/\r?\n/).filter(Boolean);
  const headers = splitCsvLine(lines[0]).map(header => header.trim());
  return lines.slice(1).map(line => {
    const cells = splitCsvLine(line);
    return headers.reduce((row, header, index) => {
      row[header] = cells[index] ?? '';
      return row;
    }, {});
  });
}

const requiredImportFields = [
  'ticker',
  'name',
  'market',
  'sector',
  'price',
  'momentum',
  'quality',
  'valuationRisk',
  'drawdownRisk',
  'liquidity',
  'growth',
  'pathMultiple',
  'thesis',
  'bear',
  'path',
  'invalidation',
];

function hasRowValue(row, field) {
  return Object.prototype.hasOwnProperty.call(row, field) && hasText(row[field]);
}

function normalizeImportedStock(row, index) {
  const ticker = String(row.ticker ?? row.code ?? '').trim().toUpperCase();
  if (!ticker) throw new Error(`第 ${index + 1} 行缺少 ticker`);
  const missingFields = requiredImportFields.filter(field => !hasRowValue(row, field));
  return {
    source: 'imported',
    ticker,
    name: String(row.name ?? ticker).trim(),
    market: String(row.market ?? 'US').trim() || 'US',
    sector: String(row.sector ?? 'AI').trim() || 'AI',
    price: parseNumber(row.price, 0),
    momentum: clamp(parseNumber(row.momentum, 50)),
    quality: clamp(parseNumber(row.quality, 50)),
    valuationRisk: clamp(parseNumber(row.valuationRisk, 60)),
    drawdownRisk: clamp(parseNumber(row.drawdownRisk, 60)),
    liquidity: clamp(parseNumber(row.liquidity, 70)),
    growth: clamp(parseNumber(row.growth, 55)),
    fcfPositive: row.fcfPositive === undefined ? true : parseBoolean(row.fcfPositive),
    profitable: row.profitable === undefined ? true : parseBoolean(row.profitable),
    catalyst: row.catalyst === undefined ? false : parseBoolean(row.catalyst),
    cyclePhase: String(row.cyclePhase ?? 'mid').trim() || 'mid',
    cycleLabel: String(row.cycleLabel ?? '中段扩张').trim() || '中段扩张',
    cycleElasticity: clamp(parseNumber(row.cycleElasticity, parseNumber(row.momentum, 50))),
    earningsInflection: clamp(parseNumber(row.earningsInflection, parseNumber(row.growth, 55))),
    narrativePower: clamp(parseNumber(row.narrativePower, 55)),
    optionality: clamp(parseNumber(row.optionality, 55)),
    pathMultiple: parseNumber(row.pathMultiple, 2),
    tenXGate: row.tenXGate === undefined ? parseNumber(row.pathMultiple, 2) >= 4 : parseBoolean(row.tenXGate),
    thesis: String(row.thesis ?? '导入数据未提供长期逻辑。').trim(),
    bear: String(row.bear ?? '导入数据未提供反方观点。').trim(),
    path: String(row.path ?? '导入数据未提供十倍路径假设。').trim(),
    invalidation: String(row.invalidation ?? '导入数据未提供失效条件。').trim(),
    dataSource: String(row.dataSource ?? row.sourceName ?? row.source ?? '本地导入').trim() || '本地导入',
    dataDate: String(row.dataDate ?? row.asOf ?? row.updatedAt ?? '').trim(),
    missingFields,
  };
}

function importData() {
  try {
    const rows = parseRows(els.dataInput.value);
    const imported = rows.map(normalizeImportedStock);
    if (!imported.length) throw new Error('没有可导入的数据');
    stocks = imported;
    dataMode = 'imported';
    selectedTicker = stocks[0].ticker;
    els.importStatus.textContent = `已导入 ${stocks.length} 条数据。缺失路径字段会使用中性默认值。`;
    render();
  } catch (error) {
    els.importStatus.textContent = `导入失败：${error.message}`;
  }
}

function restoreSampleData() {
  stocks = sampleStocks.map(stock => ({ ...stock }));
  dataMode = 'sample';
  selectedTicker = stocks[0].ticker;
  els.dataInput.value = '';
  els.importStatus.textContent = '当前使用内置示例数据。';
  render();
}

function toggleWatchlist() {
  const stock = selectedStock();
  if (!stock) return;
  if (watchlist.some(item => item.ticker === stock.ticker)) {
    watchlist = watchlist.filter(item => item.ticker !== stock.ticker);
  } else {
    watchlist = [snapshotStock(stock), ...watchlist.filter(item => item.ticker !== stock.ticker)];
  }
  writeStorage(storageKeys.watchlist, watchlist);
  render();
}

function saveJournalEntry() {
  const stock = selectedStock();
  const note = els.journalNote.value.trim();
  if (!stock || !note) {
    els.journalStatus.textContent = '请先填写本次判断。';
    return;
  }
  const now = new Date();
  journal = [{
    id: `${now.getTime()}-${stock.ticker}`,
    ticker: stock.ticker,
    name: stock.name,
    state: els.journalLabel.value,
    note,
    pathScore: stock.pathScore,
    pathMultiple: stock.pathMultiple,
    score: stock.score,
    qualityScore: stock.dataQuality.score,
    status: labelFor(stock, stock.score),
    path: stock.path,
    invalidation: stock.invalidation,
    dataStamp: dataMode === 'sample' ? '示例路径模型 2026-06-08' : (stock.dataDate || '本地导入，未标注时间'),
    time: now.toISOString(),
    timeLabel: now.toLocaleString('zh-CN', { hour12: false }),
  }, ...journal].slice(0, 100);
  writeStorage(storageKeys.journal, journal);
  els.journalNote.value = '';
  els.journalStatus.textContent = '已保存日志。';
  render();
}

async function copyJournal() {
  if (!journal.length) {
    els.journalStatus.textContent = '暂无可复制日志。';
    return;
  }
  try {
    await navigator.clipboard.writeText(JSON.stringify(journal, null, 2));
    els.journalStatus.textContent = '日志 JSON 已复制。';
  } catch (_) {
    els.journalStatus.textContent = '复制失败，请检查浏览器剪贴板权限。';
  }
}

els.stockRows.addEventListener('click', event => {
  const row = event.target.closest('[data-ticker]');
  if (!row) return;
  selectedTicker = row.dataset.ticker;
  render();
});

els.watchlistRows.addEventListener('click', event => {
  const selectButton = event.target.closest('[data-watch-select]');
  const removeButton = event.target.closest('[data-watch-remove]');
  if (selectButton) {
    selectedTicker = selectButton.dataset.watchSelect;
    render();
  }
  if (removeButton) {
    watchlist = watchlist.filter(item => item.ticker !== removeButton.dataset.watchRemove);
    writeStorage(storageKeys.watchlist, watchlist);
    render();
  }
});

els.tabs.forEach(tab => {
  tab.addEventListener('click', () => applyPreset(tab.dataset.preset));
});

els.importBtn.addEventListener('click', importData);
els.sampleBtn.addEventListener('click', restoreSampleData);
els.watchlistBtn.addEventListener('click', toggleWatchlist);
els.clearWatchlistBtn.addEventListener('click', () => {
  if (!watchlist.length) return;
  if (!window.confirm('清空本机研究清单？')) return;
  watchlist = [];
  writeStorage(storageKeys.watchlist, watchlist);
  render();
});
els.saveJournal.addEventListener('click', saveJournalEntry);
els.exportJournal.addEventListener('click', copyJournal);

els.reset.addEventListener('click', () => {
  els.market.value = 'all';
  els.sector.value = 'all';
  els.cycle.value = 'all';
  els.sort.value = 'pathScore';
  selectedTicker = stocks[0].ticker;
  applyPreset('tenx');
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

applyPreset('tenx');
