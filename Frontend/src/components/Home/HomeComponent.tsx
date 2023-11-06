import { useEffect, useState } from "react";
import { apiGet } from "../../shared/apiService";
import { API_URL } from "../../config/general-config";
import { Endpoints } from "../../config/endpoints";
import { CharactersProps } from "../../shared/types";
import { Button } from "@mui/material";
import { Paths } from "../../config/paths";
import { useNavigate } from "react-router-dom";
import "./HomeStyles.css";
import { ListCharacters } from "../ListCharacters";

export const HomeComponent = () => {
  const [characters, setCharacters] = useState<CharactersProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet({
          url: `${API_URL}/${Endpoints.USER_CHARACTERS}/${localStorage.getItem(
            "userID"
          )}`,
        });
        const reversed = response.reverse();
        const sliced = reversed.slice(0, 5);
        setCharacters(sliced);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{ width: "100vw", marginTop: "5rem" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <Button
            style={{ width: "300px" }}
            variant="contained"
            onClick={() => navigate(`${Paths.CHARACTER}`)}
          >
            Crea un personaje!
          </Button>
        </div>
        <div style={{ marginTop: "20rem" }}>
          <ListCharacters characters={characters} title="Tus personajes" />
        </div>
      </div>
    </>
  );
};
