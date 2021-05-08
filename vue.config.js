module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/lp-url-redirect/" // note the trailing slash
      : "/",
};
