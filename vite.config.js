export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true, // Open
        open: !('SANDOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourceMap: true,
    }
}