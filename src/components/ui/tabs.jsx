
import React from 'react'
export function Tabs({ defaultValue, children }) { const [val,setVal]=React.useState(defaultValue); return <div data-value={val}>{React.Children.map(children, c=>React.isValidElement(c)?React.cloneElement(c,{value:val,setValue:setVal}):c)}</div> }
export function TabsList({ children, className='' , value, setValue}) { return <div className={`rounded-lg border bg-white ${className}`}>{React.Children.map(children, c=>React.cloneElement(c,{activeValue:value,setValue}))}</div> }
export function TabsTrigger({ children, value, activeValue, setValue }) { const active = value===activeValue; return <button onClick={()=>setValue(value)} className={`px-3 py-2 text-sm ${active?'bg-slate-900 text-white':'text-slate-700 hover:bg-slate-100'}`}>{children}</button> }
export function TabsContent({ children, value, setValue, className='' }) { return <div className={className}>{children}</div> }
