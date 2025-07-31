import { createClient } from 'redis';
import { R as REDIS_URL } from './auth-CA5qtupB.js';

const redisUrl = REDIS_URL;
const client = createClient({
  url: redisUrl
});
client.on("error", (err) => console.error("Redis Client Error:", err));
{
  await client.connect().catch(console.error);
}

export { client as c };
//# sourceMappingURL=redis-LTnnuEqD.js.map
