import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {
        const { data: {data} } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': '11b3430d03msh03e2bec5b174da3p1c3784jsn8ae0d7539b43',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}
 