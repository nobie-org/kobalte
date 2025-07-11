'use strict';

var plugin = require('tailwindcss/plugin');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var plugin__default = /*#__PURE__*/_interopDefault(plugin);

// src/index.ts
var STATES = [
  "valid",
  "invalid",
  "required",
  "disabled",
  "readonly",
  "checked",
  "indeterminate",
  "selected",
  "pressed",
  "expanded",
  "opened",
  "closed",
  "highlighted",
  "current",
  "placeholder-shown",
  "visible",
  "animate"
];
var ORIENTATIONS = ["horizontal", "vertical"];
var SWIPE_STATES = ["start", "move", "cancel", "end"];
var SWIPE_DIRECTIONS = ["up", "down", "left", "right"];
var src_default = plugin__default.default.withOptions(
  ({ prefix = "ui" } = {}) => {
    return ({ addVariant }) => {
      for (const state of STATES) {
        addVariant(`${prefix}-${state}`, [`&[data-${state}]`]);
        addVariant(`${prefix}-not-${state}`, [`&:not([data-${state}])`]);
        addVariant(
          `${prefix}-group-${state}`,
          `:merge(.group)[data-${state}] &`
        );
        addVariant(
          `${prefix}-peer-${state}`,
          `:merge(.peer)[data-${state}] ~ &`
        );
      }
      for (const orientation of ORIENTATIONS) {
        addVariant(`${prefix}-${orientation}`, [
          `&[data-orientation='${orientation}']`
        ]);
        addVariant(`${prefix}-not-${orientation}`, [
          `&:not([data-orientation='${orientation}'])`
        ]);
        addVariant(
          `${prefix}-group-${orientation}`,
          `:merge(.group)[data-orientation='${orientation}'] &`
        );
        addVariant(
          `${prefix}-peer-${orientation}`,
          `:merge(.peer)[data-orientation='${orientation}'] ~ &`
        );
      }
      for (const state of SWIPE_STATES) {
        addVariant(`${prefix}-swipe-${state}`, [`&[data-swipe='${state}']`]);
        addVariant(`${prefix}-not-swipe-${state}`, [
          `&:not([data-swipe='${state}'])`
        ]);
        addVariant(
          `${prefix}-group-swipe-${state}`,
          `:merge(.group)[data-swipe='${state}'] &`
        );
        addVariant(
          `${prefix}-peer-swipe-${state}`,
          `:merge(.peer)[data-swipe='${state}'] ~ &`
        );
      }
      for (const direction of SWIPE_DIRECTIONS) {
        addVariant(`${prefix}-swipe-direction-${direction}`, [
          `&[data-swipe-direction='${direction}']`
        ]);
        addVariant(`${prefix}-not-swipe-direction-${direction}`, [
          `&:not([data-swipe-direction='${direction}'])`
        ]);
        addVariant(
          `${prefix}-group-swipe-direction-${direction}`,
          `:merge(.group)[data-swipe-direction='${direction}'] &`
        );
        addVariant(
          `${prefix}-peer-swipe-direction-${direction}`,
          `:merge(.peer)[data-swipe-direction='${direction}'] ~ &`
        );
      }
    };
  }
);

module.exports = src_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map