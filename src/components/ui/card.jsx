
export function Card({ className='', children }) { return <div className={`border rounded-xl bg-white ${className}`}>{children}</div> }
export function CardHeader({ className='', children }) { return <div className={`p-4 border-b ${className}`}>{children}</div> }
export function CardTitle({ className='', children }) { return <h3 className={`text-base font-semibold ${className}`}>{children}</h3> }
export function CardContent({ className='', children }) { return <div className={`p-4 ${className}`}>{children}</div> }
