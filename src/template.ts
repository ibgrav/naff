import { HTMLInstance } from "./html";
import { RenderContext, TemplateContext } from "./types";

export let IS_TEMPLATE = Symbol("template");

type TemplateDeclaration<P> = (context: TemplateContext<P>) => HTMLInstance;
type TemplateFactory<P> = (props?: P) => TemplateInstance;
type TemplateRender = (context: RenderContext) => HTMLInstance;

export interface TemplateInstance {
  t: typeof IS_TEMPLATE;
  r: TemplateRender;
}

export let template = <P = {}>(fn: TemplateDeclaration<P>): TemplateFactory<P> => {
  return (props = {} as P) => {
    return {
      t: IS_TEMPLATE,
      r: (ctx: RenderContext) => fn({ ...ctx, props }),
    };
  };
};
