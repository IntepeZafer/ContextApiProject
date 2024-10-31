import { useContext } from "react"
import  AuthContext  from "../Context/authContext"
const Auth = () => {
    const {status , login} = useContext(AuthContext);
  return (
    <div>
        <h1>Giriş Yaptın Mı?</h1>
        <p>{status ? "Evet" : "Hayır"}</p>
        <button onClick={login}>Giriş Yap</button>
    </div>
  )
}

export default Auth
