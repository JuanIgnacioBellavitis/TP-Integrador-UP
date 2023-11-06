import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../config/paths";
import { CarouselComponent } from "../CarouselComponent";
import toast, { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import { apiPost } from "../../shared/apiService";
import BodyImage from "../../assets/Body.png";
import { Image } from "react-bootstrap";
import { API_URL } from "../../config/general-config";
import { Endpoints } from "../../config/endpoints";
import { names, pants, heads, shoes, tshirts } from "./ClothingMap";

export const CharactersComponent = () => {
  const navigate = useNavigate();
  const [headItem, setHeadItem] = useState(0);
  const [clothingItem, setClothingItem] = useState(0);
  const [pantsItem, setPantsItem] = useState(0);
  const [shoesItem, setShoesItem] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const handleHeadSelect = (selectedIndex: number) => {
    setHeadItem(selectedIndex);
  };

  const handleTshirtSelect = (selectedIndex: number) => {
    setClothingItem(selectedIndex);
  };

  const handlePantsSelect = (selectedIndex: number) => {
    setPantsItem(selectedIndex);
  };

  const handleShoesSelect = (selectedIndex: number) => {
    setShoesItem(selectedIndex);
  };

  const createCharacter = async () => {
    try {
      setDisableButton(true);

      await apiPost({
        url: `${API_URL}/${Endpoints.CHARACTERS_CREATE}`,
        body: {
          userId: localStorage.getItem("userID"),
          characterName: names[headItem],
          headId: headItem,
          tshirtId: clothingItem,
          pantsId: pantsItem,
          shoesId: shoesItem,
        },
      });

      toast.success("Se creó correctamente el personaje 😁");

      setTimeout(() => {
        navigate(`${Paths.HOME}`);
      }, 2000);
    } catch (error) {
      toast.error("Ocurrió un problema al crear el personaje 😟");
      console.log("Error Creating character: ", error);
    }
  };

  return (
    <>
      <Toaster />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "5px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <span>{localStorage.getItem("username")}</span>
          <Button
            style={{ width: "300px", margin: "2rem 0 2rem 0" }}
            variant="contained"
            color="error"
            onClick={() => navigate(Paths.HOME)}
            disabled={disableButton}
          >
            Cancelar
          </Button>
        </div>
        <div
          style={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
            {names[headItem]}
          </span>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={BodyImage} style={{ height: "60%" }} />
          </div>

          <CarouselComponent
            activeIndex={headItem}
            handleSelect={handleHeadSelect}
            list={heads}
            carouselWidth="70%"
          />
          <CarouselComponent
            activeIndex={clothingItem}
            handleSelect={handleTshirtSelect}
            list={tshirts}
            carouselWidth="70%"
          />
          <CarouselComponent
            activeIndex={pantsItem}
            handleSelect={handlePantsSelect}
            list={pants}
            carouselWidth="50%"
          />
          <CarouselComponent
            activeIndex={shoesItem}
            handleSelect={handleShoesSelect}
            list={shoes}
            marginTop="2rem"
            maxHeight="50%"
            carouselWidth="62%"
          />
        </div>

        <div
          style={{
            width: "100%",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{ marginTop: "2rem", width: "300px" }}
            onClick={() => createCharacter()}
            disabled={disableButton}
          >
            Guardar personaje!
          </Button>
        </div>
      </div>
    </>
  );
};
