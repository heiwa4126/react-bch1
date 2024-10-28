# react-bch1

BroadcastChannel の練習を React で。

- [ブロードキャストチャンネル API - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Broadcast_Channel_API)
- [BroadcastChannel - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/BroadcastChannel)
- [ブラウザーの互換性](https://developer.mozilla.org/ja/docs/Web/API/Broadcast_Channel_API#%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC%E3%81%AE%E4%BA%92%E6%8F%9B%E6%80%A7) - 目立つのは Deno がダメなことぐらい。モダンブラウザは大丈夫

hook は
[use-broadcast-channel - npm](https://www.npmjs.com/package/use-broadcast-channel)
を使いました。

## BroadcastChannel の利点

シリアライズ不要で JavaScript オブジェクトを渡せる(例えば LocalStorage はシリアライズ必要)

## 開発

Vite で React で TypeScript + Bun(たぶん npm でもなんでもいい)

```sh
bun i
bun dev
bun run build & bun preview
```

## 問題点

最初の値が 0 になること。うまく説明できない。

1. サンプル 1 か 2 で、別ウインドウ(またはタブ)を開く。
2. カウンターを増やすか減らす
3. もう 1 個別ウインドウ(またはタブ)を開く。表示が 0 になる。

これは LocalStorage などを介さないとダメだと思う(メモ:LocalStorage は生オブジェクトが保存できない)。
いまは Number だけど、Object になることも考えて state ライブラリを使う。
または準備が整ったことをデータを保持してる側に知らせるサブチャンネルを用意するとか。
→ これをやったのがサンプル 3。useRef がちょっと気持ち悪い。

## 問題点 4

サンプル 4 を
見ればわかる通り送信側が「ごちゃごちゃしすぎ」。
