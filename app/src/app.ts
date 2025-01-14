import { App, ExpressReceiver } from "@slack/bolt";
import dotenv from "dotenv";

// 環境変数をロード
dotenv.config();

// Slack Boltアプリの設定
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET || "",
});
receiver.router.post("/slack/events", (req, res) => {
  console.log("Received a request on /slack/events");
  res.status(200).send("OK");
});

// メンションイベントに応答
app.event("app_mention", async ({ event, say }) => {
  await say(`こんにちは <@${event.user}> さん！`);
});

// アプリを起動
(async () => {
  const port = process.env.PORT || 3000;
  await app.start(port);
  app.logger.info("⚡️ Bolt app is running!");
})();
