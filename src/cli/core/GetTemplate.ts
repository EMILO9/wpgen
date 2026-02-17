import type { ConfigOutput } from "@wpgen/cli/core/ValidateConfig";

const templates = {
	menu_page: import("@wpgen/cli/templates/MenuPage.hbs"),
};

export async function GetTemplate(template: ConfigOutput["template"]) {
	const selected_template = await templates[template];
	return selected_template.default;
}
