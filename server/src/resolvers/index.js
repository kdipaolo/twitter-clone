// Combining all resolver files into one master file for apollo server
import userResolvers from './user'
import tweetResolvers from './tweet'

export default [userResolvers, tweetResolvers]
