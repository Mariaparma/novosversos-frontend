import React from "react";
import styles from "./Galeria.module.css";

const eventos = [
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_4741~0.jpeg",
    data: "20.09",
    local: "# Jaguariúna, SP",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IGR_2392_Original.jpeg",
    data: "15.09",
    local: "# Ituiutaba, MG",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_4519.jpeg",
    data: "07.09",
    local: "# Itaquaquecetuba, SP",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_6420.jpeg",
    data: "03.09",
    local: "# Canaã dos Carajás, PA",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb__narasouzaph-1751.jpeg",
    data: "05.09",
    local: "# Uberlândia, MG",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_4401.jpeg",
    data: "30.08",
    local: "# Cláudio, MG",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_4287~0.jpeg",
    data: "23.08",
    local: "# Lisboa (Portugal)",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_4286~0.jpeg",
    data: "24.08 ",
    local: "# Lisboa (Portugal)",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_IMG_4198.jpeg",
    data: "22.08",
    local: "# Lisboa (Portugal)",
  },
  {
    imagem: "https://luandaily.com.br/galeria/albums/userpics/10001/thumb_6ef640f2-555c-49f1-9917-7eb4998ea64c.jpeg",
    data: "15.08",
    local: "# Araras, SP",
  },
];

export default function GaleriaPolaroid() {
  return (
    <div className={styles.galeria}>
      <h1 className={styles.titulo}>Galeria</h1>
      <div className={styles.grade}>
        {eventos.map((evento, index) => (
          <div key={index} className={styles.card}>
            <img src={evento.imagem} alt={`Show ${index + 1}`} />
            <div className={styles.info}>
              <p className={styles.data}>{evento.data}</p>
              <p className={styles.local}>{evento.local}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}