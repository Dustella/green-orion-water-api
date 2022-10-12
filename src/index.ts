import { createCors } from "itty-cors";
import router from "./router";

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

const { corsify } = createCors({ origins: ['*'],maxAge: 86400, methods: ['GET', 'POST', 'OPTIONS'] ,headers: []});

export default {
  fetch: (request: Request, env: Env) =>
    router.handle(request, env),
};
