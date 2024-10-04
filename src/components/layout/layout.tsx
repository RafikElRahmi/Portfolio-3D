import { Hero } from "../sections";
import { MainNav } from "./navbar";

interface ILayoutProps {
    children: React.ReactNode;
}
function Layout({ children }: ILayoutProps) {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <MainNav />
                <Hero />
            </div>
            {children}
        </div>
    );
}

export default Layout;
