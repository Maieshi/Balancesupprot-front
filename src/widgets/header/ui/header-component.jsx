import './style.css'
import { menu } from '@/shared/utils'

export const HeaderComponent = () => {
    return (
        <header>
            <button>
                <img src={ menu } alt="menu"/>
            </button>
            <button className='profile'>
                S
            </button>
        </header>
    );
};

