import { createBrowserRouter } from "react-router";
import { LoginScreen } from "./components/LoginScreen";
import { DashboardScreen } from "./components/DashboardScreen";
import { FraudAlertScreen } from "./components/FraudAlertScreen";
import { FraudHistoryScreen } from "./components/FraudHistoryScreen";
import { InsightsScreen } from "./components/InsightsScreen";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginScreen,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "dashboard", Component: DashboardScreen },
      { path: "fraud-alert", Component: FraudAlertScreen },
      { path: "history", Component: FraudHistoryScreen },
      { path: "insights", Component: InsightsScreen },
    ],
  },
]);
