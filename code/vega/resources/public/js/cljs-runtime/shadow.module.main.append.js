
shadow.cljs.devtools.client.env.module_loaded('main');

try { vega.app.core.init(); } catch (e) { console.error("An error occurred when calling (vega.app.core/init)"); throw(e); }