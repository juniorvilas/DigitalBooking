import "./addimage.sass";
import { Field } from "formik";
import Plus from "../Img/plus.svg";
import Delete from "../Img/delete.svg";
import React,{ useState } from "react";

const AddImage = ({getImg, isRemove, img, deleteImg}) => {
/* FUNÇÕES DA PARTE ADD IMAGENS PARA SALVAR EM ARRAY E ADD AO OBJ productApi */
const [imgName, setImgName] = useState(img ? img.titulo : []);
const [imgUrl, setImgUrl] = useState(img ? img.url : []);


const newArray = new Object();
newArray.titulo = imgName;
newArray.url = imgUrl;




    
    return (
        <div className="div_addImage">
                <div className="addImage item-form">                    
                    <label htmlFor="imagens_name">Nome (alt)</label>
                    <Field disabled={isRemove} value={imgName} onChange={e => setImgName(e.target.value)} className="input" type="text" name="imagens_name" placeholder="Ex: Imagem Floresta"/>
                </div>
                <div className="addImage item-form">                    
                    <label htmlFor="imagens_url">(URL)</label>
                    <Field disabled={isRemove} value={imgUrl} onChange={e => setImgUrl(e.target.value)} className="input" type="text" name="imagens_url" placeholder="Ex: https://www" />
                </div>
                
                {isRemove ?
                    <button type="button" onClick={() => deleteImg(imgUrl)}  >
                    <img src={Delete} alt="botão excluir" />
                    </button>
                    :
                    <button type="button" onClick={() => {
                        getImg(newArray);
                        }} >
                    <img src={Plus} alt="botão adicionar" />
                    </button>

                }          
                
            </div>
    );
}

export default AddImage;