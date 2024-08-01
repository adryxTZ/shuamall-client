'use client';

import { Button } from '@/components/custom/button';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false);

    // Ensure the component is mounted before applying theme changes
    useEffect(() => {
        setMounted(true);
    }, []);

    // Update theme-color meta tag when theme is updated
    useEffect(() => {
        if (!mounted) return;
        const themeColor = theme === 'dark' ? '#020817' : '#fff';
        const metaThemeColor = document.querySelector("meta[name='theme-color']");
        metaThemeColor && metaThemeColor.setAttribute('content', themeColor);
    }, [theme, mounted]);

    if (!mounted) {
        return null; // Render nothing on the server
    }

    return (
        <Button
            size='icon'
            variant='ghost'
            className='rounded-full'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
    );
}
