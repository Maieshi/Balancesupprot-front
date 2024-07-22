import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { store } from "./providers/store/store.js";
import router from "./providers/routes/routes.jsx";

const App = () => {
    return (
        <>
            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                <Provider store={ store }>
                    <RouterProvider router={ router }/>
                </Provider>
            </LocalizationProvider>

        </>
    );
};

export default App;