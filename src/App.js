import React from "react";

import { BackendProvider } from "@gooddata/sdk-ui";
import AppRouter from "./routes/AppRouter";
import { useAuth } from "./contexts/Auth";
import { WorkspaceListProvider } from "./contexts/WorkspaceList";
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
    const { backend } = useAuth();

    return (
        <BackendProvider backend={backend}>
            <WorkspaceListProvider>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </WorkspaceListProvider>
        </BackendProvider>
    );
}

export default App;
