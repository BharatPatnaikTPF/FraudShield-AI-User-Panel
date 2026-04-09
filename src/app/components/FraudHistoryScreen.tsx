import { CheckCircle, XCircle, AlertTriangle, Filter } from "lucide-react";
import { useState } from "react";

export function FraudHistoryScreen() {
  const [filter, setFilter] = useState<"all" | "approved" | "blocked">("all");

  const fraudHistory = [
    { id: 1, merchant: "Electronics Store Online", amount: 2847.50, date: "Apr 5, 2026", status: "pending", location: "Moscow, Russia", risk: 87 },
    { id: 2, merchant: "Luxury Fashion Boutique", amount: 1299.00, date: "Mar 28, 2026", status: "blocked", location: "Lagos, Nigeria", risk: 92 },
    { id: 3, merchant: "Online Gaming Platform", amount: 450.00, date: "Mar 15, 2026", status: "approved", location: "Toronto, Canada", risk: 45 },
    { id: 4, merchant: "International Wire Transfer", amount: 5000.00, date: "Feb 20, 2026", status: "blocked", location: "Hong Kong", risk: 95 },
    { id: 5, merchant: "Cryptocurrency Exchange", amount: 999.99, date: "Feb 10, 2026", status: "approved", location: "London, UK", risk: 38 },
    { id: 6, merchant: "Unknown Merchant", amount: 725.30, date: "Jan 25, 2026", status: "blocked", location: "Bangkok, Thailand", risk: 89 },
  ];

  const filteredHistory = fraudHistory.filter(item => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  const totalBlocked = fraudHistory.filter(item => item.status === "blocked").length;
  const totalApproved = fraudHistory.filter(item => item.status === "approved").length;
  const totalAmount = fraudHistory.filter(item => item.status === "blocked").reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="h-full p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-3xl">Fraud History</h1>
          <p className="text-muted-foreground mt-1">Review flagged transactions</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-xl transition-all ${
              filter === "all"
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-card border border-border text-muted-foreground hover:bg-accent"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("approved")}
            className={`px-6 py-3 rounded-xl transition-all ${
              filter === "approved"
                ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                : "bg-card border border-border text-muted-foreground hover:bg-accent"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("blocked")}
            className={`px-6 py-3 rounded-xl transition-all ${
              filter === "blocked"
                ? "bg-destructive text-white shadow-lg shadow-destructive/30"
                : "bg-card border border-border text-muted-foreground hover:bg-accent"
            }`}
          >
            Blocked
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Statistics Cards */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">{fraudHistory.length}</div>
            <p className="text-sm text-muted-foreground">Total Alerts</p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">{totalApproved}</div>
            <p className="text-sm text-muted-foreground">Approved</p>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/30 rounded-3xl p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-destructive mb-2">{totalBlocked}</div>
            <p className="text-sm text-muted-foreground">Blocked</p>
          </div>
        </div>
      </div>

      {/* Protection Stats Banner */}
      <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold mb-1">${totalAmount.toLocaleString()} Protected</h3>
            <p className="text-white/80">Total fraud prevented this year</p>
          </div>
          <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="bg-card border border-border rounded-3xl p-6">
        <h3 className="text-foreground text-xl mb-6">Transaction History</h3>
        <div className="space-y-4">
          {filteredHistory.map((item) => (
            <div
              key={item.id}
              className="bg-accent/30 border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="grid grid-cols-5 gap-4 items-center">
                {/* Merchant Info */}
                <div className="col-span-2">
                  <h4 className="text-foreground font-medium mb-1">{item.merchant}</h4>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>

                {/* Amount */}
                <div className="text-center">
                  <span className="text-lg font-medium text-foreground">${item.amount.toFixed(2)}</span>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                </div>

                {/* Risk Score */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Risk</span>
                    <span className={`text-sm font-medium ${item.risk >= 70 ? "text-destructive" : item.risk >= 40 ? "text-yellow-400" : "text-green-400"}`}>
                      {item.risk}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.risk >= 70 ? "bg-destructive" : item.risk >= 40 ? "bg-yellow-400" : "bg-green-400"
                      }`}
                      style={{ width: `${item.risk}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex justify-end">
                  {item.status === "approved" && (
                    <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">Approved</span>
                    </div>
                  )}
                  {item.status === "blocked" && (
                    <div className="flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-xl">
                      <XCircle className="w-5 h-5 text-destructive" />
                      <span className="text-sm text-destructive font-medium">Blocked</span>
                    </div>
                  )}
                  {item.status === "pending" && (
                    <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-xl">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">Pending</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
