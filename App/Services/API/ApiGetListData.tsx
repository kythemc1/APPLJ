import axios from "axios";

interface props{
    // accessToken : string;
    url : string
}
export default async function ApiGetListData(url : string) {
    // const config = {headers: {Authorization: `Bearer ${props.accessToken}`}};
    try {
        const response = await axios.post(
            url,
            // config
        );
        return response.data.data;
    } catch (error) {

    }

}
