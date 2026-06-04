export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed -inset-40 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(980px_circle_at_18%_10%,rgba(255,179,71,0.08),transparent_60%),radial-gradient(860px_circle_at_85%_25%,rgba(194,164,106,0.10),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,5,0.30),rgba(14,14,18,0.36),rgba(5,5,5,0.30))] bg-[length:200%_200%] animate-gradient-shift max-[640px]:animate-none" />
      <div className="absolute left-1/2 top-[8%] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-brand-glow/10 blur-3xl animate-float-slow max-[640px]:animate-none sm:h-[560px] sm:w-[560px]" />
    </div>
  );
}
