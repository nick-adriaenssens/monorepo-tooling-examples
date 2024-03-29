const postcss = require('rollup-plugin-postcss');
const replace = require('@rollup/plugin-replace');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                plugins: [],
            })
        );
        config.plugins = config.plugins.map(p =>
            p.name === 'replace'
                ? replace({
                    'process.env.NODE_ENV': JSON.stringify(options.options),
                    preventAssignment: true,
                })
                : p
        );
        return config;
    },
};