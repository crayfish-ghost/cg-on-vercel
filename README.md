# ザリガニ日記

怪談・ホラー短編小説のJekyllサイト。

## セットアップ

### 必要な環境
- Ruby 3.x
- Bundler

### ローカル開発

```bash
# 依存関係のインストール
bundle install

# 開発サーバーの起動
bundle exec jekyll serve

# ブラウザで http://localhost:4000 を開く
```

## 記事の追加方法

`_posts/` フォルダに以下の命名規則でMarkdownファイルを作成します。

**ファイル名:** `YYYY-MM-DD-slug.md`

**ファイルの中身:**

```markdown
---
layout: post
title: "記事のタイトル"
date: 2024-12-01
---

記事の本文をここに書きます。

段落ごとに空行で区切ります。
```

> **ポイント:** 記事本文の最初の段落（改行まで）が一覧ページの抜粋として自動表示されます。

## サイト設定の変更

`_config.yml` を編集してください。

| 設定項目 | 説明 |
|---|---|
| `title` | サイト名 |
| `author` | 管理人名 |
| `author_bio` | プロフィール文 |
| `author_links` | SNSリンク一覧 |
| `copyright` | フッターの著作権表示 |

## ダークモード

ボタンをクリックすることでライト/ダークを切り替えられます。ブラウザの `localStorage` に設定が保存されるため、次回アクセス時も状態が維持されます。未設定の場合はOSのダークモード設定に自動で追従します。

## Vercelへのデプロイ

1. このリポジトリをGitHubにプッシュ
2. [vercel.com](https://vercel.com) でリポジトリをインポート
3. そのままDeployを押す（`vercel.json` が設定済みのため追加設定不要）
