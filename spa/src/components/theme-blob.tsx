'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeBlob() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <Image
            src={isDark ? "/blob-dark.png" : "/blob.png"}
            alt=""
            width={300}
            height={300}
            className="object-contain z-10"
        />
    );
}
