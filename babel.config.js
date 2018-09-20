module.exports = function(api) {
  /*var env = */api.cache(() => process.env.NODE_ENV)

  const presets = ['@babel/preset-env', '@babel/preset-react']
  return {
    presets
  }
}
