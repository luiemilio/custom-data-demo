//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    const app = fin.desktop.Application.getCurrent();
    const win = fin.desktop.Window.getCurrent();

    fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);

    win.getOptions((opts) => console.log(opts.customData));
}