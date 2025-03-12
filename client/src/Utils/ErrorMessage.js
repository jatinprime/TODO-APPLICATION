//THIS WILL HANDLE ANY TYPE , (NEED FOR THIS -> WITHOUT THIS IT WAS JUST SHOWING "SOMETHING WENT WRONG" FOR ANY KIND OF ERROR)

export function getErrorMessage(error){
    const msg = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() ;
    return msg ;
}

