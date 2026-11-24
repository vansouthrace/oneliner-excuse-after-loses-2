import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My excuse is that the judge read the winning entry second, and everyone knows the second joke always lands harder. I demand a rematch, or at least a recount.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
