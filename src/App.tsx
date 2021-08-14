import React, {FC, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IImg } from './types/types'
import ImgEl from './components/ImgEl';
import BottomButton from './components/BottomButton';

const App: FC = () => {
    const [page, setPage] = useState<number>(0);
    const [year, setYear] = useState(0);
    const [time, setTime] = useState(0);

    const imgArray: IImg[] = [
        {id: 1, title: 'one', link: '/img/box_1.png'},
        {id: 2, title: 'two', link: '/img/box_2.png'},
        {id: 3, title: 'three', link: '/img/box_3.png'},
        {id: 4, title: 'three_one', link: '/img/box_3_1.png'},
        {id: 5, title: 'three_two', link: '/img/box_3_2.png'},
        {id: 6, title: 'four', link: '/img/box_4.png'},

    ]
    const incPage = (): void => {
        page < 5 ? setPage(page + 1) : setPage(0)
    }
    const handleDbclick = (): void => {
        if (new Date().getTime() - time >= 400) {
            setTime(new Date().getTime())
        } else {
            incPage()
        }
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            incPage()
        } else if (e.key === 'ArrowLeft') {
            page >= 1 ? setPage(page - 1) : setPage(0)
        }
    });
    return (
        <BrowserRouter>
            <div className='home'>
                <div className='parent-img'>
                    <ImgEl img={imgArray[page]} key={imgArray[page].id} handleDbclick={handleDbclick}/>
                    <BottomButton page={page} incPage={incPage} />
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;
