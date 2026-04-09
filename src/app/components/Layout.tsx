import { Outlet, useNavigate, useLocation } from "react-router";
import { Home, AlertTriangle, History, TrendingUp, LogOut, Shield } from "lucide-react";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/fraud-alert", icon: AlertTriangle, label: "Fraud Alert" },
    { path: "/history", icon: History, label: "History" },
    { path: "/insights", icon: TrendingUp, label: "Insights" },
  ];

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

            {/* Screen Content - Full Web App */}
            <div className="w-full h-full flex bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e]">
              {/* Sidebar Navigation */}
              <aside className="w-64 bg-card/50 backdrop-blur border-r border-border flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/50">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-foreground text-lg">FraudShield</h2>
                      <p className="text-primary text-xs">AI Security</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* User Profile & Logout */}
                <div className="p-4 border-t border-border space-y-2">
                  <div className="px-4 py-3 bg-accent/50 rounded-xl">
                    <p className="text-foreground text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">sarah.j@email.com</p>
                  </div>
                  <button
                    onClick={() => navigate("/")}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="flex-1 overflow-auto">
                <Outlet />
              </main>
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
