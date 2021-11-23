export const vehiclesRequest = () => {
  return {
    url: `https://api.trollsimracing.no:8080/classes`,
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

export const laptimesRequest = (c) => {
  return {
    force: true,
    url: `https://api.trollsimracing.no:8080/class/${c}`,
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