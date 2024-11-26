export function Button({ children, href, type = 'primary' }) {

    if (type === 'primary') {
        return (
            <a target="_blank" className="rounded-full bg-green font-bold text-white px-4 py-2 shadow-lg transtion-all hover:brightness-90 shadow-green/50" href={href}>
                {children}
            </a>
        )
    }

    if (type === 'secundary') {
        return (
            <a target="_blank" className="rounded-full bg-white font-bold text-green px-4 py-2 hover:brightness-90" href={href}>
                {children}
            </a>
        )
    }
}