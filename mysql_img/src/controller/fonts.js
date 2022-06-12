module.exports = {
    Roboto:{
    normal: Buffer.from(
    require("../../node_modules/pdfmake/build/vfs_fonts").pdfMake.vfs["Roboto-Regular.ttf"],
    'base64'),
    bold:Buffer.from(
        require('pdfmake/build/vfs_fonts.js').pdfMake.vfs['Roboto-Medium.ttf'],
        'base64')
    }
};