interface TextProps {
    text: string;
    className: string;
}

export function Text({ text, className }: TextProps){
    return (
        <p className={className}>
            {text}
        </p>
    )
}