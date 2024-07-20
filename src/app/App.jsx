import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./providers/store/store.js";
import router from "./providers/routes/routes.jsx";

const App = () => {
    return (
        <>
            <Provider store={ store }>
                <RouterProvider router={ router }/>
            </Provider>
        </>
    );
};

export default App;