import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Resume } from '@alleung/resume-components';

function render(ResumeImpl: React.FC) {
    ReactDOM.render(
        <ResumeImpl />,
        window.document.getElementById("root")
    )
}

render(Resume);

module.hot?.accept('@alleung/resume-components', () => {
    render(require('@alleung/resume-components').Resume);
});

module.hot?.accept((err) => {
    console.log("reloading self");
    window.location.reload();
});