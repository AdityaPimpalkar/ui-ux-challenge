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
  const [totalListings, setTotalListings] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const loadRecommendedContent = useCallback(async () => {
    const { listings } = await getRecommendedListings(recommendedListingsCount);
    setRecommendedListings(listings);
  }, [recommendedListingsCount, setRecommendedListings]);

  const loadListings = useCallback(
    async (pageNumber) => {
      const { listings, totalListings: total } = await getListings(
        noOfListings,
        pageNumber
      );
      setListings(listings);
      setTotalListings(total);
    },
    [noOfListings, setListings, setTotalListings]
  );

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
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
        <ListingCard listings={recommendedListings} />
      </CardContainer>

      <CardContainer title="Nearby stays">
        <ListingCard listings={listings} />
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
