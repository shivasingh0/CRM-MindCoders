import Cookies from "js-cookie";

export function dateFormat(date){
    return new Date(date).toDateString()
  }

  export function getDataFromSessionStorage(){
  const user =  JSON.parse(sessionStorage.getItem("user"));
  return user;
  }

  export function getToken() {
    const token = Cookies.get('token')
    return token;
  }