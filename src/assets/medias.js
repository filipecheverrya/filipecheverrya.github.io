export const sizes = {
  tablet: {
    width: '769px',
    height: '1024px',
  },
  phone: {
    large: {
      width: '475px',
    }
  }
};

export const tablet = `(max-width: ${sizes.tablet.width})`
export const phone = `(max-width: ${sizes.phone.large.width})`
export const greaterThanPhone = `(min-width: ${sizes.phone.large.width})`
