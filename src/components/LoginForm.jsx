import { useState } from "react"
import { Eye, EyeOff, User, Lock, LogIn } from "lucide-react"
import IconSlider from "./IconSlider"
import { Link } from 'react-router-dom';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    console.log("Login with:", email, password)
  }

  return (
    <>
      <div className="w-full mt-4">
        <div className="w-full shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl">
          <div className="space-y-1 text-center p-6">
            <h2 className="text-2xl font-bold">Welcome</h2>
            <p className="text-sm text-slate-500">Enter your login credentials to continue</p>
          </div>
          <div className="p-6">
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
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-lg w-full pl-10 pr-10 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-hosta focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
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
              <Link to="/register" className="text-blue-hosta text-[16px] hover:text-btn-color hover:cursor-pointer">
                Register
              </Link>
              <Link to="/forgot-password" className="text-blue-hosta text-[16px] hover:text-btn-color hover:cursor-pointer">
                Forgot Password?
              </Link>
            </div>

          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 p-2 flex flex-col shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl">
        <IconSlider />
      </div>
    </>

  )
}

export default LoginForm
