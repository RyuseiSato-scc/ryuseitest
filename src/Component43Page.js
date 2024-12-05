import React from "react";

function Component43Page({ switchComponent }) {
    
  return (
    <div>
      <h2>Component Switcher</h2>
      {/* ボタンで switchComponent を呼び出す */}
      <button onClick={() => switchComponent("Component58")}>
        Switch to Component58
      </button>
      <button onClick={() => switchComponent("Component43")}>
        Switch to Component43
      </button>
    </div>
  );
}

export default Component43Page;
