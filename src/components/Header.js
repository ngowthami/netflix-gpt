import { signOut } from "firebase/auth"
import {useNavigate} from "react-router-dom"
import { auth } from "../utils/firebase";
import {useSelector} from 'react-redux'


const Header = () => {
  const navigae = useNavigate();
  const user = useSelector(store => store.user);
   console.log("🚀 ~ Header ~ user: ====>", user)
   const handleSignOut = () => {
      signOut(auth).then(() => {
        navigae("/");
      }).catch((error) => {
        navigae("/error")
      })
  }
  return (
    <div className='px-10 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-12 h-12 "
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
   {user &&   <div className='flex p-2'>
        <img alt='usericon' src={user?.photoURL} className='w-10'/>
        <button className='rounded-lg font-bold text-white' onClick={handleSignOut}>SignOut</button>
      </div>
}
    </div> 

  )
}

export default Header
