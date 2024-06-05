import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/homePage/theme/masterLayout";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME ,
            component: <HomePage />
        }
    ]

    return (            
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;