import React from 'react';
import { ChocolabServiceConsumer } from '../chocolab-service-context/chocolab-service-context';


const withChocolabService = () => (Wrapped) => {

    return(props) => {
        return(
            <ChocolabServiceConsumer>
                {
                    (chocolabService) => {
                        return(
                            <Wrapped {...props} chocolabService={chocolabService}/>
                        )
                    }
                }
            </ChocolabServiceConsumer>
        )
    }

}

export {withChocolabService};