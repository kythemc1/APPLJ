import axios from "axios";

interface props{
    accessToken : string;
    level : string;
    cate : string;
    page : string;
    url : string
}
export default async function ApiGetListData(props: props) {
    const config = {headers: {Authorization: `Bearer ${props.accessToken}`}};
    try {
        const response = await axios.post(
            props.url,
            // config
        );
        return response.data.data;
    } catch (error) {

    }

}
