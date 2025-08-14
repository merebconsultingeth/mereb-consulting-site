
import React from 'react'
export function Button({ children, asChild, variant='default', size='base', className='', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50'
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800 border-transparent focus:ring-slate-900',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border-transparent focus:ring-slate-300',
    outline: 'bg-white text-slate-900 hover:bg-slate-50 border-slate-200 focus:ring-slate-300'
  }
  const sizes = { sm:'h-9 px-3', base:'h-10 px-4', lg:'h-11 px-6' }
  const cls = `${base} ${variants[variant]||variants.default} ${sizes[size]||sizes.base} ${className}`
  if (asChild && React.isValidElement(children)) return React.cloneElement(children, { className: `${children.props.className||''} ${cls}` })
  return <button className={cls} {...props}>{children}</button>
}
