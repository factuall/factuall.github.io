import React from 'react';
import '../../css/Page.css';
import cvIcon from '../../assets/resume.svg';

let buttonStyle = {display: 'flex', justifyContent: 'center', width: '20%', marginTop: '0.5em'};
let buttonLineStyle = {display: 'flex', justifyContent: 'space-around', padding: '1em 3em'};

function ResumePage() {
    return(<div>
        <div style={{display: 'flex'}}>
            <img src={cvIcon} style={{position: 'relative', width: '10%', paddingBottom: '2%'}}></img>
            <div className='title' style={{lineHeight: '150%', marginLeft: '2%'}}>Resume</div>
        </div>
        <div className='subtitle'>Select an option.</div>
        <p>Select the method of opening and language.</p>
        <div style={{...buttonLineStyle, ...{marginTop: '2em'}}}>
            <p style={{display: 'flex', justifyContent: 'center'}}>View in browser:</p>
            {/* <div style={buttonStyle}><div className='button'>&nbsp;<a href='/cv/AdrianNiesciurCV.pdf' className='button-link'>Polish</a></div></div> */}
            <div style={buttonStyle}><div className='button'>&nbsp;<a href='/cv/AdrianNiesciurCV.pdf' className='button-link'>English</a></div></div>
        </div>
        <div style={buttonLineStyle}>
            <p style={{display: 'flex', justifyContent: 'center'}}>Download PDF:</p>
            {/* <div style={buttonStyle}><div className='button'>&nbsp;<a href='/cv/AdrianNiesciurCV.pdf' className='button-link'>Polish</a></div></div> */}
            <div style={buttonStyle}><div className='button'>&nbsp;<a href='/cv/AdrianNiesciurCV.pdf' download className='button-link'>English</a></div></div>
        </div>
        
        <p style={{position: 'absolute', bottom: '0', marginBottom: '1em', width: 'calc(100% - 4vw)'}}>
            Can't open PDF files? Download free <a href="https://get.adobe.com/pl/reader/">Adobe Acrobat Reader</a> software.
        </p>

    </div>);
}

export default ResumePage;