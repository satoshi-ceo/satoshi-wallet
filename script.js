const zh = {
  navAria: '文档导航',
  tokenAlt: '$CEO 代币图案',
  openMenu: '打开菜单',
  languageSelector: '语言选择',
  navIntro: '01&nbsp;&nbsp;简介',
  navLegend: '02&nbsp;&nbsp;传说',
  navKeys: '公钥与地址',
  navEarly: '比特币早期',
  navWallet: '03&nbsp;&nbsp;钱包',
  navBlock9: '为什么是第 9 区块？',
  navEvm: 'EVM 地址',
  navVerify: '独立谜题示例',
  navMission: '04&nbsp;&nbsp;链、代币与使命',
  navWhyCoin: '为什么发行代币？',
  navWhyChain: '为什么选择 Robinhood Chain？',
  navWhyCeo: '为什么是 $CEO？',
  navFlywheel: '飞轮',
  statusLabel: '状态',
  statusValue: '创世模式',
  sidebarDisclaimer: '实验性 Meme 代币。与中本聪、Robinhood Markets、Strategy 或 Michael Saylor 均无关联。',
  heroTitle: '如果中本聪归来<br/>成为 <span>$CEO</span> 会怎样？',
  heroLead: '一个围绕奇特密码学事实展开的 Meme 代币实验：中本聪在比特币早期使用的公钥，可以映射为一个由同一私钥控制的 EVM 地址。',
  exploreWallet: '探索钱包',
  buyCeo: '购买 $CEO',
  contractLabel: '$CEO 合约地址',
  contractNote: '正式合约地址已上线。与代币交互前，请务必在本页面核对合约地址。',
  nameLabel: '名称',
  tickerLabel: '代码',
  chainLabel: '链',
  pairLabel: '交易对',
  pairValue: '$MSTR / 代币化股票',
  manifesto: '17 年的比特币经济史。一个古老的公钥。一个一直公开存在、等待被发现的 EVM 钱包。',
  legendKicker: '02 / 传说',
  legendTitle: '先有密钥，后有地址。',
  legendIntro: '比特币最初的设计比大多数人记忆中的更简单。在今天常用的地址格式成为标准之前，早期交易可以直接向公钥支付。这一点很重要，因为公钥并不属于某一条区块链的品牌，而是来自底层密码学。',
  keysTitle: '公钥和地址是同一个东西吗？',
  keysBody: '<strong>不完全相同。</strong>公钥是由私钥推导出的椭圆曲线上的一个点。地址则是基于该公钥生成、针对特定区块链的表示形式。比特币和以太坊的封装方式不同，但二者最终都依赖同一个 secp256k1 私钥 → 公钥关系。',
  privateKey: '私钥',
  publicKey: '公钥',
  chainAddress: '特定链地址',
  keysNote: '地址格式不同，底层密钥对相同。',
  earlyTitle: '比特币早期',
  earlyBody1: '在比特币最早期，向公钥支付（P2PK）的交易很常见。因此，中本聪的早期活动在链上留下了可见的公钥——这些公开信息已经保存了十多年。',
  earlyBody2: '只要拥有一个有效的 secp256k1 公钥，就可以确定性地推导出其对应的以太坊格式地址。无需猜测，无需助记词，也无需恢复私钥，只需要公开的密码学计算。',
  walletKicker: '03 / 钱包',
  walletTitle: '第 9 区块的密钥。',
  block9Title: '为什么是第 9 区块？',
  block9Body: '第 9 区块之所以著名，是因为其 coinbase 输出后来用于第一笔广为认可的个人对个人比特币转账：中本聪向 Hal Finney 发送了 10 BTC。这是中本聪实际控制某个比特币私钥的最早明确例证之一。',
  guinnessLink: '吉尼斯世界纪录 ↗',
  evmTitle: '对应的 EVM 地址',
  evmBody: '以太坊使用相同的 secp256k1 密钥对系统。从完整公钥出发，可以推导出由同一私钥在任何标准 EVM 链上控制的以太坊格式地址。',
  block9PublicLabel: '中本聪第 9 区块 — 公钥',
  derivedEvmLabel: '推导出的 EVM 地址',
  copy: '复制',
  evmNote: '该地址由第 9 区块 coinbase 输出中嵌入的公钥确定性推导而来。推导地址不会泄露私钥。',
  verifyTitle: '独立验证示例——并非中本聪的密钥',
  exampleLabel: '独立测试示例',
  exampleHeadline: '比特币谜题 #135 与中本聪及第 9 区块没有任何关联。',
  exampleExplanation: '之所以使用它，只是因为其公钥和私钥均已公开，任何人都可以从头到尾复现相同的推导过程。',
  verifyBody: '下面的密钥对来自已解出的比特币谜题 #135。它与中本聪、第 9 区块密钥以及上方展示的中本聪钱包完全无关，仅用于独立验证密码学计算。',
  puzzleLink: '查看这个独立且已解出的比特币谜题 #135 ↗',
  puzzlePublicLabel: '无关的谜题 #135 — 压缩公钥',
  puzzlePrivateLabel: '已公开的谜题私钥 — 并非中本聪的私钥',
  verifyStep1: '复制这个无关谜题的公钥。',
  verifyStep2: '推导其以太坊地址。',
  verifyStep3: '导入已公开的谜题私钥。',
  verifyStep4: '确认两种方式都得到上方显示的地址。',
  verifyCallout: '<b>重要：</b>这不是中本聪的私钥，也与第 9 区块钱包无关。它属于一个独立、已经解出并公开披露的谜题，仅作为研究示例。请将其视为已泄露密钥，切勿向该地址发送资金。由公钥推导地址不会泄露或恢复私钥。',
  missionKicker: '04 / 链、代币与使命',
  missionTitle: '让一把古老密钥成为新的传奇。',
  whyCoinTitle: '为什么发行代币？',
  whyCoinBody1: '因为这个钱包一直明明白白地存在于链上。公开信息早已存在，推导方法也早已存在，但还没有人把这个概念变成一种文化代币，并让一个与中本聪最早期已知密钥之一相关的地址成为最具象征意义的持有人。',
  whyCoinBody2: '$CEO 将这一密码学趣闻变成公开的链上实验：把固定比例的代币供应发送到推导出的中本聪钱包，并让它留在那里——除非原始私钥的持有人有一天真的归来。',
  whyChainTitle: '为什么选择 Robinhood Chain？',
  whyChainBody: '因为这一构想处在加密资产与代币化现实世界资产的交汇处。Robinhood 的 EVM 路线让故事变得直观：原生加密资产、古老的比特币密钥和代币化股票存在于同一环境中。',
  whyChainNote: '上线时，请确保本节内容与实际发行平台、代币化功能和链可用性保持一致。',
  whyCeoTitle: '为什么是 $CEO？',
  whyCeoBody1: '这个 Meme 很简单：比特币创造了全新的货币文化。Strategy 把这种文化变成了公开市场上的资产负债表机器。$CEO 把故事重新交还给最初开启它的人。',
  ceoQuote: '“让中本聪成为第一大 $MSTR 巨鲸——然后替他把 CEO 的椅子坐热。”',
  whyCeoBody2: '该代币的叙事与代币化 $MSTR 敞口相结合。中本聪位于代币持有人榜首。如果平台启用了持有人分成机制，这会变成一个递归 Meme：与比特币最早期密钥之一相关的钱包，逐步获得对那家最能代表企业持有比特币的公司的象征性敞口。',
  flywheelTitle: '禁忌飞轮',
  flywheelBody: '不是路线图，也不是承诺。它是一个带有密码学锚点的 Meme：围绕一个只有中本聪原始私钥才能控制的钱包，建立尽可能大的象征性 $MSTR 头寸，然后让互联网续写故事。',
  finalKicker: '终点 / 或者起点',
  finalTitle: '钱包早已存在。',
  finalBody: '唯一的问题是，它的主人是否会回来。',
  buyCeoArrow: '购买 $CEO <span>↗</span>',
  viewContract: '查看合约 <span>↗</span>',
  twitterLink: 'X / TWITTER <span>↗</span>',
  finalDisclaimer: '$CEO 是一个 Meme 代币和实验性链上项目。本网站任何内容都不构成财务建议，也不承诺价值、收益、股权所有权或未来回报。对中本聪、Robinhood、Strategy、MSTR 和 Michael Saylor 的提及仅属于文化和叙事引用；本项目与这些个人或机构没有关联，也未获得其认可。',
  footerVerify: '不要轻信，亲自验证。'
};

const dynamicText = {
  en: {
    pageTitle: '$CEO — Satoshi Wallet',
    metaDescription: '$CEO — Satoshi Wallet. A meme-token experiment built around the public key from Bitcoin block 9 and its mathematically corresponding EVM address.',
    copied: 'COPIED',
    copy: 'COPY',
    comingSoon: 'COMING SOON',
    caSoon: 'CA SOON',
    copyCa: 'COPY CA',
    contractLiveNote: 'The official $CEO contract is now live. Always verify the contract address on this page before interacting with the token.'
  },
  zh: {
    pageTitle: '$CEO — Satoshi Wallet｜中本聪钱包',
    metaDescription: '$CEO — Satoshi Wallet。一个围绕比特币第 9 区块公钥及其数学对应 EVM 地址构建的 Meme 代币实验。',
    copied: '已复制',
    copy: '复制',
    comingSoon: '即将公布',
    caSoon: '地址待公布',
    copyCa: '复制合约地址',
    contractLiveNote: '正式 $CEO 合约现已上线。与代币交互前，请务必在本页面核对合约地址。'
  }
};

const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('mobileMenu');
const languageButtons = [...document.querySelectorAll('.lang-button')];
const metaDescription = document.querySelector('meta[name="description"]');

const CONTRACT_ADDRESS = '0xA87159135eBFa535a2ADF29c74E5Fa904d694681';
const CONTRACT_URL = 'https://robinhoodchain.blockscout.com/address/0xA87159135eBFa535a2ADF29c74E5Fa904d694681';
const BUY_URL = CONTRACT_URL;

const originalText = new Map();
const originalHtml = new Map();
const originalAriaLabels = new Map();
const originalAltText = new Map();

document.querySelectorAll('[data-i18n]').forEach(element => originalText.set(element, element.textContent));
document.querySelectorAll('[data-i18n-html]').forEach(element => originalHtml.set(element, element.innerHTML));
document.querySelectorAll('[data-i18n-aria-label]').forEach(element => originalAriaLabels.set(element, element.getAttribute('aria-label') || ''));
document.querySelectorAll('[data-i18n-alt]').forEach(element => originalAltText.set(element, element.getAttribute('alt') || ''));

let currentLanguage = getInitialLanguage();

menu?.addEventListener('click', () => sidebar?.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => sidebar?.classList.remove('open')));
languageButtons.forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));

const sections = [...document.querySelectorAll('section[id]')];
const mains = [...document.querySelectorAll('.nav-main')];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    mains.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { threshold: [0.15, 0.4, 0.7], rootMargin: '-18% 0px -60% 0px' });

  sections.forEach(section => observer.observe(section));
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem('ceo-language');
    if (savedLanguage === 'en' || savedLanguage === 'zh') return savedLanguage;
  } catch (error) {}

  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function d(key) {
  return dynamicText[currentLanguage]?.[key] || dynamicText.en[key] || key;
}

function translatedValue(key, englishValue) {
  return currentLanguage === 'zh' ? (zh[key] ?? englishValue) : englishValue;
}

function applyLanguage(language) {
  if (language !== 'en' && language !== 'zh') return;
  currentLanguage = language;

  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = d('pageTitle');
  metaDescription?.setAttribute('content', d('metaDescription'));

  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = translatedValue(element.dataset.i18n, originalText.get(element) || '');
  });

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = translatedValue(element.dataset.i18nHtml, originalHtml.get(element) || '');
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', translatedValue(element.dataset.i18nAriaLabel, originalAriaLabels.get(element) || ''));
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.setAttribute('alt', translatedValue(element.dataset.i18nAlt, originalAltText.get(element) || ''));
  });

  languageButtons.forEach(button => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  try {
    localStorage.setItem('ceo-language', language);
  } catch (error) {}

  initContractAddress();
  initBuyLinks();
  initContractLink();
}

async function writeClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

function showCopied(button, resetText) {
  button.textContent = d('copied');
  window.setTimeout(() => {
    button.textContent = resetText;
  }, 1200);
}

async function copyCode(button, elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    await writeClipboard(element.innerText);
    showCopied(button, d('copy'));
  } catch (error) {
    console.error('Unable to copy text.', error);
  }
}

function initContractAddress() {
  const addressElement = document.getElementById('contractAddress');
  const copyButton = document.getElementById('copyContract');
  const panel = document.getElementById('contractPanel');
  const note = document.querySelector('.ca-note');
  if (!addressElement || !copyButton) return;

  addressElement.textContent = CONTRACT_ADDRESS;
  copyButton.disabled = false;
  copyButton.textContent = d('copyCa');
  panel?.classList.add('live');
  if (note) note.textContent = d('contractLiveNote');

  addressElement.setAttribute('role', 'link');
  addressElement.setAttribute('tabindex', '0');
  addressElement.setAttribute('title', 'View contract on Blockscout');
  addressElement.style.cursor = 'pointer';
  addressElement.onclick = () => window.open(CONTRACT_URL, '_blank', 'noopener,noreferrer');
  addressElement.onkeydown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(CONTRACT_URL, '_blank', 'noopener,noreferrer');
    }
  };
}

function initBuyLinks() {
  document.querySelectorAll('[data-buy-link]').forEach(link => {
    link.href = BUY_URL;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.classList.remove('is-disabled');
    link.removeAttribute('aria-disabled');
    link.removeAttribute('title');
  });
}

function initContractLink() {
  const link = document.querySelector('[data-i18n-html="viewContract"]');
  if (!link) return;
  link.href = CONTRACT_URL;
  link.target = '_blank';
  link.rel = 'noreferrer';
}

async function copyContractAddress() {
  const button = document.getElementById('copyContract');

  try {
    await writeClipboard(CONTRACT_ADDRESS);
    if (button) showCopied(button, d('copyCa'));
  } catch (error) {
    console.error('Unable to copy the contract address.', error);
  }
}

applyLanguage(currentLanguage);
