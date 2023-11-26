urls = [
    " https://forms.gle/6tj87n9sHDgag4gX6",
    "https://forms.gle/xRoJvzhyQcaXZkzK8",
    "https://forms.gle/4e5bW6H2EvtBMxFA8"
]
function randomUrl() {
    var url = urls[Math.floor(Math.random() * urls.length)];
    window.location.replace(url);
}
randomUrl();
