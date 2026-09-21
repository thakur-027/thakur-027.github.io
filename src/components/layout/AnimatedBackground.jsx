export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top Ambient Aura */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-primary-container/30 rounded-full blur-[140px] animate-float opacity-70" />
      {/* Mid Right Ambient Aura */}
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-primary-container/25 rounded-full blur-[160px] opacity-60" />
      {/* Bottom Left Ambient Aura */}
      <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] bg-tertiary-container/25 rounded-full blur-[150px] opacity-50" />
    </div>
  )
}
