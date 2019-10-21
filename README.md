# json-map

Flatten nested JSON objects into dotted key paths.

Small, dependency-light Node.js / CommonJS utility. Original implementation and history generated for a retrospective development exercise.

## Run

`node cli.js examples/input.txt --pretty`

`node cli.js -` consumes standard input. `--output report.json` saves structured results. Run `npm test` to check behavior.

## Maintenance

Version 0.2 includes a small usability improvement and additional coverage for everyday workflows. No network dependencies are required.
