'use server';
/**
 * @fileOverview An AI assistant that answers questions about ViMond Realty based on provided information.
 *
 * - aiInquiryAssistant - A function that handles the AI-powered inquiry process.
 * - AIInquiryAssistantInput - The input type for the aiInquiryAssistant function.
 * - AIInquiryAssistantOutput - The return type for the aiInquiryAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIInquiryAssistantInputSchema = z.object({
  question: z.string().describe('The user\'s natural language question about ViMond Realty.'),
  companyNarrative: z.string().describe('The \'Who We Are\' and \'Intelligent Luxury\' sections of ViMond Realty\'s description.').optional(),
  projects: z.string().describe('A summary or list of ViMond Realty\'s project details.').optional(),
  faqs: z.string().describe('A list of ViMond Realty\'s frequently asked questions and their answers.').optional(),
});
export type AIInquiryAssistantInput = z.infer<typeof AIInquiryAssistantInputSchema>;

const AIInquiryAssistantOutputSchema = z.object({
  answer: z.string().describe('The synthesized answer to the user\'s question based on the provided context.'),
});
export type AIInquiryAssistantOutput = z.infer<typeof AIInquiryAssistantOutputSchema>;

export async function aiInquiryAssistant(input: AIInquiryAssistantInput): Promise<AIInquiryAssistantOutput> {
  return aiInquiryAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiInquiryAssistantPrompt',
  input: { schema: AIInquiryAssistantInputSchema },
  output: { schema: AIInquiryAssistantOutputSchema },
  prompt: `You are an AI assistant for ViMond Realty, a luxury real estate brand. Your goal is to provide accurate and concise answers to user questions based ONLY on the provided context.
If you cannot find the answer within the provided context, state that you don't have enough information.

### Company Narrative:
{{{companyNarrative}}}

### Projects:
{{{projects}}}

### FAQs:
{{{faqs}}}

### User Question:
{{{question}}}

### Answer:
`,
});

const aiInquiryAssistantFlow = ai.defineFlow(
  {
    name: 'aiInquiryAssistantFlow',
    inputSchema: AIInquiryAssistantInputSchema,
    outputSchema: AIInquiryAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
