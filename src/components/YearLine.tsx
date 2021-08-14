import React, {FC} from "react";

interface NextButtonProps {
    page: number
    incPage: ()=> void
}

const pageLine: FC<NextButtonProps> = (props) => {
    const {page, incPage} = props;
    let iceStyle, lineStyle;
    if (page === 3) {
        iceStyle = {
            left: '50%'
        }
        lineStyle = {
            background: 'linear-gradient(to left, rgba(200, 200, 200, 0.5) 50%, rgba(250, 250, 250, 1) 50%)'
        }
    } else if (page === 4 || page === 5) {
        iceStyle = {
            left: '100%'
        } 
        lineStyle = {
            background: 'linear-gradient(to left, rgba(250, 250, 250, 1) 50%, rgba(250, 250, 250, 1) 50%)'
        }
    } else {
        iceStyle = {
            left: '-2%'
        } 
    }
    return (
        <div onClick={() => incPage()}>
            <div className='bold_line' style={lineStyle}>
                <div className='span-block'>
                    <span className='year'>1988</span>
                    <span className='year'>2009</span>
                    <span className='year'>2016</span>
                </div>
                <img className='ice' src='/img/Ice.png' style={iceStyle} alt='Ice'/>
            </div>
        </div>
    )
}

export default pageLine