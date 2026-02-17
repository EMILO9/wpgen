import z from "zod";
import { WPHeadersSchema } from "@wpgen/cli/schemas/WPHeadersSchema";

export const MenuPageSchema = z.object({
	template: z.literal("menu_page"),
	options: z.object({}),
	headers: WPHeadersSchema,
});

export type MenuPageInput = z.input<typeof MenuPageSchema>;
export type MenuPageOutput = z.output<typeof MenuPageSchema>;
