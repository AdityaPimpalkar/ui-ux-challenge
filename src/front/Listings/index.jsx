import { useState, useEffect, useCallback } from "react";
import { ListingCard } from "./ListingCard";
import { CardContainer } from "../../components/Card/CardContainer";
import { Seperator } from "../../components/Seperator";
import { Header } from "../../components/Header";
import { getRecommendedListings, getListings } from "../../services/listings";
import { ListingFooter } from "./ListingsFooter";

export const Listings = () => {
  const noOfListings = 6;
  const recommendedListingsCount = 3;
  const [listings, setListings] = useState([]);
  const [recommendedListings, setRecommendedListings] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const loadRecommendedContent = useCallback(async () => {
    const { listings } = await getRecommendedListings(recommendedListingsCount);
    setRecommendedListings(listings);
  }, [recommendedListingsCount, setRecommendedListings]);

  const loadListings = useCallback(
    async (pageNumber) => {
      const { listings, totalListings } = await getListings(
        noOfListings,
        pageNumber
      );
      setListings(listings);
      setTotalCount(totalListings);
    },
    [noOfListings, setListings, setTotalCount]
  );

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    //first getting the recommended list
    loadRecommendedContent();
    //then getting our normal list of contents
    loadListings(pageNumber);
  }, [pageNumber, loadListings, loadRecommendedContent]);

  return (
    <>
      <Header text="Available stays" />

      <CardContainer title="Places you might like">
        <ListingCard listings={recommendedListings} />
      </CardContainer>

      <CardContainer title="Nearby stays">
        <ListingCard listings={listings} />
      </CardContainer>

      <Seperator />

      {/* The logic of "showing 1-6 of 24324" is not working, but upon clicking next we do fetch new results */}
      <ListingFooter
        totalCount={totalCount}
        pageNumber={pageNumber}
        noOfListings={noOfListings}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  );
};
