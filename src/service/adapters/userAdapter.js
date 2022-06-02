export const postUserAdapter = ({
  name,
  surname,
  age,
  city,
  street,
  suite,
}) => ({
  name: `${name} ${surname}`,
  age,
  address: {
    city,
    street,
    suite
  }
})