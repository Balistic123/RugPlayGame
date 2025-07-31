import { e as error, j as json } from './index-DzcLzHBX.js';
import { d as db, u as user } from './index4-C6Efthht.js';
import { eq } from 'drizzle-orm';
import { b as getPublicUrl } from './utils2-CLIgW4-x.js';
import 'drizzle-orm/postgres-js';
import 'postgres';
import './shared-server-BfUoNEXY.js';
import 'drizzle-orm/pg-core';
import './clsx-ChV9xqsO.js';
import './volume-settings-DX3g8058.js';
import './index2-D4eROfHK.js';

async function GET({ params }) {
  const { userId } = params;
  try {
    const [userData] = await db.select({ image: user.image }).from(user).where(eq(user.id, Number(userId))).limit(1);
    if (!userData) {
      throw error(404, "User not found");
    }
    const url = getPublicUrl(userData.image);
    return json({ url });
  } catch (e) {
    console.error("Failed to get user image:", e);
    throw error(500, "Failed to get user image");
  }
}

export { GET };
//# sourceMappingURL=_server.ts-D-EYwx21.js.map
