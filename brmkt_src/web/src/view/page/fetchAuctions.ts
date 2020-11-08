import { gql } from '@apollo/client'

export const fragmentAuction = gql`
  fragment Auction on Auction {
    id
    title
    price
    description
    prodType
    seller
    currentHighest
    auctionTime
    status
  }
`

export const fragmentTopBid= gql`
  fragment AuctionTopBid on AuctionTopBid {
    topBid
    auction {
      ...Auction
    }
  }
`

export const fetchAuctions = gql`
  query FetchAuctions {
    auctions {
      ...AuctionTopBid
    }
  }
  ${fragmentAuction}
  ${fragmentTopBid}
`

export const fetchAuctionListing= gql`
  query FetchAuctionListing($auctionId: Int!) {
    auctionListing(auctionId: $auctionId) {
      ...AuctionTopBid
    }
  }
  ${fragmentAuction}
  ${fragmentTopBid}
`
