const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.node = {
          fs: 'empty'
        }
        return config
    },
}