import React, {FC, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IImg } from './types/types'
import ImgEl from './components/ImgEl';
import BottomButton from './components/BottomButton';
import PaginationBlock from './components/PaginationBlock';

const App: FC = () => {
    const [page, setPage] = useState(0);
    const [time, setTime] = useState(0);
    const [pagination, setPagination] = useState(0);

    const imgArray: IImg[] = [
        {id: 1, title: 'one', link: '/img/box_1.png'},
        {id: 2, title: 'two', link: '/img/box_2.png'},
        {id: 3, title: 'three', link: '/img/box_3.png'},
        {id: 4, title: 'three_one', link: '/img/box_3_1.png'},
        {id: 5, title: 'three_two', link: '/img/box_3_2.png'},
        {id: 6, title: 'four', link: '/img/box_4.png'},
    ]
    const incPage = (): void => {
        if (page < 5) {
            setPage(page + 1)
            page >= 2 ? setPagination(2) : setPagination(page + 1)
        } else {
            setPage(0)
            setPagination(0)
        }
    }
    const decPage = (): void => {
        if (page < 1) {
            setPage(0)
            setPagination(0)
        } else {
            setPage(page - 1)
            if (page > 2) {
                setPagination(2)
            } else {
                setPagination(page - 1)   
            }
        }
    }
    const handleDbclick = (): void => {
        if (new Date().getTime() - time >= 400) {
            setTime(new Date().getTime())
        } else {
            incPage()
        }
    }
    const changePage = (el: number): void => {
        setPage(el)
        setPagination(el)
    }
    // window.addEventListener('keydown', (e) => {
    //     if (e.key === 'ArrowRight' || e.key === 'Enter') {
    //         incPage()
    //     } else if (e.key === 'ArrowLeft') {
    //         decPage()
    //     }
    // });
    return (
        <BrowserRouter>
            <div className='home'>
                <div className='parent-img'>
                    <ImgEl img={imgArray[page]} key={imgArray[page].id} handleDbclick={handleDbclick}/>
                    <PaginationBlock paginationPage={pagination} changePage={changePage}/>
                    <BottomButton page={page} incPage={incPage} />
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;
