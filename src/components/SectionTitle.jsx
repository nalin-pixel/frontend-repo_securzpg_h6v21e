export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`${alignCls} max-w-2xl`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
    </div>
  )
}
