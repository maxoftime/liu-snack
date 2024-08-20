import QRcode from 'qrcode';
export const generateQR = async (inputUrl) => {
    try {
        const url = await QRcode.toDataURL(inputUrl, { width: '666', color: {dark: "#FFFFFFFF", light: "#FFFFFF00"}, margin: 0})
        return url
    } catch (err) {
      console.error(err)
    }
  }