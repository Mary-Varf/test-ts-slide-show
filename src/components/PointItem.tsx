import React, { FC, useState } from "react";

interface PointItemProps {
    changePage: (el: number) => void
    el: number
    paginationPage: number
}

const PointItem: FC<PointItemProps> = (props) => {
    const {changePage, el, paginationPage} = props;
    let classList: string = 'point';

    if (paginationPage === el) {
        classList = classList + ' selected'
    }

    return (
        <button className={classList} onClick={() => changePage(el)}></button>
    ) 
}

export default PointItem