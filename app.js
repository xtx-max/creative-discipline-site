const themes = [
  {
    id: 'quant',
    icon: 'Q',
    title: '散户量化',
    note: '把漂亮回测拆成真实约束',
    idea: '做一个把回测、数据时点、交易成本和样本外结果放在同一屏的自用研究网站。',
    screen: '第一屏先问“证据够不够”，再展示策略卡片；用户不能绕过数据时点、成本和反方观点。',
    mvp: ['策略输入表单', '未来函数检查清单', '成本与样本量提示', '复盘记录导出'],
    review: ['是否用了当时不可见的数据？', '去掉最好结果后还成立吗？', '成本和滑点是否足够保守？'],
  },
  {
    id: 'cash',
    icon: 'C',
    title: '现金纪律',
    note: '把“不操作”做成明确状态',
    idea: '建立一个现金闸门网站：每天先判断是否应该保持现金，再决定是否进入研究或执行。',
    screen: '页面顶部只显示三种许可：保持现金、继续研究、允许小规模实验。',
    mvp: ['现金比例输入', '风险事件开关', '执行许可状态', '不操作理由日志'],
    review: ['今天为什么不行动？', '风险来自数据、市场还是执行？', '现金纪律有没有被情绪破坏？'],
  },
  {
    id: 'macro',
    icon: 'M',
    title: '宏观风险',
    note: '黄金、美股、汇率只做背景层',
    idea: '做一个宏观温度计，把黄金、美股、指数和政策叙事转成风险背景，而不是直接给动作。',
    screen: '第一屏展示宏观温度、叙事置信度和需要等待的证据。',
    mvp: ['宏观主题卡', '风险热度滑杆', '反方观点字段', '观察触发器'],
    review: ['宏观叙事是否可验证？', '哪些证据会推翻它？', '它只影响仓位还是直接影响动作？'],
  },
  {
    id: 'expert',
    icon: 'E',
    title: '高手观点',
    note: '不崇拜人，只拆观点',
    idea: '建立一个观点拆解器：把高赞观点拆成假设、证据、执行边界和复盘问题。',
    screen: '用户粘贴一句观点，网站输出“可验证假设”和“不能直接行动的部分”。',
    mvp: ['观点输入', '假设拆分', '证据字段', '反方证据字段'],
    review: ['观点是否能被数据验证？', '作者影响力是否被误当成证据？', '最小实验是什么？'],
  },
  {
    id: 'system',
    icon: 'S',
    title: '独立系统',
    note: '先做一条闭环，不做大平台',
    idea: '从一个静态网页开始，把灵感、判断、执行和复盘串成最小闭环。',
    screen: '第一屏就是工作台：左侧灵感，中间闸门，右侧输出蓝图。',
    mvp: ['本地静态页面', '可复制蓝图', '状态评分', '路线图'],
    review: ['这是否一周内能上线？', '哪些字段必须保留？', '哪些功能只是装饰？'],
  },
];

const els = {
  themeList: document.getElementById('themeList'),
  ideaText: document.getElementById('ideaText'),
  evidence: document.getElementById('evidenceInput'),
  execution: document.getElementById('executionInput'),
  risk: document.getElementById('riskInput'),
  evidenceValue: document.getElementById('evidenceValue'),
  executionValue: document.getElementById('executionValue'),
  riskValue: document.getElementById('riskValue'),
  freshData: document.getElementById('freshDataInput'),
  bearCase: document.getElementById('bearCaseInput'),
  exitRule: document.getElementById('exitRuleInput'),
  auditable: document.getElementById('auditableInput'),
  statePill: document.getElementById('statePill'),
  verdictBox: document.getElementById('verdictBox'),
  verdictTitle: document.getElementById('verdictTitle'),
  verdictText: document.getElementById('verdictText'),
  screenCopy: document.getElementById('screenCopy'),
  mvpList: document.getElementById('mvpList'),
  reviewList: document.getElementById('reviewList'),
  roadmap: document.getElementById('roadmap'),
  radar: document.getElementById('radarCanvas'),
  shuffle: document.getElementById('shuffleBtn'),
  copy: document.getElementById('copyBtn'),
};

let activeIndex = 0;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));
}

function scoreState() {
  const evidence = Number(els.evidence.value);
  const execution = Number(els.execution.value);
  const risk = Number(els.risk.value);
  const checks = [els.freshData, els.bearCase, els.exitRule, els.auditable].filter(item => item.checked).length;
  const score = Math.round(evidence * 0.38 + execution * 0.34 + (100 - risk) * 0.18 + checks * 2.5);
  if (score >= 78 && risk <= 45 && checks >= 3) {
    return { key: 'ship', label: '允许成稿', title: '可以做成第一版', text: '证据、执行和复盘条件基本齐备，下一步应收敛到一屏可用的最小版本。' };
  }
  if (score >= 62 && checks >= 2) {
    return { key: 'probe', label: '继续打磨', title: '先做研究稿', text: '方向有价值，但还需要补足反方观点、退出条件或可验证证据。' };
  }
  if (risk >= 68) {
    return { key: 'stop', label: '暂停输出', title: '叙事风险过高', text: '当前想法更像观点冲动，不适合直接发布成产品或行动建议。' };
  }
  return { key: 'hold', label: '保留观察', title: '先存入灵感池', text: '想法可以留下，但还不够清晰；先记录触发条件，等证据更强再推进。' };
}

function renderThemes() {
  els.themeList.innerHTML = themes.map((theme, index) => `
    <button class="theme-button" type="button" data-index="${index}" aria-pressed="${index === activeIndex}">
      <span class="theme-icon" aria-hidden="true">${escapeHtml(theme.icon)}</span>
      <span>
        <b>${escapeHtml(theme.title)}</b>
        <span>${escapeHtml(theme.note)}</span>
      </span>
    </button>
  `).join('');
}

function classForState(key) {
  if (key === 'ship') return '';
  return key;
}

function renderLists(theme) {
  els.mvpList.innerHTML = theme.mvp.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  els.reviewList.innerHTML = theme.review.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  const steps = [
    ['01', '定题', '把收藏主题改写成一个明确用户场景。'],
    ['02', '闸门', '补齐数据时点、反方观点、退出条件。'],
    ['03', '首屏', '只做一个可用工作台，不做营销页。'],
    ['04', '复盘', '上线后记录判断是否被证据支持。'],
  ];
  els.roadmap.innerHTML = steps.map(step => `
    <article class="roadmap-step">
      <span>${step[0]}</span>
      <b>${escapeHtml(step[1])}</b>
      <p>${escapeHtml(step[2])}</p>
    </article>
  `).join('');
}

function drawRadar() {
  const canvas = els.radar;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#fbfcff';
  ctx.fillRect(0, 0, width, height);

  const labels = ['证据', '执行', '复盘', '反方', '克制'];
  const values = [
    Number(els.evidence.value),
    Number(els.execution.value),
    els.auditable.checked ? 82 : 38,
    els.bearCase.checked ? 78 : 32,
    100 - Number(els.risk.value),
  ];
  const cx = width / 2;
  const cy = height / 2 + 8;
  const radius = 92;
  const angle = Math.PI * 2 / labels.length;

  ctx.strokeStyle = '#d9dee8';
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 4; ring += 1) {
    ctx.beginPath();
    labels.forEach((_, index) => {
      const r = radius * ring / 4;
      const x = cx + Math.cos(index * angle - Math.PI / 2) * r;
      const y = cy + Math.sin(index * angle - Math.PI / 2) * r;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
  }

  ctx.beginPath();
  values.forEach((value, index) => {
    const r = radius * value / 100;
    const x = cx + Math.cos(index * angle - Math.PI / 2) * r;
    const y = cy + Math.sin(index * angle - Math.PI / 2) * r;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(14,124,102,.18)';
  ctx.strokeStyle = '#0e7c66';
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#475467';
  ctx.font = '13px -apple-system, BlinkMacSystemFont, sans-serif';
  labels.forEach((label, index) => {
    const x = cx + Math.cos(index * angle - Math.PI / 2) * (radius + 28);
    const y = cy + Math.sin(index * angle - Math.PI / 2) * (radius + 28);
    ctx.textAlign = x < cx - 8 ? 'right' : x > cx + 8 ? 'left' : 'center';
    ctx.fillText(label, x, y);
  });
}

function render() {
  const theme = themes[activeIndex];
  const state = scoreState();
  els.evidenceValue.textContent = els.evidence.value;
  els.executionValue.textContent = els.execution.value;
  els.riskValue.textContent = els.risk.value;
  els.statePill.textContent = state.label;
  els.statePill.className = `state-pill ${classForState(state.key)}`;
  els.verdictBox.className = `verdict ${classForState(state.key)}`;
  els.verdictTitle.textContent = state.title;
  els.verdictText.textContent = state.text;
  els.screenCopy.textContent = theme.screen;
  renderThemes();
  renderLists(theme);
  drawRadar();
}

function setTheme(index) {
  activeIndex = index;
  els.ideaText.value = themes[activeIndex].idea;
  render();
}

function blueprintText() {
  const theme = themes[activeIndex];
  const state = scoreState();
  return [
    `主题：${theme.title}`,
    `当前想法：${els.ideaText.value.trim()}`,
    `创作许可：${state.title}`,
    `第一屏：${theme.screen}`,
    `最小版本：${theme.mvp.join('；')}`,
    `复盘问题：${theme.review.join('；')}`,
  ].join('\n');
}

els.themeList.addEventListener('click', event => {
  const button = event.target.closest('[data-index]');
  if (!button) return;
  setTheme(Number(button.dataset.index));
});

[els.evidence, els.execution, els.risk, els.freshData, els.bearCase, els.exitRule, els.auditable].forEach(input => {
  input.addEventListener('input', render);
  input.addEventListener('change', render);
});

els.ideaText.addEventListener('input', render);

els.shuffle.addEventListener('click', () => {
  setTheme((activeIndex + 1) % themes.length);
});

els.copy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(blueprintText());
    els.copy.innerHTML = '<span aria-hidden="true">✓</span>已复制';
    setTimeout(() => {
      els.copy.innerHTML = '<span aria-hidden="true">⎘</span>复制蓝图';
    }, 1400);
  } catch (_) {
    els.copy.innerHTML = '<span aria-hidden="true">!</span>复制失败';
  }
});

setTheme(0);
