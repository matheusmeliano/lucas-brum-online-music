export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(1050px_circle_at_20%_-10%,rgba(124,58,237,0.18),transparent_58%),radial-gradient(800px_circle_at_90%_20%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(32,12,80,0.10),rgba(20,7,51,0.16),rgba(32,12,80,0.10))] bg-[length:200%_200%] animate-gradient-shift" />
      <div className="absolute left-1/2 top-[-240px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-glow/8 blur-3xl animate-float-slow" />
    </div>
  );
}
