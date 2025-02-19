interface Wedding {
  id: number
  date: string
  location: Location

  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  attendCount: number

  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
}

interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

interface Person {
  name: string
  phoneNumber: string
  account: Account
}

interface Account {
  bankName: string
  accountNumber: string
  kakaopayLink?: string
}

export type { Wedding, Location, Person, Account }
