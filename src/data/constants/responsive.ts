export const AlignItems = {
  stretch: "align-items: stretch",
  center: "align-items: center",
  start: "align-items: flex-start",
  end: "align-items: flex-end",
  baseline: "align-items: baseline",
  initial: "align-items: initial",
  inherit: "align-items: inherit",
} as const;

export type AlignItemsTypes = typeof AlignItems;
export type IAlignItems = keyof AlignItemsTypes;

export const Display = {
  flex: "display: flex",
  column: "flex-direction: column",
  flexColumn: "display: flex; flex-direction: column",
  block: "display: block",
  inline: "display: inline",
  contents: "display: contents",
  grid: "display: grid",
  inlineBlock: "display: inline-block",
  inlineFlex: "display: inline-flex",
  inlineGrid: "display: inline-grid",
  inlineTable: "display: inline-table",
  runIn: "display: run-in",
  table: "display: table",
  tableCaption: "display: table-caption",
  tableColumnGroup: "display: table-column-group",
  tableHeaderGroup: "display: table-header-group",
  tableFooterGroup: "display: table-footer-group",
  tableRowGroup: "display: table-row-group",
  tableCell: "display: table-cell",
  tableColumn: "display: table-column",
  tableRow: "display: table-row",
  none: "display: none",
  initial: "display: initial",
  inherit: "display: inherit",
} as const;

export type DisplayType = typeof Display;
export type IDisplay = keyof DisplayType;

export const JustifyContent = {
  stretch: "justify-content: stretch !important;",
  center: "justify-content: center !important;",
  start: "justify-content: flex-start !important;",
  end: "justify-content: flex-end !important;",
  between: "justify-content: space-between !important;",
  around: "justify-content: space-around !important;",
  initial: "justify-content: initial !important;",
  inherit: "justify-content: inherit; !important",
} as const;

export type JustifyContentType = typeof JustifyContent;
export type IJustifyContent = keyof JustifyContentType;

export const AlignContent = {
  stretch: "align-content: stretch",
  center: "align-content: center",
  start: "align-content: flex-start",
  end: "align-content: flex-end",
  between: "align-content: space-between",
  around: "align-content: space-around",
  initial: "align-content: initial",
  inherit: "align-content: inherit",
} as const;

export type AlignContentType = typeof AlignContent;
export type IAlignContent = keyof AlignContentType;

export const AlignSelf = {
  auto: "align-self: auto",
  stretch: "align-self: stretch",
  center: "align-self: center",
  start: "align-self: flex-start",
  end: "align-self: flex-end",
  baseline: "align-self: baseline",
  initial: "align-self: initial",
  inherit: "align-self: inherit",
} as const;

export type AlignSelfType = typeof AlignSelf;
export type IAlignSelf = keyof AlignSelfType;
