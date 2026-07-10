---
title: "LamaTrader.com"
date: 2026-07-10
tags:
  - Nuxt.js
  - Vue.js
  - TypeScript
  - Cloudflare
  - Trading
  - AI
status: In Progress
demo: https://lamatrader.com
description: LamaTrader is an Integrated Trader Environment (ITE) that connects to Alpaca via OAuth. I have been building its entire frontend since mid-2025 — from the Nuxt UI migrations to the widget/dashboard system and AI-powered trading skills.
---

# Overview

[LamaTrader](https://lamatrader.com) is an **Integrated Trader Environment (ITE)** — a single, customizable workspace that connects to a trader's existing [Alpaca](https://alpaca.markets) brokerage account through **Alpaca Connect (OAuth)**. Instead of juggling a charting tab, a broker's order form, a spreadsheet for P&L and a separate news app, everything lives in one interface: research, charting, portfolio management, and AI-powered analysis.

In July 2026 LamaTrader was listed on the [Alpaca Connect Marketplace](https://alpaca.markets/oauth?ref=alpaca.markets) as an independent, third-party app built directly on Alpaca's Trading API and Market Data API. You can read the original announcement on the [Alpaca blog](https://alpaca.markets/blog/lamatrader-launches-on-alpaca-connect-marketplace/).

![LamaTrader Integrated Trader Environment](/images/projects/lamatrader/lama_trader_ite.webp)

# My Role & Timeline

I came on board on **June 25, 2025** as the **frontend engineer**, and it has been my main focus ever since — **1,800+ commits** spanning the entire UI layer.

My work began with the **Nuxt UI v3 migration** and gradually expanded into the dashboard and widget system (built on Dockview), the order/position/watchlist tables, the options strategy builder, the Lightweight Charts integration, the theme engine, and the Lama AI widget and skill surfaces.

# What LamaTrader Does

## Trade Many Asset Classes
Through a connected Alpaca account, LamaTrader unifies trading across **US stocks & ETFs** (fractional shares and extended hours included), **options** (multi-leg chains with live Greeks and a visual strategy builder), **cryptocurrency** (BTC, ETH, USDC and more), and a **paper-trading** sandbox for learning and testing without real capital.

![Stock trading in LamaTrader](/images/projects/lamatrader/stock_trading.webp)

## Advanced Order Management
Market, limit, trailing-stop, bracket, OCO and OTO orders, plus multi-leg options — with a simplified order ticket for newcomers and the full toolkit for experienced traders.

![Advanced order management](/images/projects/lamatrader/advanced_orders.webp)

## Options Trading
A visual multi-leg strategy builder that recognizes iron condors, butterflies, straddles, credit/debit spreads, calendar spreads and more.

![Options trading](/images/projects/lamatrader/options_trading.webp)

## Crypto
Crypto trading and market data sit alongside equities and options in the same unified workspace.

![Crypto trading](/images/projects/lamatrader/crypto_trading.webp)

## Dashboards & 50+ Widgets
Users assemble their own workspaces from configurable widgets — analytics, charts, screeners, options chains, news, and portfolio views.

![Dashboards and widgets](/images/projects/lamatrader/dashboards_widgets.webp)

## Portfolio Analysis
Risk, exposure and P&L views drawn from the connected account.

![Portfolio analysis](/images/projects/lamatrader/portfolio_analysis.webp)

## Lama AI & Code Mode
With the user's permission, Lama AI can read positions, open orders, watchlists, balances and market data to answer questions, generate widgets, and prepare orders for review. **Code Mode** turns a plain-language request into a sandboxed, reviewable JavaScript skill that can be saved and re-run. Crucially, every order has to be approved by the user before it is ever submitted.

![Lama AI Code Mode](/images/projects/lamatrader/ai_code_mode.webp)

## AI Widget Builder
When the built-in widgets aren't enough, Lama AI can generate new ones that talk to Alpaca's APIs and render straight inside the custom dashboards.

![AI widget builder](/images/projects/lamatrader/widget_builder_ai_copilot.webp)

## Fully Customizable
Themes, layouts and widget configuration adapt to each trader's workflow.

![Customization](/images/projects/lamatrader/customization.webp)

# Why Alpaca

Alpaca Connect lets apps like LamaTrader link to a user's existing Alpaca account via OAuth. Alpaca supplies the brokerage accounts, custody, market data, order execution and asset coverage; LamaTrader builds the experience on top — the UI, the dashboards, the AI tools, and the workflow automation. Customer assets always remain inside Alpaca's regulated infrastructure.

As Dr. Huseyn Guliyev put it: *"Traders shouldn't have to juggle five disconnected tools to make one decision. We brought AI, Alpaca market data, account information, and order management into one environment that works together and adapts to each trader."*

# Current Stage

LamaTrader is **live on the Alpaca Connect Marketplace** and under active development. On the frontend side, my current focus is stabilizing the Dockview dashboard lifecycle, growing the widget library, and polishing the Lama AI skill and widget-generation surfaces.

---

*This write-up is based on the official Alpaca blog post [“LamaTrader Launches on Alpaca Connect Marketplace”](https://alpaca.markets/blog/lamatrader-launches-on-alpaca-connect-marketplace/). LamaTrader is an independent third-party application and this is not investment advice.*
