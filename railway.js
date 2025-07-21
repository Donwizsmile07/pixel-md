{
  "$schema": "https://railway.com/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "region": "us-west2",                  // Primary region for deployment
    "runtime": "V2",                       // Use Railway V2 runtime
    "numReplicas": 1,                      // Keep only one active instance of Pixel
    "startCommand": "node index.js",       // Command to start Pixel bot
    "sleepApplication": false,             // Pixel should never sleep
    "multiRegionConfig": {
      "us-west2": {
        "numReplicas": 1                   // Ensure single replica in us-west2
      }
    },
    "restartPolicyType": "ON_FAILURE",     // Restart only if it crashes
    "restartPolicyMaxRetries": 10          // Try restarting up to 10 times
  }
}
