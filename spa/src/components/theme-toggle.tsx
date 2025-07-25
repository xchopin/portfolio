'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

export function ThemeToggle() {
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
            className="
            w-9 h-9 rounded-full flex items-center justify-center
            dark:text-gray-100
            "
            aria-label="Toggle Theme"
        >
            {isDark ? <FiSun size={16} /> : <FaMoon size={16} />}
        </button>
    )
}
