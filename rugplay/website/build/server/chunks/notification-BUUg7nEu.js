import { d as db, n as notifications } from './index4-C6Efthht.js';
import { c as client } from './redis-LTnnuEqD.js';

async function createNotification(userId, type, title, message, link) {
  await db.insert(notifications).values({
    userId: parseInt(userId),
    type,
    title,
    message,
    link
  });
  try {
    const channel = `notifications:${userId}`;
    const payload = {
      type: "notification",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      userId,
      notificationType: type,
      title,
      message,
      link
    };
    await client.publish(channel, JSON.stringify(payload));
  } catch (error) {
    console.error("Failed to send notification via Redis:", error);
  }
}

export { createNotification as c };
//# sourceMappingURL=notification-BUUg7nEu.js.map
