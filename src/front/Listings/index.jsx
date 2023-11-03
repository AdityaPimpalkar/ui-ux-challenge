import { useState, useEffect, useCallback } from "react";
import { ListingCard } from "./ListingCard";
import { CardContainer } from "../../components/Card/CardContainer";
import { Seperator } from "../../components/Seperator";
import { Header } from "../../components/Header";
import { getRecommendedListings, getListings } from "../../services/listings";
import { ListingFooter } from "./ListingsFooter";
import { CardSkeleton } from "../../components/Card/CardSkeleton";

export const Listings = () => {
  const noOfListings = 6;
  const noOfRecommendedListings = 3;
  const [listings, setListings] = useState([]);
  const [isLoadingListings, setIsLoadingListings] = useState(true);
  const [recommendedListings, setRecommendedListings] = useState([]);
  const [isLoadingRecommendedListings, setIsLoadingRecommendedListings] =
    useState(true);
  const [totalListings, setTotalListings] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const loadRecommendedContent = useCallback(async () => {
    const { listings } = await getRecommendedListings(noOfRecommendedListings);
    setRecommendedListings(listings);
    setIsLoadingRecommendedListings(false);
  }, [noOfRecommendedListings, setRecommendedListings]);

  const loadListings = useCallback(
    async (pageNumber) => {
      const { listings, totalListings: total } = await getListings(
        noOfListings,
        pageNumber
      );
      setListings(listings);
      setTotalListings(total);
      setIsLoadingListings(false);
    },
    [noOfListings, setListings, setTotalListings]
  );

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    setIsLoadingListings(true);
  };

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
    setIsLoadingListings(true);
  };

  useEffect(() => {
    loadRecommendedContent();
  }, [loadRecommendedContent]);

  useEffect(() => {
    loadListings(pageNumber);
  }, [pageNumber, loadListings]);

  return (
    <>
      <Header text="Available stays" />

      <CardContainer title="Places you might like">
        {isLoadingRecommendedListings &&
          [...Array(noOfRecommendedListings)].map(() => <CardSkeleton />)}
        {!isLoadingRecommendedListings && recommendedListings.length > 0 && (
          <ListingCard listings={recommendedListings} />
        )}
      </CardContainer>

      <CardContainer title="Nearby stays">
        {isLoadingListings &&
          [...Array(noOfListings)].map(() => <CardSkeleton />)}
        {!isLoadingListings && listings.length > 0 && (
          <ListingCard listings={listings} />
        )}
      </CardContainer>

      <Seperator />

      <ListingFooter
        totalListings={totalListings}
        noOfListings={noOfListings}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  );
};
