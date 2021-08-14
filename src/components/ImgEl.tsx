import React, {FC} from "react";
import { IImg } from '../types/types';

interface ImgElProps {
    img: IImg
    handleDbclick: () => void
}
const ImgEl: FC<ImgElProps> = (props) => {
    const {img, handleDbclick} = props
    return (
        <div>
            <img src={img.link} alt={img.title} className='big_img' onClick={() => handleDbclick()}/>
        </div>
    ) 
}

export default ImgEl