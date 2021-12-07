import { Fragment } from "react";
import { useParams } from "react-router-dom";

export default function QuoteDetail() {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quotes detail page</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
}
