import axios from "axios";

export const  handleRegisterRequest = async (user : {username : string,password :string , mail : string}) => {
    try {
        const response = await axios.post('https://localhost:5000/api/register', user);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error message:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }

  };

}