import { Grid } from "@mui/material";
import { CharactersProps } from "../shared/types";
import { Image } from "react-bootstrap";
import BodyImage from "../assets/Body.png";
import { ClothingMap } from "../defaults/Characters";

interface CharactersListProps {
  characters: CharactersProps[] | undefined;
  title: string;
}

export const ListCharacters = (props: CharactersListProps) => {
  const { characters, title } = props;
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      {characters && characters.length > 0 ? (
        <>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "-20rem 0 3rem 0",
            }}
          >
            <h2>{title}</h2>
          </div>

          <Grid
            container
            spacing={5}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {characters.map((character) => (
              <Grid
                xs={2}
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    margin: "-2rem 0 2rem 0",
                  }}
                >
                  <h3>{character.characterName}</h3>
                </div>
                <div
                  style={{
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    maxHeight: "70%",
                    maxWidth: "70%",
                  }}
                >
                  <Image src={BodyImage} alt="body" style={{ width: "20%" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "180px",
                        zIndex: "99999",
                        marginTop: "-2rem",
                      }}
                      src={ClothingMap.heads[character.headId]}
                      alt="Head"
                    />
                    <img
                      style={{ width: "200px", marginTop: "8rem" }}
                      src={ClothingMap.tshirts[character.tshirtId]}
                      alt="T-shirt"
                    />
                    <img
                      style={{
                        marginTop: "19rem",
                        width: "8%",
                      }}
                      src={ClothingMap.pants[character.pantsId]}
                      alt="Pants"
                    />
                    <img
                      style={{
                        width: "150px",
                        height: "100px",
                        marginTop: "27rem",
                      }}
                      src={ClothingMap.shoes[character.shoesId]}
                      alt="Shoes"
                    />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <div>Todavia no se crearon personajes!</div>
      )}
    </div>
  );
};
