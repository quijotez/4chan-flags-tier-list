function export2image(evt) {
	window.scrollTo(0, 0);
    const element = document.getElementById('tableBody');

    const posX = 0;
    const posY = 0;
    const width = elementWidth(element) - elementWidth(document.getElementById('settings'));
    const height = elementHeight(element);

    html2canvas(element, {
        width: width,
        height: height,
        useCORS: false,
        taintTest: false,
        allowTaint: true,
        scale: 1.0,
        backgroundColor: 'transparent',
    }).then((canvas) => {
        let context = canvas.getContext('2d');
        let imageData = context.getImageData(posX, posY, width, height).data;
        let outputCanvas = document.createElement('canvas');
        let outputContext = outputCanvas.getContext('2d');
        outputCanvas.width = width;
        outputCanvas.height = height;

        let idata = outputContext.createImageData(width, height);
        idata.data.set(imageData);
        outputContext.putImageData(idata, 0, 0);

        let list = document.getElementById('imageList');
        let li = document.createElement('li');
		let img = document.createElement('img');
		img.src = outputCanvas.toDataURL();
		img.style.height="auto";
		img.style.width="100px";
		img.style.margin="3px";
		img.style.backgroundColor="black";
		li.appendChild(img);
        list.appendChild(li);
    });
}