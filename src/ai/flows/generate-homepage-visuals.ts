'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating visual assets for the homepage using AI.
 *
 * - generateHomepageVisuals - A function that generates visual assets for the homepage.
 * - GenerateHomepageVisualsInput - The input type for the generateHomepageVisuals function.
 * - GenerateHomepageVisualsOutput - The return type for the generateHomepageVisuals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHomepageVisualsInputSchema = z.object({
  theme: z
    .string()
    .describe(
      'The theme for the visual asset, e.g., "global collaboration", "digital health", etc.'
    ),
  style: z
    .string()
    .describe(
      'The desired style for the visual asset, e.g., "abstract", "modern", "inclusive", etc.'
    ),
  keywords: z
    .string()
    .describe(
      'Keywords to guide the image generation, e.g., "network, data, collaboration".'
    ),
  visualAssetDescription: z
    .string()
    .describe(
      'A description of the visual asset to generate, including the theme, style, and keywords.'
    ),
});
export type GenerateHomepageVisualsInput = z.infer<typeof GenerateHomepageVisualsInputSchema>;

const GenerateHomepageVisualsOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      'The URL of the generated image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});
export type GenerateHomepageVisualsOutput = z.infer<typeof GenerateHomepageVisualsOutputSchema>;

export async function generateHomepageVisuals(
  input: GenerateHomepageVisualsInput
): Promise<GenerateHomepageVisualsOutput> {
  return generateHomepageVisualsFlow(input);
}

const generateVisualAssetPrompt = ai.definePrompt({
  name: 'generateVisualAssetPrompt',
  input: {schema: GenerateHomepageVisualsInputSchema},
  output: {schema: GenerateHomepageVisualsOutputSchema},
  prompt: `Generate a visual asset for the homepage based on the following description:\n\n{{{visualAssetDescription}}}\n\nThe theme is: {{{theme}}}.\nThe style should be: {{{style}}}.\nKeywords: {{{keywords}}}.\n\nPlease provide the image as a data URI.
`,
});

const generateHomepageVisualsFlow = ai.defineFlow(
  {
    name: 'generateHomepageVisualsFlow',
    inputSchema: GenerateHomepageVisualsInputSchema,
    outputSchema: GenerateHomepageVisualsOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate an image with the following description: ${input.visualAssetDescription}. The theme is ${input.theme}. The style should be ${input.style}. Keywords: ${input.keywords}.`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {imageUrl: media.url};
  }
);
