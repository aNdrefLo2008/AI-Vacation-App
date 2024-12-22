const truncateAddress = (address: string) => {
    const words = address.split(" ") // Split address into words
    const truncatedAddress = words.slice(0, 3).join(" ") // Get first 3 words
    return truncatedAddress
  }

export default truncateAddress