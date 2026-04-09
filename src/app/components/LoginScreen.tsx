import { useState } from "react";
import { useNavigate } from "react-router";
import { Shield, Fingerprint, Mail, Lock } from "lucide-react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e] flex items-center justify-center p-8">
      {/* MacBook M4 Frame */}
      <div className="relative">
        {/* MacBook Screen Bezel */}
        <div className="relative bg-gradient-to-b from-[#1a1d23] to-[#0d0f14] rounded-[24px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-[1470px] h-[956px] bg-black rounded-[14px] overflow-hidden relative border-2 border-[#0a0a0a] shadow-inner">
            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[28px] bg-black rounded-b-[20px] z-50 border-x-2 border-b-2 border-[#0a0a0a]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#1a1f2e] rounded-full opacity-60"></div>
            </div>

            {/* Screen Content - Login Page */}
            <div className="w-full h-full flex bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e]">
              {/* Left Side - Branding */}
              <div className="w-1/2 flex flex-col items-center justify-center p-12 border-r border-border/30">
                <div className="max-w-md">
                  {/* Logo */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/50">
                      <Shield className="w-11 h-11 text-white" />
                    </div>
                    <div>
                      <h1 className="text-foreground text-4xl tracking-tight">FraudShield</h1>
                      <p className="text-primary text-lg">AI Security</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6 mt-12">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground text-lg mb-1">Advanced AI Protection</h3>
                        <p className="text-muted-foreground text-sm">Real-time fraud detection powered by machine learning</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground text-lg mb-1">24/7 Monitoring</h3>
                        <p className="text-muted-foreground text-sm">Continuous account surveillance and instant alerts</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground text-lg mb-1">Bank-Grade Security</h3>
                        <p className="text-muted-foreground text-sm">Military-grade encryption for your financial data</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">99.8%</div>
                      <p className="text-xs text-muted-foreground">Detection Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">2M+</div>
                      <p className="text-xs text-muted-foreground">Protected Users</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">$500M</div>
                      <p className="text-xs text-muted-foreground">Fraud Prevented</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="w-1/2 flex items-center justify-center p-12">
                <div className="w-full max-w-md">
                  <div className="mb-8">
                    <h2 className="text-foreground text-3xl mb-2">Welcome Back</h2>
                    <p className="text-muted-foreground">Sign in to your secure banking account</p>
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-sm text-foreground font-medium block">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@bank.com"
                          className="w-full bg-input border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                      <label className="text-sm text-foreground font-medium block">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="w-full bg-input border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-border" />
                        <span className="text-sm text-muted-foreground">Remember me</span>
                      </label>
                      <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">
                        Forgot password?
                      </button>
                    </div>

                    {/* Secure Login Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 font-medium text-lg"
                    >
                      Secure Login
                    </button>
                  </form>

                  {/* Biometric Login */}
                  <div className="mt-8">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-border"></div>
                      <span className="text-sm text-muted-foreground">or continue with</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>

                    <button className="mt-6 w-full flex items-center justify-center gap-3 py-4 bg-accent border border-border rounded-xl hover:bg-accent/80 transition-colors">
                      <Fingerprint className="w-6 h-6 text-primary" />
                      <span className="text-foreground font-medium">Biometric Login</span>
                    </button>
                  </div>

                  {/* Footer */}
                  <p className="text-center text-xs text-muted-foreground mt-8">
                    Protected by FraudShield AI • Bank-grade encryption
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Screen Reflection Effect */}
          <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* MacBook Base/Body */}
        <div className="h-2 bg-gradient-to-b from-[#1a1d23] to-[#0d0f14] rounded-b-lg mx-auto w-[95%]"></div>
        <div className="h-4 bg-gradient-to-b from-[#16191f] to-[#0a0c10] rounded-b-xl mx-auto w-full relative">
          {/* Hinge */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#0a0c10] rounded-t-sm"></div>
        </div>

        {/* Keyboard Base */}
        <div className="relative mt-0 w-full h-3 bg-gradient-to-b from-[#2a2d33] to-[#1a1d23] rounded-b-2xl shadow-lg">
          {/* Trackpad indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-[#0a0c10] rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
}
