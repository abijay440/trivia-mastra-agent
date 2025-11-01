# trivia-mastra-agent

A small MAStra agent that runs a Trivia game workflow. This repository contains a TypeScript implementation of a trivia agent, scorer, tools, and workflow using the MAStra framework.

This README explains the project structure, requirements, how to install dependencies, how to run the project in development and production modes, how to extend the agent, and where to look for the core files.

## Table of contents

- Project overview
- Requirements
- Quick start
- Scripts
- File structure
- How it works (high-level)
- Developing and testing
- Extending the project
- Quality gates
- License

## Project overview

`trivia-mastra-agent` is an example agent built on top of the MAStra framework. It demonstrates how to compose:

- an agent implementation (`src/mastra/agents/trivia-agent.ts`),
- a scoring component (`src/mastra/scorers/trivia-scorer.ts`),
- utility tools (`src/mastra/tools/game-tools.ts`), and
- an orchestrated workflow (`src/mastra/workflows/trivia-workflow.ts`).

The project is written in TypeScript and targets Node.js >=20.9.0.

## Requirements

- Node.js v20.9.0 or later
- npm (bundled with Node.js) or another package manager

Dependencies are declared in `package.json` and include MAStra libraries and `zod` for validation.

## Quick start

1. Clone the repository (if you haven't already):

	git clone <repo-url>

2. Install dependencies:

```bash
npm install
```

3. Run the project in development mode:

```bash
npm run dev
```

The `dev` script uses the `mastra` CLI (installed as a dev dependency) to start a development server for the agent.

## Available scripts

Scripts are defined in `package.json`:

- `npm run dev` — start in development mode using the `mastra` CLI
- `npm run build` — build for production (MAStra build)
- `npm start` — start a built/production agent (MAStra start)
- `npm test` — placeholder test script (none configured)

Adjust or extend these scripts if you add tests or custom build steps.

## File structure

Top-level:

- `package.json`, `tsconfig.json` — project config
- `src/mastra` — MAStra agent code

Important files in `src/mastra`:

- `index.ts` — agent entrypoint and MAStra configuration
- `agents/trivia-agent.ts` — the trivia agent implementation
- `scorers/trivia-scorer.ts` — scoring/evaluation logic for answers
- `tools/game-tools.ts` — helper tools used by the workflow/agent
- `workflows/trivia-workflow.ts` — workflow orchestration for a trivia session

Open these files to see how the MAStra primitives are wired together.

## How it works (high-level)

1. `index.ts` registers the agent and its workflows with MAStra.
2. The `trivia-workflow` defines steps for asking questions, collecting answers, and scoring.
3. `trivia-agent` implements the agent-level logic (state management, prompting, and decision-making).
4. `trivia-scorer` evaluates answers and returns scores or feedback.
5. `game-tools` contains utility functions to normalize questions, select random trivia, or format prompts.

This separation keeps concerns modular and easy to test.

## Developing and testing

1. Install dependencies:

```bash
npm install
```

2. Run the dev server to iterate quickly:

```bash
npm run dev
```
The agent become available at http://localhost:4111/.
The API is also available for interaction at http://localhost:4111/api.

3. Build for production or smoke test the build:

```bash
npm run build
npm start
```
## Deploying

```bash
npm run build
mastra deploy
```

## License

This repository includes a top-level `LICENSE`. Keep the same license when you reuse code from this project.

---

## 🧑‍💻 Author
Abiodun Jegede  
Full-Stack Developer @ Abisofts Inc
Email: abijay440@gmail.com  
profile: https://abijay440.github.io/cv/

---
