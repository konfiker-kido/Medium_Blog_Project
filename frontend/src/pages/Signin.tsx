import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"
import logo2 from '../assets/mediumLogo1.jpg'

export const Signin = () => {
    return (

     <div>
        <div className="grid grid-cols-1 lg:grid-cols-2"> 
                <img src={logo2} alt="" />
                <Auth type="signin" />
            
            <div className="hidden lg:block">
                <Quote />
             </div>
        </div>
    </div> 
    
    )
}