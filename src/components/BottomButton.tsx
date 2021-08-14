import React, {FC, useState} from "react";
import YearLine from "./YearLine";

interface BottomButtonProps {
    incPage: () => void
    page: number
}


const BottomButton: FC<BottomButtonProps> = (props) => {
    const {incPage, page} = props;

    if (page >= 2) {
        return (
            <YearLine page={page} incPage={incPage}/>
        )
    } else {
        return (
            <>
                <button className='bottom_block' onClick={incPage}><img src='/img/next.png' className='bottom-img' alt='Next' /></button>
            </>
        ) 
    }
}

export default BottomButton