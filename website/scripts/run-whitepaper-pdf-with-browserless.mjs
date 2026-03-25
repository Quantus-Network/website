import { execSync } from "node:child_process";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const websiteRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const runner = process.argv[2] ?? "podman";

function waitForPort(port, host = "127.0.0.1", timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const socket = net.createConnection({ port, host }, () => {
        socket.end();
        resolve();
      });
      socket.on("error", () => {
        socket.destroy();
        if (Date.now() >= deadline) {
          reject(
            new Error(
              `Timed out waiting for ${host}:${port} (is Browserless running?)`,
            ),
          );
          return;
        }
        setTimeout(tryOnce, 300);
      });
    };
    tryOnce();
  });
}

function runCompose(args) {
  execSync(`${runner} compose ${args}`, {
    cwd: websiteRoot,
    stdio: "inherit",
    env: process.env,
  });
}

function stopBrowserless() {
  runCompose("stop browserless");
}

async function run() {
  runCompose("up -d browserless");

  try {
    await waitForPort(33000);
    const { main } = await import("./generate-whitepaper-pdfs.js");
    await main();
  } finally {
    stopBrowserless();
  }
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
