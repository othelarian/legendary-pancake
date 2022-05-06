#import "../pkg/index.js"

#import("./pkg/index.js").catch(console.error);

plop = -> console.log 42

plop()
