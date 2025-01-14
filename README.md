# ngrokの起動
```
$ ngrok http 3000
```

# Slackアプリ作成
[こちら](https://api.slack.com/apps/new) からSlack アプリを作成<br>
(`From scratch`を選択)

# .env作成
`app/.env`を作成する
```
SLACK_BOT_TOKEN=xoxb-xxxxxx
SLACK_SIGNING_SECRET=xxxxxx
```
- SLACK_BOT_TOKEN
  - `OAuth & Permissions` > `OAuth Tokens` > `Bot User OAuth Token` の値
- SLACK_SIGNING_SECRET
  - `Basic Information` > `Signing Secret` の値

# Docker起動
```
$ docker compose build
$ docker compose up

[nodemon] restarting due to changes...
[nodemon] starting `node dist/app.js`
[INFO]  bolt-app ⚡️ Bolt app is running!
```

# Slackアプリの設定
## Event Subscriptions
- `Enable Events`をOnにする
- `Request URL`に ngrokのurl + `/slack/events`を設定
  - 例: `https://xxx.ngrok-free.app/slack/events`
  - `Verified`になればOK
- `Subscribe to bot events` に `app_mention`を追加
