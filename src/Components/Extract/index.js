import React from "react";
import { Box, Button } from "../UI";
import { extratoLista } from "../../info";

import Items from "../Items";

export default function Extract() {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Button>Ver mais</Button>
    </Box>
  );
}
