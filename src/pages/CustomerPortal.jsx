import SecureLogin from "../components/jsx/SecureLogin";
import Dashboard from "../components/jsx/Dashboard";
import BillingInformation from "../components/jsx/BillingInformation";

export default function CustomerPortal() {
  return (
    <div>
      <SecureLogin />
      <Dashboard />
      <BillingInformation />
    </div>
  );
}
