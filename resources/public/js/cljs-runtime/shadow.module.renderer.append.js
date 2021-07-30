
shadow.cljs.devtools.client.env.module_loaded('renderer');

try { renderer.core.start_BANG_(); } catch (e) { console.error("An error occurred when calling (renderer.core/start!)"); throw(e); }