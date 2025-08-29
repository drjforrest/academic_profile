'use server';

/**
 * @fileOverview A flow to assist with generating content for the publication carousel.
 *
 * - assistWithCarouselContent - A function that generates concise summaries or keywords for publications.
 * - AssistWithCarouselContentInput - The input type for the assistWithCarouselContent function.
 * - AssistWithCarouselContentOutput - The return type for the assistWithCarouselContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistWithCarouselContentInputSchema = z.object({
  publicationTitle: z.string().describe('The title of the publication.'),
  publicationAbstract: z.string().describe('The abstract of the publication.'),
});
export type AssistWithCarouselContentInput = z.infer<typeof AssistWithCarouselContentInputSchema>;

const AssistWithCarouselContentOutputSchema = z.object({
  conciseSummary: z.string().describe('A concise, one-sentence summary of the publication.'),
  keywords: z.array(z.string()).describe('Keywords for the publication.'),
});
export type AssistWithCarouselContentOutput = z.infer<typeof AssistWithCarouselContentOutputSchema>;

export async function assistWithCarouselContent(
  input: AssistWithCarouselContentInput
): Promise<AssistWithCarouselContentOutput> {
  return assistWithCarouselContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assistWithCarouselContentPrompt',
  input: {schema: AssistWithCarouselContentInputSchema},
  output: {schema: AssistWithCarouselContentOutputSchema},
  prompt: `You are an expert at summarizing academic publications and identifying relevant keywords.

  Given the title and abstract of a publication, generate a concise, one-sentence summary and a list of keywords.

  Title: {{{publicationTitle}}}
  Abstract: {{{publicationAbstract}}}

  Summary:
  Keywords:`, // Ensure the prompt ends with 'Summary:' and 'Keywords:' for clear separation
});

const assistWithCarouselContentFlow = ai.defineFlow(
  {
    name: 'assistWithCarouselContentFlow',
    inputSchema: AssistWithCarouselContentInputSchema,
    outputSchema: AssistWithCarouselContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
