function addToClipboard() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const linkInput = document.getElementById('link');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const link = linkInput.value.trim();

    if (title !== '' && description !== '' && link !== '') {
        const clipboardTableBody = document.getElementById('clipboard-items');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td><a href="${link}" target="_blank" class="link">${link}</a></td>
            <td><button type="button" onclick="removeFromClipboard(this)">Remove</button></td>
        `;

        clipboardTableBody.appendChild(row);

        // Clear input fields
        titleInput.value = '';
        descriptionInput.value = '';
        linkInput.value = '';
    }
}

function removeFromClipboard(button) {
    const row = button.closest('tr');
    const clipboardTableBody = document.getElementById('clipboard-items');

    clipboardTableBody.removeChild(row);
}
