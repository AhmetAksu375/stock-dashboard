import axios from "axios";

export const  handleLoginRequest = async (user : {username : string,password :string}) => {
    try {
        const response = await axios.post('https://localhost:5000/api/login', user);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error message:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }

  };

}