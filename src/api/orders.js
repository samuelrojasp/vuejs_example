export default {
  saveOrder(quantity) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(quantity);
      }, 1000);
    });
  },
};
