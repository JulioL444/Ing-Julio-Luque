import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "./PdfViewer.jsx"; // Estilos para el visor (si es necesario)

const PdfViewer = ({ url }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(1); // Reset page number when URL changes
  }, [url]);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div id="pdf-container">
      <Document
        file={url}
        onLoadSuccess={onLoadSuccess}
        loading={<div>Loading...</div>}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="pagination">
        <button
          onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
          disabled={pageNumber === numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
