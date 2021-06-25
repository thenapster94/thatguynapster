export function openInNewTab(url) {
    console.log(url);
    var win = window.open(url, '_blank');
    win.focus();
}
