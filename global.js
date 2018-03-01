#!/usr/bin/env node
const { versions: { node: nodeVersion, v8: v8Version } } = process;
console.log(`Node.js version: ${nodeVersion}\nV8 version: ${v8Version}`)