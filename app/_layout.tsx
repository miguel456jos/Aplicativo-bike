import { Stack } from "expo-router";
import { AuthProvider } from "./contexts/authContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}