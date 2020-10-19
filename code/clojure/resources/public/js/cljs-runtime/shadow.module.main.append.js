
shadow.cljs.devtools.client.env.module_loaded('main');

try { vegatest.app.core.init(); } catch (e) { console.error("An error occurred when calling (vegatest.app.core/init)"); throw(e); }