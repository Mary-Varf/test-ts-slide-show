import React, { FC } from "react";
import PointItem from "./PointItem";

interface PaginationBlockProps {
    changePage: (el: number) => void
    paginationPage: number
}

const PaginationBlock: FC<PaginationBlockProps> = (props) => {
    const {paginationPage, changePage} = props;
    const arr = [0, 1, 2];

    return (
        <div className='pagination'>
            {arr.map((el) => {
                return <PointItem el={el} paginationPage={paginationPage} changePage={changePage} key={el}/>
            })}
        </div>
    ) 
}

export default PaginationBlock