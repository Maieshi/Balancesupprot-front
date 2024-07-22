import './style.css'
import { menu } from '@/shared/utils'
import { MenuDrawer } from "@/features/menu-drawer";
import { useDispatch } from 'react-redux'
import { openModal } from "@/features/menu-drawer/modal/modal.js";

export const HeaderComponent = () => {
    const dispatch = useDispatch()

    return (
        <>
            <header>
                <button onClick={ () => dispatch( openModal( true ) ) }>
                    <img src={ menu } alt="menu"/>
                </button>
                <button className='profile'>
                    S
                </button>
            </header>
            <MenuDrawer/>
        </>
    );
};

