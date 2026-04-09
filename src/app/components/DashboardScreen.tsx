import { Shield, ArrowUpRight, ArrowDownLeft, ShoppingCart, Utensils, Zap, Coffee, Bell, Search } from "lucide-react";
import { useNavigate } from "react-router";

export function DashboardScreen() {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, name: "Amazon", amount: -89.99, icon: ShoppingCart, time: "2h ago", color: "text-orange-400" },
    { id: 2, name: "Salary Deposit", amount: 3500.00, icon: ArrowDownLeft, time: "1 day ago", color: "text-green-400" },
    { id: 3, name: "Restaurant", amount: -45.50, icon: Utensils, time: "2 days ago", color: "text-yellow-400" },
    { id: 4, name: "Electricity Bill", amount: -120.00, icon: Zap, time: "3 days ago", color: "text-blue-400" },
    { id: 5, name: "Coffee Shop", amount: -5.80, icon: Coffee, time: "4 days ago", color: "text-amber-400" },
  ];

  return (
    <div className="h-full p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-3xl">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Sarah Johnson</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors relative">
            <Bell className="w-5 h-5 text-foreground" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-white text-xs">
              1
            </div>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Balance & Transactions */}
        <div className="col-span-2 space-y-6">
          {/* Account Balance Card */}
          <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/80 text-sm mb-2">Total Balance</p>
                <h1 className="text-white text-5xl">$12,458.30</h1>
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-white/20 backdrop-blur text-white py-4 rounded-2xl hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                Send Money
              </button>
              <button className="flex-1 bg-white/20 backdrop-blur text-white py-4 rounded-2xl hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <ArrowDownLeft className="w-5 h-5" />
                Receive Money
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-card border border-border rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-foreground text-xl">Recent Transactions</h3>
              <button className="text-sm text-primary hover:text-primary/80">View All</button>
            </div>

            <div className="space-y-3">
              {transactions.map((transaction) => {
                const Icon = transaction.icon;
                return (
                  <div
                    key={transaction.id}
                    className="bg-accent/30 border border-border rounded-2xl p-4 flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${transaction.color}`} />
                      </div>
                      <div>
                        <h4 className="text-foreground font-medium">{transaction.name}</h4>
                        <p className="text-sm text-muted-foreground">{transaction.time}</p>
                      </div>
                    </div>
                    <div className={`text-lg font-medium ${transaction.amount > 0 ? "text-green-400" : "text-foreground"}`}>
                      {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Security & Alerts */}
        <div className="space-y-6">
          {/* Security Status */}
          <div className="bg-card border border-border rounded-3xl p-6">
            <h3 className="text-foreground text-xl mb-6">Security Status</h3>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-green-400" />
              </div>
              <h4 className="text-green-400 text-lg mb-2">All Clear</h4>
              <p className="text-sm text-muted-foreground">Your account is protected</p>
              <div className="w-3 h-3 bg-green-400 rounded-full mt-4 animate-pulse"></div>
            </div>
          </div>

          {/* Fraud Alert */}
          <button
            onClick={() => navigate("/fraud-alert")}
            className="w-full bg-destructive/10 border-2 border-destructive/30 rounded-3xl p-6 hover:bg-destructive/20 transition-colors text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-destructive rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-destructive text-lg font-medium">Suspicious Activity</h4>
                <p className="text-sm text-destructive/80">1 Alert Pending</p>
              </div>
            </div>
            <div className="bg-destructive/20 rounded-xl p-3 flex items-center justify-between">
              <span className="text-sm text-destructive">Review Required</span>
              <ArrowUpRight className="w-5 h-5 text-destructive" />
            </div>
          </button>

          {/* Quick Stats */}
          <div className="bg-card border border-border rounded-3xl p-6">
            <h3 className="text-foreground text-xl mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">This Month</span>
                  <span className="text-foreground font-medium">$4,235</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-full rounded-full w-[65%]"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Savings Goal</span>
                  <span className="text-foreground font-medium">$8,200</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-400 h-full rounded-full w-[82%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
