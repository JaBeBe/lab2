let canvas = document.querySelector('#ps')

let ctx = canvas.getContext('2d')
const imgSrc = 'img/pobrane.jpg'

let img = new Image()

img.src = imgSrc
img.addEventListener('load', () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
})

document.querySelector('#kontrast')
    .addEventListener('click', () => { contrast(30) })

document.querySelector('#bright')
    .addEventListener('click', () => { brightness(2) })

document.querySelector('#def')
    .addEventListener('click', () => { defImage() })

document.querySelector('#darker')
    .addEventListener('click', () => { darknest(2) })

function contrast(factor) {
    //pobranie pixeli z canvas
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    //modyfikacja pikseli
    for (let i = 0; i < imgData.data.length; i += 4) {

        if (imgData.data[i] > 128) {
            imgData.data[i] += factor - 27
        }
        if (imgData.data[i] < 120) {
            imgData.data[i] -= factor - 28
        }

        if (imgData.data[i + 1] > 128) {
            imgData.data[i + 1] += factor - 28
        }
        if (imgData.data[i + 1] < 120) {
            imgData.data[i + 1] -= factor - 28
        }

        if (imgData.data[i + 2] > 128) {
            imgData.data[i + 2] += factor - 29
        }
        if (imgData.data[i + 2] < 120) {
            imgData.data[i + 2] -= factor - 28
        }

    }
    ctx.putImageData(imgData, 0, 0)
    console.log(imgData)
}

function brightness(factor) {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < imgData.data.length; i += 4) {

        if (imgData.data[i] > 124) {
            imgData.data[i] += factor + 12
        }
        if (imgData.data[i] < 124) {
            imgData.data[i] += factor + 10
        }

        if (imgData.data[i + 1] > 124) {
            imgData.data[i + 1] += factor + 12
        }
        if (imgData.data[i + 1] < 124) {
            imgData.data[i + 1] += factor + 10
        }

        if (imgData.data[i + 2] > 124) {
            imgData.data[i + 2] += factor + 12
        }
        if (imgData.data[i + 2] < 124) {
            imgData.data[i + 2] += factor + 10
        }
    }
    ctx.putImageData(imgData, 0, 0)
    console.log(imgData)
}

function darknest(factor) {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < imgData.data.length; i += 4) {
        if (imgData.data[i] > 124) {
            imgData.data[i] -= factor + 12
        }
        if (imgData.data[i] < 124) {
            imgData.data[i] -= factor + 10
        }

        if (imgData.data[i + 1] > 124) {
            imgData.data[i + 1] -= factor + 12
        }
        if (imgData.data[i + 1] < 124) {
            imgData.data[i + 1] -= factor + 10
        }

        if (imgData.data[i + 2] > 124) {
            imgData.data[i + 2] -= factor + 12
        }
        if (imgData.data[i + 2] < 124) {
            imgData.data[i + 2] -= factor + 10
        }
    }
    ctx.putImageData(imgData, 0, 0)
    console.log(imgData)

}

function defImage(masterImgData) {
    img.src = imgSrc
    img.addEventListener('load', () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    })
}