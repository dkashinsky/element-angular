import { Compiler } from "@angular/core";
import { JitCompilerFactory } from "@angular/platform-browser-dynamic";

export function createJitCompiler(): Compiler {
  // @ts-ignore
  return new JitCompilerFactory([]).createCompiler();
}
