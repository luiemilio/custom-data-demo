//event listeners.
document.addEventListener('DOMContentLoaded', () => {

    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    const app = fin.desktop.Application.getCurrent();

    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

    const newAppBtn = document.querySelector('#new-app');

    newAppBtn.addEventListener('click', () => {
        const newApp = new fin.desktop.Application({
            url: 'http://localhost:8080/newapp.html',
            uuid: 'app-uuid',
            name: 'app-name',
            mainWindowOptions: {
                defaultHeight: 600,
                defaultWidth: 800,
                defaultTop: 300,
                defaultLeft: 300,
                autoShow: true,
                customData: 'this is test data'
            }
        }, () => {
            newApp.run();
        });
    });
}