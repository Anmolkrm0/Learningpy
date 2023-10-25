(function() {
    const importPath = /*@__PURE__*/ JSON.parse('"iframe.js"');
    import(chrome.runtime.getURL(importPath));
})();