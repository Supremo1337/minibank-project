import { useEffect } from "react";
import HandlingMoney from "../components/HandlingMoney";
import Topbar from "../components/TopBar";
import TransferActivities from "../components/TranferActivities";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = localStorage.getItem("tokenBank");
    if (!checkToken) {
      router.push("/");
    }
    router.push("/mainpage");
  }, []);

  return (
    <>
      <Topbar />
      <HandlingMoney />
      <TransferActivities />
    </>
  );
}
