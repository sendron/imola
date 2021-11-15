export const vehiclesRequest = () => {
  return {
    url: `http://jin.allegro.no/vehicles.json`,
    transform: body => ({
      vehicles: body,
    }),
    update: {
      vehicles: (prev, next) => {
        return next;
      },
    },
  };
}

export const laptimesRequest = () => {
  return {
    url: `http://jin.allegro.no/laptimes_data.json`,
    transform: body => ({
      laptimes: body,
    }),
    update: {
      laptimes: (prev, next) => {
        return next;
      },
    },
  };
}