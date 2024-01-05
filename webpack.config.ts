import path from "path"
import webpack from 'webpack'

const config: webpack.Configuration = {
    mode: 'production',
    entry: './map.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'map.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
    rules: [
        {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        },
    ],
    }
}

export default config;