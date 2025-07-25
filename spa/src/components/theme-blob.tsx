'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function ThemeBlob() {
    const { theme } = useTheme();

    return (
        <Image
            src={theme === 'dark' ? "/blob-dark.png" : "/blob.png"}
            alt=""
            width={300}
            height={300}
            className="object-contain z-10"
        />
    );
}
