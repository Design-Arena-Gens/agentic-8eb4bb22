import Scene from "@/components/Scene";

const Page = () => (
  <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10 md:px-12">
    <Scene />
    <footer className="mt-12 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-400">
      <span>Harm &amp; Ahad • Gentle Afternoon Walk</span>
      <span>Cinematic lighting • Natural colors • Peaceful mood</span>
    </footer>
  </main>
);

export default Page;
