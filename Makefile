NODE_VERSION ?= 24
PNPM_VERSION ?= 11

# 优先使用 nvm 里的 Node $(NODE_VERSION)（含其 corepack/pnpm），保证所有命令跑在正确版本上
NVM_NODE_BIN := $(wildcard $(HOME)/.nvm/versions/node/v$(NODE_VERSION).*/bin)
ifneq ($(strip $(NVM_NODE_BIN)),)
export PATH := $(NVM_NODE_BIN):$(PATH)
endif

.PHONY: help setup install dev build preview typecheck lint lint-style test format

help: ## 显示所有命令
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

setup: ## 一键初始化：检查 Node >= 24、启用 corepack/pnpm、安装依赖
	@if [ -s "$$HOME/.nvm/nvm.sh" ]; then \
		source "$$HOME/.nvm/nvm.sh"; \
		nvm use "$(NODE_VERSION)" 2>/dev/null || true; \
	fi; \
	if ! command -v node >/dev/null 2>&1; then \
		echo "✗ 未检测到 Node.js，请先安装（推荐: nvm install $(NODE_VERSION) && nvm use $(NODE_VERSION)）"; \
		exit 1; \
	fi; \
	node -e "const [maj] = process.versions.node.split('.').map(Number); if (maj < $(NODE_VERSION)) { console.error('✗ 需要 Node >= $(NODE_VERSION)，当前 ' + process.version + '（请先 nvm use $(NODE_VERSION)）'); process.exit(1); }"; \
	corepack enable; \
	corepack prepare "pnpm@$(PNPM_VERSION)" --activate; \
	pnpm install; \
	echo ""; \
	echo "✓ 环境就绪！运行 make dev 开始打字练习"

install: ## 仅安装依赖（需先有 Node/pnpm）
	pnpm install

dev: ## 启动开发服务器
	pnpm dev

build: ## 生产构建
	pnpm build

preview: ## 预览构建产物
	pnpm preview

typecheck: ## TypeScript 类型检查
	pnpm typecheck

lint: ## ESLint 代码规范检查
	pnpm lint

lint-style: ## Stylelint 样式规范检查
	pnpm lint:style

test: ## 单元测试
	pnpm test

format: ## Prettier 格式化代码
	pnpm format
