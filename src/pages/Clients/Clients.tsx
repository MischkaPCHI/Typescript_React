import { useNavigate } from "react-router-dom";

import { UserWrapper, UserTitle } from "./styles";
import Button from "components/Button/Button";

const Clients = () => {

    const navigate = useNavigate();

    return (
        <UserWrapper>
            <UserTitle>Clients page</UserTitle>
            <Button name='Go to Facebook page' onButtonClick={() => navigate('/clients/facebook')}><h3>Go to Facebook page</h3></Button>
            <Button name='Go to Instagrm page' onButtonClick={() => navigate('/clients/instagram')}><h3>Go to Instagrm page</h3></Button>
            <Button name='Go to TikTok page' onButtonClick={() => navigate('/clients/tiktok')}><h3>Go to TikTok page</h3></Button>
        </UserWrapper>
    )
}
  
export default Clients;