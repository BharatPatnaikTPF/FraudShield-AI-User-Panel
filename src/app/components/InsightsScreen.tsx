import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Utensils, Car, Home, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export function InsightsScreen() {
  const weeklyData = [
    { day: "Mon", amount: 120 },
    { day: "Tue", amount: 180 },
    { day: "Wed", amount: 95 },
    { day: "Thu", amount: 240 },
    { day: "Fri", amount: 310 },
    { day: "Sat", amount: 180 },
    { day: "Sun", amount: 140 },
  ];

  const monthlyData = [
    { month: "Oct", amount: 2400 },
    { month: "Nov", amount: 2800 },
    { month: "Dec", amount: 3200 },
    { month: "Jan", amount: 2950 },
    { month: "Feb", amount: 3100 },
    { month: "Mar", amount: 3450 },
  ];

  const categoryData = [
    { name: "Shopping", value: 35, color: "#3b82f6" },
    { name: "Food", value: 25, color: "#10b981" },
    { name: "Transport", value: 20, color: "#f59e0b" },
    { name: "Bills", value: 20, color: "#8b5cf6" },
  ];

  return (
    <div className="h-full p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-3xl">User Behavior Insights</h1>
          <p className="text-muted-foreground mt-1">AI-powered spending analytics</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl hover:bg-accent transition-colors">
          <Calendar className="w-5 h-5 text-foreground" />
          <span className="text-foreground">Last 30 Days</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">This Month</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">$3,450</div>
          <p className="text-sm text-green-400">+12% vs last month</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Avg Daily</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">$115</div>
          <p className="text-sm text-green-400">Within budget</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Transactions</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">142</div>
          <p className="text-sm text-blue-400">This month</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Top Category</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">35%</div>
          <p className="text-sm text-purple-400">Shopping</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Weekly Spending */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-foreground text-xl">Weekly Spending Pattern</h3>
            <span className="text-xs text-muted-foreground bg-accent px-3 py-1.5 rounded-lg">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: "14px" }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: "14px" }} />
              <Bar dataKey="amount" fill="#2563eb" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trend */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-foreground text-xl">Monthly Spending Trend</h3>
            <span className="text-xs text-muted-foreground bg-accent px-3 py-1.5 rounded-lg">Last 6 months</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: "14px" }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: "14px" }} />
              <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={3} dot={{ fill: "#2563eb", r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Category Breakdown */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <h3 className="text-foreground text-xl mb-6">Spending by Category</h3>
          <div className="flex items-center justify-center mb-6">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {categoryData.map((category) => (
              <div key={category.name} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }}></div>
                <span className="text-sm text-muted-foreground flex-1">{category.name}</span>
                <span className="text-sm text-foreground font-medium">{category.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="col-span-2 bg-card border border-border rounded-3xl p-6">
          <h3 className="text-foreground text-xl mb-6">Top Spending Categories</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-foreground font-medium">Shopping</p>
                  <span className="text-foreground font-medium">$1,207</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-blue-500 h-full rounded-full w-[35%]"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center">
                <Utensils className="w-7 h-7 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-foreground font-medium">Food & Dining</p>
                  <span className="text-foreground font-medium">$862</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-green-500 h-full rounded-full w-[25%]"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                <Car className="w-7 h-7 text-yellow-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-foreground font-medium">Transportation</p>
                  <span className="text-foreground font-medium">$690</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-yellow-500 h-full rounded-full w-[20%]"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                <Home className="w-7 h-7 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-foreground font-medium">Bills & Utilities</p>
                  <span className="text-foreground font-medium">$690</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-purple-500 h-full rounded-full w-[20%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">AI Spending Insight</h3>
            <p className="text-white/90">
              Your shopping spending increased by 18% this month. Consider setting a budget alert to stay on track with your financial goals. You're spending most on weekends compared to weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
