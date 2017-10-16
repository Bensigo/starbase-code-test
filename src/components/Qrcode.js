import React from 'react'
import qrcode from 'qrcode-npm'

const generateQrcode = (text) => {
  const qr = qrcode.qrcode(4, 'M')
  qr.addData(text)
  qr.make()
  return qr.createImgTag(4)
}

const QRcode = ({text}) => {
  return generateQrcode(text)

}

export default QRcode