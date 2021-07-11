## next-prisma setupテンプレート

build
```
yarn build
```
run
```
yarn run
```
format
```
yarn format
```
dbのmigrate
```
prisma:migrate
```
dbのgenerate
```
prisma:generate
```
dbのリセット
```
prisma:reset
```
dbのスキーマのformat
```
prisma:format
```
prisma studioの起動
```
prisma:studio
```
## ソースコード記入ルール
`pages/api`にapiの処理を記入

`pages/*`に画面を記入（基本`components/pages`に書いたコンポーネントを入れるだけにする）

`components/atoms`に最小単位のコンポーネントを記入(ボタンとか)

`components/blocks`に`components/atoms`を組み合わせた物を記入(複合formとか)

`components/page`に画面単位のコンポーネントを作成

`components/page`,`components/page/api`のパスは画面毎に統一,prismaの型で対応できない部分は`types/~`に追記