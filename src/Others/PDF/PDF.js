import React from "react";
import { Document, Page } from "react-pdf";

import samplePDF from "./hello.pdf";

export default function Test() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}
