export const getToken = () => {
  let token = ""
  while (token?.length !== 4) {
    token = Math.floor(Math.random() * 10000).toString()
  }
  return token
}

export const formattedSlug = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase()
