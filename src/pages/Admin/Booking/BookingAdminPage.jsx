import React from "react";
import CTA from "../Dashboard/CTA";
import HeadingAdmin from "../../../components/admin/HeadingAdmin/HeadingAdmin";
import BookingList from "../../../components/admin/BookingTable/BookingList";

const BookingAdminPage = () => {
  return (
    <>
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <HeadingAdmin heading="Đặt phòng" />
          {/* <!-- CTA --> */}
          <CTA />
          {/* <!-- New Table --> */}
          <BookingList />
        </div>
      </main>
    
    </>
  );
};

export default BookingAdminPage;
