type HeaderProps = {
    title: string;
    subtitle: string;
    description ?: string;
}

export default function Header({title, subtitle, description}: HeaderProps) {
    return (
        <div className="flex flex-col">
            <p className="text-title-18 text-main">{title}</p>
            <p className="text-headline-24 text-99 mt-3">{subtitle}</p>
            <p className="text-title-18 text-70 mt-2">{description}</p>
        </div>
    );
}