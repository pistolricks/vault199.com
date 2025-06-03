import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/index.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_API_URL": "https://api.vault199.com", "VITE_API_VERSION": "/api/v1", "VITE_API_WS": "wss://api.vault199.com"};import { createComponent as _$createComponent } from "/node_modules/.vite/deps/solid-js_web.js?v=7071e497";
import { $$decline as _$$decline } from "/@solid-refresh";
import "/src/index.css?t=1748994533391";
import { render } from "/node_modules/.vite/deps/solid-js_web.js?v=7071e497";
import App from "/src/app.tsx?t=1748994533291";
import { Router } from "/node_modules/@solidjs/router/dist/index.jsx";
import routes from "/@id/virtual:vite-plugin-pages/generated-pages?t=1748994533291&id=~solid-pages";
import { registerSW } from "/@vite-plugin-pwa/virtual:pwa-register";
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      window.dispatchEvent(new CustomEvent("pwa-update"));
      updateSW(true).then((r) => console.log("reload", r));
    }
  },
  onOfflineReady() {
    console.log("App ready to work offline");
    window.dispatchEvent(new CustomEvent("pwa-update"));
  }
});
const root = document.getElementById("root");
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}
const _cleanup = render(
  // @ts-ignore
  () => _$createComponent(Router, {
    root: (props) => _$createComponent(App, {
      get children() {
        return props.children;
      }
    }),
    children: routes
  }),
  root
);
if (import.meta.hot) import.meta.hot.dispose(_cleanup);
if (import.meta.hot) {
  _$$decline("vite", import.meta.hot);
  import.meta.hot.accept();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPO0FBRVAsU0FBUUEsY0FBYTtBQUVyQixPQUFPQyxTQUFTO0FBQ2hCLFNBQVFDLGNBQWE7QUFDckIsT0FBT0MsWUFBWTtBQUNuQixTQUFRQyxrQkFBaUI7QUFHekIsTUFBTUMsV0FBV0QsV0FBVztBQUFBLEVBQ3hCRSxnQkFBZ0I7QUFDWixRQUFJQyxRQUFRLGdDQUFnQyxHQUFHO0FBRTNDQyxhQUFPQyxjQUFjLElBQUlDLFlBQVksWUFBWSxDQUFDO0FBQ2xETCxlQUFTLElBQUksRUFBRU0sS0FBS0MsT0FBS0MsUUFBUUMsSUFBSSxVQUFVRixDQUFDLENBQUM7QUFBQSxJQUNyRDtBQUFBLEVBQ0o7QUFBQSxFQUNBRyxpQkFBaUI7QUFDYkYsWUFBUUMsSUFBSSwyQkFBMkI7QUFFdkNOLFdBQU9DLGNBQWMsSUFBSUMsWUFBWSxZQUFZLENBQUM7QUFBQSxFQUN0RDtBQUNKLENBQUM7QUFFRCxNQUFNTSxPQUFPQyxTQUFTQyxlQUFlLE1BQU07QUFFM0MsSUFBSUMsWUFBWUMsSUFBSUMsT0FBTyxFQUFFTCxnQkFBZ0JNLGNBQWM7QUFDdkQsUUFBTSxJQUFJQyxNQUNOLGdIQUNKO0FBQ0o7QUFBQyxNQUFBQyxXQUdEeEI7QUFBQUE7QUFBQUEsRUFFSSxNQUFBeUIsa0JBQU92QixRQUFNO0FBQUEsSUFBQ2MsTUFBT1UsV0FBS0Qsa0JBQU14QixLQUFHO0FBQUEsVUFBQTBCLFdBQUE7QUFBQSxlQUFFRCxNQUFNQztBQUFBQSxNQUFRO0FBQUE7QUFBQSxJQUFPQSxVQUFHeEI7QUFBQUEsRUFBTTtBQUFBLEVBQ25FYTtBQUNKO0FBQUMsSUFBQUcsWUFBQVMsSUFBQVQsYUFBQVMsSUFBQUMsUUFBQUwsUUFBQTtBQUFBLElBQUFMLFlBQUFTLEtBQUE7QUFBQUUsYUFBQSxRQUFBWCxZQUFBUyxHQUFBO0FBQUFULGNBQUFTLElBQUFHLE9BQUE7QUFBQSIsIm5hbWVzIjpbInJlbmRlciIsIkFwcCIsIlJvdXRlciIsInJvdXRlcyIsInJlZ2lzdGVyU1ciLCJ1cGRhdGVTVyIsIm9uTmVlZFJlZnJlc2giLCJjb25maXJtIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwidGhlbiIsInIiLCJjb25zb2xlIiwibG9nIiwib25PZmZsaW5lUmVhZHkiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltcG9ydCIsImVudiIsIkRFViIsIkhUTUxFbGVtZW50IiwiRXJyb3IiLCJfY2xlYW51cCIsIl8kY3JlYXRlQ29tcG9uZW50IiwicHJvcHMiLCJjaGlsZHJlbiIsImhvdCIsImRpc3Bvc2UiLCJfJCRkZWNsaW5lIiwiYWNjZXB0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAcmVmcmVzaCByZWxvYWQgKi9cbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAnc29saWQtanMvd2ViJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQHNvbGlkanMvcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnfnNvbGlkLXBhZ2VzJztcbmltcG9ydCB7cmVnaXN0ZXJTV30gZnJvbSAndmlydHVhbDpwd2EtcmVnaXN0ZXInO1xuXG4vLyBSZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuY29uc3QgdXBkYXRlU1cgPSByZWdpc3RlclNXKHtcbiAgICBvbk5lZWRSZWZyZXNoKCkge1xuICAgICAgICBpZiAoY29uZmlybSgnTmV3IGNvbnRlbnQgYXZhaWxhYmxlLiBSZWxvYWQ/JykpIHtcbiAgICAgICAgICAgIC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBiZWZvcmUgdXBkYXRpbmdcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncHdhLXVwZGF0ZScpKTtcbiAgICAgICAgICAgIHVwZGF0ZVNXKHRydWUpLnRoZW4ociA9PiBjb25zb2xlLmxvZyhcInJlbG9hZFwiLCByKSk7IC8vIEV4cGxpY2l0bHkgcmVsb2FkIHRoZSBwYWdlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uT2ZmbGluZVJlYWR5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXBwIHJlYWR5IHRvIHdvcmsgb2ZmbGluZScpO1xuICAgICAgICAvLyBEaXNwYXRjaCBldmVudCB3aGVuIG9mZmxpbmUgbW9kZSBpcyByZWFkeVxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3B3YS11cGRhdGUnKSk7XG4gICAgfSxcbn0pO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuaWYgKGltcG9ydC5tZXRhLmVudi5ERVYgJiYgIShyb290IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUm9vdCBlbGVtZW50IG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGl0IHRvIHlvdXIgaW5kZXguaHRtbD8gT3IgbWF5YmUgdGhlIGlkIGF0dHJpYnV0ZSBnb3QgbWlzc3BlbGxlZD8nLFxuICAgICk7XG59XG5cblxucmVuZGVyKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAoKSA9PiA8Um91dGVyIHJvb3Q9eyhwcm9wcykgPT4gPEFwcD57cHJvcHMuY2hpbGRyZW59PC9BcHA+fT57cm91dGVzfTwvUm91dGVyPixcbiAgICByb290LFxuKTsiXSwiZmlsZSI6Ii9Wb2x1bWVzL3NzZC9ob21lL1dlYnN0b3JtUHJvamVjdHMvdmF1bHQxOTkvc3JjL2luZGV4LnRzeCJ9