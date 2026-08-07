export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div>
                <h3>About Section</h3>
                {children}
        </div>    
    )
}