You capture unhandled rejections by adding a handler for the Node.js unhandledRejection event


process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});

