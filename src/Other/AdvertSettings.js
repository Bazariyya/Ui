import Iller from '../Service/json/il.json';
import Ilceler from '../Service/json/ilce.json'
export const rule = {
    required: true,
    message:'Boş bırakılamaz'
}

export const getAllCities = () => {
    return Iller.sort();
}

export const getAllCounty = (id) => {
    return Ilceler.filter(ilce => ilce.il_id === id);
}