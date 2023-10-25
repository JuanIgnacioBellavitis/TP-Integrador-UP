import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../config/paths';
import { ClothingMap } from '../../defaults/Characters';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselComponent } from '../CarouselComponent';

export const CharactersComponent = () => {
    const navigate = useNavigate();
    const [headItem, setHeadItem] = useState(0);
    const [clothingItem, setClothingItem] = useState(1);

    const handleHeadSelect = (selectedIndex: number) => {
        setHeadItem(selectedIndex);
    };

    const handleTshirtSelect = (selectedIndex: number) => {
        setClothingItem(selectedIndex);
    };

    const heads = [
        ClothingMap.heads[1],
        ClothingMap.heads[2],
        ClothingMap.heads[3],
        ClothingMap.heads[4],
    ];

    const tshirts = [
        ClothingMap.tshirts[1],
        ClothingMap.tshirts[2],
    ]

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: "5px" }}>
                    <Button
                        style={{ width: '300px' }}
                        variant="contained"
                        color="error"
                        onClick={() => navigate(Paths.HOME)}
                    >
                        Cancelar
                    </Button>
                </div>
                <CarouselComponent activeIndex={headItem} handleSelect={handleHeadSelect} list={heads} />
                <CarouselComponent activeIndex={clothingItem} handleSelect={handleTshirtSelect} list={tshirts} />
            </div>
        </>
    );
};
