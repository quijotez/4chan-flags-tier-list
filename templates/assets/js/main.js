document.onreadystatechange = () => {
    if (document.readyState !== 'complete') {
        return;
    }

    const selectRowCount = document.getElementById('selectRowCount');

    selectRowCount.addEventListener('change', (evt) => {
        const selected = parseInt(evt.target.value);
        generateTable('tableBody', selected);
    });

    tiers.forEach((name, idx) => {
        const position = idx + 1;

        let option = document.createElement('option');
        option.setAttribute('value', position.toString());
        option.innerText = `${name} - ${position}`;
        selectRowCount.appendChild(option);
    });
    selectRowCount.selectedIndex = tiers.length - 1;
    generateTable('tableBody');

    document.getElementById('btn-export').addEventListener('click', export2image);

    new bootstrap.Modal(document.getElementById('addContentModal'));
    document.getElementById('addContentModalSaveBtn').addEventListener('click', saveModal);
};