import clsx from 'clsx'


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }


export function Button({ className, variant = 'primary', ...props }: Props) {
const base = 'inline-flex items-center justify-center rounded-xl text-sm px-5 py-3 transition-all'
const styles = variant === 'primary'
? 'bg-brand text-white shadow hover:shadow-md active:scale-[.99]'
: 'border hover:bg-card'
return <button className={clsx(base, styles, className)} {...props} />
}