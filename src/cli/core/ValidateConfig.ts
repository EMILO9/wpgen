import type { CosmiconfigResult } from "cosmiconfig";
import { z } from "zod";
import { MenuPageSchema } from "@wpgen/cli/schemas/MenuPageSchema";

const ConfigSchema = z.discriminatedUnion("template", [MenuPageSchema]);

export type ConfigInput = z.input<typeof ConfigSchema>;
export type ConfigOutput = z.output<typeof ConfigSchema>;

export function ValidateConfig(config: CosmiconfigResult) {
	return ConfigSchema.parse(config?.config);
}
