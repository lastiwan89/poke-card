import Pokemon from "./pokemon/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Pokemon />
    </main>
  );
}
