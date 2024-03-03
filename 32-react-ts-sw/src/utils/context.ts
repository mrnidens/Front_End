import React from "react";

export const SWContext = React.createContext({
    changePage: (page: string) => {}
});