import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Total2() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              TOTAL <strong className="float-end">{value} </strong>
            </p>
          </>
        )}
        decimlscale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Total2;
