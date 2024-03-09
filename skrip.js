function sendWA() {
    const pesan = document.getElementById('pesan').value;
    const win = window.open(`https://wa.me/6281945327691?text=${pesan}`, `_blank`);
    win.focus();
}