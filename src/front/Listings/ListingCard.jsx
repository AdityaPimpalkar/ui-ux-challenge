import { formatDate } from "../../utils";
import Card from "../../components/Card";
import { Chip } from "../../components/Chip/Chip";
import { Favorite } from "grommet-icons";

export const ListingCard = ({ listings }) => {
  return (
    listings &&
    listings.map((listing) => (
      <Card
        key={listing.id}
        title={listing.smart_location}
        subTitle={listing.room_type}
        text={formatDate(listing.fromDate, listing.toDate)}
        rightContent={
          <div className="ml-auto">
            <div className="flex flex-row-reverse gap-2 items-center">
              <Favorite size="small" />
              {listing.isUsuallyBooked ? (
                <Chip text="Usually booked" accent="grey" />
              ) : null}
              {listing.isLowRate ? (
                <Chip text="Low Rate" accent="purple" />
              ) : null}
            </div>
          </div>
        }
        seperator={true}
        footerLeftContent={<span>Total</span>}
        footerRightContent={<span>${listing.total}</span>}
      />
    ))
  );
};
