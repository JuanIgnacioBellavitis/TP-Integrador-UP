import headBoy1 from "../assets/Head-Boy-1.png";
import headBoy2 from "../assets/Head-Boy-2.png";
import headGirl1 from "../assets/Head-Girl-1.png";
import headGirl2 from "../assets/Head-Girl-2.png";
import tshirt1 from "../assets/Tshirt-1.png";
import tshirt2 from "../assets/Tshirt-2.png";
import tshirt3 from "../assets/Tshirt-3.png";
import tshirt4 from "../assets/Tshirt-4.png";
import pant1 from "../assets/Pants-1.png";
import pant2 from "../assets/Pants-2.png";
import pants3 from "../assets/Pants-3.png";
import pants4 from "../assets/Pants-4.png";
import shoes1 from "../assets/Shoes-1.png";
import shoes2 from "../assets/Shoes-2.png";
import shoes3 from "../assets/Shoes-3.png";
import shoes0 from "../assets/Shoes-4.png";

interface ClothingProps {
  heads: {
    [key: number]: string;
  };
  names: {
    [key: number]: string;
  };
  pants: {
    [key: number]: string;
  };
  tshirts: {
    [key: number]: string;
  };
  shoes: {
    [key: number]: string;
  };
}

export const ClothingMap: ClothingProps = {
  heads: {
    0: headBoy2,
    1: headBoy1,
    2: headGirl1,
    3: headGirl2,
  },
  names: {
    0: "Francisco",
    1: "Juan",
    2: "Rocio",
    3: "Sofia",
  },
  pants: {
    0: pant1,
    1: pant2,
    2: pants3,
    3: pants4,
  },
  tshirts: {
    0: tshirt1,
    1: tshirt2,
    2: tshirt3,
    3: tshirt4,
  },
  shoes: {
    0: shoes0,
    1: shoes1,
    2: shoes2,
    3: shoes3,
  },
};
