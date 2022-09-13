import { createAction } from "@reduxjs/toolkit";
export const changeStats = createAction('CHANGE_STATS', (statsType,sum) => {
    return{
        payload: {
            statsType, 
            sum,
        },
    }   
}
)