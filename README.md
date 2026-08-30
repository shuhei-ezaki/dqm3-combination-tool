# dqm3-combination-tool

ドラゴンクエストモンスターズ3（DQM3）の配合ルート図集。目標モンスターごとに、素材を通常配合・スカウト・タマゴ限定まで分解した Mermaid 図をまとめた静的サイト。

## 公開先

- 本番: <https://shuhei-ezaki.github.io/dqm3-combination-tool/>
- 各 PR の確認用: `https://shuhei-ezaki.github.io/dqm3-combination-tool/pr-preview/pr-<番号>/`（PR にコメントで URL が付きます）

## ローカルで見る

依存なしの静的サイトです。`index.html` をブラウザで直接開くだけで動きます（`file://` 可）。
ローカルサーバーを使う場合は `npx serve .` など。

## 構成

```
index.html          入口ページ
assets/theme.css    全ページ共通テーマ
routes/             目標モンスターごとのルート図（_template.html は雛形）
scripts/build-site.sh   公開用サイトの組み立て
.github/workflows/  本番デプロイ / PR プレビュー
```

編集ルールは [CLAUDE.md](CLAUDE.md) を参照。
