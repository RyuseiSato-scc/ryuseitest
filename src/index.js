import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter"; // ルーティングを設定したファイル

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
