import type { MDXComponents } from "mdx/types";
import BigText from "@/components/BigText";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BigText
  };
}
