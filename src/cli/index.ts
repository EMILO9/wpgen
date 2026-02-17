import { Command } from "commander";
import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import parsePackageJsonName from "parse-packagejson-name";
import { name, description, version } from "@wpgen/package";
import { Listr } from "listr2";
import { ValidateConfig } from "@wpgen/cli/core/ValidateConfig";
import { GenPHP } from "@wpgen/cli/core/GenPHP";

const { fullName } = parsePackageJsonName(name);

const program = new Command()
	.name(fullName)
	.description(description)
	.version(version);

const explorer = cosmiconfig(fullName, {
	loaders: {
		".ts": TypeScriptLoader(),
	},
});

const tasks = new Listr([]);

program.command("build").action(async () => {
	const result = await explorer.search();
	const config = ValidateConfig(result);
	tasks.add([{ title: "PHP", task: async () => GenPHP(config) }]);
	await tasks.run();
});

program.command("serve").action(async () => {
	console.log("Serve command is not implemented yet.");
});

program.parse();
