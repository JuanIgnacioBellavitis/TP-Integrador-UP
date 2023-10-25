// Se visualizan todos los personajes del usuario (Se verán los últimos 5)
// Se verá el nombre del usuario
// Habrá un botón para crear un personaje
// Al tocar sobre un personaje, se irá a la pestaña de  actualizar el atuendo (OPCIONAL)
import { useEffect, useState } from "react";
import { apiGet } from "../../shared/apiService";
import { API_URL } from "../../config/general-config";
import { Endpoints } from "../../config/endpoints";
import { CharactersProps } from "../../shared/types";
import { ClothingMap } from '../../defaults/Characters';
import './HomeStyles.css';
import { Button } from "@mui/material";
import { Paths } from "../../config/paths";
import { useNavigate } from "react-router-dom";

export const HomeComponent = () => {
    const [characters, setCharacters] = useState<CharactersProps[]>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await apiGet({url: `${API_URL}/${Endpoints.USER_CHARACTERS}/${localStorage.getItem('userID')}`});
                console.log("response", response);
                setCharacters(response);
            } catch(error) {
                console.log("Error: ", error)
            }
        }

        fetchData();
    }, []);
 
    return (    
        <>
            <div style={{width: '100vw', marginTop: '5rem'}}>
                <Button style={{width: '300px'}} variant="contained" onClick={() => navigate(`${Paths.CHARACTER}`)}>Crea un personaje!</Button>
                <div style={{textAlign: 'center'}}>
                    <h2>Tus personajes</h2>
                    {characters && (
                        <ul className="character-list">
                            {characters.map((character) => (
                                <li key={character.userId}>
                                    <div className="character-details">
                                        <h3>{character.characterName}</h3>
                                        <div className="clothing-grid">
                                            <div style={{height: 'auto'}}>
                                                <img style={{width: '200px', position: 'absolute',  zIndex: '99999'}} src={ClothingMap.heads[character.headId]} alt="Head" />
                                            </div>
                                            <div style={{height: 'auto'}}>
                                                <img style={{width: '200px',  zIndex: '8888'}} src={ClothingMap.tshirts[character.tshirtId]} alt="T-shirt" />
                                            </div>
                                            <div style={{height: 'auto'}}>
                                                <img style={{width: '200px', height: '200px'}} src={ClothingMap.pants[character.pantsId]} alt="Pants" />
                                            </div>
                                            <div style={{height: 'auto'}}>
                                                <img style={{width: '150px', height: '100px'}} src={ClothingMap.shoes[character.shoesId]} alt="Shoes" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            
        </>
    )
}
