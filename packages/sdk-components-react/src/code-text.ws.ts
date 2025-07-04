import { BracesIcon } from "@webstudio-is/icons/svg";
import {
  defaultStates,
  type PresetStyle,
  type WsComponentMeta,
} from "@webstudio-is/sdk";
import { code } from "@webstudio-is/sdk/normalize.css";
import type { defaultTag } from "./code-text";
import { props } from "./__generated__/code-text.props";

const presetStyle = {
  code: [
    ...code,
    {
      property: "display",
      value: { type: "keyword", value: "block" },
    },
    {
      property: "white-space-collapse",
      value: { type: "keyword", value: "preserve" },
    },
    {
      property: "text-wrap-mode",
      value: { type: "keyword", value: "wrap" },
    },
    {
      property: "padding-left",
      value: { type: "unit", value: 0.2, unit: "em" },
    },
    {
      property: "padding-right",
      value: { type: "unit", value: 0.2, unit: "em" },
    },
    {
      property: "background-color",
      value: { type: "rgb", r: 238, g: 238, b: 238, alpha: 1 },
    },
  ],
} satisfies PresetStyle<typeof defaultTag>;

export const meta: WsComponentMeta = {
  category: "general",
  description:
    "Use this component when you want to display code as text on the page.",
  icon: BracesIcon,
  contentModel: {
    category: "instance",
    children: [],
  },
  states: defaultStates,
  presetStyle,
  order: 5,
  initialProps: ["id", "class", "lang", "code"],
  props: {
    ...props,
    code: {
      required: true,
      control: "codetext",
      type: "string",
    },
  },
};
