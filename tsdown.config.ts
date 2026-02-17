import { defineConfig } from "tsdown";

export default defineConfig([
	{
		entry: "src/app/index.ts",
		format: ["cjs", "esm"],
		outDir: "dist/app",
		dts: true,
	},
	{
		entry: "src/cli/index.ts",
		format: ["esm"],
		outDir: "dist/cli",
		dts: false,
		loader: {
			".hbs": "text",
		},
		banner: "#!/usr/bin/env node",
	},
]);
