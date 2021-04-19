import React from "react";


export const SearchScreen = () => {
  const [fotos, setFotos] = React.useState([
    {
      title: "Foto de la ciudad",
      owner: "Foxbody03",
      imageUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16D7C/production/_102946539_gettyimages-909755746.jpg",
      location: "Mexico city",
      tags: ["Foto", "CDMX", "City"],
    },
    {
      title: "Mexico City",
      owner: "JulyRohdz44",
      imageUrl: "https://realestatemarket.com.mx/images/2020/06-Junio/1006/cdmx_entre_las_mas_caras_para_vivir_en_latinoamerica_1.jpg",
      location: "Mexico city",
      tags: ["Urban foto", "CDMX", "Mexico City", "Relax", "Sky high"],
    },
    {
      title: "Night Life @ CDMX",
      owner: "JulyRohdz44",
      imageUrl: "https://cdn-3.expansion.mx/dims4/default/2720ee1/2147483647/strip/true/crop/612x408+0+0/resize/1800x1200!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F0d%2F7f%2Fa44df40d4dc694fb4ccda5eaf07f%2Fcdmx.jpeg",
      location: "Mexico city",
      tags: ["Urban foto", "CDMX", "Mexico City", "Relax", "Sky high"],
    },
  ]);

  return (
    <div>
      <h1>SearchScreen</h1>
      <Gallery fotos={fotos} />
    </div>
  );
};
