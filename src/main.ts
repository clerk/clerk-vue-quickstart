import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import { clerkPlugin } from "@clerk/vue";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk publishable key to the .env.local file");
}

const app = createApp(App);
app.use(clerkPlugin, {
  publishableKey: PUBLISHABLE_KEY,
});
app.mount("#app");
