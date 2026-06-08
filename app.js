let stocks = [
  {
    ticker: '601138',
    name: '工业富联',
    market: 'SSE_MAIN',
    sector: 'AI',
    price: 49.8,
    momentum: 86,
    quality: 72,
    valuationRisk: 66,
    drawdownRisk: 64,
    liquidity: 94,
    growth: 82,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: 'AI 服务器、云端算力和高端制造订单带来收入弹性，适合作为 A 股算力链核心候选观察。',
    bear: '若下游资本开支放缓、毛利率被代工属性压制或订单集中度过高，估值弹性会收缩。',
  },
  {
    ticker: '688981',
    name: '中芯国际',
    market: 'STAR',
    sector: 'Semiconductor',
    price: 87.2,
    momentum: 80,
    quality: 64,
    valuationRisk: 74,
    drawdownRisk: 70,
    liquidity: 86,
    growth: 78,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '国产先进制程和成熟制程景气度修复，是 A 股半导体自主可控主线的重要观察标的。',
    bear: '产能利用率、资本开支折旧、工艺迭代和外部限制都会影响利润释放速度。',
  },
  {
    ticker: '688256',
    name: '寒武纪-U',
    market: 'STAR',
    sector: 'AI',
    price: 625.0,
    momentum: 92,
    quality: 45,
    valuationRisk: 92,
    drawdownRisk: 88,
    liquidity: 78,
    growth: 85,
    fcfPositive: false,
    profitable: false,
    catalyst: true,
    thesis: '国产 AI 芯片期权性强，弹性来自产品放量、生态适配和政策/产业链支持。',
    bear: '未盈利、估值高、订单持续性和研发投入压力会放大回撤风险。',
  },
  {
    ticker: '300750',
    name: '宁德时代',
    market: 'CHINEXT',
    sector: 'EV',
    price: 205.6,
    momentum: 62,
    quality: 76,
    valuationRisk: 50,
    drawdownRisk: 63,
    liquidity: 88,
    growth: 64,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '动力电池、储能和海外市场若重新进入利润扩张，具备周期修复弹性。',
    bear: '产业链价格压力、海外扩张摩擦和新能源车增速放缓会压制利润。',
  },
  {
    ticker: '002594',
    name: '比亚迪',
    market: 'SZSE_MAIN',
    sector: 'EV',
    price: 251.8,
    momentum: 65,
    quality: 78,
    valuationRisk: 55,
    drawdownRisk: 60,
    liquidity: 90,
    growth: 66,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '整车、供应链和海外化共同支撑成长，但需要验证利润率能否穿越价格战。',
    bear: '行业价格战、出口政策不确定性和车型周期波动会削弱估值弹性。',
  },
  {
    ticker: '688012',
    name: '中微公司',
    market: 'STAR',
    sector: 'Semiconductor',
    price: 177.4,
    momentum: 72,
    quality: 80,
    valuationRisk: 68,
    drawdownRisk: 58,
    liquidity: 76,
    growth: 74,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '半导体设备国产替代和晶圆厂资本开支修复提供中期成长路径。',
    bear: '订单节奏、客户扩产周期和高估值容错率是主要风险。',
  },
  {
    ticker: '300124',
    name: '汇川技术',
    market: 'CHINEXT',
    sector: 'Industrial',
    price: 62.5,
    momentum: 67,
    quality: 84,
    valuationRisk: 52,
    drawdownRisk: 50,
    liquidity: 82,
    growth: 70,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '工业自动化和新能源车电控业务具备高质量复合增长属性。',
    bear: '制造业资本开支疲弱或新能源车业务竞争加剧，会拖累增长斜率。',
  },
  {
    ticker: '603501',
    name: '韦尔股份',
    market: 'SSE_MAIN',
    sector: 'Semiconductor',
    price: 104.3,
    momentum: 69,
    quality: 68,
    valuationRisk: 62,
    drawdownRisk: 66,
    liquidity: 82,
    growth: 76,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '图像传感器和消费电子周期修复带来利润弹性，属于半导体周期反转观察标的。',
    bear: '库存周期、手机需求和产品价格竞争会影响盈利恢复。',
  },
  {
    ticker: '600519',
    name: '贵州茅台',
    market: 'SSE_MAIN',
    sector: 'Consumer',
    price: 1580,
    momentum: 48,
    quality: 92,
    valuationRisk: 46,
    drawdownRisk: 50,
    liquidity: 82,
    growth: 42,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '品牌、渠道和现金流质量高，适合质量底仓研究，但缺少一周期十倍弹性。',
    bear: '消费景气、高端白酒批价和渠道库存会压制估值。',
  },
  {
    ticker: '600276',
    name: '恒瑞医药',
    market: 'SSE_MAIN',
    sector: 'Healthcare',
    price: 47.6,
    momentum: 60,
    quality: 80,
    valuationRisk: 50,
    drawdownRisk: 52,
    liquidity: 86,
    growth: 58,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '创新药管线和出海授权可能带来再增长，但需要持续验证临床和商业化兑现。',
    bear: '集采、研发失败、海外审批和销售放量不及预期会影响估值。',
  },
  {
    ticker: '601899',
    name: '紫金矿业',
    market: 'SSE_MAIN',
    sector: 'Resources',
    price: 18.6,
    momentum: 75,
    quality: 74,
    valuationRisk: 44,
    drawdownRisk: 58,
    liquidity: 90,
    growth: 68,
    fcfPositive: true,
    profitable: true,
    catalyst: true,
    thesis: '铜、金等资源品周期和海外矿山扩张带来业绩弹性。',
    bear: '商品价格下行、海外项目执行和汇率/地缘风险会放大波动。',
  },
  {
    ticker: '601318',
    name: '中国平安',
    market: 'SSE_MAIN',
    sector: 'Finance',
    price: 45.2,
    momentum: 56,
    quality: 75,
    valuationRisk: 34,
    drawdownRisk: 50,
    liquidity: 91,
    growth: 42,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '金融质量资产和低估值修复观察标的，更偏稳健复盘而非十倍弹性。',
    bear: '地产链、权益市场和负债端压力会影响利润与估值。',
  },
  {
    ticker: '002415',
    name: '海康威视',
    market: 'SZSE_MAIN',
    sector: 'AI',
    price: 32.5,
    momentum: 52,
    quality: 78,
    valuationRisk: 42,
    drawdownRisk: 58,
    liquidity: 85,
    growth: 45,
    fcfPositive: true,
    profitable: true,
    catalyst: false,
    thesis: '安防现金流和 AI 应用升级提供修复逻辑，但增长斜率仍需确认。',
    bear: '政府和企业需求放缓、外部限制和毛利压力会压制估值。',
  },
];

const sampleStocks = stocks.map(stock => ({ ...stock }));

const marketLabels = {
  SSE_MAIN: '沪市主板',
  SZSE_MAIN: '深市主板',
  STAR: '科创板',
  CHINEXT: '创业板',
};

const stockMeta = {
  '601138': {
    cyclePhase: 'acceleration',
    cycleLabel: '加速确认',
    cycleElasticity: 90,
    earningsInflection: 78,
    narrativePower: 88,
    optionality: 84,
    pathMultiple: 6.1,
    tenXGate: true,
    path: 'A 股 AI 算力链若从主题交易进入订单和利润兑现阶段，可能出现收入增长与估值重估的双击路径。',
    invalidation: 'AI 服务器订单低于预期、毛利率连续回落、客户资本开支下修或应收/存货恶化。',
  },
  '688981': {
    cyclePhase: 'acceleration',
    cycleLabel: '加速确认',
    cycleElasticity: 84,
    earningsInflection: 70,
    narrativePower: 86,
    optionality: 82,
    pathMultiple: 5.6,
    tenXGate: true,
    path: '半导体自主可控、产能利用率回升和工艺推进若同步兑现，具备周期修复与国产替代共振路径。',
    invalidation: '产能利用率修复失败、毛利率低于预期、外部限制扩大或资本开支回报下降。',
  },
  '688256': {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 95,
    earningsInflection: 42,
    narrativePower: 96,
    optionality: 96,
    pathMultiple: 8.4,
    tenXGate: true,
    path: '国产 AI 芯片若从主题期权进入订单、收入和生态验证阶段，路径倍数弹性最高，但也是最高风险档。',
    invalidation: '持续亏损扩大、订单无法验证、产品生态落后、估值透支或流动性恶化。',
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
  '002594': {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 72,
    earningsInflection: 70,
    narrativePower: 76,
    optionality: 70,
    pathMultiple: 4.1,
    tenXGate: true,
    path: '若海外化、智能化和垂直整合继续兑现，存在产业龙头再扩张路径。',
    invalidation: '价格战压低利润率、海外销量不达预期、库存或现金流恶化。',
  },
  '688012': {
    cyclePhase: 'acceleration',
    cycleLabel: '加速确认',
    cycleElasticity: 78,
    earningsInflection: 76,
    narrativePower: 82,
    optionality: 76,
    pathMultiple: 5.2,
    tenXGate: true,
    path: '半导体设备国产替代和晶圆厂资本开支修复若同时发生，具备利润加速路径。',
    invalidation: '订单恢复低于预期、国产替代节奏放缓、估值无法被业绩消化。',
  },
  '300124': {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 62,
    earningsInflection: 72,
    narrativePower: 64,
    optionality: 58,
    pathMultiple: 3.8,
    tenXGate: false,
    path: '高质量复合增长属性强，但更偏质量型候选，不是默认一周期十倍标的。',
    invalidation: '工控需求走弱、新能源车业务利润率下降、海外增长不达预期。',
  },
  '603501': {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 75,
    earningsInflection: 74,
    narrativePower: 74,
    optionality: 70,
    pathMultiple: 4.7,
    tenXGate: true,
    path: '消费电子和 CIS 周期若进入补库与利润修复阶段，存在周期反转路径。',
    invalidation: '库存去化失败、手机需求继续疲弱、产品价格竞争加剧。',
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
  '600276': {
    cyclePhase: 'early',
    cycleLabel: '早期拐点',
    cycleElasticity: 58,
    earningsInflection: 68,
    narrativePower: 68,
    optionality: 62,
    pathMultiple: 3.2,
    tenXGate: false,
    path: '创新药出海和管线兑现提供修复空间，但路径更偏稳健再增长。',
    invalidation: '核心管线失败、海外授权不达预期、医保控费超预期。',
  },
  '601899': {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 70,
    earningsInflection: 72,
    narrativePower: 66,
    optionality: 66,
    pathMultiple: 4.0,
    tenXGate: true,
    path: '资源品价格、矿山扩张和成本控制若共振，具备周期利润弹性。',
    invalidation: '铜金价格回落、海外项目受阻、资本开支回报下降。',
  },
  '601318': {
    cyclePhase: 'mid',
    cycleLabel: '中段扩张',
    cycleElasticity: 32,
    earningsInflection: 50,
    narrativePower: 38,
    optionality: 30,
    pathMultiple: 1.8,
    tenXGate: false,
    path: '金融低估值修复观察，不符合一周期十倍所需的高增长和高期权性。',
    invalidation: '资产质量恶化、负债端压力上升、权益市场拖累投资收益。',
  },
  '002415': {
    cyclePhase: 'late',
    cycleLabel: '后段拥挤',
    cycleElasticity: 44,
    earningsInflection: 46,
    narrativePower: 52,
    optionality: 44,
    pathMultiple: 2.4,
    tenXGate: false,
    path: '现金流仍有价值，但增长再加速证据不足，暂不进入十倍候选。',
    invalidation: '需求继续走弱、海外限制扩大、AI 转型无法带来收入增量。',
  },
};

const presets = {
  tenx: {
    name: 'A股一周期十倍',
    minScore: 62,
    pathScore: 62,
    pathMultiple: 4,
    momentum: 50,
    quality: 55,
    valuationRisk: 86,
    drawdown: 78,
    positiveCashFlow: false,
    profitable: false,
    liquid: true,
    hasCatalyst: false,
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
  watchlist: 'tenx-a-share-watchlist-v1',
  journal: 'tenx-a-share-journal-v1',
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
    warnings.push('A 股示例静态数据：仅用于验证界面和筛选逻辑，不能替代实时行情、财报和公告。');
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
  return `¥${stock.price.toFixed(stock.price > 1000 ? 0 : 1)}`;
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
      <span class="market-tag">${escapeHtml(marketLabels[stock.market] ?? stock.market)}</span>
      <h3>${escapeHtml(stock.ticker)} ${escapeHtml(stock.name)}</h3>
      <p>${escapeHtml(marketLabels[stock.market] ?? stock.market)} · ${escapeHtml(stock.sector)} · ${escapeHtml(stock.cycleLabel)} · ${formatPrice(stock)}</p>
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
    `数据缺口：当前为 A 股示例静态数据，真实使用必须接入行情、财报、公告、资金流和新闻更新时间。`,
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
    ? 'A股示例模型 2026-06-08'
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
    `数据时点：${dataMode === 'sample' ? 'A 股示例静态数据 2026-06-08' : '本地导入 A 股数据，需自行确认来源和时间戳'}`,
    '适用对象假设：仅用于 A 股一周期十倍候选研究，不构成个性化投资建议',
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
    '建议动作：进入研究清单；真实交易前必须更新 A 股行情、财报、公告、资金流和个人风险约束。',
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

function inferMarket(ticker) {
  if (ticker.startsWith('688')) return 'STAR';
  if (ticker.startsWith('300')) return 'CHINEXT';
  if (ticker.startsWith('000') || ticker.startsWith('001') || ticker.startsWith('002')) return 'SZSE_MAIN';
  if (ticker.startsWith('600') || ticker.startsWith('601') || ticker.startsWith('603') || ticker.startsWith('605')) return 'SSE_MAIN';
  return 'SSE_MAIN';
}

function normalizeImportedStock(row, index) {
  const ticker = String(row.ticker ?? row.code ?? '').trim().toUpperCase();
  if (!ticker) throw new Error(`第 ${index + 1} 行缺少 ticker`);
  const missingFields = requiredImportFields.filter(field => !hasRowValue(row, field));
  return {
    source: 'imported',
    ticker,
    name: String(row.name ?? ticker).trim(),
    market: String(row.market ?? inferMarket(ticker)).trim() || inferMarket(ticker),
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
    dataStamp: dataMode === 'sample' ? 'A股示例模型 2026-06-08' : (stock.dataDate || '本地导入，未标注时间'),
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
