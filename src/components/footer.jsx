import '../components-styles/footer.scss';
import React from 'react';

const footer = (props) => {
    return (
        <footer className={'footer-' + props.footerClass}>
            <p>By Ahmad kheder</p>
        </footer>
    )
};

export default footer;