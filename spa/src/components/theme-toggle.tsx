'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

type ThemeToggleProps = {
    // Renders "Light mode"/"Dark mode" next to the icon, nav-item style.
    label?: boolean
    className?: string
}

export function ThemeToggle({ label = false, className = '' }: ThemeToggleProps) {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = resolvedTheme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center gap-5 rounded-full transition-colors hover:bg-hover ${className}`}
            aria-label="Toggle Theme"
        >
            {isDark ? <FiSun size={26} /> : <FaMoon size={24} />}
            {label && <span className="hidden text-xl xl:inline">{isDark ? 'Light mode' : 'Dark mode'}</span>}
        </button>
    )
}
