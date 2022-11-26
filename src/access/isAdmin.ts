export const isAdmin = ({ req: { user } }) => {
  console.log({ user })
  if (user && user.role === "admin") {
    return true
  }

  return {
    id: {
      equals: user.id,
    },
  }
}
