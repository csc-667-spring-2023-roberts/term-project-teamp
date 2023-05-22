const requestTime = (req, res, next) => {
  console.log("------------------------------");
  console.log(`Request received at ${Date.now()}: ${req.method}`);
  next();
};

module.exports = requestTime;
