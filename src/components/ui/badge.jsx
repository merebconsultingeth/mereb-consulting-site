
export function Badge({ children, variant='default', className='' }) {
  const variants = { default:'bg-slate-900 text-white', secondary:'bg-slate-100 text-slate-900' }
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variants[variant]||variants.default} ${className}`}>{children}</span>
}
