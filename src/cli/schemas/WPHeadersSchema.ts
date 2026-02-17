import z from "zod";

export const WPHeadersSchema = z.object({
	pluginName: z.string().trim().nonempty(),
	pluginURI: z.url().optional(),
	description: z.string().trim().max(140).optional(),
	version: z.string().trim().default("1.0.0"),
	requiresAtLeast: z.string().trim().optional(),
	requiresPHP: z.string().trim().optional(),
	author: z.array(z.string().trim().nonempty()).default([]),
	authorURI: z.url().optional(),
	license: z.string().trim().nonempty().optional(),
	licenseURI: z.url().optional(),
	network: z.literal(true).optional(),
	updateURI: z.url().optional(),
	requiresPlugins: z.array(z.string().trim().nonempty()).default([]),
});

export type WPHeadersInput = z.input<typeof WPHeadersSchema>;
export type WPHeadersOutput = z.output<typeof WPHeadersSchema>;
