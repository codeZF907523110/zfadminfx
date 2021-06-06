module.exports = {
    devServer: {
        proxy: {
            //在vue的axios中只有/api开头的路由; 就会全部拼接到target的URL的后面
            '/': {
                // target: 'http://192.168.43.39:3000',
                changeOrigin: true
            }
        }
    },
};