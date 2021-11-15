// export const nameRequest = () => {
//     return {
//       url: `/api/name`,
//       update: {
//         name: (prev, next) => next,
//       },
//     };
//   };
  
//   export const changeNameMutation = (name, optimistic) => {
//     const queryConfig = {
//       url: `/api/change-name`,
//       body: {
//         name,
//       },
//       update: {
//         name: (prev, next) => next,
//       },
//     };
  
//     if (optimistic) {
//       queryConfig.optimisticUpdate = {
//         name: () => name,
//       };
//     }
  
//     return queryConfig;
//   };
  

export const vehiclesRequest = () => {
    return {
      url: `https://touristenfahrten.duckdns.org/vehicles.json`,
      update: {
        vehicles: (prev, next) => next,
      },
    };
}