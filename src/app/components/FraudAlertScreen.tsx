import { AlertTriangle, MapPin, Clock, Smartphone, DollarSign, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function FraudAlertScreen() {
  const navigate = useNavigate();
  const [resolved, setResolved] = useState(false);

  const handleConfirm = () => {
    setResolved(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleReport = () => {
    setResolved(true);
    setTimeout(() => {
      navigate("/history");
    }, 1500);
  };

  if (resolved) {
    return (
      <div className="h-full flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-14 h-14 text-green-400" />
          </div>
          <h1 className="text-foreground text-3xl mb-3">Response Recorded</h1>
          <p className="text-muted-foreground text-lg">Thank you for your feedback</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-destructive text-3xl">Fraud Alert</h1>
          <p className="text-muted-foreground mt-1">Suspicious activity detected</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Transaction Details */}
        <div className="space-y-6">
          {/* Alert Banner */}
          <div className="bg-destructive/10 border-2 border-destructive/50 rounded-3xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-destructive rounded-full flex items-center justify-center shadow-2xl shadow-destructive/50 animate-pulse">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-destructive text-2xl mb-2">High Risk Transaction</h2>
              <p className="text-muted-foreground">Please verify this activity</p>
            </div>

            {/* Amount */}
            <div className="bg-card rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Transaction Amount</p>
              <h1 className="text-destructive text-5xl">$2,847.50</h1>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="bg-destructive text-white text-xs px-4 py-2 rounded-full">High Risk - 87%</span>
              </div>
            </div>
          </div>

          {/* Transaction Details Card */}
          <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
            <h3 className="text-foreground text-xl mb-4">Transaction Details</h3>

            <div className="flex items-center gap-4 bg-accent/30 rounded-2xl p-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Merchant</p>
                <p className="text-foreground font-medium">Electronics Store Online</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-accent/30 rounded-2xl p-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Moscow, Russia</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-accent/30 rounded-2xl p-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="text-foreground font-medium">Today, 3:42 AM</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-accent/30 rounded-2xl p-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Device</p>
                <p className="text-foreground font-medium">Unknown Device (New)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - AI Analysis & Actions */}
        <div className="space-y-6">
          {/* Risk Score */}
          <div className="bg-card border border-border rounded-3xl p-6">
            <h3 className="text-foreground text-xl mb-4">Fraud Risk Score</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-bold text-destructive">87%</span>
              <span className="text-sm text-muted-foreground">High Risk</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-destructive to-red-600 h-full rounded-full w-[87%] shadow-lg shadow-destructive/50"></div>
            </div>
          </div>

          {/* AI Explanation */}
          <div className="bg-card border border-border rounded-3xl p-6">
            <h3 className="text-foreground text-xl flex items-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              AI Analysis
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-destructive/10 rounded-2xl p-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-1">Unusual Location Detected</p>
                  <p className="text-sm text-muted-foreground">Purchase made from a country you've never visited</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-destructive/10 rounded-2xl p-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-1">High Transaction Amount</p>
                  <p className="text-sm text-muted-foreground">350% higher than your average purchase</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-destructive/10 rounded-2xl p-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-1">New Device Detected</p>
                  <p className="text-sm text-muted-foreground">First time this device has accessed your account</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-destructive/10 rounded-2xl p-4">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-1">Unusual Time Pattern</p>
                  <p className="text-sm text-muted-foreground">Transaction at 3:42 AM (outside normal hours)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleConfirm}
              className="w-full bg-primary text-primary-foreground py-5 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <CheckCircle className="w-6 h-6" />
              This Was Me - Approve Transaction
            </button>

            <button
              onClick={handleReport}
              className="w-full bg-destructive text-white py-5 rounded-2xl hover:bg-destructive/90 transition-colors shadow-lg shadow-destructive/30 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <XCircle className="w-6 h-6" />
              Report Fraud - Block Card Immediately
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
