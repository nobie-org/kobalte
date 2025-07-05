// src/index.ts
function makeDataAttribute(state) {
  return `[data-${state}]`;
}
function makeSelectorByOptions(selector, options) {
  let computedSelector = selector;
  if (options.not) {
    computedSelector = `:not(${computedSelector})`;
  }
  computedSelector = `&${computedSelector}`;
  if (options.parentSelector) {
    computedSelector = `${options.parentSelector} ${computedSelector}`;
  }
  return computedSelector;
}
function componentStateStyles(styles, options) {
  const styleRule = { selectors: {} };
  const selectorOptions = {
    parentSelector: options?.parentSelector ?? void 0
  };
  if (styleRule.selectors) {
    for (const property in styles) {
      const { not, ...styleValues } = styles[property] ?? {};
      const dataAttrSelector = makeDataAttribute(property);
      if (not) {
        const selector2 = makeSelectorByOptions(dataAttrSelector, {
          parentSelector: selectorOptions.parentSelector,
          not: true
        });
        styleRule.selectors[selector2] = not || {};
      }
      const selector = makeSelectorByOptions(dataAttrSelector, {
        parentSelector: selectorOptions.parentSelector,
        not: false
      });
      styleRule.selectors[selector] = styleValues;
    }
  }
  return styleRule;
}
export {
  componentStateStyles
};
