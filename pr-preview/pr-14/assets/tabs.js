// DQM3 配合ルート図 — ルートページ共通スクリプト
//
// #tabs 内の <button data-target="…"> と <section class="panel" id="…">
// を対応させ、初回表示時に mermaid.run() する遅延レンダリングを行う。
//
// URL の #<タブID> で直接そのタブを開ける。他ページの配合図から
// 「◯◯タブ参照」ノードに `click NODE href "darkdream.html#lamia"` を
// 付けて相互参照リンクにするための土台。同一ページ内の参照は
// `click NODE href "#kinghydra"` でよい（hashchange で自動的に拾う）。
//
// mermaid.min.js を先に読み込んでおくこと。

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  securityLevel: "loose",
  themeVariables: {
    fontFamily: '"Zen Kaku Gothic New","Hiragino Sans","Yu Gothic",system-ui,sans-serif',
    fontSize: "13px",
    primaryColor: "#ffffff",
    primaryTextColor: "#14161c",
    primaryBorderColor: "#8a8578",
    lineColor: "#6f6a5c"
  },
  flowchart: { nodeSpacing: 55, rankSpacing: 70, curve: "basis", useMaxWidth: false }
});

const rendered = new Set();
async function renderPanel(id) {
  if (rendered.has(id)) return;
  const nodes = document.querySelectorAll(`#${id} .mermaid`);
  if (nodes.length) await mermaid.run({ nodes });
  rendered.add(id);
}

const tabButtons = document.querySelectorAll("#tabs button");

function activateTab(id) {
  const btn = document.querySelector(`#tabs button[data-target="${id}"]`);
  if (!btn) return false;
  tabButtons.forEach(b => b.setAttribute("aria-selected", String(b === btn)));
  document.querySelectorAll(".panel").forEach(p => {
    p.dataset.active = String(p.id === id);
  });
  renderPanel(id);
  return true;
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (location.hash.slice(1) === btn.dataset.target) {
      activateTab(btn.dataset.target);
    } else {
      location.hash = btn.dataset.target;
    }
  });
});

window.addEventListener("hashchange", () => {
  activateTab(location.hash.slice(1));
});

if (!activateTab(location.hash.slice(1))) {
  activateTab("overview");
}
