
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { triviaWorkflow } from './workflows/trivia-workflow';
import { triviaAgent } from './agents/trivia-agent';
import {toolCallAppropriatenessScorer,completenessScorer,answerFeedbackScorer} from './scorers/trivia-scorer'

export const mastra = new Mastra({
  workflows: { triviaWorkflow },
  agents: { triviaAgent },
  scorers: { toolCallAppropriatenessScorer,completenessScorer, answerFeedbackScorer},
  storage: new LibSQLStore({
    // stores observability, scores, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: 'file:../trivia.db',
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  telemetry: {
    // Telemetry is deprecated and will be removed in the Nov 4th release
    enabled: false, 
  },
  observability: {
    // Enables DefaultExporter and CloudExporter for AI tracing
    default: { enabled: true }, 
  },
});
