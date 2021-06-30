import * as webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as express from "express";

const SITE_PATH = path.resolve(__dirname, '../../../../site');

const compiler = webpack.webpack({
    target: "web",
    mode: 'development',
    entry: [
        "@alleung/resume-web-render/build/web.js",
        "./source/host-name.js",
        "webpack-hot-middleware/client?reload=true&dynamicPublicPath=true&path=__webpack_hmr",
    ],
    output: {
        path: SITE_PATH
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({})
    ]
});

compiler.outputFileSystem = fs as any;

const app = express();
app.use(webpackDevMiddleware(compiler as any, {
    writeToDisk: true,
    headers: { "Access-Control-Allow-Origin": "*" }
}));
app.use(webpackHotMiddleware(compiler as any, {}));
app.listen(3080);