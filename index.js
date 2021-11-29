const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 20 });
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        console.log("\nНу вот и всё");
        clearInterval(timer);
    }
}, 500);