import headBoy1 from '../assets/Head-Boy-1.png';
import headBoy2 from '../assets/Head-Boy-2.png';
import headGirl1 from '../assets/Head-Girl-1.png';
import headGirl2 from '../assets/Head-Girl-2.png';
import tshirt1 from '../assets/Tshirt-1.png';
import tshirt2 from '../assets/Tshirt-2.png';
import pant1 from '../assets/Pants-1.png';
import pant2 from '../assets/Pants-2.png';
import pants3 from '../assets/Pants-3.png';
import shoes1 from '../assets/Shoes-1.png';
import shoes2 from '../assets/Shoes-2.png';
import shoes3 from '../assets/Shoes-3.png'
import shoes4 from '../assets/Shoes-4.png'; // ZAPATILLAS COPADAS -> https://www.google.com/search?q=shoes%20cartoon%20png&tbm=isch&hl=es&tbs=ic:trans&sa=X&ved=0CAEQpwVqFwoTCKD37qCIhYIDFQAAAAAdAAAAABA7&biw=1903&bih=973#imgrc=dq5u5KDziy0ylM
interface ClothingProps {
    heads: {
        [key: number]: string,
    },
    names: {
        [key: number]: string,
    },
    pants: {
        [key: number]: string
    },
    tshirts: {
        [key: number]: string
    },
    shoes: {
        [key: number]: string
    }
}

export const ClothingMap: ClothingProps = {
    heads: {
        1: headBoy1,
        2: headGirl1,
        3: headGirl2,
        4: headBoy2,
    },
    names: {
        1: 'Juan',
        2: 'Rocio',
        3: 'Sofia',
        4: 'Francisco',
    },
    pants: {
        1: pant1,
        2: pant2,
        3: pants3
    },
    tshirts: {
        1: tshirt1,
        2: tshirt2,
    },
    shoes: {
        1: shoes1,
        2: shoes2,
        3: shoes3,
        4: shoes4,
    },
};