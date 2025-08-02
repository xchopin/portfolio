'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemeBlobProps = {
    folder?: string;
    size?: number;
};

export default function ThemeBlob({ folder, size = 300 }: ThemeBlobProps) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === 'dark';
    const filename = isDark ? 'blob-dark.png' : 'blob.png';
    const src = folder ? `/${folder}/${filename}` : `/${filename}`;

    return (
        <Image
            src={src}
            alt=""
            width={size}
            height={size}
            className="object-contain z-10"

        />
    );
}
