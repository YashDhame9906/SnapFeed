const ImageKit = require("imagekit");

const imagekit = new ImageKit({
       publicKey: "public_goPK3g1dafimAI1dqHDGOjBFFzs=",
       privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
       urlEndpoint: "https://ik.imagekit.io/oxkt9tddu"
})

async function uploadFile(buffer) {
    const result = await imagekit.upload({
        file: buffer,
        fileName: "image.jpg",
    })

    return result;
}

module.exports = uploadFile;