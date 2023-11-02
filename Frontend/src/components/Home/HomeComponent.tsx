import { useEffect, useState } from "react";
import { apiGet } from "../../shared/apiService";
import { API_URL } from "../../config/general-config";
import { Endpoints } from "../../config/endpoints";
import { CharactersProps } from "../../shared/types";
import { ClothingMap } from '../../defaults/Characters';
import { Button, Grid } from "@mui/material";
import { Paths } from "../../config/paths";
import { useNavigate } from "react-router-dom";
import './HomeStyles.css';

export const HomeComponent = () => {
    const [characters, setCharacters] = useState<CharactersProps[]>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await apiGet({url: `${API_URL}/${Endpoints.USER_CHARACTERS}/${localStorage.getItem('userID')}`});
                const reversed = response.reverse();
                const sliced = reversed.slice(0,5);
                setCharacters(sliced);
            } catch(error) {
                console.log("Error: ", error)
            }
        }

        fetchData();
    }, []);
 
    return (    
        <>
            <div style={{width: '100vw', marginTop: '5rem'}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
                    <Button style={{width: '300px'}} variant="contained" onClick={() => navigate(`${Paths.CHARACTER}`)}>Crea un personaje!</Button>
                </div>
                
                <div style={{textAlign: 'center'}}>
                    <h2>Tus personajes</h2>
                    {characters && characters.length > 0 ? (
                        <Grid container spacing={5} style={{ display: 'flex', justifyContent: 'center'}}>
                            {
                                characters.map((character) => (
                                    <Grid item xs={2} style={{margin: '2rem 0 0 0 '}}>
                                        <h3>{character.characterName}</h3>
                                        <div className="clothing-grid">
                                            <div style={{ height: 'auto' }}>
                                                <img style={{ width: '200px', position: 'absolute', zIndex: '99999' }} src={ClothingMap.heads[character.headId]} alt="Head" />
                                            </div>
                                            <div style={{ height: 'auto' }}>
                                                <img style={{ width: '200px', zIndex: '8888' }} src={ClothingMap.tshirts[character.tshirtId]} alt="T-shirt" />
                                            </div>
                                            <div style={{ height: 'auto' }}>
                                                <img style={{ width: '200px', height: '200px' }} src={ClothingMap.pants[character.pantsId]} alt="Pants" />
                                            </div>
                                            <div style={{ height: 'auto' }}>
                                                <img style={{ width: '150px', height: '100px' }} src={ClothingMap.shoes[character.shoesId]} alt="Shoes" />
                                            </div>
                                        </div>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    ) : (
                        <div>Aun no hay personajes.</div>
                    )
                }
                </div>
            </div>
            
        </>
    )
}
