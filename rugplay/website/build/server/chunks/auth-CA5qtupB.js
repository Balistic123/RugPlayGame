import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { d as private_env, p as public_env } from './shared-server-BfUoNEXY.js';
import { d as db, k as schema } from './index4-C6Efthht.js';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import { P as PUBLIC_B2_BUCKET, a as PUBLIC_B2_REGION, b as PUBLIC_B2_ENDPOINT } from './public-B3YCMw9Q.js';
import sharp from 'sharp';
import { apiKey } from 'better-auth/plugins';

const adjectives = ["happy", "lucky", "sunny", "clever", "brave", "bright", "cool", "wild", "calm", "kind"];
const nouns = ["panda", "tiger", "whale", "eagle", "lion", "wolf", "bear", "fox", "deer", "seal"];
function generateUsername() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 9999);
  return `${adj}_${noun}${number}`;
}
const REDIS_URL = "redis://localhost:6379";
const PRIVATE_B2_KEY_ID = "your_b2_key_id";
const PRIVATE_B2_APP_KEY = "your_b2_app_key";
const OPENROUTER_API_KEY = "your_openrouter_api_key";
const MAX_SIZE = 128;
const WEBP_QUALITY = 50;
async function processImage(inputBuffer) {
  try {
    const image = sharp(inputBuffer, { animated: true });
    const processedBuffer = await image.resize(MAX_SIZE, MAX_SIZE, {
      fit: "inside",
      withoutEnlargement: true
    }).webp({
      quality: WEBP_QUALITY,
      effort: 6
    }).toBuffer();
    return {
      buffer: processedBuffer,
      contentType: "image/webp",
      size: processedBuffer.length
    };
  } catch (error) {
    console.error("Image processing failed:", error);
    throw new Error("Failed to process image");
  }
}
const s3Client = new S3Client({
  endpoint: PUBLIC_B2_ENDPOINT,
  region: PUBLIC_B2_REGION,
  credentials: {
    accessKeyId: PRIVATE_B2_KEY_ID,
    secretAccessKey: PRIVATE_B2_APP_KEY
  },
  forcePathStyle: true,
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED"
});
async function uploadProfilePicture(identifier, body, contentType) {
  if (!contentType || !contentType.startsWith("image/")) {
    throw new Error("Invalid file type. Only images are allowed.");
  }
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
  if (!allowedTypes.includes(contentType.toLowerCase())) {
    throw new Error("Unsupported image format. Only JPEG, PNG, GIF, and WebP are allowed.");
  }
  const processedImage = await processImage(Buffer.from(body));
  const key = `avatars/${identifier}.webp`;
  const command = new PutObjectCommand({
    Bucket: PUBLIC_B2_BUCKET,
    Key: key,
    Body: processedImage.buffer,
    ContentType: processedImage.contentType,
    ContentLength: processedImage.size
  });
  await s3Client.send(command);
  return key;
}
async function uploadCoinIcon(coinSymbol, body, contentType) {
  if (!contentType || !contentType.startsWith("image/")) {
    throw new Error("Invalid file type. Only images are allowed.");
  }
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
  if (!allowedTypes.includes(contentType.toLowerCase())) {
    throw new Error("Unsupported image format. Only JPEG, PNG, GIF, and WebP are allowed.");
  }
  const processedImage = await processImage(Buffer.from(body));
  const key = `coins/${coinSymbol.toLowerCase()}.webp`;
  const command = new PutObjectCommand({
    Bucket: PUBLIC_B2_BUCKET,
    Key: key,
    Body: processedImage.buffer,
    ContentType: processedImage.contentType,
    ContentLength: processedImage.size
  });
  await s3Client.send(command);
  return key;
}
if (!private_env.GOOGLE_CLIENT_ID) throw new Error("GOOGLE_CLIENT_ID is not set");
if (!private_env.GOOGLE_CLIENT_SECRET) throw new Error("GOOGLE_CLIENT_SECRET is not set");
if (!public_env.PUBLIC_BETTER_AUTH_URL) throw new Error("PUBLIC_BETTER_AUTH_URL is not set");
const auth = betterAuth({
  baseURL: public_env.PUBLIC_BETTER_AUTH_URL,
  secret: private_env.PRIVATE_BETTER_AUTH_SECRET,
  appName: "Rugplay",
  trustedOrigins: [
    public_env.PUBLIC_BETTER_AUTH_URL,
    "http://rugplay.com",
    "http://localhost:5173"
  ],
  plugins: [
    apiKey({
      defaultPrefix: "rgpl_",
      rateLimit: {
        enabled: true,
        timeWindow: 1e3 * 60 * 60 * 24,
        // 1 day
        maxRequests: 2e3
        // 2000 requests per day
      },
      permissions: {
        defaultPermissions: {
          api: ["read"]
        }
      }
    })
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema
  }),
  socialProviders: {
    google: {
      clientId: private_env.GOOGLE_CLIENT_ID,
      clientSecret: private_env.GOOGLE_CLIENT_SECRET,
      mapProfileToUser: async (profile) => {
        const newUsername = generateUsername();
        let s3ImageKey = null;
        if (profile.picture) {
          try {
            const response = await fetch(profile.picture);
            if (!response.ok) {
              console.error(`Failed to fetch profile picture: ${response.statusText}`);
            } else {
              const blob = await response.blob();
              const arrayBuffer = await blob.arrayBuffer();
              s3ImageKey = await uploadProfilePicture(
                profile.sub,
                new Uint8Array(arrayBuffer),
                blob.type || "image/jpeg"
              );
            }
          } catch (error) {
            console.error("Failed to upload profile picture during social login:", error);
          }
        }
        return {
          name: profile.name,
          email: profile.email,
          image: s3ImageKey,
          username: newUsername
        };
      }
    }
  },
  user: {
    additionalFields: {
      username: { type: "string", required: true, input: false },
      isAdmin: { type: "boolean", required: true, input: false },
      isBanned: { type: "boolean", required: false, input: false },
      banReason: { type: "string", required: false, input: false },
      baseCurrencyBalance: { type: "string", required: false, input: false },
      bio: { type: "string", required: false },
      volumeMaster: { type: "string", required: false, input: false },
      volumeMuted: { type: "boolean", required: false, input: false }
    }
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5
    }
  },
  advanced: {
    database: {
      generateId: false
    }
  }
});

export { OPENROUTER_API_KEY as O, REDIS_URL as R, auth as a, uploadProfilePicture as b, uploadCoinIcon as u };
//# sourceMappingURL=auth-CA5qtupB.js.map
