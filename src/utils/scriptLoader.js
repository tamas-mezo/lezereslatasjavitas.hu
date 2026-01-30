const loadedScripts = new Map();

const loadScriptTag = (src) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (err) =>
      reject(new Error(`Failed to load script ${src}: ${err?.message || err}`));
    document.body.appendChild(script);
  });

export const loadScript = (src) => {
  if (loadedScripts.has(src)) return loadedScripts.get(src);
  const promise = loadScriptTag(src);
  loadedScripts.set(src, promise);
  return promise;
};

export const loadScriptsSequentially = (sources = []) =>
  sources.reduce((chain, src) => chain.then(() => loadScript(src)), Promise.resolve());

