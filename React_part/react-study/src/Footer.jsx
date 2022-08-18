import React from "react";

import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faReact  } from "@fortawesome/free-brands-svg-icons";
import { FooterDiv, FooterBig, FooterSmall } from "./styledComponent";

function Footer() {
    return (
        <FooterDiv>
            <FontAwesomeIcon icon={faReact} />
            <FooterBig>for react study</FooterBig>    
            <FooterSmall>2022. by yeonsu</FooterSmall>
        </FooterDiv>
    );
}

export default React.memo(Footer);