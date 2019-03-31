# Olive-front  
**Build by React**

<br>


## Dependencies
Node: 10.15.3  
React: 16.7.0
その他: package.json 参照

<br>

## Setup 
#### 1/4 - Clone
```terminal
git clone 

cd olive-front/
```

<br>

#### 2/4 - Set up pre-push.sh
```terminal
cp pre-push ./.git/hooks/

chmod a+x ./.git/hooks/pre-push
```
これでlint errorのあるコードはgitにpushできないようにします。
**※使ってるエディターでEslintの設定を必ずしてください**  


<br>

#### 3/4 - install dependencies
```terminal
yarn 

or

npm install
```

<br />

#### 4/4 - Start
npm run [サーバー環境]で起動
```terminal
npm run local

or

npm run dev
```

<br>


## Reviews
みんなでレビューしましょう。  
わからなくてもコードを読みましょう。  
質問しましょう、指摘しましょう。改善していきましょう。  
みんなで作りましょう。

<br>

## Prefixes
- hot: 緊急かつ重大な修正
- feat：新しい機能追加
- fix：バグフィックス
- wip: 進行中がだ、コードをメンバーに公開


- docs：ドキュメントのみ変更
- style：コードの挙動に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）
- refactor：バグを修正したり、機能を追加したりしないコード変更
- perf：パフォーマンスを向上させるコード変更
- test：既存のテストの欠落または修正の追加
