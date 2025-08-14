
import React from 'react'
export function Accordion({ children, className='' }){ return <div className={className}>{children}</div> }
export function AccordionItem({ children, value }){ return <div className="border-b">{children}</div> }
export function AccordionTrigger({ children }){ const [open,setOpen]=React.useState(false); return <button onClick={()=>setOpen(o=>!o)} className="flex w-full items-center justify-between py-3 text-left font-medium">{children}<span className="text-slate-500">▾</span></button> }
export function AccordionContent({ children }){ return <div className="pb-3 text-sm text-slate-700">{children}</div> }
