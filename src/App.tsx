import {
    About,
    Contact,
    Experience,
    Layout,
    Project,
    StarsCanvas,
    Tech,
} from "./components";
import { ThemeProvider } from "./context";
import "@app/libs/i18n";

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <div className="relative z-0">
                    <About />
                    <Experience />
                    <Project />
                    <Tech />
                    <Contact />
                    <StarsCanvas />
                </div>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
