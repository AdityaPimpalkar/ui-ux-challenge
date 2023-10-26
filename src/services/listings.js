export const getRecommendedListings = async (limit) => {
  try {
    const response = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=${limit}`
    );
    const data = await response.json();
    const listings = data.results.map((listing, index) => ({
      id: listing.id,
      smart_location: listing.smart_location,
      room_type: listing.room_type,
      fromDate: new Date("2023/10/09"),
      toDate: new Date("2023/10/12"),
      total: 523.7,
      isUsuallyBooked: index === 0 || index === 5 || index === 7 ? true : false,
      isLowRate: index === 2 || index === 6 ? true : false,
    }));
    return { listings, totalListings: data.total_count };
  } catch (error) {
    console.log(error);
    return { listings: [], totalListings: 0 };
  }
};

export const getListings = async (limit, page) => {
  try {
    const response = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=${limit}&start=${page}`
    );
    const data = await response.json();
    const listings = data.results.map((listing, index) => ({
      id: listing.id,
      smart_location: listing.smart_location,
      room_type: listing.room_type,
      fromDate: new Date("2023/10/09"),
      toDate: new Date("2023/10/12"),
      total: 523.7,
      isUsuallyBooked: index === 0 || index === 5 || index === 7 ? true : false,
      isLowRate: index === 2 || index === 6 ? true : false,
    }));
    return { listings, totalListings: data.total_count };
  } catch (error) {
    console.log(error);
    return { listings: [], totalListings: 0 };
  }
};
