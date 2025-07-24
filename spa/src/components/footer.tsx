import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    const socialLinks = [
        {
            href: "https://github.com/xchopin",
            ariaLabel: "GitHub",
            icon: <FaGithub size={24} />,
        },
        {
            href: "https://www.linkedin.com/in/xavierchopin",
            ariaLabel: "LinkedIn",
            icon: <FaLinkedin size={24} />,
        },
    ];

    return (
        <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
            © {new Date().getFullYear()} Xavier Chopin. All rights reserved.

            <div className="flex flex-row justify-center items-center space-x-4 p-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-transform transform hover:scale-110 duration-300"
                        aria-label={link.ariaLabel}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}