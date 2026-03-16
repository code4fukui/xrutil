# xrutil
[README.ja.md](README.ja.md)にある日本語のREADMEをご覧ください。

Three.js ベースのXR (AR/VR) アプリケーションでデバッグウィンドウを作成するためのユーティリティライブラリです。

## デモ
`examples/controller.html`ファイルは`createDebugWindow`関数を示しており、この関数はXRコントローラーから取得したデータを表示するオンスクリーンのデバッグウィンドウを作成します。

## 機能
- リアルタイムにテキストを表示し更新できるキャンバスベースのデバッグウィンドウを作成する
- デバッグウィンドウをThree.jsのメッシュにアタッチし、シーンに簡単に配置できるようにする
- デバッグウィンドウにログメッセージやオブジェクトデータを表示する

## 使用法
`createDebugWindow`関数を使用するには、`createDebugWindow.js`ファイルからインポートし、希望の位置とサイズのパラメーターを呼び出します:

```javascript
import { createDebugWindow } from "./createDebugWindow.js";

const debugWindow = createDebugWindow(0, 0, -2, 400, 800);
scene.add(debugWindow);
```

`set`と`log`メソッドを使用して、デバッグウィンドウの内容を更新することができます:

```javascript
debugWindow.set(someObject);
debugWindow.log("こんにちは、デバッグウィンドウ!");
```

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
