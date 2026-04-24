/**
 * Frozen Dimensions Geomatics - 前端安全防護腳本
 * 包含：封鎖右鍵、封鎖開發者快捷鍵、Debugger 迴圈陷阱
 */
(function() {
    // 1. 全面封鎖滑鼠右鍵選單
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 2. 封鎖常見的開發者快捷鍵
    document.addEventListener('keydown', function(e) {
        // 封鎖 F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
        }
        // 封鎖 Ctrl + U (檢視網頁原始碼)
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
        }
        // 封鎖 Ctrl + Shift + I / J / C (開啟開發者工具)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
            e.preventDefault();
        }
    });

    // 3. 開發者工具干擾陷阱 (Debugger Loop)
    // 若對方強制從瀏覽器選單點擊開啟開發者工具，將陷入無限暫停的迴圈，阻斷其審查程式碼的能力
    setInterval(function() {
        Function("debugger")();
    }, 50);
})();