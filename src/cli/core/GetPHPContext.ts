import type { ConfigOutput } from "@wpgen/cli/core/ValidateConfig";
import slugify from "slugify";

export default function GetPHPContext(config: ConfigOutput) {
	return {
		...config,
		headers: {
			...config.headers,
			author: config.headers.author.join(", "),
			requiresPlugins: config.headers.requiresPlugins.join(", "),
		},
		php: {
			slug: slugify(config.headers.pluginName, {
				lower: true,
				strict: true,
			}),
			prefix: slugify(config.headers.pluginName, {
				strict: true,
				replacement: "_",
			}).toUpperCase(),
		},
	};
}

export type PHPContext = ReturnType<typeof GetPHPContext>;
