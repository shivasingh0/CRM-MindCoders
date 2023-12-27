import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
// import Logo from "../../public/images/logo.webp"

const Invoice = () => {
  const printRef = useRef();
  const [isPrintBtnVisible, setIsPrintBtnVisible] = useState(true);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: () => setIsPrintBtnVisible(false),
    onBeforePrint: () => setIsPrintBtnVisible(true)
  });

  // const handlePrintBtnClick = () => {
  //   setIsPrintBtnVisible(false);
  //   handlePrint();
  // };

  return (
    <>
      <div className="invoice-wrapper">
        <div className="invoice-wrap" ref={printRef}>
          {/* Invoice Header start */}
          <header className="invoice-head">
            <img className="text-center" src="" alt="logo" />
            <div className="contact-info text-info">
              <div className="number d-flex gap-2 align-items-center">
                <i class="fa-solid fa-phone"></i>
                <div>000000000</div>
              </div>
              <div className="mail d-flex gap-2 align-items-center">
                <i class="fa-solid fa-envelope"></i>
                <div>test@gmail.com</div>
              </div>
            </div>
          </header>
          {/* Invoice Header end */}
          {/* Invoice Middle Start */}
          <section className="invoice-main">
            <div className="invoice-content">
              <div className="left-content">
                <h3>
                  <b>Invoice No.</b> 2551
                </h3>
                <h3>
                  <b>Invoice Date</b> 25/01/2023
                </h3>
                <div className="student-info">
                  <h5>
                    <b>Student Name:</b> Shivmangal Singh
                  </h5>
                  <h5>
                    <b>Course Name:</b> MERN Stack
                  </h5>
                  <h5>
                    <b>Discount Amount:</b> Rs.2000
                  </h5>
                </div>
              </div>
              <div className="right-content">
                <h3 className="text-info">MPAC CAREER PVT LTD</h3>
                <p>
                  174, near bombay hospital, Indore, <br /> Madhya Pradesh
                  452010
                </p>
                <div className="student-info">
                  <h5>
                    <b>Student ID:</b> ID0004
                  </h5>
                  <h5>
                    <b>Course Fee:</b> Rs. 5000
                  </h5>
                  <h5>
                    <b>Due Amount:</b> Rs. 1000
                  </h5>
                </div>
              </div>
            </div>
            <table class="invoice-table">
              <thead>
                <tr class="invo-tb-header">
                  <th class="invo-table-title inter-700 medium-font">
                    Sr. No.
                  </th>
                  <th class="invo-table-title inter-700 medium-font">
                    Course Name
                  </th>
                  <th class="invo-table-title rate-title inter-700 medium-font">
                    {" "}
                    Date
                  </th>
                  <th class="invo-table-title inter-700 medium-font">Amount</th>
                </tr>
              </thead>
              <tbody class="invo-tb-body">
                <tr class="invo-tb-row">
                  <td class="invo-tb-data">1</td>
                  <td class="invo-tb-data">
                    MPPSC MAINS Batch (Warrior Batch)
                  </td>
                  <td class="invo-tb-data rate-data">2023-06-15</td>

                  <td class="invo-tb-data total-data">Rs.10000</td>
                </tr>
                <tr class="invo-tb-row">
                  <td class="invo-tb-data">2</td>
                  <td class="invo-tb-data">
                    MPPSC MAINS Batch (Warrior Batch)
                  </td>
                  <td class="invo-tb-data rate-data">2023-06-15</td>

                  <td class="invo-tb-data total-data">Rs.5000</td>
                </tr>
              </tbody>
            </table>
            <div className="total-price">
              <div>
                <h3>Sub Total:</h3> <span className="price"> Rs. 15000/-</span>{" "}
              </div>
            </div>
          </section>
          {/* Invoice Middle end */}
          {/* Invoice Footer start */}
          <footer className="invoice-bottom">
            <div class="invo-buttons-wrap">
              {/* Print Btn */}
              <div class="invoice-btn">
                {isPrintBtnVisible && (
                  <div className="print-btn" onClick={handlePrint}>
                    <i class="fa-solid fa-print btn-icon"></i>
                    <span class="inter-700 medium-font btn-text">Print</span>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <i class="fa-solid fa-circle-exclamation me-2"></i>
                <strong className="text-info">Note: </strong>
                <span className="text-info">
                  This is computer generated receipt and does not require
                  physical signature.
                </span>
              </div>
            </div>
          </footer>
          {/* Invoice Footer end */}
        </div>
      </div>
    </>
  );
};

export default Invoice;
