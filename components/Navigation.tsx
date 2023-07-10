'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    links: NavLink[];
}

const Navigation = ({links}: Props) => {
    const path = usePathname();
    return (
        <>
            {
                links.map((link) => (
                    <Link key={link.label}
                          href={link.href}
                          className={path === link.href ? 'active' : ''}
                    >
                        {link.label}
                    </Link>
                ))
            }

        </>
    );
};

export default Navigation;