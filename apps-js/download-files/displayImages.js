/**
 * show display
 * @function displayImages
 * @param images
 * @param imagesList
 */
function displayImages(images, imagesList) {
  imagesList.innerHTML = images.map(function (image, index) {
    return `
            <li>
                <figure>
                    <img src=${image.url} alt="Image ${index + 1}">
                    <figcaption>
                        <p>${image.name}</p>
                        <p>${(image.size / 1000).toFixed(1)} kB</p>
                    </figcaption>
                    <button id="removeButton">Remove</button>
                </figure>
            </li>
        `
  }).join('');
}