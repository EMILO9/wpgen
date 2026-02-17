import type { ConfigOutput } from "@wpgen/cli/core/ValidateConfig";
import hbs from "handlebars";
import fse from "fs-extra";
import path from "node:path";
import { GetTemplate } from "@wpgen/cli/core/GetTemplate";
import WPHeader from "@wpgen/cli/templates/partials/WPHeader.hbs";
import GetPHPContext from "@wpgen/cli/core/GetPHPContext";

hbs.registerPartial("WPHeader", WPHeader);

export async function GenPHP(config: ConfigOutput) {
	const ctx = GetPHPContext(config);
	const selected_template = await GetTemplate(ctx.template);
	const compiled = hbs.compile(selected_template);
	const rendered = compiled({ ctx });
	const output_path = path.join(
		process.cwd(),
		".plugin",
		`${ctx.php.slug}.php`,
	);
	await fse.outputFile(output_path, rendered, "utf8");
}
