import {
  defaultStates,
  type PresetStyle,
  type WsComponentMeta,
} from "@webstudio-is/sdk";
import { hr } from "@webstudio-is/sdk/normalize.css";
import { props } from "./__generated__/separator.props";
import type { defaultTag } from "./separator";

const presetStyle = {
  hr: [
    ...hr,

    {
      property: "height",
      value: { type: "keyword", value: "1px" },
    },
    {
      property: "background-color",
      value: { type: "keyword", value: "gray" },
    },
    {
      property: "border-top-style",
      value: { type: "keyword", value: "none" },
    },
    {
      property: "border-right-style",
      value: { type: "keyword", value: "none" },
    },
    {
      property: "border-left-style",
      value: { type: "keyword", value: "none" },
    },
    {
      property: "border-bottom-style",
      value: { type: "keyword", value: "none" },
    },
  ],
} satisfies PresetStyle<typeof defaultTag>;

export const meta: WsComponentMeta = {
  category: "general",
  description:
    "Used to visually divide sections of content, helping to improve readability and organization within a webpage.",
  states: defaultStates,
  presetStyle,
  order: 3,
  initialProps: ["id", "class"],
  props,
};
