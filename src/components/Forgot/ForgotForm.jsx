import { useState } from "react"
import { User, LogIn } from "lucide-react"
import IconSlider from "../IconSlider"
import { useNavigate } from 'react-router-dom';
function ForgotForm() {
  const [email, setEmail] = useState("")
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enter  with:", email, )
  }
  
  return (
    <>
      <div className="w-full">
        <div className="w-full shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl">
          <div className=" text-center p-3">
            <p className="text-base text-slate-500 mt-5">Enter email address to receive email to reset password</p>
          </div>
          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg w-full pl-10 pr-3 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-hosta focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full h-12 bg-btn-color from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-blue-hosta rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-200"
              >
                Sign In
                <LogIn className="h-5 w-5" />
              </button>

            </form>
            <div className="mt-4 flex flex-row justify-between text-sm">
              <a onClick={()=>navigate('/')} className="text-blue-hosta text-[16px] hover:text-btn-color hover:cursor-pointer">
                LogIn?
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 p-2 flex flex-col shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl">
      
        <IconSlider/>

      </div>
    </>

  )
}

export default ForgotForm
